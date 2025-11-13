import HealthcareCRM from "@/components/aatesting/page";
import RealEstateCRM from "@/components/aatesting/page1.resestate";
import RetailEcomCRM from "@/components/aatesting/page2.retailcrm";
import ProfessionalServicesCRM from "@/components/aatesting/page3.professional";
import EducationTrainingCRM from "@/components/aatesting/page4.education";
import FinanceInsuranceCRM from "@/components/aatesting/page5.finance";
import AutomotiveManufacturingCRM from "@/components/aatesting/page6.automotive";
import HealthcareCRMAdvanced from "@/components/aatesting/page7.healthcare";
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
  return <EducationTrainingCRM />
  // return <FinanceInsuranceCRM />
  // return <AutomotiveManufacturingCRM />
  // return <HealthcareCRMAdvanced />
}