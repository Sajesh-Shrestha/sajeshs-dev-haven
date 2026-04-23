import { createFileRoute } from "@tanstack/react-router";

import { RedirectToPortfolioSection } from "@/components/portfolio-site";

export const Route = createFileRoute("/projects")({
  component: ProjectsRoute,
});

function ProjectsRoute() {
  return <RedirectToPortfolioSection section="projects" />;
}
