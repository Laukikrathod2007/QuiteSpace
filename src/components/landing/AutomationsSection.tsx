import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Zap, Settings, Play, Pause, Plus, Bot, Clock, Calendar } from "lucide-react";

const automations = [
  {
    id: 1,
    name: "Morning Focus Routine",
    description: "Automatically starts focus mode at 9 AM",
    status: "active",
    icon: Clock,
    gradient: "from-primary to-secondary"
  },
  {
    id: 2,
    name: "Break Reminder",
    description: "Reminds you to take breaks every 25 minutes",
    status: "active",
    icon: Calendar,
    gradient: "from-secondary to-primary"
  },
  {
    id: 3,
    name: "Email Automation",
    description: "Automatically categorizes and prioritizes emails",
    status: "paused",
    icon: Bot,
    gradient: "from-primary via-secondary to-primary"
  },
  {
    id: 4,
    name: "Task Prioritization",
    description: "AI-powered task sorting based on deadlines",
    status: "active",
    icon: Zap,
    gradient: "from-secondary via-primary to-secondary"
  }
];

export const AutomationsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Automations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let AI handle the repetitive tasks while you focus on what matters
          </p>
        </motion.div>

        {/* Create Automation Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Button size="lg" className="neuro-button text-lg px-8 py-6 shadow-xl text-white hover:scale-105 transition-transform">
            <Plus className="h-6 w-6 mr-2" />
            Create Automation
          </Button>
        </motion.div>

        {/* Automations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {automations.map((automation, index) => {
            const Icon = automation.icon;
            return (
              <GlassCard key={automation.id} delay={index * 0.1} className="group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${automation.gradient} glow-purple shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex gap-2">
                      {automation.status === 'active' ? (
                        <Button size="sm" variant="outline" className="p-2">
                          <Pause className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="p-2">
                          <Play className="h-4 w-4" />
                        </Button>
                      )}
                      <Button size="sm" variant="outline" className="p-2">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-foreground">{automation.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{automation.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      automation.status === 'active' 
                        ? 'bg-secondary/20 text-secondary' 
                        : 'bg-muted/20 text-muted-foreground'
                    }`}>
                      {automation.status}
                    </span>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Automation Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <GlassCard delay={0.1} className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">12</div>
            <div className="text-muted-foreground">Active Automations</div>
          </GlassCard>
          <GlassCard delay={0.2} className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">47</div>
            <div className="text-muted-foreground">Tasks Automated Today</div>
          </GlassCard>
          <GlassCard delay={0.3} className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">3.2h</div>
            <div className="text-muted-foreground">Time Saved This Week</div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

