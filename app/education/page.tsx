import ChatWidget from "@/components/chatbot";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import { AdditionalFeaturesSection } from "@/components/education/additional-features";
import { AdmissionsSection } from "@/components/education/admissions";
import { FeaturesSection } from "@/components/education/features-section";
import { EducationHero } from "@/components/education/hero";
import { InstitutionsSection } from "@/components/education/institutions";
import { EducationNav } from "@/components/education/nav";
import { PrinciplesSection } from "@/components/education/principles";
import { RelationshipSection } from "@/components/education/relationship";
import { StudentEngagementSection } from "@/components/education/student-engagement";


export const metadata = {
  title: " ",
  description:
    "",
};

export default function Education() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <EducationHero />
        <EducationNav />
        <RelationshipSection />
        <InstitutionsSection />
        <StudentEngagementSection />
        <FeaturesSection />
        <AdditionalFeaturesSection />
        <AdmissionsSection />
        <PrinciplesSection />
        <ChatWidget />
      </main>
      <Footer />
    </>
  )
}
