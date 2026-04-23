import { createFileRoute } from "@tanstack/react-router";

import { HomePanel, PortfolioShell } from "@/components/portfolio-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sajesh Shrestha | QA Engineer Portfolio" },
      {
        name: "description",
        content:
          "Modern portfolio of Sajesh Shrestha, QA Engineer specializing in manual testing, API testing, SQL, and Playwright basics.",
      },
      { property: "og:title", content: "Sajesh Shrestha | QA Engineer Portfolio" },
      {
        property: "og:description",
        content: "Explore Sajesh Shrestha's QA journey, skills, awards, projects, and contact details.",
      },
      { name: "twitter:title", content: "Sajesh Shrestha | QA Engineer Portfolio" },
      {
        name: "twitter:description",
        content: "QA Engineer portfolio with a modern split layout, timeline journey, projects, and contact page.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <PortfolioShell
      title="Sajesh Shrestha"
      intro="QA Engineer crafting reliable software experiences through structured testing, thoughtful validation, and steady growth in modern QA practices."
    >
      <HomePanel />
    </PortfolioShell>
  );
}
