export interface Hook {
  text: string;
  linkedTriggers: number[]; // Array of trigger numbers (1-indexed)
}

export interface Trigger {
  id: number; // 1-indexed
  text: string;
}

export interface CamsCategory {
  name: string;
  color: string; // Tailwind class for background color
  triggers: Trigger[];
  hooks: Hook[];
}

export const camsData: CamsCategory[] = [
  {
    name: "Culture",
    color: "bg-blue-600",
    triggers: [
      { id: 1, text: "Team members change, but the goals and timeline remain the same" },
      { id: 2, text: "Team is tired from the constant change" },
      { id: 3, text: "Team is stressed due to tight deadlines" },
      { id: 4, text: "Team unsure how to integrate new team member" },
      { id: 5, text: "The loudest voice in the room always wins" },
      { id: 6, text: "Delivery Dates are decided without input from the team" },
      { id: 7, text: "Team is continually interrupted by emergent work" },
      { id: 8, text: "Team members regularly check-in on their days off" },
      { id: 9, text: "Not every voice is heard" },
      { id: 10, text: "Velocity is \"standardized\" across all teams for \"consistency\"" },
      { id: 11, text: "Metrics are weaponized" },
      { id: 12, text: "Team members have competing goals" },
    ],
    hooks: [
      { text: "How does this impact our team?", linkedTriggers: [1, 2, 3, 12] },
      { text: "How might we support new team members?", linkedTriggers: [4, 8] },
      { text: "If we could signal a health check to leadership, what would it look like?", linkedTriggers: [2, 3, 7] },
      { text: "What is our plan for onboarding?", linkedTriggers: [4] },
      { text: "How might we ensure all voices are heard?", linkedTriggers: [5, 9, 12] },
      { text: "What insights does this metric bring us?", linkedTriggers: [10, 11] },
      { text: "Could we be involved earlier?", linkedTriggers: [6, 7] },
      { text: "If we are saying 'yes' to this, what are we saying 'no' to?", linkedTriggers: [6, 12] },
      { text: "What is the impact of standardizing Velocity?", linkedTriggers: [10] },
      { text: "How can we ensure time off is really time off?", linkedTriggers: [8] },
      { text: "How might we engage in a conversation about the deadline?", linkedTriggers: [3, 6] },
      { text: "How can we visualize and radiate the impact of this?", linkedTriggers: [1, 11, 12] },
    ],
  },
  {
    name: "Automation",
    color: "bg-orange-600",
    triggers: [
      { id: 1, text: "Team tracks requests outside of their work management tool" },
      { id: 2, text: "Team reacts to environmental issues as they are informed of them" },
      { id: 3, text: "Scrum Master spends hours compiling Sprint Data into a digestible format" },
      { id: 4, text: "Deployment follows a checklist for deployments" },
      { id: 5, text: "Work requests are submitted informally via chat or hallway conversations" },
      { id: 6, text: "Sprint Goal is documented outside of work management tool" },
      { id: 7, text: "Work Prioritization tracked outside of the team’s tool" },
      { id: 8, text: "Issues tracked outside of the team’s tool" },
      { id: 9, text: "Team reacts to environmental issues as they arise" },
      { id: 10, text: "Project Manager spends hours updating complicated Gantt charts" },
      { id: 11, text: "Stakeholders email requests for status of work items" },
      { id: 12, text: "Test results are manually copied into a slide deck for review" },
    ],
    hooks: [
      { text: "Can this be automated?", linkedTriggers: [3, 4, 10, 12] },
      { text: "How often are we doing this?", linkedTriggers: [1, 8, 11, 12] },
      { text: "Is there a way to label/tag requests?", linkedTriggers: [1, 5, 7, 8] },
      { text: "Can we learn about environmental issues before we are informed?", linkedTriggers: [2, 9] },
      { text: "Do our environments have the capability to self-heal?", linkedTriggers: [2, 9] },
      { text: "Is self-service an option for stakeholders?", linkedTriggers: [11, 12] },
      { text: "Can we utilize AI for reporting?", linkedTriggers: [3] },
      { text: "How might we streamline our intake process?", linkedTriggers: [5, 7] },
      { text: "Is it difficult to keep information in sync?", linkedTriggers: [1, 6, 7, 8] },
      { text: "Is there a pattern to the environmental issues?", linkedTriggers: [2, 9] },
      { text: "Is there another way to accomplish this with less manual effort?", linkedTriggers: [3, 4, 10, 12] },
      { text: "Is there a tool we already have access to that could help?", linkedTriggers: [1, 6, 7, 8, 12] },
    ],
  },
  {
    name: "Measurement",
    color: "bg-green-600",
    triggers: [
      { id: 1, text: "Team is asked to improve the performance of an application/service" },
      { id: 2, text: "Scrum Master is regularly asked for progress towards a delivery date" },
      { id: 3, text: "Team overcommits to Sprint Backlog items" },
      { id: 4, text: "Project Manager spends hours updating complicated Gantt charts" },
      { id: 5, text: "Quality is measured by defects per hour" },
      { id: 6, text: "Cycle Time goals are immutable" },
      { id: 7, text: "Scrum Master spends hours researching defects" },
      { id: 8, text: "Team builds new features without usage data" },
      { id: 9, text: "Team is stuck in the Feature Factory" },
      { id: 10, text: "Team members change, but the goals and timeline remain the same" },
      { id: 11, text: "The team is focusing on Sprint Cycle Time only" },
      { id: 12, text: "Sprint Burndown looks like a waterfall" },
    ],
    hooks: [
      { text: "How might we measure this?", linkedTriggers: [1, 3, 5, 6, 8, 9, 10, 11, 12] },
      { text: "Is self-service an option for stakeholders?", linkedTriggers: [2, 7, 8] },
      { text: "What does our past performance say?", linkedTriggers: [3, 5, 9] },
      { text: "Can this be automated?", linkedTriggers: [4, 7] },
      { text: "How are we defining quality?", linkedTriggers: [5] },
      { text: "Is this goal achievable?", linkedTriggers: [6, 10, 12] },
      { text: "How might we capture this data organically?", linkedTriggers: [1, 8, 9] },
      { text: "How might we measure adoption?", linkedTriggers: [8, 9] },
      { text: "How were our previous features received by customers?", linkedTriggers: [8, 9] },
      { text: "How can we measure the impact of the change?", linkedTriggers: [3, 8, 9] },
      { text: "How might we understand how long it takes a feature to go from idea to customer delight?", linkedTriggers: [11, 12] },
      { text: "Are we comfortable with this way of working?", linkedTriggers: [6, 9, 10, 12] },
    ],
  },
  {
    name: "Sharing",
    color: "bg-purple-600",
    triggers: [
      { id: 1, text: "New \"approval process\" created to gain alignment with stakeholders prior to planning" },
      { id: 2, text: "Continuous improvement items are regularly completed" },
      { id: 3, text: "Successful Sprint Goal achievements aren’t celebrated" },
      { id: 4, text: "Knowledge Transfer sessions are tedious" },
      { id: 5, text: "Team adopts a single point of entry for ideas" },
      { id: 6, text: "Team adopts a decision log to align on delivery goals" },
      { id: 7, text: "Team improves performance of a key feature or system" },
      { id: 8, text: "Team experiments with a new technology" },
      { id: 9, text: "Scrum Master learns something new like Triggers & Hooks" },
      { id: 10, text: "Decisions in meetings are not documented or visible afterwards" },
      { id: 11, text: "Team discovers a useful workaround for tedious process" },
      { id: 12, text: "Lessons learned from incidents are not shared outside of the team" },
    ],
    hooks: [
      { text: "Who else might benefit from this approach?", linkedTriggers: [1, 7, 8, 9, 11] },
      { text: "Where can we share out wins that others might adopt or learn from us?", linkedTriggers: [2, 3, 7, 8] },
      { text: "Is it possible to share this at your local Community of Practice?", linkedTriggers: [2, 3, 9] },
      { text: "What lightweight way could we summarize our knowledge?", linkedTriggers: [4, 9, 10] },
      { text: "What feedback have we gotten about the usefulness of the form?", linkedTriggers: [4, 10, 11] },
      { text: "Could this log help other teams facing similar uncertainty?", linkedTriggers: [6, 10, 12] },
      { text: "When are we going to share this win?", linkedTriggers: [2, 3, 7, 8] },
      { text: "Where do we see this becoming useful?", linkedTriggers: [5, 11] },
      { text: "Are we celebrating wins enough?", linkedTriggers: [2, 3] },
      { text: "How are we following through on decisions made in meetings?", linkedTriggers: [6, 10] },
      { text: "When are we going to share this with the rest of the organization?", linkedTriggers: [2, 7, 9, 12] },
      { text: "Is there a potential to share root cause analysis more broadly?", linkedTriggers: [11, 12] },
    ],
  },
];