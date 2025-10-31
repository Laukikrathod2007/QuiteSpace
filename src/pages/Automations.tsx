import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlowButton } from "@/components/ui/GlowButton";
import { Pause, Play, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Automations = () => {
  const [automations, setAutomations] = useState<any[]>([
    {
      id: 1,
      name: "Email Organizer",
      description: "Automatically categorizes and archives emails",
      status: "active",
      triggers: 45,
    },
    {
      id: 2,
      name: "Focus Mode Scheduler",
      description: "Enables focus mode during work hours",
      status: "active",
      triggers: 120,
    },
    {
      id: 3,
      name: "Meeting Notes Generator",
      description: "Creates summaries from meeting recordings",
      status: "paused",
      triggers: 23,
    },
  ]);
  const { toast } = useToast();

  const toggleAutomation = (id: number, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "paused" : "active";
    setAutomations(
      automations.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
    toast({
      title: `Automation ${newStatus}`,
      description: `The automation has been ${newStatus}.`,
    });
  };

  const deleteAutomation = (id: number) => {
    setAutomations(automations.filter((a) => a.id !== id));
    toast({
      title: "Automation deleted",
      description: "The automation has been removed.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="ml-64 p-8 animate-fade-in">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Automations
              </h1>
              <p className="text-muted-foreground">
                Manage your intelligent workflows
              </p>
            </div>
            <GlowButton>
              <Plus className="mr-2 h-4 w-4" />
              New Automation
            </GlowButton>
          </div>

          <div className="grid gap-6">
            {automations.map((automation, index) => (
              <Card
                key={automation.id}
                className="glass-card hover-scale transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{automation.name}</CardTitle>
                      <CardDescription className="text-base opacity-70">
                        {automation.description}
                      </CardDescription>
                    </div>
                    <Badge
                      variant={automation.status === "active" ? "default" : "secondary"}
                      className="ml-4"
                    >
                      {automation.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground opacity-70">
                      Triggered {automation.triggers} times
                    </p>
                    <div className="flex gap-2">
                      <GlowButton
                        variant="secondary"
                        className="px-4 py-2 text-sm"
                        onClick={() => toggleAutomation(automation.id, automation.status)}
                      >
                        {automation.status === "active" ? (
                          <>
                            <Pause className="mr-2 h-4 w-4" />
                            Pause
                          </>
                        ) : (
                          <>
                            <Play className="mr-2 h-4 w-4" />
                            Resume
                          </>
                        )}
                      </GlowButton>
                      <button
                        onClick={() => deleteAutomation(automation.id)}
                        className="px-3 py-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Automations;
