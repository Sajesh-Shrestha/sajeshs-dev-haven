import { createFileRoute } from "@tanstack/react-router";

import { SinglePagePortfolio } from "@/components/portfolio-site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sajesh Shrestha | QA Engineer Portfolio" },
      {
        name: "description",
        content:
          "Single-page portfolio of Sajesh Shrestha, QA Engineer specializing in manual testing, API testing, SQL, and Playwright basics.",
      },
      { property: "og:title", content: "Sajesh Shrestha | QA Engineer Portfolio" },
      {
        property: "og:description",
        content: "Explore Sajesh Shrestha's QA journey, skills, awards, projects, and contact details in one modern page.",
      },
      { name: "twitter:title", content: "Sajesh Shrestha | QA Engineer Portfolio" },
      {
        name: "twitter:description",
        content: "A modern single-page QA Engineer portfolio with inline tabs, timeline, projects, and contact section.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <SinglePagePortfolio />;
}
