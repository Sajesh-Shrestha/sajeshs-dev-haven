import { createFileRoute } from "@tanstack/react-router";

import { AwardsPanel, PortfolioShell } from "@/components/portfolio-site";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards | Sajesh Shrestha" },
      {
        name: "description",
        content: "View the awards and recognition received by Sajesh Shrestha for dedication, ownership, and performance.",
      },
    ],
    links: [{ rel: "canonical", href: "/awards" }],
  }),
  component: AwardsRoute,
});

function AwardsRoute() {
  return (
    <PortfolioShell
      title="Awards"
      intro="Recognition that reflects ownership, consistency, and performance in quality engineering work."
    >
      <AwardsPanel />
    </PortfolioShell>
  );
}
