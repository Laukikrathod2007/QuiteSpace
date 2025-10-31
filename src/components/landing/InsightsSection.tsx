import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Brain, TrendingUp, Target, Lightbulb, BarChart3, PieChart, Activity } from "lucide-react";

const insights = [
  {
    id: 1,
    title: "Peak Productivity Hours",
    description: "You're most productive between 10 AM - 12 PM",
    type: "pattern",
    icon: TrendingUp,
    gradient: "from-primary to-secondary",
    recommendation: "Schedule important tasks during this window"
  },
  {
    id: 2,
    title: "Focus Session Length",
    description: "Optimal session length is 45-60 minutes",
    type: "optimization",
    icon: Target,
    gradient: "from-secondary to-primary",
    recommendation: "Try extending your sessions gradually"
  },
  {
    id: 3,
    title: "Break Frequency",
    description: "Taking breaks every 25 minutes improves focus",
    type: "wellness",
    icon: Activity,
    gradient: "from-primary via-secondary to-primary",
    recommendation: "Set up automatic break reminders"
  },
  {
    id: 4,
    title: "Task Completion Rate",
    description: "You complete 78% of planned tasks",
    type: "performance",
    icon: BarChart3,
    gradient: "from-secondary via-primary to-secondary",
    recommendation: "Consider reducing task load by 20%"
  }
];

const weeklyData = [
  { day: "Mon", hours: 4.2, score: 85 },
  { day: "Tue", hours: 3.8, score: 82 },
  { day: "Wed", hours: 5.1, score: 91 },
  { day: "Thu", hours: 4.5, score: 88 },
  { day: "Fri", hours: 3.2, score: 79 },
  { day: "Sat", hours: 2.1, score: 65 },
  { day: "Sun", hours: 1.8, score: 58 }
];

export const InsightsSection = () => {
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
            AI Insights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Personalized recommendations powered by AI to optimize your productivity
          </p>
        </motion.div>

        {/* AI Insights Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <GlassCard key={insight.id} delay={index * 0.1} className="group">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${insight.gradient} glow-purple shadow-lg flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-foreground">{insight.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          insight.type === 'pattern' ? 'bg-primary/20 text-primary' :
                          insight.type === 'optimization' ? 'bg-secondary/20 text-secondary' :
                          insight.type === 'wellness' ? 'bg-green-500/20 text-green-500' :
                          'bg-purple-500/20 text-purple-500'
                        }`}>
                          {insight.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">{insight.description}</p>
                      <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                        <div className="flex items-center gap-2 mb-1">
                          <Lightbulb className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">Recommendation</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{insight.recommendation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Weekly Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Weekly Analytics</h3>
          <GlassCard delay={0.2} className="p-8">
            <div className="grid md:grid-cols-7 gap-4">
              {weeklyData.map((day, index) => (
                <div key={day.day} className="text-center">
                  <div className="text-sm font-medium text-muted-foreground mb-2">{day.day}</div>
                  <div className="h-24 flex flex-col justify-end mb-2">
                    <div 
                      className="bg-gradient-to-t from-primary to-secondary rounded-t"
                      style={{ height: `${(day.hours / 6) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs text-foreground font-medium">{day.hours}h</div>
                  <div className="text-xs text-muted-foreground">{day.score}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border/50">
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24.7h</div>
                  <div className="text-sm text-muted-foreground">Total Focus Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">78</div>
                  <div className="text-sm text-muted-foreground">Average Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">+12%</div>
                  <div className="text-sm text-muted-foreground">vs Last Week</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};







