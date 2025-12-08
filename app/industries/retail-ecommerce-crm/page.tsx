
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
    "AI-Powered CRM for Retail & E-Commerce | Boost Sales, Loyalty & Customer Engagement",
  description:
    "Enhance customer experience, automate marketing, and drive more repeat sales with ZeaCRM — the all-in-one AI CRM for online stores, retail chains, and e-commerce brands. Build loyalty, personalize engagement, and grow smarter.",
};

export default function Blogs2() {
  // return <HealthcareCRM />
  // return <RealEstateCRM />
  return <RetailEcomCRM />
  // return <ProfessionalServicesCRM />
  // return <EducationTrainingCRM />
  // return <FinanceInsuranceCRM />
  // return <AutomotiveManufacturingCRM />
  // return <HealthcareCRMAdvanced />
}