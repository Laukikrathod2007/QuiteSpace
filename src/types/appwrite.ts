export type FocusSession = {
  $id?: string;
  userId: string;
  title: string;
  notes?: string;
  durationSec: number;
  startedAt: string; // ISO
  endedAt: string;   // ISO
};

export type AutomationRule = {
  $id?: string;
  userId: string;
  name: string;
  description?: string;
  status: 'active' | 'paused';
  trigger: string;
  action: string;
};
