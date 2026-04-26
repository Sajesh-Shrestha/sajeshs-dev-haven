import * as React from "react";
import { Navigate } from "@tanstack/react-router";
import {
  Award,
  Brain,
  BriefcaseBusiness,
  Bug,
  CircleCheck,
  Code2,
  DatabaseZap,
  Download,
  FileJson,
  FlaskConical,
  GitBranch,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  MessageCircleMore,
  MoonStar,
  Phone,
  Puzzle,
  RefreshCw,
  ShieldCheck,
  SunMedium,
  TestTube2,
  TimerReset,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type SectionKey = "about" | "skills" | "tools" | "journey" | "education" | "projects" | "awards" | "contact";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const navItems: ReadonlyArray<{ id: SectionKey; label: string }> = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "tools", label: "Tools" },
  { id: "journey", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

const technicalSkills = [
  { title: "Manual Testing", detail: "Functional, regression, smoke, and exploratory testing", icon: TestTube2 },
  { title: "API Testing", detail: "Request/response validation and backend workflow checks", icon: FlaskConical },
  { title: "SQL (Database Testing)", detail: "Data validation, integrity checks, and query-based testing", icon: DatabaseZap },
  { title: "Basic Automation Testing", detail: "Playwright UI flow automation fundamentals", icon: Bug },
  { title: "Load Testing", detail: "JMeter basics for performance and traffic validation", icon: TimerReset },
  { title: "Basic Security Testing", detail: "Security awareness with basic vulnerability checks", icon: ShieldCheck },
] as const;

const softSkills = [
  { title: "Team Player", detail: "Collaborates clearly across QA, product, and engineering", icon: Users },
  { title: "Critical Thinking", detail: "Breaks down issues and validates edge cases carefully", icon: Brain },
  { title: "Communication Skills", detail: "Writes clear defects, test notes, and status updates", icon: MessageCircleMore },
  { title: "Problem Solving", detail: "Finds practical paths to isolate and resolve quality risks", icon: Puzzle },
  { title: "Adaptability", detail: "Adjusts quickly to changing requirements and priorities", icon: RefreshCw },
] as const;

const tools = [
  { title: "Git", detail: "Version control and collaborative workflow", icon: GitBranch },
  { title: "Postman", detail: "API testing and collection-based validation", icon: FileJson },
  { title: "JMeter", detail: "Basic load and performance test execution", icon: TimerReset },
  { title: "Playwright", detail: "Basic browser automation and UI checks", icon: Code2 },
  { title: "Burp Suite", detail: "Basic security testing and request inspection", icon: ShieldCheck },
] as const;

const experienceSteps = [
  {
    period: "January 2026 – Present",
    role: "QA Engineer",
    company: "Current Role",
    points: [
      "Owns quality processes for reliable product delivery.",
      "Performs manual, API, database, and regression testing.",
      "Contributes to automation and performance testing improvements.",
    ],
  },
  {
    period: "October 2022 – January 2026",
    role: "Associate QA Engineer",
    company: "Professional QA Experience",
    points: [
      "Tested functional, regression, smoke, and API workflows.",
      "Collaborated closely with developers to identify and verify fixes.",
      "Improved test coverage and defect reporting quality across projects.",
    ],
  },
  {
    period: "April 2022 – June 2022",
    role: "QA Intern",
    company: "Internship",
    points: [
      "Learned software testing fundamentals in a real project environment.",
      "Supported test case execution, bug tracking, and QA documentation.",
      "Built a strong foundation in product quality and structured testing.",
    ],
  },
] as const;

const projects = [
  {
    title: "API Quality Validation",
    detail: "Validated REST APIs with Postman, response checks, negative cases, and regression coverage.",
    icon: FlaskConical,
  },
  {
    title: "Regression Test Coverage",
    detail: "Prepared and executed structured test scenarios to reduce release risk and improve reliability.",
    icon: CircleCheck,
  },
  {
    title: "Basic Automation Practice",
    detail: "Created Playwright-based UI checks for repeatable browser flow validation and learning.",
    icon: Bug,
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
        <section id="about" className="qa-section qa-intro">
          <span className="qa-eyebrow">QA Engineer</span>
          <h1 className="qa-intro-title">Hi, I'm Sajesh Shrestha.</h1>
          <p className="qa-intro-text">
            QA Engineer with 3+ years of experience in manual testing, API testing, and basic automation,
            focused on delivering high-quality and reliable software.
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

        <section className="qa-section qa-about-card" aria-label="About Me">
          <div>
            <span className="qa-eyebrow">About Me</span>
            <h2 className="qa-section-title-v2">Quality-focused, practical, and detail-oriented.</h2>
          </div>
          <p>
            QA Engineer with 3+ years of experience in manual testing, API testing, and basic automation,
            focused on delivering high-quality and reliable software.
          </p>
        </section>

        <section id="skills" className="qa-section">
          <SectionHeading eyebrow="Technical Skills" title="Core QA strengths" />
          <IconCardGrid items={technicalSkills} />
        </section>

        <section className="qa-section">
          <SectionHeading eyebrow="Soft Skills" title="How I work with teams" />
          <IconCardGrid items={softSkills} compact />
        </section>

        <section id="tools" className="qa-section">
          <SectionHeading eyebrow="Tools & Platforms" title="Tools I use for testing workflows" />
          <IconCardGrid items={tools} compact />
        </section>

        <section id="journey" className="qa-section">
          <SectionHeading eyebrow="Experience" title="Professional history" />
          <AutoTimeline steps={experienceSteps} />
        </section>

        <EducationSection />

        <section id="projects" className="qa-section">
          <SectionHeading eyebrow="Projects" title="Selected QA work" />
          <IconCardGrid items={projects} />
        </section>

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
            <a href="https://wa.me/9779860437025" target="_blank" rel="noreferrer" className="qa-contact-link">
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

function IconCardGrid({
  items,
  compact = false,
}: {
  items: ReadonlyArray<{ title: string; detail: string; icon: IconType }>;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "qa-skills-grid qa-skills-grid-compact" : "qa-skills-grid"}>
      {items.map(({ title, detail, icon: Icon }) => (
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
  );
}

function AutoTimeline({
  steps,
}: {
  steps: ReadonlyArray<{ period: string; role: string; company: string; points: readonly string[] }>;
}) {
  const timelineItems = [...steps, ...steps];

  return (
    <div className="qa-timeline-shell" aria-label="Auto-scrolling experience timeline">
      <ol className="qa-timeline-track">
        {timelineItems.map((step, index) => (
          <li key={`${step.period}-${index}`} className="qa-timeline-item" aria-hidden={index >= steps.length}>
            <div className="qa-timeline-dot" aria-hidden="true">
              <BriefcaseBusiness />
            </div>
            <Card className="qa-card qa-timeline-card-v2">
              <CardContent className="qa-card-pad">
                <p className="qa-timeline-period">{step.period}</p>
                <h3 className="qa-card-title">{step.role}</h3>
                <p className="qa-timeline-company">{step.company}</p>
                <ul className="qa-timeline-points">
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </div>
  );
}

function EducationSection() {
  return (
    <section id="education" className="qa-section">
      <SectionHeading eyebrow="Education" title="Academic background" />
      <Card className="qa-card qa-education-card">
        <CardContent className="qa-card-pad qa-education-content">
          <div className="qa-education-icon">
            <GraduationCap aria-hidden="true" />
          </div>
          <div>
            <h3 className="qa-card-title">Bachelor in Computer Science and Information Technology (BSc. CSIT)</h3>
            <p className="qa-card-text">Trinity International College</p>
            <p className="qa-timeline-period">2017 – 2022</p>
          </div>
        </CardContent>
      </Card>
    </section>
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
