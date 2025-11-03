import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: " Data Security and Compliance | Zea CRM",
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

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Security Overview</h2>
              <p className="text-muted-foreground">
                ZeaCRM is committed to protecting your data with industry-leading security measures. We implement
                comprehensive security protocols to ensure the confidentiality, integrity, and availability of your
                information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Data Encryption</h2>
              <p className="text-muted-foreground">
                All data transmitted between your device and our servers is encrypted using TLS 1.2 or higher. Data at
                rest is encrypted using AES-256 encryption. We use industry-standard encryption protocols to protect
                sensitive information.
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
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
