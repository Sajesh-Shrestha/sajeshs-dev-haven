import * as React from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Bug,
  DatabaseZap,
  Download,
  ExternalLink,
  FlaskConical,
  Github,
  Home,
  Linkedin,
  Mail,
  MapPin,
  MessageCircleMore,
  MoonStar,
  Phone,
  ShieldCheck,
  Sparkles,
  SunMedium,
  TestTube2,
  TimerReset,
  Trophy,
  Workflow,
} from "lucide-react";

import heroImage from "../assets/qa-portfolio-hero.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Sparkles },
  { to: "/journey", label: "QA Journey", icon: Workflow },
  { to: "/skills", label: "Skills", icon: Bug },
  { to: "/awards", label: "Awards", icon: Trophy },
  { to: "/projects", label: "Projects", icon: BriefcaseBusiness },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

const journeySteps = [
  {
    period: "April 2022 – June 2022",
    role: "QA Intern",
    summary:
      "Started my journey by learning software testing fundamentals, understanding real-world workflows, and supporting testing activities.",
  },
  {
    period: "October 2022 – January 2026",
    role: "Associate QA Engineer",
    summary:
      "Gained hands-on experience in functional, regression, and API testing. Worked closely with development teams, handled testing independently, and improved product quality across multiple projects.",
  },
  {
    period: "January 2026 – Present",
    role: "QA Engineer",
    summary:
      "Taking ownership of quality processes, contributing to better testing strategies, and continuing to grow in automation and performance testing.",
  },
] as const;

const skills = [
  {
    title: "Manual Testing",
    level: "92%",
    detail: "Functional, regression, and smoke testing for dependable releases.",
    tags: ["Functional", "Regression", "Smoke"],
    icon: TestTube2,
  },
  {
    title: "API Testing",
    level: "88%",
    detail: "Postman-based request validation, workflow checks, and response analysis.",
    tags: ["Postman", "Workflow checks"],
    icon: FlaskConical,
  },
  {
    title: "SQL & DB Validation",
    level: "86%",
    detail: "Data integrity checks and backend validation using SQL queries.",
    tags: ["SQL", "Validation"],
    icon: DatabaseZap,
  },
  {
    title: "Basic Automation",
    level: "64%",
    detail: "Foundational Playwright knowledge for repeatable browser test flows.",
    tags: ["Playwright", "UI flows"],
    icon: Bug,
  },
  {
    title: "Basic Load Testing",
    level: "58%",
    detail: "Entry-level performance checks with JMeter to understand system behavior.",
    tags: ["JMeter", "Load basics"],
    icon: TimerReset,
  },
  {
    title: "Quality Mindset",
    level: "80%",
    detail: "Mobile app testing, Agile collaboration, and basic security-focused validation.",
    tags: ["Mobile", "Agile", "Security"],
    icon: ShieldCheck,
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

const projects = [
  {
    title: "Digital Banking Platform",
    description:
      "Validated critical banking workflows, transaction scenarios, and release readiness across customer-facing features.",
    tags: ["Web testing", "Regression", "API validation"],
  },
  {
    title: "eKYC & Registration Flow",
    description:
      "Tested identity verification journeys, edge cases, and database consistency for onboarding systems.",
    tags: ["eKYC", "SQL checks", "Functional testing"],
  },
  {
    title: "Media Experience Platform",
    description:
      "Supported reliable playback and user journeys through structured QA coverage on web and mobile surfaces.",
    tags: ["Mobile app", "Smoke testing", "User flows"],
  },
] as const;

const stats = [
  { value: "3.5+", label: "Years in QA" },
  { value: "2", label: "Awards won" },
  { value: "Web + Mobile", label: "Testing surfaces" },
] as const;

export function PortfolioShell({
  children,
  title,
  intro,
}: {
  children: React.ReactNode;
  title: string;
  intro: string;
}) {
  const [theme, setTheme] = React.useState<"dark" | "light">("dark");

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const stored = window.localStorage.getItem("portfolio-theme");
    const nextTheme = stored === "light" || stored === "dark" ? stored : "dark";
    setTheme(nextTheme);
  }, []);

  React.useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className="qa-portfolio-shell">
      <aside className="qa-sidebar">
        <div className="qa-sidebar-inner">
          <div className="qa-brand-block">
            <span className="qa-brand-mark">SS</span>
            <div>
              <p className="qa-brand-name">Sajesh Shrestha</p>
              <p className="qa-brand-role">QA Engineer</p>
            </div>
          </div>

          <nav className="qa-nav" aria-label="Primary navigation">
            {navItems.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="qa-nav-link"
                activeProps={{ className: "qa-nav-link qa-nav-link-active" }}
              >
                <Icon aria-hidden="true" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          <div className="qa-sidebar-card">
            <div>
              <p className="qa-side-kicker">Mode</p>
              <p className="qa-side-text">Switch between dark and light views.</p>
            </div>
            <div className="qa-theme-row">
              <SunMedium aria-hidden="true" />
              <Switch
                aria-label="Toggle color mode"
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              />
              <MoonStar aria-hidden="true" />
            </div>
          </div>

          <div className="qa-sidebar-card qa-sidebar-card-compact">
            <p className="qa-side-kicker">Connect</p>
            <div className="qa-socials">
              <a href="https://www.linkedin.com/in/sajesh-shrestha13/" target="_blank" rel="noreferrer">
                <Linkedin aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <span className="qa-social-placeholder">
                <Github aria-hidden="true" />
                <span>GitHub soon</span>
              </span>
            </div>
          </div>
        </div>
      </aside>

      <main className="qa-main">
        <header className="qa-mobile-bar">
          <div>
            <p className="qa-mobile-name">Sajesh Shrestha</p>
            <p className="qa-mobile-role">QA Engineer</p>
          </div>
          <div className="qa-theme-row qa-theme-row-mobile">
            <SunMedium aria-hidden="true" />
            <Switch
              aria-label="Toggle color mode"
              checked={theme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            />
            <MoonStar aria-hidden="true" />
          </div>
        </header>

        <section className="qa-page-head">
          <div>
            <p className="qa-page-kicker">QA Engineer Portfolio</p>
            <h1 className="qa-page-title">{title}</h1>
          </div>
          <p className="qa-page-intro">{intro}</p>
        </section>

        {children}
      </main>
    </div>
  );
}

export function HomePanel() {
  return (
    <div className="qa-stack-lg">
      <section className="qa-hero-grid">
        <div className="qa-hero-copy qa-animate-rise">
          <span className="qa-chip qa-chip-highlight">Quality-first. Detail-driven. Always learning.</span>
          <h2 className="qa-hero-title">Building confidence into every release.</h2>
          <p className="qa-hero-text">
            I am a QA Engineer with 3.5+ years of experience, specializing in manual testing, API testing, and SQL,
            with basic automation skills in Playwright. Passionate about ensuring software quality and continuously
            learning modern testing practices.
          </p>
          <div className="qa-button-row">
            <Button asChild>
              <a href="/Sajesh-Shrestha-QA-Engineer-CV.txt" download>
                <Download aria-hidden="true" />
                Download CV
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">
                <Mail aria-hidden="true" />
                Contact
              </Link>
            </Button>
          </div>
          <div className="qa-inline-tags" aria-label="Core strengths">
            <span className="qa-chip">Manual testing</span>
            <span className="qa-chip">API testing</span>
            <span className="qa-chip">SQL validation</span>
            <span className="qa-chip">Playwright basics</span>
          </div>
        </div>

        <div className="qa-hero-visual qa-animate-float">
          <div className="qa-photo-frame">
            <img
              src={heroImage}
              alt="QA engineer workspace showing testing dashboards, code, and product validation screens"
              width={1920}
              height={1080}
              className="qa-photo"
            />
          </div>
          <div className="qa-floating-card qa-floating-card-top">
            <span>Location</span>
            <strong>Narayantar, Kathmandu</strong>
          </div>
          <div className="qa-floating-card qa-floating-card-bottom">
            <span>Current role</span>
            <strong>QA Engineer</strong>
          </div>
        </div>
      </section>

      <section className="qa-stats-grid" aria-label="Quick facts">
        {stats.map((item) => (
          <Card key={item.label} className="qa-glass-card qa-animate-rise">
            <CardContent className="qa-stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="qa-overview-grid">
        <Card className="qa-glass-card">
          <CardContent className="qa-panel-block">
            <p className="qa-section-kicker">Snapshot</p>
            <h3 className="qa-section-title">QA with ownership, clarity, and practical depth.</h3>
            <p className="qa-section-text">
              Based in Kathmandu and currently growing at Amnil Technology, I work across web and mobile products with a
              focus on dependable releases, strong collaboration, and thoughtful validation.
            </p>
          </CardContent>
        </Card>

        <Card className="qa-glass-card">
          <CardContent className="qa-panel-block">
            <p className="qa-section-kicker">Explore</p>
            <div className="qa-link-list">
              <Link to="/journey" className="qa-inline-link">
                See QA journey
                <ArrowUpRight aria-hidden="true" />
              </Link>
              <Link to="/awards" className="qa-inline-link">
                View awards
                <ArrowUpRight aria-hidden="true" />
              </Link>
              <Link to="/projects" className="qa-inline-link">
                Browse projects
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export function AboutPanel() {
  return (
    <div className="qa-stack-lg">
      <section className="qa-feature-grid">
        <Card className="qa-glass-card qa-feature-card-wide">
          <CardContent className="qa-panel-block">
            <p className="qa-section-kicker">About</p>
            <h2 className="qa-section-title">A QA professional focused on reliable software experiences.</h2>
            <p className="qa-section-text">
              I am Sajesh Shrestha, a QA Engineer based in Narayantar, Kathmandu, with 3.5 years of experience at
              Amnil Technology. I specialize in manual testing, API testing, and SQL, with basic knowledge of
              automation using Playwright.
            </p>
            <p className="qa-section-text">
              I hold a BSc. CSIT from Trinity International College (2017–2022) and enjoy sports, trekking, and
              exploring new places outside of work.
            </p>
          </CardContent>
        </Card>

        <Card className="qa-glass-card">
          <CardContent className="qa-panel-block">
            <p className="qa-section-kicker">Education</p>
            <h3 className="qa-section-title">BSc. CSIT</h3>
            <p className="qa-section-text">Trinity International College, Dillibazar</p>
            <span className="qa-chip">2017 – 2022</span>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export function JourneyPanel() {
  return (
    <section className="qa-timeline" aria-label="QA career journey">
      {journeySteps.map((step, index) => (
        <Card key={step.period} className="qa-glass-card qa-timeline-card">
          <CardContent className="qa-timeline-block">
            <div className="qa-timeline-index">0{index + 1}</div>
            <div>
              <p className="qa-section-kicker">{step.period}</p>
              <h2 className="qa-section-title">{step.role}</h2>
              <p className="qa-section-text">{step.summary}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}

export function SkillsPanel() {
  return (
    <div className="qa-skill-grid">
      {skills.map(({ title, level, detail, tags, icon: Icon }) => (
        <Card key={title} className="qa-glass-card qa-skill-card">
          <CardContent className="qa-panel-block">
            <div className="qa-skill-head">
              <div className="qa-icon-badge">
                <Icon aria-hidden="true" />
              </div>
              <div>
                <h2 className="qa-section-title qa-section-title-sm">{title}</h2>
                <p className="qa-section-text">{detail}</p>
              </div>
            </div>
            <div className="qa-meter-wrap">
              <div className="qa-meter-track">
                <span className="qa-meter-fill" style={{ width: level }} />
              </div>
              <span className="qa-meter-value">{level}</span>
            </div>
            <div className="qa-inline-tags">
              {tags.map((tag) => (
                <span key={tag} className="qa-chip">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function AwardsPanel() {
  return (
    <div className="qa-awards-grid">
      {awards.map(({ title, year, description, icon: Icon }) => (
        <Card key={title} className="qa-glass-card qa-award-card qa-animate-rise">
          <CardContent className="qa-panel-block">
            <div className="qa-award-head">
              <div className="qa-icon-badge qa-icon-badge-accent">
                <Icon aria-hidden="true" />
              </div>
              <span className="qa-chip qa-chip-highlight">{year}</span>
            </div>
            <h2 className="qa-section-title">{title}</h2>
            <p className="qa-section-text">{description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function ProjectsPanel() {
  return (
    <div className="qa-project-grid">
      {projects.map((project) => (
        <Card key={project.title} className="qa-glass-card qa-project-card">
          <CardContent className="qa-panel-block">
            <p className="qa-section-kicker">Selected QA work</p>
            <h2 className="qa-section-title">{project.title}</h2>
            <p className="qa-section-text">{project.description}</p>
            <div className="qa-inline-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="qa-chip">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function ContactPanel() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:sajesh.shrestha04@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="qa-contact-grid">
      <Card className="qa-glass-card">
        <CardContent className="qa-panel-block qa-contact-info">
          <p className="qa-section-kicker">Direct contact</p>
          <h2 className="qa-section-title">Let&apos;s talk about QA opportunities.</h2>
          <div className="qa-contact-list">
            <a href="mailto:sajesh.shrestha04@gmail.com" className="qa-contact-item">
              <Mail aria-hidden="true" />
              <span>sajesh.shrestha04@gmail.com</span>
            </a>
            <a href="tel:+9779860437025" className="qa-contact-item">
              <Phone aria-hidden="true" />
              <span>9860437025</span>
            </a>
            <p className="qa-contact-item">
              <MapPin aria-hidden="true" />
              <span>Narayantar, Kathmandu, Nepal</span>
            </p>
            <a href="https://wa.me/9779860437025" target="_blank" rel="noreferrer" className="qa-contact-item">
              <MessageCircleMore aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
            <a href="viber://chat?number=%2B9779860437025" className="qa-contact-item">
              <ExternalLink aria-hidden="true" />
              <span>Viber</span>
            </a>
          </div>
        </CardContent>
      </Card>

      <Card className="qa-glass-card">
        <CardContent className="qa-panel-block">
          <form className="qa-form" onSubmit={handleSubmit}>
            <div className="qa-field">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                placeholder="Your name"
              />
            </div>
            <div className="qa-field">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                placeholder="Your email"
              />
            </div>
            <div className="qa-field">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                placeholder="Tell me about the role or project"
              />
            </div>
            <Button type="submit">
              <Mail aria-hidden="true" />
              Send message
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
