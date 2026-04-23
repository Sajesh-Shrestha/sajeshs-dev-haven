import { createFileRoute } from "@tanstack/react-router";

import { AboutPanel, PortfolioShell } from "@/components/portfolio-site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sajesh Shrestha | QA Engineer" },
      {
        name: "description",
        content: "Learn about Sajesh Shrestha, QA Engineer from Kathmandu with 3.5+ years of experience and a BSc. CSIT background.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutRoute,
});

function AboutRoute() {
  return (
    <PortfolioShell
      title="About"
      intro="A concise look at my background, education, and the mindset I bring to quality engineering."
    >
      <AboutPanel />
    </PortfolioShell>
  );
}
