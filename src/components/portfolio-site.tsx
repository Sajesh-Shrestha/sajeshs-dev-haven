import * as React from "react";
import { Navigate } from "@tanstack/react-router";
import {
  Award,
  Brain,
  BriefcaseBusiness,
  Bug,
  Instagram,
  ChevronDown,
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
  { id: "journey", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "tools", label: "Tools" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
];

const softSkills = [
  {
    title: "Critical Thinking",
    detail: "Breaks down issues and validates edge cases carefully",
    icon: Brain,
    points: [
      "Builds edge-case matrices before regression cycles begin.",
      "Challenges assumptions with data-led test scenarios.",
      "Isolates root causes instead of patching symptoms.",
    ],
  },
  {
    title: "Team Player",
    detail: "Collaborates clearly across QA, product, and engineering",
    icon: Users,
    points: [
      "Pairs with developers during defect triage and fix verification.",
      "Aligns QA priorities with product and design rhythm.",
      "Shares context openly across remote squads.",
    ],
  },
  {
    title: "Communication Skills",
    detail: "Writes clear defects, test notes, and status updates",
    icon: MessageCircleMore,
    points: [
      "Files reproducible bug reports with crisp expected vs. actual.",
      "Maintains living test documentation teams actually read.",
      "Surfaces risk early with structured release notes.",
    ],
  },
  {
    title: "Problem Solving",
    detail: "Finds practical paths to isolate and resolve quality risks",
    icon: Puzzle,
    points: [
      "Designs targeted probes to narrow down flaky failures.",
      "Builds lightweight harnesses to reproduce intermittent issues.",
      "Balances depth of investigation against ship pressure.",
    ],
  },
  {
    title: "Adaptability",
    detail: "Adjusts quickly to changing requirements and priorities",
    icon: RefreshCw,
    points: [
      "Re-scopes test coverage as requirements shift mid-sprint.",
      "Picks up new tools and domains without losing momentum.",
      "Stays calm under release pressure and tight cycles.",
    ],
  },
] as const;

const tools = [
  { title: "Git", detail: "Version control and collaborative workflow", icon: GitBranch },
  { title: "Postman", detail: "API testing and collection-based validation", icon: FileJson },
  { title: "JMeter", detail: "Basic load and performance test execution", icon: TimerReset },
  { title: "Playwright", detail: "Basic browser automation and UI checks", icon: Code2 },
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
] as ReadonlyArray<{ period: string; role: string; company: string; points: readonly string[] }>;

type WireframeKind = "id" | "flow" | "news" | "form" | "cms" | "stack";

const projectInvolvement = [
  {
    title: "Online Account Opening & eKYC Application",
    detail: "Tested user onboarding, identity verification, and workflow processes.",
    icon: ShieldCheck,
    tag: "Auth-Heavy",
    wireframe: "id" as WireframeKind,
  },
  {
    title: "BPM (Business ProcessMaker) System",
    detail: "Validated workflow automation and business process execution.",
    icon: GitBranch,
    tag: "Workflow",
    wireframe: "flow" as WireframeKind,
  },
  {
    title: "Online News Portal / CMS",
    detail: "Tested content publishing, user roles, and admin functionalities.",
    icon: FileJson,
    tag: "Content-Heavy",
    wireframe: "news" as WireframeKind,
  },
  {
    title: "Customer Registration Application",
    detail: "Verified user registration flows and data validation processes.",
    icon: Users,
    tag: "Form-Heavy",
    wireframe: "form" as WireframeKind,
  },
  {
    title: "Content Management Systems",
    detail: "Ensured content handling, updates, and user access control.",
    icon: DatabaseZap,
    tag: "API-Dense",
    wireframe: "cms" as WireframeKind,
  },
  {
    title: "In-house Products",
    detail: "Worked on multiple internal systems focusing on quality, usability, and performance.",
    icon: BriefcaseBusiness,
    tag: "Multi-System",
    wireframe: "stack" as WireframeKind,
  },
] as const;

const awards = [
  {
    title: "Extreme Ownership Award",
    year: "2024",
    category: "Ownership",
    description: "Recognized for taking full responsibility and driving quality work with consistency.",
    icon: Trophy,
  },
  {
    title: "Above and Beyond Award",
    year: "2025",
    category: "Impact",
    description: "Awarded for dedication, reliability, and making a strong impact beyond expectations.",
    icon: Award,
  },
] as const;

const backdropGlyphs = [
  { kind: "icon" as const, Icon: Bug, cls: "qa-bd-1" },
  { kind: "icon" as const, Icon: FlaskConical, cls: "qa-bd-2" },
  { kind: "icon" as const, Icon: TestTube2, cls: "qa-bd-3" },
  { kind: "icon" as const, Icon: FileJson, cls: "qa-bd-4" },
  { kind: "icon" as const, Icon: Code2, cls: "qa-bd-5" },
  { kind: "icon" as const, Icon: ShieldCheck, cls: "qa-bd-6" },
  { kind: "icon" as const, Icon: GitBranch, cls: "qa-bd-7" },
  { kind: "icon" as const, Icon: TimerReset, cls: "qa-bd-8" },
];

const backdropTokens = [
  { text: "GET /api/users", cls: "qa-bd-t1", tone: "info" },
  { text: "200 OK", cls: "qa-bd-t2", tone: "pass" },
  { text: "404 Not Found", cls: "qa-bd-t3", tone: "fail" },
  { text: "expect(status).toBe(200)", cls: "qa-bd-t4", tone: "info" },
  { text: "AssertionError", cls: "qa-bd-t5", tone: "fail" },
  { text: "POST /auth/login", cls: "qa-bd-t6", tone: "info" },
  { text: "✓ 42 passed", cls: "qa-bd-t7", tone: "pass" },
  { text: "✕ 1 failed", cls: "qa-bd-t8", tone: "fail" },
  { text: "{ \"status\": \"verified\" }", cls: "qa-bd-t9", tone: "info" },
  { text: "500 Internal Error", cls: "qa-bd-t10", tone: "fail" },
];

function QaThemeBackdrop() {
  return (
    <div className="qa-backdrop" aria-hidden="true">
      <div className="qa-backdrop-grid" />
      {backdropGlyphs.map(({ Icon, cls }) => (
        <span key={cls} className={`qa-bd-icon ${cls}`}>
          <Icon />
        </span>
      ))}
      {backdropTokens.map(({ text, cls, tone }) => (
        <span key={cls} className={`qa-bd-token qa-bd-${tone} ${cls}`}>
          {text}
        </span>
      ))}
    </div>
  );
}


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


  const introRef = React.useRef<HTMLElement | null>(null);
  const [introVisible, setIntroVisible] = React.useState(false);
  React.useEffect(() => {
    const el = introRef.current;
    if (!el) return;
    const trigger = () => {
      setIntroVisible(false);
      requestAnimationFrame(() => requestAnimationFrame(() => setIntroVisible(true)));
    };
    trigger();
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && trigger()),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="qa-page">
      <QaThemeBackdrop />
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
        <section id="about" ref={introRef} className={`qa-section qa-intro${introVisible ? " is-visible" : ""}`}>
          <HeroWireframeBackdrop />
          <div className="qa-intro-center">
            <h1 className="qa-intro-title">
              <SplitLine text="Hi, I'm" className="qa-intro-line-block" baseDelay={0.05} />
              <span className="qa-intro-line-block">
                <SplitWord text="Sajesh" baseDelay={0.45} />{" "}
                <span className="qa-intro-underline">
                  <SplitWord text="Shrestha" baseDelay={0.85} italic />
                </span>
              </span>
            </h1>
            <p className="qa-intro-tag qa-intro-typer">
              <span className="qa-intro-accent qa-intro-typing">QA Engineer</span>
              <span className="qa-intro-caret" aria-hidden="true" />
            </p>
            <div className="qa-intro-actions qa-intro-line qa-intro-line-4">
              <Button asChild className="qa-hero-cta-primary">
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
            <div className="qa-intro-meta qa-intro-line qa-intro-line-5">
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
        </section>

        <section id="journey" className="qa-section">
          <SectionHeading num="01" eyebrow="Job History" title="Responsibilities across QA roles" />
          <SplitTimeline steps={experienceSteps} />
        </section>

        <section id="skills" className="qa-section">
          <SectionHeading num="02" eyebrow="Skills" title="Technical depth, human range" />
          <SkillsExplorer />
        </section>


        <section id="tools" className="qa-section">
          <SectionHeading num="03" eyebrow="Tools & Platforms" title="Tools I use for testing workflows" />
          <div className="qa-tool-row" role="list">
            {tools.map(({ title, detail, icon: Icon }) => (
              <button key={title} type="button" className="qa-tool-chip" role="listitem" aria-label={title}>
                <span className="qa-tool-glow" aria-hidden="true" />
                <Icon aria-hidden="true" />
                <span className="qa-tool-name">{title}</span>
                <span className="qa-tool-tip" role="tooltip">
                  <span className="qa-tool-tip-title">{title}</span>
                  <span className="qa-tool-tip-text">{detail}</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="projects" className="qa-section qa-projects-band">
          <SectionHeading num="04" eyebrow="Project Involvement" title="Products and systems tested" />
          <div className="qa-project-grid">
            {projectInvolvement.map(({ title, detail, icon: Icon, tag, wireframe }) => (
              <article key={title} className="qa-project-card">
                <div className="qa-project-frame">
                  <Wireframe kind={wireframe} />
                </div>
                <span className="qa-project-tag">{tag}</span>
                <div className="qa-project-body">
                  <div className="qa-project-head">
                    <span className="qa-project-badge">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3 className="qa-card-title">{title}</h3>
                  </div>
                  <p className="qa-card-text">{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <EducationSection />

        <section id="awards" className="qa-section">
          <SectionHeading num="06" eyebrow="Awards" title="Recognition I'm proud of" />
          <div className="qa-awards-grid-v2">
            {awards.map(({ title, year, category, description, icon: Icon }) => (
              <Card key={title} className="qa-card qa-award-card-v2">
                <CardContent className="qa-card-pad">
                  <div className="qa-award-head-v2">
                    <div className="qa-award-icon">
                      <Icon aria-hidden="true" />
                    </div>
                    <span className="qa-award-category">Category: {category}</span>
                  </div>
                  <h3 className="qa-card-title">{title}</h3>
                  <p className="qa-card-text">{description}</p>
                  <span className="qa-year-badge qa-award-year">{year}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </main>

      <aside id="contact" className="qa-dock" aria-label="Contact and social links">
        <a
          href="mailto:sajesh.shrestha04@gmail.com"
          aria-label="Email"
          className="qa-dock-link"
          style={{ "--dock-accent": "#EA4335" } as React.CSSProperties}
        >
          <Mail aria-hidden="true" />
        </a>
        <a
          href="tel:+9779860437025"
          aria-label="Phone"
          className="qa-dock-link"
          style={{ "--dock-accent": "#34A853" } as React.CSSProperties}
        >
          <Phone aria-hidden="true" />
        </a>
        <a
          href="https://wa.me/9779860437025"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="qa-dock-link"
          style={{ "--dock-accent": "#25D366" } as React.CSSProperties}
        >
          <MessageCircleMore aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/sajesh-shrestha13/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="qa-dock-link"
          style={{ "--dock-accent": "#0A66C2" } as React.CSSProperties}
        >
          <Linkedin aria-hidden="true" />
        </a>
        <a
          href="https://www.instagram.com/sajesh_shrestha13?igsh=d2UzYXR5Z3g3cjFl"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="qa-dock-link"
          style={{ "--dock-accent": "#E4405F" } as React.CSSProperties}
        >
          <Instagram aria-hidden="true" />
        </a>
        <a
          href="/Sajesh-Shrestha-QA-Engineer-CV.txt"
          download
          aria-label="Download CV"
          className="qa-dock-link"
          style={{ "--dock-accent": "var(--color-primary)" } as React.CSSProperties}
        >
          <Download aria-hidden="true" />
        </a>
      </aside>

    </div>
  );
}

function HeroWireframeBackdrop() {
  return (
    <svg
      className="qa-hero-bg"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="qaGrid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </pattern>
        <radialGradient id="qaFade" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="qaMask">
          <rect width="1200" height="700" fill="url(#qaFade)" />
        </mask>
      </defs>
      <g mask="url(#qaMask)" opacity="0.5">
        <rect width="1200" height="700" fill="url(#qaGrid)" />
        <g fill="none" stroke="currentColor" strokeWidth="1.1" opacity="0.85">
          <g transform="translate(140 130) rotate(-12)">
            <rect x="0" y="0" width="120" height="120" />
            <rect x="28" y="-28" width="120" height="120" />
            <path d="M0 0 L28 -28 M120 0 L148 -28 M120 120 L148 92 M0 120 L28 92" />
          </g>
          <g transform="translate(960 110) rotate(14)">
            <rect x="0" y="0" width="90" height="90" />
            <rect x="22" y="-22" width="90" height="90" />
            <path d="M0 0 L22 -22 M90 0 L112 -22 M90 90 L112 68 M0 90 L22 68" />
          </g>
          <g transform="translate(880 470) rotate(-6)">
            <rect x="0" y="0" width="150" height="150" />
            <rect x="34" y="-34" width="150" height="150" />
            <path d="M0 0 L34 -34 M150 0 L184 -34 M150 150 L184 116 M0 150 L34 116" />
          </g>
          <g transform="translate(120 470) rotate(8)">
            <rect x="0" y="0" width="80" height="80" />
            <rect x="20" y="-20" width="80" height="80" />
            <path d="M0 0 L20 -20 M80 0 L100 -20 M80 80 L100 60 M0 80 L20 60" />
          </g>
        </g>
      </g>
    </svg>
  );
}

function Wireframe({ kind }: { kind: WireframeKind }) {
  const common = {
    viewBox: "0 0 200 90",
    className: "qa-wire",
    "aria-hidden": true as const,
  };
  switch (kind) {
    case "id":
      return (
        <svg {...common}>
          <rect x="10" y="14" width="180" height="62" rx="6" />
          <circle cx="34" cy="45" r="14" />
          <rect x="60" y="28" width="100" height="6" rx="2" />
          <rect x="60" y="42" width="80" height="4" rx="2" />
          <rect x="60" y="52" width="110" height="4" rx="2" />
          <rect x="60" y="62" width="60" height="4" rx="2" />
        </svg>
      );
    case "flow":
      return (
        <svg {...common}>
          <rect x="14" y="34" width="38" height="22" rx="4" />
          <rect x="82" y="34" width="38" height="22" rx="4" />
          <rect x="150" y="34" width="38" height="22" rx="4" />
          <path d="M52 45 L82 45 M120 45 L150 45" />
          <circle cx="101" cy="20" r="6" />
          <path d="M101 26 L101 34" />
        </svg>
      );
    case "news":
      return (
        <svg {...common}>
          <rect x="10" y="10" width="180" height="10" rx="2" />
          <rect x="10" y="26" width="80" height="50" rx="3" />
          <rect x="98" y="26" width="92" height="6" rx="2" />
          <rect x="98" y="38" width="80" height="4" rx="2" />
          <rect x="98" y="46" width="84" height="4" rx="2" />
          <rect x="98" y="56" width="40" height="20" rx="3" />
          <rect x="144" y="56" width="40" height="20" rx="3" />
        </svg>
      );
    case "form":
      return (
        <svg {...common}>
          <rect x="36" y="12" width="128" height="66" rx="6" />
          <rect x="46" y="22" width="60" height="6" rx="2" />
          <rect x="46" y="34" width="108" height="10" rx="3" />
          <rect x="46" y="50" width="108" height="10" rx="3" />
          <rect x="46" y="66" width="40" height="8" rx="3" fill="currentColor" opacity="0.35" />
        </svg>
      );
    case "cms":
      return (
        <svg {...common}>
          <rect x="10" y="10" width="40" height="70" rx="3" />
          <rect x="58" y="10" width="132" height="14" rx="3" />
          <rect x="58" y="30" width="40" height="22" rx="3" />
          <rect x="104" y="30" width="40" height="22" rx="3" />
          <rect x="150" y="30" width="40" height="22" rx="3" />
          <rect x="58" y="58" width="132" height="22" rx="3" />
        </svg>
      );
    case "stack":
    default:
      return (
        <svg {...common}>
          <rect x="20" y="14" width="160" height="14" rx="3" />
          <rect x="20" y="32" width="160" height="14" rx="3" />
          <rect x="20" y="50" width="160" height="14" rx="3" />
          <rect x="20" y="68" width="100" height="10" rx="3" />
        </svg>
      );
  }
}

function SplitWord({ text, baseDelay = 0, italic = false }: { text: string; baseDelay?: number; italic?: boolean }) {
  const chars = Array.from(text);
  return (
    <span className={`qa-split${italic ? " qa-split-italic" : ""}`} aria-label={text}>
      {chars.map((ch, i) => (
        <span
          key={i}
          className="qa-split-char"
          style={{ animationDelay: `${baseDelay + i * 0.045}s` }}
          aria-hidden="true"
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

function SplitLine({ text, className = "", baseDelay = 0 }: { text: string; className?: string; baseDelay?: number }) {
  const chars = Array.from(text);
  return (
    <span className={`qa-split ${className}`} aria-label={text}>
      {chars.map((ch, i) => (
        <span
          key={i}
          className="qa-split-char"
          style={{ animationDelay: `${baseDelay + i * 0.04}s` }}
          aria-hidden="true"
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

function SplitTimeline({
  steps,
}: {
  steps: ReadonlyArray<{ period: string; role: string; company: string; points: readonly string[] }>;
}) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  return (
    <ol className="qa-split-timeline" aria-label="QA experience timeline">
      {steps.map((step, index) => {
        const isOpen = openIndex === index;
        const panelId = `qa-split-journey-${index}`;
        return (
          <li key={step.period} className={`qa-stl-item${isOpen ? " is-open" : ""}`}>
            <div className="qa-stl-date">
              <p className="qa-stl-period">{step.period}</p>
              <p className="qa-stl-company">{step.company}</p>
            </div>
            <div className="qa-stl-rail" aria-hidden="true">
              <span className="qa-stl-node" />
            </div>
            <div className="qa-stl-body">
              <button
                type="button"
                className="qa-stl-toggle"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="qa-stl-role">{step.role}</span>
                <ChevronDown aria-hidden="true" className={`qa-stl-chev${isOpen ? " is-open" : ""}`} />
              </button>
              {isOpen ? (
                <div id={panelId} className="qa-stl-panel">
                  <ul className="qa-stl-points">
                    {step.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
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
      <SectionHeading num="05" eyebrow="Education" title="Academic background" />
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

function SectionHeading({ eyebrow, title, num: _num }: { eyebrow: string; title: string; num?: string }) {
  return (
    <div className="qa-section-heading">
      <div className="qa-section-head-row">
        <span className="qa-eyebrow">— {eyebrow}</span>
      </div>
      <h2 className="qa-section-title-v2">{title}</h2>
    </div>
  );
}

export function RedirectToPortfolioSection({ section }: { section: SectionKey }) {
  return <Navigate to="/" hash={section} replace />;
}

type TrackId = "manual" | "api" | "automation" | "sql" | "load";

const technicalTracks = [
  {
    id: "manual",
    title: "Manual Testing",
    icon: TestTube2,
    level: "Advanced",
    summary:
      "Functional, regression, smoke, and exploratory testing across web platforms and internal tooling.",
    points: ["Risk-based test design", "Exploratory charters", "Reproducible defect trails"],
    visual: "none",
  },
  {
    id: "api",
    title: "API Testing",
    icon: FlaskConical,
    level: "Advanced",
    summary:
      "Request/response validation across REST endpoints with status, schema, and backend workflow checks.",
    points: ["Postman collections", "Schema & status assertions", "Auth and negative flows"],
    visual: "flow",
  },
  {
    id: "automation",
    title: "Automation",
    icon: Bug,
    level: "Intermediate",
    summary: "Playwright specs for critical user journeys, wired into repeatable regression runs.",
    points: ["Playwright end-to-end specs", "Stable selectors & fixtures", "CI-friendly reporting"],
    visual: "code",
  },
  {
    id: "sql",
    title: "SQL & Database",
    icon: DatabaseZap,
    level: "Intermediate",
    summary: "Data validation, integrity checks, and query-based verification across transactional schemas.",
    points: ["Joins & aggregate verification", "Data integrity audits", "Backend state checks"],
    visual: "none",
  },
  {
    id: "load",
    title: "Load Testing",
    icon: TimerReset,
    level: "Working",
    summary: "JMeter fundamentals for traffic shaping and performance baselines.",
    points: ["Thread group modelling", "UI load runs with Playwright", "Baseline comparisons"],
    visual: "none",
  },
] as const;

function SkillsExplorer() {
  const [active, setActive] = React.useState<TrackId>(technicalTracks[0].id);
  const track = technicalTracks.find((t) => t.id === active) ?? technicalTracks[0];
  const ActiveIcon = track.icon;

  return (
    <div className="qa-skx">
      <div className="qa-skx-rail" role="tablist" aria-label="Technical skills">
        {technicalTracks.map((t, i) => {
          const Icon = t.icon;
          const on = t.id === active;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={on}
              className={`qa-skx-tab${on ? " is-active" : ""}`}
              onClick={() => setActive(t.id)}
              onMouseEnter={() => setActive(t.id)}
            >
              <span className="qa-skx-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="qa-skx-tab-icon"><Icon aria-hidden="true" /></span>
              <span className="qa-skx-tab-title">{t.title}</span>
              <span className="qa-skx-tab-level">{t.level}</span>
            </button>
          );
        })}
      </div>

      <div className="qa-skx-panel" key={track.id}>
        <div className="qa-skx-panel-head">
          <span className="qa-skx-panel-icon"><ActiveIcon aria-hidden="true" /></span>
          <div>
            <h3 className="qa-skx-panel-title">{track.title}</h3>
            <span className="qa-skx-panel-level">{track.level}</span>
          </div>
        </div>
        <p className="qa-skx-panel-text">{track.summary}</p>
        <ul className="qa-skx-panel-list">
          {track.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        {track.visual === "flow" ? (
          <div className="qa-api-flow" aria-hidden="true">
            <span className="qa-api-pill qa-api-pill-req">
              <span className="qa-api-dot" />
              GET /users
            </span>
            <span className="qa-api-arrow">→</span>
            <span className="qa-api-pill qa-api-pill-srv">Backend</span>
            <span className="qa-api-arrow">→</span>
            <span className="qa-api-pill qa-api-pill-res">
              <span className="qa-api-dot qa-api-dot-ok" />
              200 OK
            </span>
          </div>
        ) : null}

        {track.visual === "code" ? (
          <div className="qa-ide" aria-hidden="true">
            <div className="qa-ide-bar">
              <span className="qa-ide-dot qa-ide-dot-r" />
              <span className="qa-ide-dot qa-ide-dot-y" />
              <span className="qa-ide-dot qa-ide-dot-g" />
              <span className="qa-ide-tab">login.spec.ts</span>
            </div>
            <pre className="qa-ide-body">
{`test('user can sign in', async ({ page }) => {
  await page.goto('/login');
  await page.getByLabel('Email').fill('qa@demo.io');
  await expect(page).toHaveURL(/dashboard/);
});`}
            </pre>
          </div>
        ) : null}
      </div>

      <div className="qa-skx-soft">
        <span className="qa-eyebrow">— Soft Skills</span>
        <div className="qa-skx-soft-grid">
          {softSkills.map(({ title, detail, icon: Icon }) => (
            <div key={title} className="qa-skx-soft-card">
              <span className="qa-skx-soft-icon"><Icon aria-hidden="true" /></span>
              <span className="qa-skx-soft-name">{title}</span>
              <span className="qa-skx-soft-detail">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
