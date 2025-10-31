import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GlowButton } from "@/components/ui/GlowButton";

interface SessionModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (title: string, notes: string, duration: number) => void;
}

export const SessionModal = ({ open, onClose, onSave }: SessionModalProps) => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    setIsRunning(true);
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    setIsRunning(false);
    onSave(title, notes, seconds);
    setTitle("");
    setNotes("");
    setSeconds(0);
    onClose();
  };

  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const remainingSecs = secs % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="glass-card">
        <DialogHeader>
          <DialogTitle>Focus Session</DialogTitle>
          <DialogDescription>
            Track your focus time and save notes
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Session Title</Label>
            <Input
              id="title"
              placeholder="What are you working on?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isRunning}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Add any notes..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />
          </div>
          <div className="text-center py-8">
            <div className="text-5xl font-bold mb-6 font-mono bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {formatTime(seconds)}
            </div>
            {!isRunning ? (
              <GlowButton onClick={startTimer} disabled={!title}>
                Start Session
              </GlowButton>
            ) : (
              <GlowButton onClick={stopTimer} variant="secondary">
                Stop & Save
              </GlowButton>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
