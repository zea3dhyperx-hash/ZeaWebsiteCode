import HealthcareCRM from "@/components/aatesting/page";
import RealEstateCRM from "@/components/All Industries/page1.resestate";
import RetailEcomCRM from "@/components/All Industries/page2.retailcrm";
import ProfessionalServicesCRM from "@/components/All Industries/page3.professional";
import EducationTrainingCRM from "@/components/All Industries/page4.education";
import FinanceInsuranceCRM from "@/components/All Industries/page5.finance";
import AutomotiveManufacturingCRM from "@/components/All Industries/page6.automotive";
import HealthcareCRMAdvanced from "@/components/All Industries/page7.healthcare";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Healthcare CRM | Smart Patient & Clinic Relationship Management",
  description:
    "ZeaCRM transforms healthcare operations with AI-driven automation for hospitals, clinics, labs, and wellness centers. Manage patients, staff, and communication seamlessly with one powerful CRM platform.",
  keywords: [
    "Healthcare CRM",
    "medical CRM software",
    "AI healthcare automation",
    "patient management system",
    "clinic CRM",
    "hospital CRM",
    "wellness CRM",
    "healthcare marketing automation",
    "digital patient engagement",
  ],
  openGraph: {
    title: "Smarter Healthcare, Powered by ZeaCRM",
    description:
      "Streamline patient journeys, automate scheduling, and unify communication with ZeaCRM — the AI-powered CRM built for modern healthcare teams.",
    type: "website",
  },
};

export default function Blogs2() {
  // return <HealthcareCRM />
  return <RealEstateCRM />
  // return <RetailEcomCRM />
  // return <ProfessionalServicesCRM />
  // return <EducationTrainingCRM />
  // return <FinanceInsuranceCRM />
  // return <AutomotiveManufacturingCRM />
  // return <HealthcareCRMAdvanced />
}