import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { GlowButton } from "@/components/ui/GlowButton";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [aiInsights, setAiInsights] = useState(true);
  const [autoFocus, setAutoFocus] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="ml-64 p-8 animate-fade-in">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Settings
            </h1>
            <p className="text-muted-foreground">
              Manage your account and preferences
            </p>
          </div>

          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="glass-card border-border/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="glass-card border-border/50"
                />
              </div>
              <GlowButton onClick={handleSave}>Save Changes</GlowButton>
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Customize your QuietSpace experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="notifications">Notifications</Label>
                  <p className="text-sm text-muted-foreground opacity-70">
                    Receive alerts for automation triggers
                  </p>
                </div>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="ai-insights">AI Insights</Label>
                  <p className="text-sm text-muted-foreground opacity-70">
                    Get personalized productivity recommendations
                  </p>
                </div>
                <Switch
                  id="ai-insights"
                  checked={aiInsights}
                  onCheckedChange={setAiInsights}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="focus-mode">Auto Focus Mode</Label>
                  <p className="text-sm text-muted-foreground opacity-70">
                    Automatically enable focus mode during work hours
                  </p>
                </div>
                <Switch
                  id="focus-mode"
                  checked={autoFocus}
                  onCheckedChange={setAutoFocus}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card animate-fade-in border-border/50" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle>About</CardTitle>
              <CardDescription>
                QuietSpace - Focus Meets Intelligent Automation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground opacity-70">
                Version 1.0.0 - Built with React, TypeScript, and Tailwind CSS
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;
