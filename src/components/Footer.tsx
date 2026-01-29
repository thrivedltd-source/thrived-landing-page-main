import { motion } from "framer-motion";
const Footer = () => {
  const footerLinks = {
    services: ["Property Leasing", "Lease Administration", "Financial Management", "Maintenance", "Tenant Relations"],
    company: ["About Us", "Our Team", "Careers", "News", "Contact"],
    resources: ["Property Owners Guide", "Market Reports", "Blog", "FAQ", "Testimonials"]
  };
  return <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-display font-bold text-primary-foreground">
                Thrived
              </span>
              <span className="h-2 w-2 rounded-full bg-secondary" />
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">Expert commercial property management that maximizes your investment returns.</p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Facebook"].map(social => <a key={social} href="#" className="text-primary-foreground/50 hover:text-secondary transition-colors text-sm">
                  {social}
                </a>)}
            </div>
          </div>

          {/* Address Column */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Contact</h4>
            <div className="text-primary-foreground/70 space-y-1 text-sm">
              <p>124 City Rd</p>
              <p>London</p>
              <p>EC1 2NX</p>
              <p className="mt-4">info@thrived.uk</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Thrived. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;