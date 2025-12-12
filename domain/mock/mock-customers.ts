import type { Customer } from "@/domain/models/customer";

export const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "Acme Corp",
    industry: "Retail",
    size: "250",
    score: 86,
    nextAction: "Follow up about Q4 promotions",
    lastTouch: "2025-12-01",
    status: "At Risk",
    summary: "Acme is evaluating a new promotions and analytics platform.",
    timeline: [
      {
        date: "2025-11-30",
        type: "Email",
        actor: "Rep",
        text: "Sent pricing details.",
      },
      {
        date: "2025-10-12",
        type: "Call",
        actor: "Rep",
        text: "Introductory conversation about use cases.",
      },
    ],
  },
  {
    id: "2",
    name: "Beta Ltd",
    industry: "SaaS",
    size: "80",
    score: 72,
    nextAction: "Send case study",
    lastTouch: "2025-11-25",
    status: "Opportunity",
    summary: "Beta wants to trial the product next quarter.",
    timeline: [
      {
        date: "2025-11-20",
        type: "Meeting",
        actor: "Rep",
        text: "Gave full product demo to their CTO.",
      },
    ],
  },
  {
    id: "3",
    name: "Gamma LLC",
    industry: "Finance",
    size: "1200",
    score: 90,
    nextAction: "Schedule executive briefing",
    lastTouch: "2025-12-02",
    status: "High Priority",
    summary: "Gamma is consolidating their tech stack and exploring automation tools.",
    timeline: [
      {
        date: "2025-12-03",
        type: "Email",
        actor: "Rep",
        text: "Follow-up with pricing clarifications.",
      },
    ],
  },
];
