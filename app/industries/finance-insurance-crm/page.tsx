
import RealEstateCRM from "@/components/All Industries/page1.resestate";
import RetailEcomCRM from "@/components/All Industries/page2.retailcrm";
import ProfessionalServicesCRM from "@/components/All Industries/page3.professional";
import EducationTrainingCRM from "@/components/All Industries/page4.education";
import FinanceInsuranceCRM from "@/components/All Industries/page5.finance";
import AutomotiveManufacturingCRM from "@/components/All Industries/page6.automotive";
import HealthcareCRMAdvanced from "@/components/All Industries/page7.healthcare";
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