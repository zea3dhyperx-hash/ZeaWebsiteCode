export function AllInOne() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className="space-y-6 opacity-0 animate-slide-in-left"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              All-in-One Platform for Automotive & Industrial Excellence
            </h2>
            <p className="text-gray-300 text-xl">
              ZeaCRM unites your sales, operations, and service teams in one intelligent platform. It eliminates silos
              by integrating customer data, orders, and performance metrics in real time. This allows your team to make
              faster decisions and stronger collaboration.
            </p>
            <p className="text-gray-300 text-xl">
              With AI-powered analytics, you can forecast demand, monitor performance trends, and automate customer
              outreach. From factory floors to showrooms, ZeaCRM helps you stay efficient, connected, and future-ready.
            </p>
          </div>

          {/* Image */}
          <div
            className="rounded-lg overflow-hidden h-80 lg:h-96 opacity-0 animate-slide-in-right transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            style={{
              animationDelay: "0.3s",
              animationFillMode: "forwards",
              backgroundImage:
                "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_5mld115mld115mld-tInmi4A29eY1QIKRu571WDscgBoasj.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </section>
  )
}
