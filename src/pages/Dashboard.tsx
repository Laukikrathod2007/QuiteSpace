import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Clock, Plus } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { SessionModal } from "@/components/dashboard/SessionModal";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [sessionModalOpen, setSessionModalOpen] = useState(false);
  const [sessions, setSessions] = useState<any[]>([]);
  const { toast } = useToast();

  const handleSaveSession = (title: string, notes: string, duration: number) => {
    const newSession = {
      id: Date.now(),
      title,
      notes,
      duration,
      createdAt: new Date().toISOString(),
    };
    setSessions([newSession, ...sessions]);
    toast({
      title: "Session saved!",
      description: `Focused for ${Math.floor(duration / 60)} minutes`,
    });
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    return `${mins}min`;
  };

  const totalHours = sessions.reduce((acc, s) => acc + s.duration, 0) / 3600;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Welcome to QuietSpace
              </h1>
              <p className="text-muted-foreground opacity-70">
                Your productivity overview at a glance
              </p>
            </div>
            <GlowButton onClick={() => setSessionModalOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Start Session
            </GlowButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card hover:glow-blue transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Focus Hours
                </CardTitle>
                <Clock className="h-5 w-5 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{totalHours.toFixed(1)}h</div>
                <p className="text-xs text-muted-foreground mt-1 opacity-70">
                  All time
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:glow-purple transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  AI Productivity Score
                </CardTitle>
                <Activity className="h-5 w-5 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">87</div>
                <p className="text-xs text-muted-foreground mt-1 opacity-70">
                  +12% this week
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:glow-blue transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Weekly Progress
                </CardTitle>
                <Activity className="h-5 w-5 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{sessions.length}</div>
                <p className="text-xs text-muted-foreground mt-1 opacity-70">
                  Sessions completed
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Focus Sessions</CardTitle>
              <CardDescription>
                Your recent focus sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              {sessions.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground opacity-70">
                    No sessions yet. Start your first focus session!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {sessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center gap-4 p-4 rounded-lg glass-card hover:glow-blue transition-all duration-200"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <div className="flex-1">
                        <p className="font-medium">{session.title}</p>
                        <p className="text-sm text-muted-foreground opacity-70">
                          {formatDuration(session.duration)} • {new Date(session.createdAt).toLocaleDateString()}
                        </p>
                        {session.notes && (
                          <p className="text-sm text-muted-foreground mt-1 opacity-60">
                            {session.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <SessionModal
        open={sessionModalOpen}
        onClose={() => setSessionModalOpen(false)}
        onSave={handleSaveSession}
      />
    </div>
  );
};

export default Dashboard;
