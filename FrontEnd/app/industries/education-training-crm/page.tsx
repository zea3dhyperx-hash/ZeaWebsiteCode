
import RealEstateCRM from "@/components/All Industries/page1.resestate";
import RetailEcomCRM from "@/components/All Industries/page2.retailcrm";
import ProfessionalServicesCRM from "@/components/All Industries/page3.professional";
import EducationTrainingCRM from "@/components/All Industries/page4.education";
import FinanceInsuranceCRM from "@/components/All Industries/page5.finance";
import AutomotiveManufacturingCRM from "@/components/All Industries/page6.automotive";
import HealthcareCRMAdvanced from "@/components/All Industries/page7.healthcare";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education CRM for Schools & EdTech | AI-Powered Admissions & Engagement Automation",
  description:
    "Streamline admissions, automate communication, and boost learner engagement with ZeaCRM — the AI-powered CRM for schools, colleges, training centers, and EdTech platforms. Increase enrollments and simplify education management.",
};

export default function Blogs2() {
  // return <HealthcareCRM />
  // return <RealEstateCRM />
  // return <RetailEcomCRM />
  // return <ProfessionalServicesCRM />
  return (
    <div className="industry-page">
      <EducationTrainingCRM />
    </div>
  )
  // return <FinanceInsuranceCRM />
  // return <AutomotiveManufacturingCRM />
  // return <HealthcareCRMAdvanced />
}
