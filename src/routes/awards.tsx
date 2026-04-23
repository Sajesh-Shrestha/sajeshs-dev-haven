import { createFileRoute } from "@tanstack/react-router";

import { RedirectToPortfolioSection } from "@/components/portfolio-site";

export const Route = createFileRoute("/awards")({
  component: AwardsRoute,
});

function AwardsRoute() {
  return <RedirectToPortfolioSection section="awards" />;
}
