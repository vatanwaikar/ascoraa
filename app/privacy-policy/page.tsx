import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Ascora',
  description: 'Learn how Ascora protects your personal and business data in our B2B export marketplace. Information on data collection, usage, and user rights.',
  keywords: 'privacy policy, data protection, B2B export, personal data, user rights',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-8">
              <strong>Last updated:</strong> March 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p>
                At Ascora ("we," "us," or "our"), we are committed to protecting your privacy and ensuring the security of your personal and business data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our B2B export marketplace platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-foreground mb-2">2.1 Personal Information</h3>
              <p className="mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact details (name, email, phone number, business address)</li>
                <li>Business information (company name, industry, export/import preferences)</li>
                <li>Account credentials and profile information</li>
                <li>Communication records (inquiries, messages, transaction details)</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2">2.2 Usage Information</h3>
              <p>
                We automatically collect certain information about your use of our platform, including IP addresses, browser type, operating system, referring URLs, pages viewed, and search terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6">
                <li>Provide and maintain our export marketplace services</li>
                <li>Facilitate connections between buyers and suppliers</li>
                <li>Process transactions and export documentation</li>
                <li>Send transactional communications and respond to inquiries</li>
                <li>Improve our platform and develop new features</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience on our platform. These include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Essential Cookies:</strong> Required for platform functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand user behavior and improve services</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant export opportunities</li>
              </ul>
              <p>
                You can control cookie preferences through your browser settings or our cookie consent tool.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6">
                <li>With verified suppliers or buyers to facilitate export transactions</li>
                <li>With service providers who assist our operations (under strict confidentiality)</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with business transfers or acquisitions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access and obtain a copy of your data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your data (subject to legal requirements)</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact us at privacy@ascora.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. International Data Transfers</h2>
              <p>
                As a global export platform, your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Email:</strong>shashikantt@ascora.in</p>
                <p><strong>Address:</strong>308,patil Plaza,Swargate,Pune, Maharashtra, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
