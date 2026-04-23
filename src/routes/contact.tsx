import { createFileRoute } from "@tanstack/react-router";

import { ContactPanel, PortfolioShell } from "@/components/portfolio-site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Sajesh Shrestha" },
      {
        name: "description",
        content: "Contact Sajesh Shrestha for QA opportunities through email, phone, WhatsApp, Viber, or the contact form.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  return (
    <PortfolioShell
      title="Contact"
      intro="Reach out for QA roles, project discussions, or collaboration opportunities."
    >
      <ContactPanel />
    </PortfolioShell>
  );
}
