import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Real Estate Investor",
      content:
        "Thrived transformed how I manage my portfolio. Their attention to detail and proactive approach has increased my net operating income by 18% in just one year.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "Office Building Owner",
      content:
        "The team at Thrived goes above and beyond. They've maintained a 97% occupancy rate for my property and handle everything professionally. I couldn't be happier.",
      rating: 5,
    },
    {
      name: "David Rodriguez",
      role: "Retail Property Manager",
      content:
        "Their technology-driven approach and transparent reporting give me complete visibility into my properties. Thrived is a true partner in my investment success.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mt-4 mb-6">
            Trusted by Property Owners
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            See why leading investors and property owners choose Thrived for
            their commercial property management needs.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10"
            >
              <Quote className="h-10 w-10 text-secondary/50 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-secondary text-secondary"
                  />
                ))}
              </div>

              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-semibold text-primary-foreground">
                  {testimonial.name}
                </p>
                <p className="text-primary-foreground/60 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
