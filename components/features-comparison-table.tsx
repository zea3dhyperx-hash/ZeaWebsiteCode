import { CheckCircle2 } from "lucide-react"

export function FeaturesComparisonTable() {
  const features = [
    { name: "CRM & PIPELINE MANAGEMENT", replaces: ["icon1", "icon2"], included: true },
    { name: "UNLIMITED SALES FUNNELS", replaces: ["icon3", "icon4"], included: true },
    { name: "WEBSITE BUILDER", replaces: ["icon5", "icon6"], included: true },
    { name: "SURVEYS & FORMS", replaces: ["icon7", "icon8", "icon9"], included: true },
    { name: "EMAIL MARKETING", replaces: ["icon10", "icon11", "icon12"], included: true },
    { name: "2-WAY SMS MESSAGING", replaces: ["icon13", "icon14"], included: true },
    { name: "BOOKING & APPOINTMENTS", replaces: ["icon15", "icon16"], included: true },
    { name: "WORKFLOW AUTOMATIONS", replaces: ["icon17", "icon18", "icon19"], included: true },
    { name: "COURSES/PRODUCTS", replaces: ["icon20", "icon21"], included: true },
    { name: "CALL TRACKING", replaces: ["icon22", "icon23"], included: true },
    { name: "REPUTATION MANAGEMENT", replaces: ["icon24", "icon25", "icon26"], included: true },
    { name: "TRACKING & ANALYTICS", replaces: ["icon27"], included: true },
    { name: "COMMUNITIES", replaces: ["icon28", "icon29"], included: true },
    { name: "DOCUMENT SIGNING", replaces: ["icon30", "icon31"], included: true },
  ]

  return (
    <section className="bg-background py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto flex justify-center">
          <table className="border border-gray-200 radius-60 bg-white shadow-sm ">
            <thead>
              <tr className="border-b-2 border-gray-200 rounded-t-lg bg-green-50">
                <th className="text-left py-6 px-4 font-bold text-black text-lg">FEATURES</th>
                <th className="text-center py-6 px-4 font-bold text-black text-lg">REPLACES</th>
                <th className="text-center py-6 px-4 font-bold text-black text-lg">OTHER TOOLS</th>
                <th className="text-center py-6 px-4 font-bold text-black text-lg">
                  <div className="flex items-center justify-center gap-2">
                    <span>HighLevel</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 text-black font-medium text-sm">{feature.name}</td>
                  <td className="text-center py-4 px-4">
                    <div className="flex items-center justify-center gap-2">
                      {feature.replaces.map((icon, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs"
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">
                    <span className="text-black font-semibold text-sm">$99/MONTHLY</span>
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.included && <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
