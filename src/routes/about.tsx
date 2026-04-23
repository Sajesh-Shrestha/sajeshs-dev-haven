import { createFileRoute } from "@tanstack/react-router";

import { RedirectToPortfolioSection } from "@/components/portfolio-site";

export const Route = createFileRoute("/about")({
  component: AboutRoute,
});

function AboutRoute() {
  return <RedirectToPortfolioSection section="about" />;
}
