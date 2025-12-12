export type TimelineItem = {
  date: string;
  type: string;
  actor: string;
  text: string;
};

export type Customer = {
  id: string;
  name: string;
  industry: string;
  size: string;
  score: number;
  nextAction: string;
  lastTouch: string;
  status: string;
  summary: string;
  timeline: TimelineItem[];
};
