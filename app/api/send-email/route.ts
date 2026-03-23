import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Incoming request body:', body)

    const { 
      name, 
      email, 
      company, 
      country, 
      category, 
      message, 
      fullMessage,
      productName,
      productId,
      quantity,
      unit
    } = body

    // Validate required fields
    const missingFields = []
    if (!name) missingFields.push('name')
    if (!email) missingFields.push('email')
    if (!message && !fullMessage) missingFields.push('message')
    if (!country) missingFields.push('country')

    if (missingFields.length > 0) {
      console.error('Missing required fields:', missingFields)
      console.error('Received body:', body)
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          missingFields,
          receivedFields: Object.keys(body)
        },
        { status: 400 }
      )
    }

    // Create transporter using Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: parseInt(process.env.ZOHO_SMTP_PORT || '465'),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_APP_PASSWORD,
      },
    })

    // Use fullMessage if available, otherwise fallback to message
    const finalMessage = fullMessage || message

    // HTML email template
    const htmlContent = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2563eb;">${productName ? 'New Product Inquiry' : 'New Contact Form Submission'}</h2>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <div style="margin: 15px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            <p><strong>Country:</strong> ${country}</p>
            ${category ? `<p><strong>Category:</strong> ${category}</p>` : ''}
            ${productName ? `<p><strong>Product of Interest:</strong> ${productName}</p>` : ''}
            ${productId ? `<p><strong>Product ID:</strong> ${productId}</p>` : ''}
            ${quantity ? `<p><strong>Quantity:</strong> ${quantity} ${unit || 'units'}</p>` : ''}
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <h3 style="color: #2563eb;">Message:</h3>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${finalMessage}</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">
            This email was sent from your website ${productName ? 'product inquiry form' : 'contact form'}.
          </p>
        </body>
      </html>
    `

    // Plain text version
    const textContent = `
${productName ? 'New Product Inquiry' : 'New Contact Form Submission'}

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ''}
Country: ${country}
${category ? `Category: ${category}` : ''}
${productName ? `Product of Interest: ${productName}` : ''}
${productId ? `Product ID: ${productId}` : ''}
${quantity ? `Quantity: ${quantity} ${unit || 'units'}` : ''}

Message:
${finalMessage}
    `

    // Send email to your Zoho account
    const mailOptions = {
      from: `"Ascora Website" <${process.env.ZOHO_EMAIL}>`, // Sender address
      to: process.env.ZOHO_EMAIL, // Send to your own email
      replyTo: email, // Allow replying to the sender
      subject: productName
        ? `New Product Inquiry from ${name} - ${productName}`
        : `New Contact Form Submission from ${name}`,
      text: textContent,
      html: htmlContent,
    }

    console.log('Sending email with options:', { subject: mailOptions.subject, to: mailOptions.to })
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully to:', process.env.ZOHO_EMAIL)

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error details:', errorMessage)
    return NextResponse.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    )
  }
}
