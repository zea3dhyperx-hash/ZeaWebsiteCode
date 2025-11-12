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


import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Education & Training | ZeaCRM",
  description:
    "Engage students, streamline admissions, manage relationships, and enhance learning outcomes with ZeaCRM for education. Features include student engagement, institution management, admissions workflows, and more.",
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
