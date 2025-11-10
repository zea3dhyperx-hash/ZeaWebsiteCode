import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ChatWidget from "@/components/chatbot";

export const metadata = {
  title: " Privacy Policy | ZeaCRM",
  description:
    " Read Zea CRM's Privacy Policy to understand how we collect, use, and protect your personal data while providing our AI-powered CRM services across various industries.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="prose prose-invert max-w-none space-y-6 pb-10 text-muted-foreground">
            ZeaCRM values your privacy and is committed to protecting all your personal information. This Privacy Policy describes how ZeaCRM collects, uses, stores, discloses, and safeguards your information when you use our website (www.zeacrm.com), mobile applications, or any other digital or offline platforms associated with ZeaCRM. By accessing or using ZeaCRM’s services, you agree to this Privacy Policy. ZeaCRM may update this Policy periodically, and we encourage you to review it from time to time to stay informed about how we protect your data.
          </p>

          <div className="prose prose-invert max-w-none space-y-6">

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Definitions</h2>
              <p className="text-muted-foreground py-2">
                ZeaCRM, Company, We, Us, and Our refer to Zea Technologies FZC and its digital platforms.
              </p>
              <p className="text-muted-foreground py-2">
                Platform refers to www.zeacrm.com, ZeaCRM mobile app, and other affiliated digital products or services.
              </p>
              <p className="text-muted-foreground py-2">
                You, Your, and User refer to any individual or entity using ZeaCRM services.
              </p>
              <p className="text-muted-foreground py-2">
                Services refers to all products, software, and tools provided by ZeaCRM to help businesses manage customer relationships, sales, and marketing.
              </p>
              <p className="text-muted-foreground py-2">
                Policy refers to this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground">
                At ZeaCRM, we collect and process information responsibly to deliver a seamless, secure, and personalized experience. The data we gather helps us operate efficiently, enhance functionality, and continually improve your interaction with our platform. We collect personal information such as your name, email address, phone number, company details, and billing data.
              </p>
              <p className="text-muted-foreground">
                Account and login data such as credentials, authentication tokens, and security logs ensure safe access, while usage information such as time spent, preferences, IP addresses, and pages visited help us optimize your experience. We also gather transactional data including subscription history, payment records, and invoices, as well as files and communications shared within the platform.
              </p>
              <p className="text-muted-foreground">
                Additionally, we may collect device and technical data such as browser details, operating system, app version, and location when enabled, along with cookies or tracking data used to remember your settings and analyze performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Collect Information</h2>
              <p className="text-muted-foreground">
                We collect your data using secure and transparent methods designed to improve your ZeaCRM experience. Some of this information is provided directly by you when you sign up, fill out forms, or contact support, while other data is collected automatically through system logs, cookies, and analytics tools that track app performance and usage.
              </p>
              <p className="text-muted-foreground">
                In some cases, we may receive information from third-party partners such as payment gateways, CRM integrations, or analytics providers that help enhance the platform’s functionality. All collection methods comply with applicable privacy laws and follow best practices for data protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground">
                Your data enables ZeaCRM to function efficiently while personalizing and improving your experience. We use your information to deliver, operate, and optimize ZeaCRM’s core services, personalize dashboards, communicate updates and product enhancements, and process billing and subscription renewals.
              </p>
              <p className="text-muted-foreground">
                It also allows us to provide technical support, detect suspicious activity, prevent fraud, and meet legal or compliance obligations in relevant jurisdictions. Access to your data is limited to authorized personnel only, ensuring that all processing remains justified, documented, and secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Sharing Your Information</h2>
              <p className="text-muted-foreground">
                Your privacy is central to ZeaCRM’s values, and we never sell, rent, or trade your personal information. However, in certain controlled situations, we may share limited data with trusted service providers such as payment processors, hosting partners, or analytics vendors who operate under strict confidentiality agreements.
              </p>
              <p className="text-muted-foreground">
                We may also share data when required by law, government authorities, or court orders, or in the event of a merger or acquisition, provided that your information continues to be protected. In some cases, information may be shared with your explicit consent for integrations or marketing communications. Every partner handling your data must comply with ZeaCRM’s security and privacy standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
              <p className="text-muted-foreground">
                ZeaCRM uses cookies and similar tracking technologies to enhance your experience and improve platform performance. These small files help authenticate and keep you logged in, remember preferences and configurations, and collect analytics for product improvement and marketing insights.
              </p>
              <p className="text-muted-foreground">
                You can modify or disable cookie preferences in your browser at any time. ZeaCRM never shares cookie-based data for advertising or personal gain, and all information collected through cookies remains secure, anonymized, and used solely to enhance the quality of your experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                ZeaCRM employs end-to-end encryption, multi-factor authentication, and secure cloud hosting to safeguard your data. Access is limited to authorized personnel only, and all data transfers use TLS/SSL encryption.
              </p>
              <p className="text-muted-foreground">
                However, while we follow industry best practices, no online platform can guarantee 100% security. We retain your data as long as your account remains active or as required for legitimate business or legal purposes. Upon request, your data can be permanently deleted from our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground">
                As a user of ZeaCRM, you have complete control over your personal information and how it is used. You may access, modify, or delete your data at any time through your account settings or by contacting our support team. You also have the right to withdraw your consent for receiving marketing communications, ensuring you only hear from us when you choose to.
              </p>
              <p className="text-muted-foreground">
                If needed, you can request a copy of your personal data, subject to identity verification to protect your privacy. Additionally, if you believe your data has been misused or mishandled, you have the right to lodge a complaint with your local data protection authority. ZeaCRM fully supports transparency and compliance with global privacy standards to ensure your rights are respected at every step.
              </p>
            </section>

            {/* <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Policy, please contact support@zeacrm.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information Collection and Use</h2>
              <p className="text-muted-foreground">
                We collect several different types of information for various purposes to provide and improve our
                Service to you.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Personal Data: Name, email address, phone number, company information</li>
                <li>Usage Data: Browser type, IP address, pages visited, time and date of visits</li>
                <li>Cookies and Tracking Technologies: We use cookies to track activity on our Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Data</h2>
              <p className="text-muted-foreground">ZeaCRM uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so we can improve our Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Security of Data</h2>
              <p className="text-muted-foreground">
                The security of your data is important to us but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at support@zeacrm.com
              </p>
            </section> */}
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
