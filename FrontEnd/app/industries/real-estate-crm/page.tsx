
import RealEstateCRM from "@/components/All Industries/page1.resestate";
import RetailEcomCRM from "@/components/All Industries/page2.retailcrm";
import ProfessionalServicesCRM from "@/components/All Industries/page3.professional";
import EducationTrainingCRM from "@/components/All Industries/page4.education";
import FinanceInsuranceCRM from "@/components/All Industries/page5.finance";
import AutomotiveManufacturingCRM from "@/components/All Industries/page6.automotive";
import HealthcareCRMAdvanced from "@/components/All Industries/page7.healthcare";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Real Estate CRM | Smart Automation for Builders, Agents & Property Managers",
  description:
    "Automate real estate sales, marketing, and property management with ZeaCRM. Capture leads, track deals, send rent reminders, and manage clients — all from one AI-powered platform built for modern real estate professionals.",
};

export default function Blogs2() {
  // return <HealthcareCRM />
  return (
    <div className="industry-page">
      <RealEstateCRM />
    </div>
  )
  // return <RetailEcomCRM />
  // return <ProfessionalServicesCRM />
  // return <EducationTrainingCRM />
  // return <FinanceInsuranceCRM />
  // return <AutomotiveManufacturingCRM />
  // return <HealthcareCRMAdvanced />
}
