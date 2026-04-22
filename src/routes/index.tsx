import { createFileRoute } from "@tanstack/react-router";
import heroImage from "../assets/qa-portfolio-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sajesh Shrestha | QA Engineer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Sajesh Shrestha, QA Engineer with 3.5 years of experience in manual, API, SQL, and Playwright testing.",
      },
      { property: "og:title", content: "Sajesh Shrestha | QA Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "QA Engineer portfolio featuring experience in banking, eKYC, customer systems, and media platforms.",
      },
      { name: "twitter:title", content: "Sajesh Shrestha | QA Engineer Portfolio" },
      {
        name: "twitter:description",
        content: "QA Engineer portfolio with experience in manual, API, SQL, and Playwright testing.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="portfolio-page">
      <header className="portfolio-topbar">
        <div className="portfolio-container portfolio-topbar-inner">
          <div className="portfolio-brand" aria-label="Portfolio brand">
            <span className="portfolio-brand-mark">QA</span>
            <span>Sajesh Shrestha</span>
          </div>
          <nav className="portfolio-nav" aria-label="Primary navigation">
            <a href="#summary" className="portfolio-nav-link">
              Summary
            </a>
            <a href="#skills" className="portfolio-nav-link">
              Skills
            </a>
            <a href="#experience" className="portfolio-nav-link">
              Experience
            </a>
            <a href="#education" className="portfolio-nav-link">
              Education
            </a>
            <a href="#contact" className="portfolio-nav-link">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="portfolio-container portfolio-stack">
        <section className="hero-panel" id="summary" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Quality Engineering Portfolio
            </span>
            <h1 id="hero-title" className="hero-title">
              Sajesh <span className="hero-highlight">Shrestha</span>
            </h1>
            <p className="hero-text">
              QA Engineer with 3.5 years at Amnil Technology, delivering robust web and mobile products through structured
              manual testing, API validation, SQL checks, and Playwright-based automation.
            </p>
            <div className="hero-actions">
              <a className="cta-primary" href="mailto:sajesh.shrestha04@gmail.com">
                Let&apos;s Connect
              </a>
              <a className="cta-secondary" href="#experience">
                View Experience
              </a>
            </div>
            <div className="hero-tags" aria-label="Core testing strengths">
              <span className="tag-pill">Manual Testing</span>
              <span className="tag-pill">API Testing</span>
              <span className="tag-pill">SQL Validation</span>
              <span className="tag-pill">Playwright Basics</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-image-frame">
              <img
                className="hero-image"
                src={heroImage}
                alt="QA workstation visualizing web and mobile testing with API and SQL workflows"
                width={1920}
                height={1080}
              />
            </div>
            <div className="floating-note floating-note-top">
              <span className="floating-label">Experience</span>
              <span className="floating-value">3.5 Years</span>
            </div>
            <div className="floating-note floating-note-bottom">
              <span className="floating-label">Current Role</span>
              <span className="floating-value">QA Engineer</span>
            </div>
          </div>
        </section>

        <section className="stats-grid" aria-label="QA metrics snapshot">
          <article className="metric-card">
            <p className="metric-label">Current Company</p>
            <p className="metric-value">Amnil</p>
            <p className="metric-detail">Hands-on QA across regulated and customer-facing products.</p>
          </article>
          <article className="metric-card">
            <p className="metric-label">Testing Scope</p>
            <p className="metric-value">Web + Mobile</p>
            <p className="metric-detail">Cross-platform validation with practical release support.</p>
          </article>
          <article className="metric-card">
            <p className="metric-label">Domain Exposure</p>
            <p className="metric-value">4+</p>
            <p className="metric-detail">Banking, eKYC, registration systems, and media platforms.</p>
          </article>
          <article className="metric-card">
            <p className="metric-label">Automation Level</p>
            <p className="metric-value">Foundation</p>
            <p className="metric-detail">Playwright for basic automated regression checks.</p>
          </article>
        </section>

        <section className="details-grid" id="experience">
          <div className="content-panel">
            <div className="section-header">
              <p className="section-kicker">Professional Summary</p>
              <h2 className="section-title">Reliable quality through structured testing discipline</h2>
              <p className="section-copy">
                I focus on finding risk early, validating complex business flows, and giving teams confidence before release.
                My work combines manual exploratory depth with practical API and data verification.
              </p>
            </div>

            <div className="timeline-stack">
              <article className="timeline-card">
                <h3 className="timeline-title">QA Engineer</h3>
                <p className="timeline-subtitle">Amnil Technology</p>
                <div className="timeline-meta">
                  <span className="meta-pill">3.5 years experience</span>
                  <span className="meta-pill">Web & Mobile Applications</span>
                </div>
                <p className="section-note">
                  Worked on high-impact systems including banking workflows, eKYC verification pipelines, customer
                  registration modules, and media-driven products.
                </p>
              </article>

              <article className="domain-card">
                <h3 className="domain-title">Domain Highlights</h3>
                <div className="domain-list">
                  <span className="tag-pill">Banking Systems</span>
                  <span className="tag-pill">eKYC Workflows</span>
                  <span className="tag-pill">Customer Registration</span>
                  <span className="tag-pill">Media Platforms</span>
                </div>
              </article>
            </div>
          </div>

          <aside className="contact-panel" id="contact">
            <div className="section-header">
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Open to QA opportunities</h2>
            </div>
            <div className="detail-list">
              <div className="detail-item">
                <p className="detail-label">Email</p>
                <a className="contact-link" href="mailto:sajesh.shrestha04@gmail.com">
                  sajesh.shrestha04@gmail.com
                </a>
              </div>
              <div className="detail-item">
                <p className="detail-label">Location</p>
                <p className="detail-value">Narayantar, Kathmandu, Nepal</p>
              </div>
            </div>
            <div className="contact-list" aria-label="Contact actions">
              <a className="contact-chip" href="mailto:sajesh.shrestha04@gmail.com">
                Send Email
              </a>
              <a className="contact-chip" href="#education">
                View Education
              </a>
            </div>
          </aside>
        </section>

        <section className="content-panel" id="skills" aria-labelledby="skills-heading">
          <div className="section-header">
            <p className="section-kicker">Core Capabilities</p>
            <h2 className="section-title" id="skills-heading">
              QA skills stack
            </h2>
          </div>
          <div className="skills-grid">
            <article className="skill-card">
              <div className="skill-card-header">
                <h3 className="skill-title">Manual Testing</h3>
                <span className="skill-level">Advanced</span>
              </div>
              <div className="skill-list">
                <span className="meta-pill">Functional Testing</span>
                <span className="meta-pill">Regression Testing</span>
                <span className="meta-pill">Smoke Testing</span>
              </div>
            </article>

            <article className="skill-card">
              <div className="skill-card-header">
                <h3 className="skill-title">API Testing</h3>
                <span className="skill-level">Strong</span>
              </div>
              <p className="section-note">Hands-on request and response validation with Postman.</p>
            </article>

            <article className="skill-card">
              <div className="skill-card-header">
                <h3 className="skill-title">Database Testing</h3>
                <span className="skill-level">Strong</span>
              </div>
              <p className="section-note">SQL-based backend validation for data consistency and integrity checks.</p>
            </article>

            <article className="skill-card">
              <div className="skill-card-header">
                <h3 className="skill-title">Automation & Load</h3>
                <span className="skill-level">Foundation</span>
              </div>
              <div className="skill-list">
                <span className="meta-pill">Playwright (Basic)</span>
                <span className="meta-pill">JMeter (Basic)</span>
              </div>
            </article>
          </div>
        </section>

        <section className="content-panel" id="education" aria-labelledby="education-heading">
          <div className="section-header">
            <p className="section-kicker">Education</p>
            <h2 className="section-title" id="education-heading">
              Academic background
            </h2>
          </div>
          <div className="timeline-stack">
            <article className="timeline-card">
              <h3 className="timeline-title">Bachelor in Computer Science and Information Technology (BSc. CSIT)</h3>
              <p className="timeline-subtitle">Trinity International College, Dillibazar</p>
              <div className="timeline-meta">
                <span className="meta-pill">2017 – 2022</span>
              </div>
            </article>

            <article className="timeline-card">
              <h3 className="timeline-title">+2 (Higher Secondary)</h3>
              <p className="timeline-subtitle">Golden Gate International College</p>
              <div className="timeline-meta">
                <span className="meta-pill">2015 – 2017</span>
              </div>
            </article>
          </div>
        </section>

        <p className="footer-note">Built for quality-first engineering impact.</p>
      </main>
    </div>
  );
}
