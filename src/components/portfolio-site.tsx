import * as React from "react";
import { Navigate } from "@tanstack/react-router";
import {
  Award,
  Bug,
  Code2,
  DatabaseZap,
  Download,
  FileJson,
  FlaskConical,
  Linkedin,
  Mail,
  MapPin,
  MessageCircleMore,
  MoonStar,
  Phone,
  SunMedium,
  TestTube2,
  TimerReset,
  Trophy,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type SectionKey = "about" | "skills" | "journey" | "awards" | "contact";

const navItems: ReadonlyArray<{ id: SectionKey; label: string }> = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

const skills = [
  { title: "Manual Testing", detail: "Functional, regression, smoke", icon: TestTube2 },
  { title: "API Testing", detail: "Postman, request/response validation", icon: FlaskConical },
  { title: "Basic Load Testing", detail: "JMeter fundamentals", icon: TimerReset },
  { title: "Basic Automation", detail: "Playwright UI flows", icon: Bug },
  { title: "SQL Testing", detail: "Database & data integrity checks", icon: DatabaseZap },
  { title: "RJSF (Basic)", detail: "React JSON Schema Forms", icon: Code2 },
  { title: "JSON Workflow Design", detail: "Structured workflow validation", icon: FileJson },
] as const;

const journeySteps = [
  {
    period: "April 2022 – June 2022",
    role: "QA Intern",
    summary: "Learned software testing fundamentals and supported real-world testing activities.",
  },
  {
    period: "October 2022 – January 2026",
    role: "Associate QA Engineer",
    summary:
      "Hands-on experience in functional, regression, and API testing. Worked closely with development teams and improved product quality across projects.",
  },
  {
    period: "January 2026 – Present",
    role: "QA Engineer",
    summary:
      "Owning quality processes, contributing to better testing strategies, and growing in automation and performance testing.",
  },
] as const;

const awards = [
  {
    title: "Extreme Ownership Award",
    year: "2024",
    description: "Recognized for taking full responsibility and driving quality work with consistency.",
    icon: Trophy,
  },
  {
    title: "Above and Beyond Award",
    year: "2025",
    description: "Awarded for dedication, reliability, and making a strong impact beyond expectations.",
    icon: Award,
  },
] as const;

export function SinglePagePortfolio() {
  const [theme, setTheme] = React.useState<"dark" | "light">("light");

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("portfolio-theme");
    const next = stored === "dark" || stored === "light" ? stored : "light";
    setTheme(next);
  }, []);

  React.useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const scrollTo = (id: SectionKey) => {
    if (typeof document === "undefined") return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="qa-page">
      <header className="qa-topbar">
        <div className="qa-topbar-inner">
          <div className="qa-brand">
            <span className="qa-brand-mark">SS</span>
            <div>
              <p className="qa-brand-name">Sajesh Shrestha</p>
              <p className="qa-brand-role">QA Engineer</p>
            </div>
          </div>
          <nav className="qa-topnav" aria-label="Primary">
            {navItems.map((item) => (
              <button key={item.id} type="button" className="qa-topnav-link" onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            className="qa-theme-toggle"
            aria-label="Toggle color mode"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <SunMedium aria-hidden="true" /> : <MoonStar aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main className="qa-main-flow">
        {/* Introduction */}
        <section id="about" className="qa-section qa-intro">
          <span className="qa-eyebrow">QA Engineer</span>
          <h1 className="qa-intro-title">Hi, I'm Sajesh Shrestha.</h1>
          <p className="qa-intro-text">
            QA Engineer with 3.5+ years of experience, strong in manual testing and API testing,
            with basic knowledge of automation using Playwright and load testing with JMeter.
            Passionate about building reliable software through clear, structured quality processes.
          </p>
          <div className="qa-intro-actions">
            <Button asChild>
              <a href="/Sajesh-Shrestha-QA-Engineer-CV.txt" download>
                <Download aria-hidden="true" />
                Download CV
              </a>
            </Button>
            <Button type="button" variant="outline" onClick={() => scrollTo("contact")}>
              <Mail aria-hidden="true" />
              Get in touch
            </Button>
          </div>
          <div className="qa-intro-meta">
            <span><MapPin aria-hidden="true" /> Narayantar, Kathmandu</span>
            <span><Mail aria-hidden="true" /> sajesh.shrestha04@gmail.com</span>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="qa-section">
          <SectionHeading eyebrow="Skills" title="What I work with" />
          <div className="qa-skills-grid">
            {skills.map(({ title, detail, icon: Icon }) => (
              <Card key={title} className="qa-card qa-skill-card">
                <CardContent className="qa-card-pad">
                  <div className="qa-skill-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3 className="qa-card-title">{title}</h3>
                  <p className="qa-card-text">{detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Journey */}
        <section id="journey" className="qa-section">
          <SectionHeading eyebrow="Journey" title="My QA path so far" />
          <ol className="qa-timeline-v2">
            {journeySteps.map((step) => (
              <li key={step.period} className="qa-timeline-item">
                <div className="qa-timeline-dot" aria-hidden="true">
                  <Workflow />
                </div>
                <Card className="qa-card qa-timeline-card-v2">
                  <CardContent className="qa-card-pad">
                    <p className="qa-timeline-period">{step.period}</p>
                    <h3 className="qa-card-title">{step.role}</h3>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </section>

        {/* Awards */}
        <section id="awards" className="qa-section">
          <SectionHeading eyebrow="Awards" title="Recognition I'm proud of" />
          <div className="qa-awards-grid-v2">
            {awards.map(({ title, year, description, icon: Icon }) => (
              <Card key={title} className="qa-card qa-award-card-v2">
                <CardContent className="qa-card-pad">
                  <div className="qa-award-head-v2">
                    <div className="qa-award-icon">
                      <Icon aria-hidden="true" />
                    </div>
                    <span className="qa-year-badge">{year}</span>
                  </div>
                  <h3 className="qa-card-title">{title}</h3>
                  <p className="qa-card-text">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="qa-section qa-contact-v2">
          <SectionHeading eyebrow="Contact" title="Let's connect" />
          <p className="qa-contact-lead">
            <Mail aria-hidden="true" className="qa-contact-lead-icon" />
            <span>
              Feel free to reach out:{" "}
              <a href="mailto:sajesh.shrestha04@gmail.com">sajesh.shrestha04@gmail.com</a>
            </span>
          </p>
          <div className="qa-contact-grid-v2">
            <a href="mailto:sajesh.shrestha04@gmail.com" className="qa-contact-link">
              <Mail aria-hidden="true" />
              <span>sajesh.shrestha04@gmail.com</span>
            </a>
            <a href="tel:+9779860437025" className="qa-contact-link">
              <Phone aria-hidden="true" />
              <span>+977 9860437025</span>
            </a>
            <a
              href="https://wa.me/9779860437025"
              target="_blank"
              rel="noreferrer"
              className="qa-contact-link"
            >
              <MessageCircleMore aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sajesh-shrestha13/"
              target="_blank"
              rel="noreferrer"
              className="qa-contact-link"
            >
              <Linkedin aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>

        <footer className="qa-footer">
          <p>© {new Date().getFullYear()} Sajesh Shrestha — QA Engineer</p>
        </footer>
      </main>
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="qa-section-heading">
      <span className="qa-eyebrow">{eyebrow}</span>
      <h2 className="qa-section-title-v2">{title}</h2>
    </div>
  );
}

export function RedirectToPortfolioSection({ section }: { section: SectionKey }) {
  return <Navigate to="/" hash={section} replace />;
}
