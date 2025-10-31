import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Settings, Bell, Moon, Sun, Shield, Palette, Volume2, Clock } from "lucide-react";
import { useState } from "react";

const settingCategories = [
  {
    title: "Notifications",
    icon: Bell,
    settings: [
      { name: "Focus Session Alerts", enabled: true },
      { name: "Break Reminders", enabled: true },
      { name: "Daily Summary", enabled: false },
      { name: "Email Notifications", enabled: true }
    ],
    gradient: "from-primary to-secondary"
  },
  {
    title: "Appearance",
    icon: Palette,
    settings: [
      { name: "Dark Mode", enabled: true },
      { name: "Auto Theme", enabled: false },
      { name: "Compact Layout", enabled: false },
      { name: "High Contrast", enabled: false }
    ],
    gradient: "from-secondary to-primary"
  },
  {
    title: "Privacy",
    icon: Shield,
    settings: [
      { name: "Data Collection", enabled: true },
      { name: "Analytics Tracking", enabled: true },
      { name: "Crash Reports", enabled: false },
      { name: "Usage Statistics", enabled: true }
    ],
    gradient: "from-primary via-secondary to-primary"
  },
  {
    title: "Audio",
    icon: Volume2,
    settings: [
      { name: "Focus Sounds", enabled: true },
      { name: "Break Chimes", enabled: true },
      { name: "Voice Alerts", enabled: false },
      { name: "Background Music", enabled: false }
    ],
    gradient: "from-secondary via-primary to-secondary"
  }
];

export const SettingsSection = () => {
  const [focusDuration, setFocusDuration] = useState([25]);
  const [breakDuration, setBreakDuration] = useState([5]);
  const [longBreakDuration, setLongBreakDuration] = useState([15]);

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
            Settings
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Customize your QuietSpace experience to match your workflow
          </p>
        </motion.div>

        {/* Timer Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground text-center">Timer Settings</h3>
          <GlassCard delay={0.1} className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Focus Duration</span>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{focusDuration[0]} min</div>
                <Slider
                  value={focusDuration}
                  onValueChange={setFocusDuration}
                  max={60}
                  min={5}
                  step={5}
                  className="w-full"
                />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sun className="h-5 w-5 text-secondary" />
                  <span className="font-semibold text-foreground">Break Duration</span>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{breakDuration[0]} min</div>
                <Slider
                  value={breakDuration}
                  onValueChange={setBreakDuration}
                  max={30}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Moon className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-foreground">Long Break</span>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{longBreakDuration[0]} min</div>
                <Slider
                  value={longBreakDuration}
                  onValueChange={setLongBreakDuration}
                  max={60}
                  min={5}
                  step={5}
                  className="w-full"
                />
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Settings Categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {settingCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <GlassCard key={category.title} delay={index * 0.1} className="group">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} glow-purple shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.settings.map((setting, settingIndex) => (
                      <div key={settingIndex} className="flex items-center justify-between">
                        <span className="text-foreground">{setting.name}</span>
                        <Switch 
                          defaultChecked={setting.enabled}
                          className="data-[state=checked]:bg-primary"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Save Settings Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button size="lg" className="neuro-button text-lg px-8 py-6 shadow-xl text-white hover:scale-105 transition-transform">
            <Settings className="h-6 w-6 mr-2" />
            Save Settings
          </Button>
        </motion.div>
      </div>
    </section>
  );
};








