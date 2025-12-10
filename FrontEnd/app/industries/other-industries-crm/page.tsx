
import RealEstateCRM from "@/components/All Industries/page1.resestate";
import RetailEcomCRM from "@/components/All Industries/page2.retailcrm";
import ProfessionalServicesCRM from "@/components/All Industries/page3.professional";
import EducationTrainingCRM from "@/components/All Industries/page4.education";
import FinanceInsuranceCRM from "@/components/All Industries/page5.finance";
import AutomotiveManufacturingCRM from "@/components/All Industries/page6.automotive";
import HealthcareCRMAdvanced from "@/components/All Industries/page7.healthcare";
import OtherIndustriesCRMPage from "@/components/All Industries/page8.otherpages";
import type { Metadata } from "next";

export const metadata = {
  title: "AI-Powered CRM for All Industries | ZeaCRM Automation for Every Business",
  description:
    "Explore ZeaCRM 's all-in-one AI-powered CRM for hospitality, travel, logistics, non-profits, events, and more. Automate operations, boost engagement, and scale growth -built for every business type.",
};

export default function OtherIndustries() {
  return (
    <div className="industry-page">
      <OtherIndustriesCRMPage />
    </div>
  )
}
