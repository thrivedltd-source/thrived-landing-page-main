import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const benefits = [
    "Over 15 years of commercial property experience",
    "Local market expertise with national resources",
    "Transparent communication and reporting",
    "Dedicated property managers for each account",
    "Technology-driven operations and analytics",
    "Proven track record of maximizing ROI",
  ];

  const stats = [
    { value: "£50M+", label: "Assets Under Management" },
    { value: "15+", label: "Years of Experience" },
    { value: "30+", label: "Commercial Properties" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Why Choose Thrived
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
              Your Property, Our Priority
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Thrived, we understand that commercial property management is
              more than just collecting rent. It's about protecting your
              investment, building lasting tenant relationships, and maximizing
              the potential of every asset.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border text-center"
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
