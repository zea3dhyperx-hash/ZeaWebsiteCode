
import RealEstateCRM from "@/components/All Industries/page1.resestate";
import RetailEcomCRM from "@/components/All Industries/page2.retailcrm";
import ProfessionalServicesCRM from "@/components/All Industries/page3.professional";
import EducationTrainingCRM from "@/components/All Industries/page4.education";
import FinanceInsuranceCRM from "@/components/All Industries/page5.finance";
import AutomotiveManufacturingCRM from "@/components/All Industries/page6.automotive";
import HealthcareCRMAdvanced from "@/components/All Industries/page7.healthcare";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AI-Powered CRM for Professional Services | Automate Workflows, Clients & Projects | ZeaCRM",
  description:
    "Boost productivity with ZeaCRM – the all-in-one AI-powered CRM built for consultants, agencies, and service professionals. Automate proposals, billing, and client management to grow smarter and faster.",
  keywords: [
    "AI CRM for professional services",
    "consultant automation software",
    "agency CRM system",
    "AI client management",
    "workflow automation for service firms",
    "project CRM",
    "billing automation",
    "digital agency CRM",
  ],
};

export default function Blogs2() {
  // return <HealthcareCRM />
  // return <RealEstateCRM />
  // return <RetailEcomCRM />
  return <ProfessionalServicesCRM />
  // return <EducationTrainingCRM />
  // return <FinanceInsuranceCRM />
  // return <AutomotiveManufacturingCRM />
  // return <HealthcareCRMAdvanced />
}