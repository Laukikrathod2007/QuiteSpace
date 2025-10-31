import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Play, Clock, TrendingUp, Target, BarChart3, Calendar } from "lucide-react";

const metrics = [
  {
    icon: Clock,
    title: "Total Focus Hours",
    value: "0.0h",
    subtitle: "All time",
    gradient: "from-primary to-secondary"
  },
  {
    icon: TrendingUp,
    title: "AI Productivity Score",
    value: "87",
    subtitle: "+12% this week",
    gradient: "from-secondary to-primary"
  },
  {
    icon: Target,
    title: "Weekly Progress",
    value: "0",
    subtitle: "Sessions completed",
    gradient: "from-primary via-secondary to-primary"
  }
];

const recentSessions = [
  {
    id: 1,
    title: "Deep Work Session",
    duration: "2h 30m",
    date: "Today",
    status: "completed"
  },
  {
    id: 2,
    title: "Creative Writing",
    duration: "1h 45m",
    date: "Yesterday",
    status: "completed"
  },
  {
    id: 3,
    title: "Code Review",
    duration: "45m",
    date: "2 days ago",
    status: "completed"
  }
];

export const DashboardSection = () => {
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
            Dashboard
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your productivity overview at a glance
          </p>
        </motion.div>

        {/* Start Session Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Button size="lg" className="neuro-button text-lg px-8 py-6 shadow-xl text-white hover:scale-105 transition-transform">
            <Play className="h-6 w-6 mr-2" />
            Start Session
          </Button>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <GlassCard key={index} delay={index * 0.1} className="text-center group">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${metric.gradient} mb-6 glow-purple shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{metric.value}</h3>
                <h4 className="text-lg font-semibold mb-2 text-foreground">{metric.title}</h4>
                <p className="text-muted-foreground">{metric.subtitle}</p>
              </GlassCard>
            );
          })}
        </div>

        {/* Focus Sessions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Focus Sessions</h3>
          <GlassCard delay={0.2} className="p-8">
            {recentSessions.length > 0 ? (
              <div className="space-y-4">
                {recentSessions.map((session, index) => (
                  <div key={session.id} className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border/50">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <BarChart3 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{session.title}</h4>
                        <p className="text-sm text-muted-foreground">{session.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{session.date}</p>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary">
                        {session.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">No sessions yet</h4>
                <p className="text-muted-foreground">Start your first focus session!</p>
              </div>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

