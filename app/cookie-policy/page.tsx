import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Cookie Policy - Ascora',
  description: 'Learn how Ascora uses cookies and similar technologies on our B2B export marketplace. Control your privacy preferences and understand our data practices.',
  keywords: 'cookie policy, cookies, privacy preferences, data tracking, B2B export',
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-sm text-muted-foreground mb-8">
              <strong>Last updated:</strong> March 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit our B2B export marketplace platform. They help us provide you with a better browsing experience, remember your preferences, and understand how you use our Platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
              <p className="mb-4">
                We use cookies for several important purposes to enhance your experience on our Platform:
              </p>
              <ul className="list-disc pl-6">
                <li><strong>Essential Cookies:</strong> Required for the Platform to function properly, including secure login and transaction processing</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our Platform to improve services and user experience</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings for a personalized experience</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant export opportunities and business connections</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>

              <h3 className="text-xl font-medium text-foreground mb-2">3.1 Essential Cookies</h3>
              <p className="mb-4">
                These cookies are necessary for the Platform to function and cannot be disabled. They include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Authentication cookies for secure login</li>
                <li>Session management cookies</li>
                <li>Security cookies to protect against fraud</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2">3.2 Analytics Cookies</h3>
              <p className="mb-4">
                We use analytics cookies to understand user behavior and improve our services:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Google Analytics for website traffic analysis</li>
                <li>User journey tracking for platform optimization</li>
                <li>Performance monitoring cookies</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2">3.3 Functional Cookies</h3>
              <p className="mb-4">
                These cookies enhance your experience by remembering your preferences:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Language and location preferences</li>
                <li>Search and filter settings</li>
                <li>Product browsing history</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2">3.4 Marketing Cookies</h3>
              <p className="mb-4">
                Marketing cookies help us deliver relevant business opportunities:
              </p>
              <ul className="list-disc pl-6">
                <li>Targeted export opportunity recommendations</li>
                <li>Supplier-buyer matching preferences</li>
                <li>Industry-specific content delivery</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p className="mb-4">
                We may use third-party services that set their own cookies. These include:
              </p>
              <ul className="list-disc pl-6">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Payment Processors:</strong> For secure transaction processing</li>
                <li><strong>Communication Tools:</strong> For messaging and inquiry management</li>
                <li><strong>Customer Support:</strong> For live chat and support services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Managing Your Cookie Preferences</h2>
              <p className="mb-4">
                You have several options to control cookies on our Platform:
              </p>

              <h3 className="text-xl font-medium text-foreground mb-2">5.1 Cookie Settings</h3>
              <p className="mb-4">
                You can manage your cookie preferences through our cookie consent banner or settings panel available on our Platform.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-2">5.2 Browser Settings</h3>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Block all cookies</li>
                <li>Block third-party cookies</li>
                <li>Delete existing cookies</li>
                <li>Receive notifications before cookies are set</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-2">5.3 Opt-Out Links</h3>
              <p className="mb-4">
                For specific third-party services, you can opt out directly:
              </p>
              <ul className="list-disc pl-6">
                <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener">Google Analytics Opt-out</a></li>
                <li>Check your browser's privacy settings for other services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Impact of Disabling Cookies</h2>
              <p className="mb-4">
                Please note that disabling certain cookies may affect your experience on our Platform:
              </p>
              <ul className="list-disc pl-6">
                <li>Essential cookies cannot be disabled without affecting core functionality</li>
                <li>Disabling analytics cookies may reduce our ability to improve the Platform</li>
                <li>Marketing cookies help deliver relevant business opportunities</li>
                <li>Some features may not work properly without functional cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any material changes via email or Platform notification.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
              <p className="mb-4">
                If you have questions about our use of cookies or this policy, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Email:</strong>shashikantt@ascora.in</p>
                <p><strong>Subject:</strong> Cookie Policy Inquiry</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
