import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ChatWidget from "@/components/chatbot";

export const metadata = {
  title: " Data Security and Compliance | ZeaCRM",
  description:
    "  Learn about Zea CRM's robust data security measures and compliance with industry standards like HIPAA, GDPR, and SOC 2. Discover how we protect your data while providing our AI-powered CRM services across various industries.",
};

export default function DataSecurityCompliancePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Data Security and Compliance</h1>
            <p className="text-muted-foreground py-2">
              At ZeaCRM, protecting customer data is at the core of what we do. We comply with major global data protection regulations, including GDPR, CCPA, and USA Data Protection Law, ensuring that your business data remains secure and compliant.
            </p>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Security Practices</h2>
              <p className="text-muted-foreground py-2">
                ZeaCRM employs multi-layered security practices that include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Encryption: All data in transit and at rest is encrypted using AES-256 and SSL/TLS protocols.</li>
                <li>Access Control: Strict user-level permissions with MFA and role-based access.</li>
                <li>Regular Audits: Internal and third-party security audits ensure ongoing compliance.</li>
                <li>Data Backup: Automatic daily backups with secure recovery procedures.</li>
                <li>Monitoring: 24/7 server monitoring and threat detection systems.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Compliance Standards</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>GDPR Compliant – Ensures lawful data collection, purpose limitation, and user consent.</li>
                <li>ISO 27001 Practices – Adheres to international standards of information security.</li>
                <li>CCPA Readiness – Allows California residents to access or delete personal data upon request.</li>
              </ul>
              <p className="text-muted-foreground py-2">
                Your data is stored securely in geographically redundant servers hosted in the UAE and EU, depending on user location. ZeaCRM ensures data minimization and retention only for the duration required by business or legal needs.
              </p>
              <p className="text-muted-foreground py-2">
                All third-party vendors handling ZeaCRM data (including payment processors, analytics tools, and integrations) comply with the same strict privacy and security standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Incident Response</h2>
              <p className="text-muted-foreground py-2">
                At ZeaCRM, we take incident management with the utmost seriousness. In the rare event of a data breach or unauthorized access, ZeaCRM’s security team follows a structured, time-bound response protocol. You will be notified within 72 hours of detection, along with complete transparency on the nature of the breach, affected data, and potential risks.
              </p>
              <p className="text-muted-foreground py-2">
                Immediate containment and recovery measures will be initiated to minimize disruption and ensure service continuity. Our dedicated security specialists conduct thorough root cause analysis to identify vulnerabilities, followed by corrective and preventive actions to ensure that similar incidents do not occur in the future. Continuous monitoring, audits, and post-incident reviews are part of our commitment to maintaining your trust and data safety.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Role in Security</h2>
              <p className="text-muted-foreground py-2">
                While ZeaCRM provides enterprise-grade protection, maintaining account security is a shared responsibility. As a user, your vigilance strengthens the system’s defense. We strongly recommend using complex, unique passwords and enabling multi-factor authentication (MFA) for every account.
              </p>
              <p className="text-muted-foreground py-2">
                Avoid sharing login credentials, especially across teams, and ensure that inactive users are promptly removed from your organization’s account. Periodically review access permissions to confirm that only authorized individuals have the necessary rights. By following these simple yet essential practices, you play an active role in safeguarding your organization’s data integrity and confidentiality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact</h2>
              <p className="text-muted-foreground py-2">
                For data protection and compliance queries, contact support@zeacrm.com.
              </p>
            </section>

            {/* <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Data Encryption</h2>
              <p className="text-muted-foreground py-2">
              </p>
              <p className="text-muted-foreground py-2">
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Data Encryption</h2>
              <p className="text-muted-foreground py-2">
              </p>
              <p className="text-muted-foreground py-2">
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. HIPAA Compliance</h2>
              <p className="text-muted-foreground">
                ZeaCRM is HIPAA compliant and meets all requirements for handling protected health information (PHI). We
                maintain comprehensive audit logs and implement strict access controls to ensure compliance with HIPAA
                regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. GDPR Compliance</h2>
              <p className="text-muted-foreground">
                We comply with the General Data Protection Regulation (GDPR) and provide users with full control over
                their personal data. Users can request data access, modification, or deletion at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. SOC 2 Certification</h2>
              <p className="text-muted-foreground">
                ZeaCRM is SOC 2 Type II certified, demonstrating our commitment to security, availability, processing
                integrity, confidentiality, and privacy. We undergo regular audits to maintain this certification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Access Controls</h2>
              <p className="text-muted-foreground">
                We implement role-based access controls (RBAC) to ensure that employees only have access to data
                necessary for their job functions. All access is logged and monitored for suspicious activity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Backup and Disaster Recovery</h2>
              <p className="text-muted-foreground">
                We maintain regular backups of all data with redundancy across multiple geographic locations. Our
                disaster recovery plan ensures business continuity and data availability in case of emergencies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Incident Response</h2>
              <p className="text-muted-foreground">
                We have a comprehensive incident response plan in place to quickly identify, contain, and remediate any
                security incidents. We notify affected users within 24 hours of discovering any data breach.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Regular Security Audits</h2>
              <p className="text-muted-foreground">
                We conduct regular security audits and penetration testing to identify and address vulnerabilities. Our
                security team continuously monitors for threats and implements updates to maintain protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Security Team</h2>
              <p className="text-muted-foreground">
                If you have any security concerns or wish to report a vulnerability, please contact our security team at
                security@zeacrm.com
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
