import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Brain, Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "We leverage cutting-edge AI to understand your work patterns and provide personalized insights that actually matter.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Target,
    title: "Focus-First Design",
    description: "Every feature is designed to minimize distractions and maximize your deep work potential.",
    gradient: "from-secondary to-primary"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by productivity enthusiasts, for productivity enthusiasts. We listen to our community and evolve together.",
    gradient: "from-primary via-secondary to-primary"
  },
  {
    icon: Lightbulb,
    title: "Innovation Forward",
    description: "We're constantly pushing the boundaries of what's possible in productivity and automation technology.",
    gradient: "from-secondary via-primary to-secondary"
  }
];

export const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            About QuietSpace
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            We believe that true productivity comes from deep focus, not busy work. 
            QuietSpace was born from the frustration of managing multiple tools that 
            promised productivity but delivered distraction.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our mission is simple: create intelligent automation that respects your 
            focus time and amplifies your creative potential. No notifications, no 
            interruptions, just pure productivity.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon as any;
              return (
                <GlassCard key={index} delay={index * 0.1} className="text-center group">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.gradient} mb-6 glow-purple shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </GlassCard>
              );
            })}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2M+</div>
            <div className="text-muted-foreground">Hours Saved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">User Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
