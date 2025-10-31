import { motion } from "framer-motion";
import { Play, Brain, Zap } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const steps = [
  {
    icon: Play,
    title: "Start Your Session",
    description: "Focus without distractions and let QuietSpace track your flow.",
    gradient: "from-secondary to-primary"
  },
  {
    icon: Brain,
    title: "AI Does the Analysis",
    description: "Understand your performance patterns with intelligent summaries.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Zap,
    title: "Automate Routines",
    description: "Let repetitive work run automatically while you stay creative.",
    gradient: "from-secondary via-primary to-secondary"
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps to unlock your productivity potential
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <GlassCard key={index} delay={index * 0.15} className="text-center group">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.gradient} mb-6 glow-purple shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
