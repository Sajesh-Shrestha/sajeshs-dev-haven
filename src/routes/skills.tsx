import { createFileRoute } from "@tanstack/react-router";

import { RedirectToPortfolioSection } from "@/components/portfolio-site";

export const Route = createFileRoute("/skills")({
  component: SkillsRoute,
});

function SkillsRoute() {
  return <RedirectToPortfolioSection section="skills" />;
}
