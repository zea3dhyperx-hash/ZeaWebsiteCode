"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export function CTA() {
  const router = useRouter();
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-400">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-950 mb-6">
          Experience how ZeoCRM can change your healthcare organization with intelligent automation.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => router.push("/get-started")}
            className="bg-background hover:bg-background text-primary hover:scale-110 font-semibold px-8 py-3 text-lg rounded-lg">
            Get Started
          </Button>
          <Button
            onClick={() => router.push("/demo")}
            variant="outline"
            className="border-slate-950 text-slate-950 hover:bg-slate-950 hover:text-white font-semibold px-8 py-3 text-lg rounded-lg bg-transparent"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
