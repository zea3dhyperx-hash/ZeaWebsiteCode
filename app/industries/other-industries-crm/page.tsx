import HealthcareCRM from "@/components/aatesting/page";
import RealEstateCRM from "@/components/aatesting/page1.resestate";
import RetailEcomCRM from "@/components/aatesting/page2.retailcrm";
import ProfessionalServicesCRM from "@/components/aatesting/page3.professional";
import EducationTrainingCRM from "@/components/aatesting/page4.education";
import FinanceInsuranceCRM from "@/components/aatesting/page5.finance";
import AutomotiveManufacturingCRM from "@/components/aatesting/page6.automotive";
import HealthcareCRMAdvanced from "@/components/aatesting/page7.healthcare";
import OtherIndustriesCRMPage from "@/components/aatesting/page8.otherpages";
import type { Metadata } from "next";

export const metadata = {
  title: "AI-Powered CRM for All Industries | ZeaCRM Automation for Every Business",
  description:
    "Explore ZeaCRM 's all-in-one AI-powered CRM for hospitality, travel, logistics, non-profits, events, and more. Automate operations, boost engagement, and scale growth -built for every business type.",
};

export default function OtherIndustries() {
  return <OtherIndustriesCRMPage />
}