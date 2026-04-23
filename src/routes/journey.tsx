import { createFileRoute } from "@tanstack/react-router";

import { JourneyPanel, PortfolioShell } from "@/components/portfolio-site";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "QA Journey | Sajesh Shrestha" },
      {
        name: "description",
        content: "Follow Sajesh Shrestha's QA journey from intern to QA Engineer through a modern timeline view.",
      },
    ],
    links: [{ rel: "canonical", href: "/journey" }],
  }),
  component: JourneyRoute,
});

function JourneyRoute() {
  return (
    <PortfolioShell
      title="QA Journey"
      intro="A visual timeline of growth from learning testing fundamentals to owning quality processes."
    >
      <JourneyPanel />
    </PortfolioShell>
  );
}
