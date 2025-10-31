import { motion } from "framer-motion";
import { Activity, Brain, Zap, Cloud } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const features = [
  {
    icon: Activity,
    title: "Realtime Focus Tracking",
    description: "Monitor your productivity in real-time with intelligent session tracking.",
    gradient: "from-secondary to-primary"
  },
  {
    icon: Brain,
    title: "Smart AI Insights",
    description: "Get personalized recommendations based on your work patterns.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Zap,
    title: "Personalized Automation",
    description: "Automate repetitive tasks and stay in your creative flow.",
    gradient: "from-secondary via-primary to-secondary"
  },
  {
    icon: Cloud,
    title: "Cloud-Powered Sync",
    description: "Your data syncs seamlessly across all your devices.",
    gradient: "from-primary via-secondary to-primary"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to work smarter, not harder
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <GlassCard key={index} delay={index * 0.1} className="group">
                <div className="text-center">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 glow-purple shadow-md`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
