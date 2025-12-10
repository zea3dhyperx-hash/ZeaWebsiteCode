export function WhyUsTestimonialsSection() {
  return (
    <div className="bg-primary text-foreground py-20 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance text-background">What Our Clients Say</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto text-background">Real feedback from real businesses</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Emily Watson",
              role: "CEO, Digital Marketing Agency",
              quote: "ZeaCRM is a true game-changer. We automated our follow-ups and saw a 35% jump in conversions within the first month.",
              rating: 5,
            },
            {
              name: "James Mitchell",
              role: "Sales Manager, B2B SaaS",
              quote: "The healthcare automation tools are incredible. Appointment scheduling and reminders run seamlessly now.",
              rating: 5,
            },
            {
              name: "Priya Sharma",
              role: "Operations Director, Healthcare",
              quote: "We switched from a legacy CRM and cut costs by half. ZeaCRM2019s AI recommendations help us close deals faster.",
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="rounded-lg p-8 border border-background/30 bg-background">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-sm opacity-90 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-xs opacity-75">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


