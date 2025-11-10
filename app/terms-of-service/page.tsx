import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ChatWidget from "@/components/chatbot";

export const metadata = {
  title: " Terms of Service | ZeaCRM",
  description:
    " Review Zea CRM's Terms of Service to understand the rules and regulations for using our AI-powered CRM platform. Stay informed about your rights and responsibilities while leveraging our tools to enhance productivity across various industries.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground py-2">These Terms of Service ("Terms") govern your access to and use of ZeaCRM (“Service”), provided by Zea Technologies FZC. By accessing or using ZeaCRM, you agree to be bound by these Terms.</p>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Eligibility</h2>
              <p className="text-muted-foreground py-2">
                You must be at least 18 years old and capable of entering into a binding agreement. If you are using ZeaCRM on behalf of a business, you represent that you have the authority to bind that business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Account Registration</h2>
              <p className="text-muted-foreground py-2">
                To use ZeaCRM, you must create an account by providing accurate, complete, and current information. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.
              </p>
              <p className="text-muted-foreground py-2">
                By using our website and services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Use ZeaCRM only for lawful purposes.</li>
                <li>Not to misuse, reverse-engineer, or disrupt the platform.</li>
                <li>Comply with all applicable local and international laws.</li>
                <li>Not to upload or transmit any viruses, spam, or unauthorized data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Subscription & Payment</h2>
              <p className="text-muted-foreground py-2">
                ZeaCRM operates on a transparent, subscription-based model designed to offer flexibility and scalability for every business size. All payments are processed securely through trusted third-party payment gateways using industry-standard encryption.
              </p>
              <p className="text-muted-foreground py-2">
                Subscription fees are billed according to the plan you select and are non-refundable, except as expressly stated in a written agreement or under special promotional terms. ZeaCRM reserves the right to modify pricing, add new plans, or update features with prior notice.
              </p>
              <p className="text-muted-foreground py-2">
                Any failure to make timely payments may result in temporary suspension or termination of access to your account until dues are cleared. Renewal notices and payment reminders will be communicated in advance to ensure seamless continuity of services.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground py-2">
                All intellectual property rights, including but not limited to software, design elements, trademarks, logos, databases, documentation, and user interfaces, remain the sole property of Zea Technologies FZC. By using ZeaCRM, you are granted a limited, non-exclusive, and non-transferable license to access and use the platform strictly for legitimate business purposes.
              </p>
              <p className="text-muted-foreground py-2">
                You may not reproduce, distribute, modify, or create derivative works from any part of ZeaCRM without explicit written consent. Any unauthorized use or infringement of ZeaCRM’s intellectual property may result in legal action.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
              <p className="text-muted-foreground py-2">
                ZeaCRM reserves the right to suspend, restrict, or permanently terminate your access if you violate these Terms of Service, engage in fraudulent activity, or misuse the platform in any way that compromises performance, security, or other users’ rights.
              </p>
              <p className="text-muted-foreground py-2">
                Upon termination, your access to all associated data, integrations, and features will be discontinued. However, you may request data export prior to account deactivation. ZeaCRM also retains the right to terminate inactive or delinquent accounts following reasonable notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground py-2">
                To the fullest extent permitted by law, ZeaCRM shall not be held liable for any indirect, incidental, special, or consequential damages, including loss of data, revenue, or profits resulting from the use or inability to use the platform.
              </p>
              <p className="text-muted-foreground py-2">
                In all cases, ZeaCRM’s total cumulative liability shall not exceed the total amount paid by you for services during the six (6) months immediately preceding the claim. You acknowledge that ZeaCRM is not responsible for delays, interruptions, or data loss resulting from factors beyond its control, including third-party integrations or network issues.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Indemnification</h2>
              <p className="text-muted-foreground py-2">
                You agree to indemnify, defend, and hold Zea Technologies FZC, its affiliates, directors, and employees harmless from any and all claims, losses, liabilities, or expenses arising from your breach of these Terms, unauthorized use of the platform, or violation of applicable laws. This includes attorney fees and damages related to misuse of data, intellectual property infringement, or non-compliance with security practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground py-2">
                These Terms of Service are governed and interpreted in accordance with the laws of the United States of America, without regard to conflict of law principles. Any disputes or claims arising from your use of ZeaCRM or related policies shall be exclusively resolved through the appropriate courts within the jurisdiction of the United States. By using ZeaCRM, you consent to the jurisdiction and venue of these courts for any such legal matters.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground py-2">
                If you have any questions about this Policy, please contact support@zeacrm.com.
              </p>
            </section>

            {/* <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p className="text-muted-foreground">
                Permission is granted to temporarily download one copy of the materials (information or software) on
                ZeaCRM's website for personal, non-commercial transitory viewing only. This is the grant of a license,
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on ZeaCRM's website are provided on an 'as is' basis. ZeaCRM makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
              <p className="text-muted-foreground">
                In no event shall ZeaCRM or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on ZeaCRM's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground">
                The materials appearing on ZeaCRM's website could include technical, typographical, or photographic
                errors. ZeaCRM does not warrant that any of the materials on its website are accurate, complete, or
                current. ZeaCRM may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Links</h2>
              <p className="text-muted-foreground">
                ZeaCRM has not reviewed all of the sites linked to its website and is not responsible for the contents
                of any such linked site. The inclusion of any link does not imply endorsement by ZeaCRM of the site. Use
                of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Modifications</h2>
              <p className="text-muted-foreground">
                ZeaCRM may revise these terms of service for its website at any time without notice. By using this
                website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction
                in which ZeaCRM operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that
                location.
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
