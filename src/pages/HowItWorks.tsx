import Navigation from "@/components/Navigation";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="ml-64 p-8 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              How It Works
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Learn how QuietSpace transforms your productivity with intelligent automation
            </p>
          </motion.div>
          
          <HowItWorksSection />
        </div>
      </main>
    </div>
  );
};

export default HowItWorks;



