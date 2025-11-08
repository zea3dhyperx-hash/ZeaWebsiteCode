export function RelationshipSection() {
  return (
    <section id="video" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-amber-400">
          Smarter Relationship Management for Learning Institutions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 items-center">
          {/* Video Placeholder */}
          
          {/* <div className="bg-slate-800 rounded-lg aspect-video lg:aspect-auto lg:h-96 flex items-center justify-center group cursor-pointer hover:bg-slate-700 transition-colors">
            <button className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors shadow-lg">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div> */}

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Centralize, engage, and convert students with our end-to-end Education CRM
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Education is built on meaningful connections between institutions, students, and faculty. ZeaCRM helps
              educational organizations and training providers streamline admissions, automate communication, and track
              engagement through one intelligent platform.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              From inquiry to enrollment, ZeaCRM gives you complete visibility into every student interaction. Whether
              it's managing thousands of leads for a university or handling class schedules for a training institute,
              ZeaCRM ensures no opportunity is missed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
