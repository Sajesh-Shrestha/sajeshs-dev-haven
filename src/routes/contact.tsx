import { createFileRoute } from "@tanstack/react-router";

import { RedirectToPortfolioSection } from "@/components/portfolio-site";

export const Route = createFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  return <RedirectToPortfolioSection section="contact" />;
}
