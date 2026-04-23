import { createFileRoute } from "@tanstack/react-router";

import { PortfolioShell, ProjectsPanel } from "@/components/portfolio-site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Sajesh Shrestha" },
      {
        name: "description",
        content: "Selected QA project highlights from Sajesh Shrestha across banking, eKYC, and media product testing.",
      },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsRoute,
});

function ProjectsRoute() {
  return (
    <PortfolioShell
      title="Projects"
      intro="A selection of QA-focused work across sensitive and high-impact product experiences."
    >
      <ProjectsPanel />
    </PortfolioShell>
  );
}
