import Navigation from "@/components/Navigation";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { motion } from "framer-motion";

const Testimonials = () => {
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
              Testimonials
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See what our users say about QuietSpace
            </p>
          </motion.div>
          
          <TestimonialsSection />
        </div>
      </main>
    </div>
  );
};

export default Testimonials;



