import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaCss3Alt,
  FaDatabase,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileWord,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiC, SiExpress, SiFlask, SiMongodb } from "react-icons/si";
import {
  Award,
  BrainCircuit,
  CalendarDays,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  Phone,
  Sparkles,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import "./styles.css";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  detail: string;
  image?: string;
  pdf?: string;
};
const certs: Cert[] = [
  {
    title: "Hardwired 2.0",
    issuer: "IEDC · UEM Kolkata",
    date: "19 September 2025",
    detail: "Certificate of Participation · CSE (AI) and CSE (AI & ML)",
    image: "/assets/certificates/page-1.png",
  },
  {
    title: "Introduction to Programming in C",
    issuer: "NPTEL · IIT Kanpur",
    date: "Jul–Sep 2025",
    detail: "Elite · 67% · 8-week course · 2 or 3 credits recommended",
    image: "/assets/certificates/page-2.png",
    pdf: "/assets/nptel-c-source.pdf",
  },
  {
    title: "Academic Rank 10",
    issuer: "Institute of Engineering & Management Kolkata, Newtown",
    date: "Academic year 2024–2025",
    detail: "Rank 10 in First Year examination among the same batch",
    image: "/assets/certificates/page-3.png",
  },
  {
    title: "ML Canvas 4.0",
    issuer: "Department of CSE (AI & ML)",
    date: "20 January 2026",
    detail: "Third Runner-Up · Agentic AI · Certificate of Merit",
    image: "/assets/certificates/page-4.png",
  },
  {
    title: "The Joy of Computing using Python",
    issuer: "NPTEL · IIT Madras",
    date: "Jan–Apr 2026",
    detail: "Elite + Silver · 80% · 12-week course · 4 credits",
    image: "/assets/certificates/nptel-python.png",
    pdf: "/assets/nptel-python-source.pdf",
  },
  {
    title: "ML Canvas 5.0",
    issuer: "Department of CSE (AI & ML) and CSE (AI)",
    date: "12 August 2026",
    detail:
      "Quantum Computing · uploaded certificate says Participation; CV lists First Runner-Up",
    image: "/assets/ml-canvas-5.jpg",
  },
  {
    title: "Data Structures & Algorithms – Amazon",
    issuer: "Coursera",
    date: "Listed on CV",
    detail: "Data Structures & Algorithms certification",
  },
];
const skills = [
  ["Programming", ["Python", "Java", "C"], Code2],
  [
    "DSA with Java",
    [
      "Array",
      "Linked List",
      "Stack",
      "Queues",
      "Trees",
      "Graphs",
      "Dynamic Programming",
    ],
    Layers3,
  ],
  [
    "AI / ML",
    [
      "Supervised Learning",
      "Unsupervised Learning",
      "Classification",
      "Regression",
      "Model Training",
      "Evaluation",
    ],
    BrainCircuit,
  ],
  [
    "Generative AI",
    ["LLMs", "Prompt Engineering", "AI API Integration"],
    Sparkles,
  ],
  [
    "MERN / Web",
    [
      "HTML",
      "CSS",
      "JavaScript",
      "Flask",
      "REST API",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
    ],
    Zap,
  ],
  ["Productivity", ["MS Word", "Excel", "PowerPoint"], Layers3],
] as const;
const skillIcons: Record<string, any> = {
  Python: FaPython,
  Java: FaJava,
  C: SiC,
  Array: FaDatabase,
  "Linked List": Code2,
  Stack: Layers3,
  Queues: Layers3,
  Trees: Layers3,
  Graphs: Layers3,
  "Dynamic Programming": BrainCircuit,
  "Supervised Learning": BrainCircuit,
  "Unsupervised Learning": BrainCircuit,
  Classification: BrainCircuit,
  Regression: BrainCircuit,
  "Model Training": BrainCircuit,
  Evaluation: BrainCircuit,
  LLMs: Sparkles,
  "Prompt Engineering": Sparkles,
  "AI API Integration": Code2,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  Flask: SiFlask,
  "REST API": Code2,
  MongoDB: SiMongodb,
  "Express.js": SiExpress,
  "React.js": FaReact,
  "Node.js": FaNodeJs,
  "MS Word": FaFileWord,
  Excel: FaFileExcel,
  PowerPoint: FaFilePowerpoint,
};
const projects = [
  [
    "Neuro-Visual Mood Recommender",
    "Sep 2025",
    "Multimodal AI",
    "Combines facial emotion recognition and EEG brain-signal analysis for mood detection and personalized music recommendations.",
    [
      "Alpha, beta, theta and gamma EEG features + facial cues.",
      "ML/DL processing with multimodal fusion.",
      "Flask + MongoDB + React for real-time analysis.",
    ],
    ["Python", "ML/DL", "EEG", "Facial Emotion", "Flask", "MongoDB", "React"],
  ],
  [
    "AI-Powered Code Reviewer & Chatbot",
    "Jun 2026",
    "Generative AI · MERN",
    "Full-stack AI platform using Groq AI with Llama for automated code review and conversational assistance.",
    [
      "Bug detection, code improvement and intelligent responses.",
      "JWT authentication, user profiles and review history.",
      "MongoDB-backed persistence.",
    ],
    ["MERN", "Groq AI", "Llama", "JWT", "MongoDB"],
  ],
  [
    "AI Code Reviewer",
    "Jun 2026",
    "Llama 3.3",
    "AI code-review workflow providing structured feedback and corrected code.",
    [
      "Structured code analysis and corrected-code suggestions.",
      "JWT authentication and MongoDB review history.",
      "Groq API + Llama 3.3.",
    ],
    ["MERN", "Groq API", "Llama 3.3", "JWT", "MongoDB"],
  ],
  [
    "AI Sales Development Representative (AI-SDR)",
    "2026",
    "Agentic AI · MERN",
    "AI-SDR platform for intelligent lead generation, qualification and personalized sales outreach.",
    [
      "AI-based lead generation, scoring and qualification.",
      "Knowledge Base with RAG for eligibility-based lead evaluation.",
      "Personalized AI email generation, chatbot and MongoDB campaign storage.",
    ],
    [
      "MERN",
      "Generative AI",
      "RAG",
      "Agentic AI",
      "Lead Scoring",
      "MongoDB",
    ],
  ],
] as const;
const projectDetails: Record<string, string> = {
  "Neuro-Visual Mood Recommender":
    "Multimodal pipeline combining EEG and facial signals, with Flask APIs, MongoDB persistence and a React interface.",
  "AI-Powered Code Reviewer & Chatbot":
    "Authenticated MERN workflow using Groq and Llama for code review, conversational assistance and saved review history.",
  "AI Code Reviewer":
    "Structured code analysis powered by Groq API and Llama 3.3, with JWT authentication and MongoDB-backed review history.",
  "AI Sales Development Representative (AI-SDR)":
    "Agentic sales workflow connecting lead generation, scoring, RAG-based eligibility checks, personalized email generation and chatbot support.",
};
const edu = [
  [
    "2024–2028",
    "CSE (AI)",
    "Institute of Engineering & Management, Kolkata",
    "CGPA 8.71",
  ],
  ["2024", "Class XII · WBCHSE", "Aligunj R.R.B. Vidyalaya", "75.8%"],
  ["2022", "Class X · WBBSE", "Agarbandh High School", "90.7%"],
];
const nav = [
  "home",
  "about",
  "skills",
  "projects",
  "achievements",
  "education",
  "contact",
];
function App() {
  const [active, setActive] = useState("home"),
    [open, setOpen] = useState<Cert | null>(null),
    [mobile, setMobile] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const f = () => {
      let a = "home";
      for (const id of nav) {
        const e = document.getElementById(id);
        if (e && e.getBoundingClientRect().top < 220) a = id;
      }
      setActive(a);
    };
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobile(false);
  };
  const closeModal = () => {
    setOpen(null);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };
  useEffect(() => {
    if (!open) return;
    const modal = modalRef.current;
    if (!modal) return;
    const focusable = modal.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusable[0]?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);
  return (
    <div className="page">
      <div className="bg">
        <div className="gridbg" />
        <div className="orb o1" />
        <div className="orb o2" />
      </div>
      <header>
        <button className="logo" onClick={() => go("home")}>
          <span>
            <Sparkles size={15} />
          </span>
          SANIA<span className="cyan">.</span>
        </button>
        <nav>
          {nav.map((n) => (
            <button
              className={active === n ? "active" : ""}
              onClick={() => go(n)}
              key={n}
            >
              {n}
            </button>
          ))}
        </nav>
        <div className="head-actions">
          <a
            href="/assets/Sania_Cv%20final.pdf"
            download
            aria-label="Download Sania Kundu's CV"
          >
            <Download size={15} />
            Download CV
          </a>
          <button className="primary" onClick={() => go("contact")}>
            Let's Connect <ChevronRight size={15} />
          </button>
        </div>
        <button
          className="hamb"
          onClick={() => setMobile(!mobile)}
          aria-label={mobile ? "Close navigation" : "Open navigation"}
          aria-expanded={mobile}
          aria-controls="mobile-navigation"
        >
          {mobile ? <X /> : <Menu />}
        </button>
      </header>
      {mobile && (
        <div className="mobile-nav" id="mobile-navigation">
          {nav.map((n) => (
            <button key={n} onClick={() => go(n)}>
              {n}
            </button>
          ))}
          <a
            href="/assets/Sania_Cv%20final.pdf"
            download
            className="mobile-cv"
            aria-label="Download Sania Kundu's CV"
          >
            <Download size={15} />
            Download CV
          </a>
          <button className="primary mobile-connect" onClick={() => go("contact")}>
            Let's Connect <ChevronRight size={15} />
          </button>
        </div>
      )}
      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <i /> CSE (AI) · AI/ML · FULL-STACK
            </div>
            <h1>
              Building <b>intelligent</b>
              <br />
              digital experiences.
            </h1>
            <p>
              Hi, I'm <strong>Sania Kundu</strong> — a CSE (AI) student
              building Generative AI, AI/ML and MERN applications through
              hands-on projects and competitions.
            </p>
            <div className="actions">
              <button className="primary big" onClick={() => go("projects")}>
                View Projects <ChevronRight />
              </button>
              <button
                className="secondary big"
                onClick={() => go("achievements")}
              >
                Explore Certificates <Award />
              </button>
            </div>
            <div className="facts">
              <span>
                <GraduationCap />
                CGPA 8.71
              </span>
              <span>
                <Trophy />
                Rank 10 · First Year
              </span>
              <span>
                <Zap />
                AI + MERN
              </span>
            </div>
          </div>
          <motion.div
            className="portrait-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="portrait"
              animate={{ y: [0, -9, 0], rotateZ: [0, 0.5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <img src="/assets/sania-kundu.jpg" alt="Sania Kundu" />
              <div className="nameplate">
                <b>SANIA KUNDU</b>
                <small>AI / ML · CSE (AI)</small>
              </div>
              <span className="chip c1">PYTHON</span>
              <span className="chip c2">LLM</span>
              <span className="chip c3">MERN</span>
            </motion.div>
          </motion.div>
        </section>
        <Section
          id="about"
          n="01 · ABOUT"
          title={
            <>
              Curious about <em>systems that think.</em>
            </>
          }
        >
          <div className="about-grid">
            <div className="glass large">
              <p className="lead">
                Sania is pursuing <strong>CSE (AI)</strong> at the Institute of
                Engineering & Management, Kolkata. Her documented work sits at
                the intersection of AI/ML, Generative AI and practical
                full-stack development.
              </p>
              <div className="mini-grid">
                <div>
                  <b>8.71</b>
                  <span>Current CGPA</span>
                </div>
                <div>
                  <b>4</b>
                  <span>Documented projects</span>
                </div>
                <div>
                  <b>2026</b>
                  <span>Latest project year</span>
                </div>
              </div>
            </div>
            <div className="glass">
              <div className="card-title">
                <BrainCircuit />
                AI Focus
              </div>
              <div className="tags">
                {[
                  "Machine Learning",
                  "Generative AI",
                  "LLMs",
                  "Prompt Engineering",
                  "Multimodal AI",
                  "Computer Vision",
                  "MERN Stack",
                ].map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section
          id="skills"
          n="02 · TOOLKIT"
          title={
            <>
              Skills, organized by <em>how they work.</em>
            </>
          }
        >
          <div className="skill-grid">
            {skills.map(([label, items, Icon], i) => (
              <motion.div
                className="skill"
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <div className="card-title">
                  <span className="icon">
                    <Icon />
                  </span>
                  {label}
                </div>
                <div className="tags">
                  {items.map((x) => (
                    <span className="skill-tag" key={x}>
                      {(() => {
                        const SkillIcon = skillIcons[x] ?? Code2;
                        return <SkillIcon aria-hidden="true" />;
                      })()}
                      {x}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
        <Section
          id="projects"
          n="03 · PROJECTS"
          title={
            <>
              Ideas turned into <em>working systems.</em>
            </>
          }
        >
          <div className="project-list">
            {projects.map((p, i) => (
              <Project key={p[0]} p={p} i={i} />
            ))}
          </div>
        </Section>
        <Section
          id="achievements"
          n="04 · ACHIEVEMENTS"
          title={
            <>
              Proof of <em>learning & participation.</em>
            </>
          }
        >
          <p className="section-note">
            Every uploaded certificate page is separated into its own card. Open
            a card for the original page in a large lightbox.
          </p>
          <div className="cert-grid">
            {certs.map((c, i) => (
              <motion.button
                className="cert"
                key={c.title}
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setOpen(c);
                }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.035 }}
              >
                <div className="thumb">
                  {c.image ? (
                    <img
                      loading="lazy"
                      src={c.image}
                      alt={`${c.title} certificate`}
                    />
                  ) : (
                    <Award />
                  )}
                  <span>
                    View <ChevronRight />
                  </span>
                </div>
                <div className="cert-info">
                  <small>{c.issuer}</small>
                  <h3>{c.title}</h3>
                  <p>{c.detail}</p>
                  <div>
                    <CalendarDays />
                    {c.date}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </Section>
        <Section
          id="education"
          n="05 · EDUCATION"
          title={
            <>
              The academic <em>timeline.</em>
            </>
          }
        >
          <div className="timeline">
            {edu.map((e) => (
              <div className="edu" key={e[0]}>
                <i />
                <div className="glass">
                  <small>{e[0]}</small>
                  <h3>{e[1]}</h3>
                  <p>{e[2]}</p>
                  <b>{e[3]}</b>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section
          id="contact"
          n="06 · CONTACT"
          title={
            <>
              Let's build the next <em>idea.</em>
            </>
          }
        >
          <div className="contact glass">
            <div className="contact-intro">
              <div className="eyebrow"><i /> OPEN TO OPPORTUNITIES</div>
              <h3>Have an idea worth building?</h3>
              <p>
                I am open to internships, collaborative projects, and thoughtful
                conversations around AI/ML and full-stack development.
              </p>
              <a className="contact-cta" href="mailto:Saniakundu36@gmail.com">
                Start a conversation <ChevronRight />
              </a>
              <div className="contact-meta">
                <span><i /> Usually replies within 24 hours</span>
                <span>Based in Kolkata, India</span>
              </div>
            </div>
            <div className="contact-links">
              <a href="mailto:Saniakundu36@gmail.com">
                <Mail />
                <span><small>Email</small>Saniakundu36@gmail.com</span>
                <ExternalLink />
              </a>
              <a href="tel:+919732102807">
                <Phone />
                <span><small>Phone</small>(+91) 9732102807</span>
                <ExternalLink />
              </a>
              <a
                href="https://linkedin.com/in/sania-kundu-885669322"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 />
                <span><small>Professional network</small>LinkedIn</span>
                <ExternalLink />
              </a>
              <a
                href="https://github.com/SaniaKundu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 />
                <span><small>Projects and code</small>GitHub</span>
                <ExternalLink />
              </a>
            </div>
          </div>
        </Section>
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Sania Kundu</span>
        <span>AI · code · curiosity</span>
        <button onClick={() => go("home")}>Back to top ↑</button>
      </footer>
      <AnimatePresence>
        {open && (
          <motion.div
            className="modal-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-modal-title"
              tabIndex={-1}
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <button
                className="close"
                onClick={closeModal}
                aria-label="Close certificate preview"
              >
                <X />
              </button>
              <div className="preview">
                {open.image ? (
                  <img src={open.image} alt={open.title} />
                ) : (
                  <div className="missing">
                    <Award size={42} />
                    <b>{open.title}</b>
                    <span>
                      The CV lists this certification; no separate certificate
                      image was uploaded.
                    </span>
                  </div>
                )}
              </div>
              <div className="modal-info">
                <small>{open.issuer}</small>
                <h2 id="certificate-modal-title">{open.title}</h2>
                <p>
                  <CalendarDays /> {open.date}
                </p>
                <p>{open.detail}</p>
                {open.pdf && (
                  <a
                    className="primary"
                    href={open.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open source PDF <ExternalLink />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
function Section({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="section-head">
        <small>{n}</small>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
function Project({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const [more, setMore] = useState(false);
  const isFeatured = p[0] === "AI Sales Development Representative (AI-SDR)";
  return (
    <motion.article
      className="project glass"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="pnum">0{i + 1}</div>
      <div>
        <small>
          {p[2]} · {p[1]}
        </small>
        <h3>
          {p[0]}
          {isFeatured && <span className="featured-label">Featured</span>}
        </h3>
        <p>{p[3]}</p>
        <div className="tags">
          {p[5].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </div>
      <div className="project-detail">
        <ul>
          {p[4].map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <button onClick={() => setMore(!more)}>
          {" "}
          {more ? "Hide" : "View"} system details{" "}
          <ChevronRight className={more ? "rot" : ""} />
        </button>
        {more && (
          <div className="more">
            {projectDetails[p[0]]}
          </div>
        )}
      </div>
    </motion.article>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
