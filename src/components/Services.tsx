import { motion } from "framer-motion";
import {
  Building,
  ClipboardCheck,
  DollarSign,
  Wrench,
  Users,
  BarChart3,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Property Leasing",
      description:
        "Strategic marketing and tenant screening to fill vacancies with quality tenants quickly and efficiently.",
    },
    {
      icon: ClipboardCheck,
      title: "Lease Administration",
      description:
        "Comprehensive lease management including renewals, rent collection, and compliance monitoring.",
    },
    {
      icon: DollarSign,
      title: "Financial Management",
      description:
        "Detailed financial reporting, budgeting, and expense optimization to maximize your returns.",
    },
    {
      icon: Wrench,
      title: "Maintenance & Repairs",
      description:
        "24/7 maintenance coordination with vetted contractors to keep your property in top condition.",
    },
    {
      icon: Users,
      title: "Tenant Relations",
      description:
        "Professional tenant communication and conflict resolution for high retention rates.",
    },
    {
      icon: BarChart3,
      title: "Asset Optimization",
      description:
        "Strategic planning and improvements to increase property value and rental income.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
            Comprehensive Property Management Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From tenant acquisition to financial reporting, we provide end-to-end
            solutions that protect and grow your investment.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-xl bg-muted group-hover:bg-secondary/10 flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-muted-foreground group-hover:text-secondary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
