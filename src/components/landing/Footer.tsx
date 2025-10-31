import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative py-12 bg-background border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-purple shadow-lg">
              <span className="text-white font-bold text-xl">Q</span>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">QuietSpace</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Focus Meets Intelligent Automation
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button 
              onClick={() => {
                const element = document.getElementById('features');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              Features
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('how-it-works');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              How It Works
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('pricing');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              Pricing
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('testimonials');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              Testimonials
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              About
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
            >
              Contact
            </button>
          </div>
          <div className="pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2025 QuietSpace. Powered by Lovable Cloud.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
