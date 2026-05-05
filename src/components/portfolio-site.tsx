import * as React from "react";
import { Navigate } from "@tanstack/react-router";
import {
  Award,
  Brain,
  BriefcaseBusiness,
  Bug,
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
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type SectionKey = "about" | "skills" | "tools" | "journey" | "projects" | "education" | "awards" | "contact";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const navItems: ReadonlyArray<{ id: SectionKey; label: string }> = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "tools", label: "Tools" },
  { id: "journey", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
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
      "Owned and maintained quality assurance processes for reliable product delivery.",
      "Performed manual, API, database, and regression testing.",
      "Conducted API testing using Postman and load testing using JMeter.",
      "Performed UI load testing and basic automation using Playwright.",
      "Collaborated with developers to ensure timely issue resolution.",
      "Worked with RJSF / JSON Forms and JSON Workflow Definitions.",
    ],
  },
  {
    period: "October 2022 – January 2026",
    role: "Associate QA Engineer",
    company: "Professional QA Experience",
    points: [
      "Performed functional, regression, smoke, and API testing.",
      "Conducted API testing using Postman and load testing using JMeter.",
      "Executed UI load testing and basic automation testing using Playwright.",
      "Improved test coverage and enhanced defect reporting quality.",
      "Worked with RJSF, JSON Workflow Definitions, WordPress, and Adobe Photoshop basics.",
    ],
  },
  {
    period: "April 2022 – June 2022",
    role: "QA Intern",
    company: "Internship",
    points: [
      "Gained hands-on experience with the Software Development Life Cycle (SDLC).",
      "Prepared and maintained test cases, test plans, and user manuals.",
      "Performed manual testing to validate application functionality.",
      "Built a strong foundation in product quality and structured documentation.",
    ],
  },
] as const;

const projectInvolvement = [
  {
    title: "Online Account Opening & eKYC Application",
    detail: "Tested user onboarding, identity verification, and workflow processes.",
    icon: ShieldCheck,
  },
  {
    title: "BPM (Business ProcessMaker) System",
    detail: "Validated workflow automation and business process execution.",
    icon: GitBranch,
  },
  {
    title: "Online News Portal / CMS",
    detail: "Tested content publishing, user roles, and admin functionalities.",
    icon: FileJson,
  },
  {
    title: "Customer Registration Application",
    detail: "Verified user registration flows and data validation processes.",
    icon: Users,
  },
  {
    title: "Content Management Systems",
    detail: "Ensured content handling, updates, and user access control.",
    icon: DatabaseZap,
  },
  {
    title: "In-house Products",
    detail: "Worked on multiple internal systems focusing on quality, usability, and performance.",
    icon: BriefcaseBusiness,
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
          <div className="qa-intro-center">
            <h1 className="qa-intro-title">
              <span className="qa-intro-line qa-intro-line-1">Hi, I'm</span>
              <span className="qa-intro-line qa-intro-line-2">
                Sajesh <span className="qa-intro-underline">Shrestha</span>
              </span>
            </h1>
            <p className="qa-intro-tag qa-intro-line qa-intro-line-3">
              I'm a <span className="qa-intro-accent">QA Engineer</span>
            </p>
            <div className="qa-intro-actions">
              <Button asChild>
                <a href="/Sajesh-Shrestha-QA-Engineer-CV.txt" download>
                  <Download aria-hidden="true" />
                  Download CV
                </a>
              </Button>
              <Button type="button" variant="outline" className="qa-hero-contact-button" onClick={() => scrollTo("contact")}>
                <Mail aria-hidden="true" />
                Get in touch
              </Button>
            </div>
            <div className="qa-intro-meta">
              <span><MapPin aria-hidden="true" /> Narayantar, Kathmandu</span>
              <span><Mail aria-hidden="true" /> sajesh.shrestha04@gmail.com</span>
            </div>
          </div>
        </section>

        <section className="qa-section qa-about-card" aria-label="About Me">
          <span className="qa-about-pill">ABOUT ME</span>
          <h2 className="qa-about-title">
            A brief <span className="qa-intro-underline">introduction</span>
          </h2>
          <p className="qa-about-lead">
            I'm a QA Engineer passionate about quality and the craft of building reliable software.
            I enjoy exploring how systems work, breaking them in thoughtful ways, and turning what
            I learn into tests and processes that protect real users. With 3+ years across manual,
            API, database, and basic automation testing, I focus on shipping experiences that feel
            steady, intentional, and well-considered.
          </p>
          <div className="qa-about-stats">
            <div className="qa-about-stat">
              <span className="qa-about-stat-num">3+</span>
              <span className="qa-about-stat-label">Years in QA</span>
            </div>
            <div className="qa-about-stat">
              <span className="qa-about-stat-num">6+</span>
              <span className="qa-about-stat-label">Products tested</span>
            </div>
            <div className="qa-about-stat">
              <span className="qa-about-stat-num">2</span>
              <span className="qa-about-stat-label">Awards earned</span>
            </div>
          </div>
        </section>

        <section id="skills" className="qa-section">
          <SectionHeading num="01" eyebrow="Technical Skills" title="Core QA strengths" />
          <IconCardGrid items={technicalSkills} />
        </section>

        <section className="qa-section">
          <SectionHeading num="02" eyebrow="Soft Skills" title="How I work with teams" />
          <IconCardGrid items={softSkills} compact />
        </section>

        <section id="tools" className="qa-section">
          <SectionHeading num="03" eyebrow="Tools & Platforms" title="Tools I use for testing workflows" />
          <IconCardGrid items={tools} compact />
        </section>

        <section id="journey" className="qa-section">
          <SectionHeading num="04" eyebrow="Job History" title="Responsibilities across QA roles" />
          <AutoTimeline steps={experienceSteps} />
        </section>

        <section id="projects" className="qa-section qa-projects-band">
          <SectionHeading num="05" eyebrow="Project Involvement" title="Products and systems tested" />
          <div className="qa-project-timeline" aria-label="Auto-scrolling project timeline">
            <div className="qa-project-track">
              {[...projectInvolvement, ...projectInvolvement].map(({ title, detail, icon: Icon }, index) => (
                <article
                  key={`${title}-${index}`}
                  className="qa-project-item"
                  aria-hidden={index >= projectInvolvement.length}
                >
                  <div className="qa-project-marker" aria-hidden="true">
                    <span>{String((index % projectInvolvement.length) + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="qa-project-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="qa-card-title">{title}</h3>
                    <p className="qa-card-text">{detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <EducationSection />

        <section id="awards" className="qa-section">
          <SectionHeading num="07" eyebrow="Awards" title="Recognition I'm proud of" />
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
          <SectionHeading num="08" eyebrow="Contact" title="Let's connect" />
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
  const educationItems = [
    {
      title: "Bachelor in Computer Science and Information Technology (BSc. CSIT)",
      institute: "Trinity International College",
      period: "2017 – 2022",
    },
    {
      title: "+2 Science",
      institute: "Golden Gate International College",
      period: "2015 – 2017",
    },
  ] as const;

  return (
    <section id="education" className="qa-section">
      <SectionHeading num="06" eyebrow="Education" title="Academic background" />
      <div className="qa-education-list">
        {educationItems.map((item) => (
          <Card key={item.title} className="qa-card qa-education-card">
            <CardContent className="qa-card-pad qa-education-content">
              <div className="qa-education-icon">
                <GraduationCap aria-hidden="true" />
              </div>
              <div>
                <h3 className="qa-card-title">{item.title}</h3>
                <p className="qa-card-text">{item.institute}</p>
                <p className="qa-timeline-period">{item.period}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, num }: { eyebrow: string; title: string; num: string }) {
  return (
    <div className="qa-section-heading">
      <div className="qa-section-head-row">
        <span className="qa-section-num" aria-hidden="true">{num}</span>
        <span className="qa-eyebrow">— {eyebrow}</span>
      </div>
      <h2 className="qa-section-title-v2">{title}</h2>
    </div>
  );
}

export function RedirectToPortfolioSection({ section }: { section: SectionKey }) {
  return <Navigate to="/" hash={section} replace />;
}
