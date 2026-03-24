import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Terms of Service - Ascora',
  description: 'Read the terms and conditions for using Ascora\'s B2B export marketplace platform. Understand your rights and responsibilities in global trade.',
  keywords: 'terms of service, terms conditions, B2B export, user agreement, platform rules',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-8">
              <strong>Last updated:</strong> March 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                These Terms of Service ("Terms") govern your use of Ascora's B2B export marketplace platform ("Platform"). By accessing or using our Platform, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p>
                Ascora provides a digital marketplace that connects global buyers with Indian exporters. Our Platform facilitates:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Product discovery and supplier matching</li>
                <li>Communication between buyers and suppliers</li>
                <li>Transaction facilitation and export documentation</li>
                <li>Market intelligence and trade insights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Eligibility</h2>
              <p className="mb-4">
                To use our Platform, you must:
              </p>
              <ul className="list-disc pl-6">
                <li>Be at least 18 years old and legally capable of entering contracts</li>
                <li>Be authorized to conduct business in your jurisdiction</li>
                <li>Provide accurate and complete registration information</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Responsibilities</h2>
              <h3 className="text-xl font-medium text-foreground mb-2">4.1 Account Security</h3>
              <p className="mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-2">4.2 Accurate Information</h3>
              <p className="mb-4">
                You agree to provide accurate, current, and complete information about your business and comply with all applicable export/import regulations.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-2">4.3 Prohibited Activities</h3>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6">
                <li>Use the Platform for any illegal or unauthorized purpose</li>
                <li>Transmit harmful or malicious code</li>
                <li>Interfere with or disrupt the Platform's operations</li>
                <li>Post false or misleading information about products or services</li>
                <li>Violate intellectual property rights</li>
                <li>Engage in fraudulent or deceptive practices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Orders and Transactions</h2>
              <p className="mb-4">
                Our Platform facilitates connections between buyers and suppliers. While we provide tools for communication and transaction management:
              </p>
              <ul className="list-disc pl-6">
                <li>All contracts are formed directly between buyers and suppliers</li>
                <li>We are not a party to any transactions between users</li>
                <li>Users are responsible for complying with all applicable trade laws</li>
                <li>Payment terms and fulfillment are agreed upon directly between parties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
              <p className="mb-4">
                The Platform and its content are protected by copyright, trademark, and other intellectual property laws. You may not:
              </p>
              <ul className="list-disc pl-6">
                <li>Reproduce, distribute, or create derivative works of our content</li>
                <li>Use our trademarks without permission</li>
                <li>Reverse engineer or attempt to extract our source code</li>
                <li>Use automated tools to access our Platform without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, Ascora shall not be liable for:
              </p>
              <ul className="list-disc pl-6">
                <li>Any indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Delays or failures in Platform availability</li>
                <li>Actions or omissions of other users</li>
                <li>Compliance with export/import regulations</li>
              </ul>
              <p>
                Our total liability shall not exceed the amount paid by you for Platform access in the preceding 12 months.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold Ascora harmless from any claims, damages, losses, or expenses arising from your use of the Platform, violation of these Terms, or infringement of any rights of another party.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Termination</h2>
              <p className="mb-4">
                We reserve the right to suspend or terminate your account at any time for violations of these Terms or for other reasons we deem necessary. Upon termination:
              </p>
              <ul className="list-disc pl-6">
                <li>Your right to use the Platform will cease immediately</li>
                <li>We may delete your account and associated data</li>
                <li>Sections regarding liability and indemnification will survive</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of the Platform shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of material changes via email or Platform notification. Continued use of the Platform after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
              <p className="mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Email:</strong>hashikantt@ascora.in</p>
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
