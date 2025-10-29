export function WhyUs2Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "zeaCRM transformed our sales process. We saw a 250% increase in productivity within 3 months.",
      avatar: "👩‍💼",
    },
    {
      name: "Michael Chen",
      role: "Sales Director, Global Corp",
      content: "The AI insights are incredible. We're closing deals 40% faster than before.",
      avatar: "👨‍💼",
    },
    {
      name: "Emma Rodriguez",
      role: "Founder, Growth Labs",
      content: "Best investment we made for our business. The ROI was immediate and substantial.",
      avatar: "👩‍🔬",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 text-balance">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground italic">"{testimonial.content}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
