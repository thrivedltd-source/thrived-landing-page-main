import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";
const Hero = () => {
  const stats = [{
    icon: Building2,
    value: "500+",
    label: "Properties Managed"
  }, {
    icon: Users,
    value: "2,000+",
    label: "Satisfied Tenants"
  }, {
    icon: TrendingUp,
    value: "98%",
    label: "Occupancy Rate"
  }];
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Modern commercial building at sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="max-w-2xl">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-secondary text-sm font-medium">
                Trusted Property Management
              </span>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
              Where Commercial{" "}
              <span className="text-secondary">Properties</span>{" "}
              <span className="italic">Thrive</span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Expert commercial property management that maximizes your investment returns. We handle everything from tenant relations to maintenance, so your investments can provide the growth you need.          
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }}>
              <Button variant="hero" size="xl">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="hidden lg:grid grid-cols-1 gap-6">
            {stats.map((stat, index) => {})}
          </motion.div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 100V40C240 80 480 0 720 40C960 80 1200 0 1440 40V100H0Z" className="fill-background" />
        </svg>
      </div>
    </section>;
};
export default Hero;