import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Accessibility Statement - Ascora',
  description: 'Learn about Ascora\'s commitment to accessibility on our B2B export marketplace. Information about supported features and how to report accessibility issues.',
  keywords: 'accessibility, accessibility statement, web accessibility, inclusive design, B2B platform',
}

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Accessibility Statement</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-8">
              <strong>Last updated:</strong> March 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Our Commitment to Accessibility</h2>
              <p>
                At Ascora, we are committed to ensuring that our B2B export marketplace platform is accessible to all users, regardless of ability or disability. We strive to provide an inclusive experience that meets or exceeds the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Accessibility Features</h2>
              <p className="mb-4">
                Our Platform includes several accessibility features to support users with diverse needs:
              </p>

              <h3 className="text-xl font-medium text-foreground mb-2">2.1 Keyboard Navigation</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>All interactive elements can be accessed using keyboard navigation</li>
                <li>Clear focus indicators for keyboard users</li>
                <li>Logical tab order throughout the Platform</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2">2.2 Screen Reader Support</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Proper semantic HTML structure</li>
                <li>Alt text for all images and meaningful graphics</li>
                <li>ARIA labels and descriptions where needed</li>
                <li>Descriptive link text and button labels</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2">2.3 Visual Accessibility</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>High contrast color schemes</li>
                <li>Adjustable text size and zoom support</li>
                <li>Consistent navigation and layout</li>
                <li>Clear typography with adequate font sizes</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2">2.4 Content Structure</h3>
              <ul className="list-disc pl-6">
                <li>Proper heading hierarchy (H1-H6)</li>
                <li>Structured lists and data tables</li>
                <li>Clear section divisions</li>
                <li>Descriptive page titles and headings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Supported Assistive Technologies</h2>
              <p className="mb-4">
                Our Platform is designed to work with common assistive technologies, including:
              </p>
              <ul className="list-disc pl-6">
                <li>Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Alternative input devices</li>
                <li>Braille displays</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Language and Content</h2>
              <p className="mb-4">
                We ensure our content is accessible by:
              </p>
              <ul className="list-disc pl-6">
                <li>Using clear, simple language</li>
                <li>Avoiding jargon or explaining technical terms</li>
                <li>Providing plain language summaries for complex information</li>
                <li>Supporting multiple languages for global accessibility</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Forms and Interactions</h2>
              <p className="mb-4">
                Our forms and interactive elements are designed with accessibility in mind:
              </p>
              <ul className="list-disc pl-6">
                <li>Clear labels for all form fields</li>
                <li>Error messages that are easy to understand</li>
                <li>Instructions for completing forms</li>
                <li>Multiple ways to complete transactions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Media and Multimedia</h2>
              <p className="mb-4">
                For media content, we provide:
              </p>
              <ul className="list-disc pl-6">
                <li>Captions and transcripts for videos</li>
                <li>Alt text for images and graphics</li>
                <li>Audio descriptions where appropriate</li>
                <li>Text alternatives for non-text content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Mobile Accessibility</h2>
              <p>
                Our Platform is fully responsive and accessible on mobile devices, with touch targets that meet minimum size requirements and gestures that can be performed with assistive technologies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Reporting Accessibility Issues</h2>
              <p className="mb-4">
                If you encounter accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p><strong>Email:</strong> accessibility@ascora.com</p>
                <p><strong>Phone:</strong> +91 98765 43210 (Accessible support line)</p>
                <p><strong>Subject:</strong> Accessibility Feedback</p>
              </div>
              <p>
                Please include details about the issue, the page or feature affected, the assistive technology you're using, and steps to reproduce the problem. We'll respond within 5 business days and work to resolve issues promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Continuous Improvement</h2>
              <p className="mb-4">
                We regularly audit our Platform for accessibility compliance and are committed to ongoing improvement. This includes:
              </p>
              <ul className="list-disc pl-6">
                <li>Regular accessibility testing and audits</li>
                <li>User feedback integration</li>
                <li>Training for our development team</li>
                <li>Updates to reflect new accessibility standards</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Legal Compliance</h2>
              <p>
                Ascora complies with applicable accessibility laws and standards, including the Information Technology Act 2000 and Rules in India, as well as international standards like WCAG 2.1. We are committed to maintaining compliance and addressing any identified issues.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Information</h2>
              <p className="mb-4">
                For accessibility support or questions about this statement:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Accessibility Team</strong></p>
                <p><strong>Email:</strong>shashikantt@ascora.in</p>
                <p><strong>Phone:</strong>+91 9823111103</p>
                <p><strong>Address:</strong>308,Patil Plaza, Swargate, Pune, Maharashtra, India</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
