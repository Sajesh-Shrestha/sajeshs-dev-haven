import { createFileRoute } from "@tanstack/react-router";

import { RedirectToPortfolioSection } from "@/components/portfolio-site";

export const Route = createFileRoute("/journey")({
  component: JourneyRoute,
});

function JourneyRoute() {
  return <RedirectToPortfolioSection section="journey" />;
}
