import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Lightbulb, TrendingUp, Clock } from "lucide-react";

const Insights = () => {
  const insights = [
    {
      id: 1,
      title: "Peak Productivity Time",
      description: "You're most productive between 9 AM - 11 AM",
      icon: Clock,
      color: "text-blue-500",
      recommendation: "Schedule important tasks during this window",
    },
    {
      id: 2,
      title: "Focus Pattern Detected",
      description: "Your focus improves after 25-minute work intervals",
      icon: Brain,
      color: "text-purple-500",
      recommendation: "Consider using Pomodoro technique",
    },
    {
      id: 3,
      title: "Automation Opportunity",
      description: "You spend 3 hours weekly on email sorting",
      icon: Lightbulb,
      color: "text-yellow-500",
      recommendation: "Enable Email Organizer automation",
    },
    {
      id: 4,
      title: "Productivity Trend",
      description: "Your output increased 23% this month",
      icon: TrendingUp,
      color: "text-green-500",
      recommendation: "Great job! Keep up the momentum",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="ml-64 p-8 animate-fade-in">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              AI Insights
            </h1>
            <p className="text-muted-foreground">
              Intelligent recommendations based on your behavior
            </p>
          </div>

          <div className="grid gap-6">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <Card
                  key={insight.id}
                  className="hover-scale transition-all duration-300 hover:shadow-xl border-border/50 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-accent ${insight.color}`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{insight.title}</CardTitle>
                        <CardDescription className="text-base">
                          {insight.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-sm font-medium text-primary">
                        💡 Recommendation: {insight.recommendation}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Insights;
