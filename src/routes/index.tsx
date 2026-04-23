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
              I am Sajesh Shrestha, a QA Engineer based in Narayantar, Kathmandu, with 3.5 years of experience at
              Amnil Technology. I specialize in manual testing, API testing, and SQL, with basic knowledge of
              automation using Playwright.
            </p>
            <div className="hero-actions">
              <a className="cta-primary" href="mailto:sajesh.shrestha04@gmail.com">
                Let&apos;s Connect
              </a>
              <a className="cta-secondary" href="#contact">
                Contact
              </a>
            </div>
            <div className="hero-tags" aria-label="Core testing strengths">
              <span className="tag-pill">Manual Testing</span>
              <span className="tag-pill">API Testing</span>
              <span className="tag-pill">SQL Validation</span>
              <span className="tag-pill">Playwright Basics</span>
              <span className="tag-pill">2 Award Wins</span>
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
            <p className="metric-label">Experience</p>
            <p className="metric-value">3.5 Years</p>
            <p className="metric-detail">QA practice across web and mobile products.</p>
          </article>
          <article className="metric-card">
            <p className="metric-label">Current Role</p>
            <p className="metric-value">QA Engineer</p>
            <p className="metric-detail">Currently at Amnil Technology.</p>
          </article>
          <article className="metric-card">
            <p className="metric-label">Focus</p>
            <p className="metric-value">API + SQL</p>
            <p className="metric-detail">Validation, investigation, and release confidence.</p>
          </article>
        </section>

        <section className="details-grid" id="experience">
          <div className="content-panel">
            <div className="section-header">
              <p className="section-kicker">Professional Summary</p>
              <h2 className="section-title">Focused on stable releases and clear validation</h2>
              <p className="section-copy">
                I support teams with functional, regression, smoke, API, and database testing across banking, eKYC,
                customer registration systems, and media platforms, helping teams ship with confidence.
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
                  Manual testing, API testing with Postman, SQL validation, and basic automation with Playwright.
                </p>
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
                <p className="detail-label">Mobile</p>
                <a className="contact-link" href="tel:+9779860437025">
                  9860437025
                </a>
              </div>
              <div className="detail-item">
                <p className="detail-label">Location</p>
                <p className="detail-value">Narayantar, Kathmandu, Nepal</p>
              </div>
              <div className="detail-item">
                <p className="detail-label">LinkedIn</p>
                <a
                  className="contact-link"
                  href="https://www.linkedin.com/in/sajesh-shrestha13/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/sajesh-shrestha13
                </a>
              </div>
            </div>
            <div className="contact-list" aria-label="Contact actions">
              <a className="contact-chip" href="mailto:sajesh.shrestha04@gmail.com">
                Send Email
              </a>
              <a className="contact-chip" href="https://wa.me/9779860437025" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="contact-chip" href="viber://chat?number=%2B9779860437025">
                Viber
              </a>
              <a
                className="contact-chip"
                href="https://www.linkedin.com/in/sajesh-shrestha13/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
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
              <p className="section-note">Hands-on request, response, and workflow validation with Postman.</p>
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
            <p className="section-kicker">Recognition</p>
            <h2 className="section-title">Awards & personal profile</h2>
            <p className="section-copy">
              Recognition for ownership at work, backed by a practical testing mindset and an active life outside the
              office.
            </p>
          </div>
          <div className="timeline-stack">
            <article className="timeline-card">
              <h3 className="timeline-title">Extreme Ownership</h3>
              <p className="timeline-subtitle">Award received in 2024</p>
            </article>

            <article className="timeline-card">
              <h3 className="timeline-title">Above and Beyond</h3>
              <p className="timeline-subtitle">Award received in 2025</p>
            </article>

            <article className="timeline-card">
              <h3 className="timeline-title">Beyond Work</h3>
              <p className="timeline-subtitle">Sports, trekking, and exploring new places</p>
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
              <h3 className="timeline-title">BSc. CSIT</h3>
              <p className="timeline-subtitle">Trinity International College, Dillibazar</p>
              <div className="timeline-meta">
                <span className="meta-pill">2017 – 2022</span>
              </div>
            </article>

            <article className="timeline-card">
              <h3 className="timeline-title">+2 Higher Secondary</h3>
              <p className="timeline-subtitle">Golden Gate International College</p>
              <div className="timeline-meta">
                <span className="meta-pill">2015 – 2017</span>
              </div>
            </article>
          </div>
        </section>

        <p className="footer-note">QA Engineer portfolio</p>
      </main>
    </div>
  );
}
