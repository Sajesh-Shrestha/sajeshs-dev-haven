import { createFileRoute } from "@tanstack/react-router";

import { PortfolioShell, SkillsPanel } from "@/components/portfolio-site";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "QA Skills | Sajesh Shrestha" },
      {
        name: "description",
        content: "Explore Sajesh Shrestha's QA skills across manual testing, API validation, SQL, automation, and mobile testing.",
      },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsRoute,
});

function SkillsRoute() {
  return (
    <PortfolioShell
      title="Skills"
      intro="Core QA capabilities presented through focused cards, tool highlights, and progress indicators."
    >
      <SkillsPanel />
    </PortfolioShell>
  );
}
