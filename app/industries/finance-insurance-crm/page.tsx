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
  title: "Finance & Insurance CRM | AI-Powered Automation for Banks, Insurers & Advisors",
  description:
    "Streamline loan, policy, and portfolio management with ZeaCRM. Automate client onboarding, renewals, reminders, and compliance—powered by secure AI automation for the finance and insurance industry.",
};

export default function Blogs2() {
  // return <HealthcareCRM />
  // return <RealEstateCRM />
  // return <RetailEcomCRM />
  // return <ProfessionalServicesCRM />
  // return <EducationTrainingCRM />
  return <FinanceInsuranceCRM />
  // return <AutomotiveManufacturingCRM />
  // return <HealthcareCRMAdvanced />
}