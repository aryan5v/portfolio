"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg";
import { TextScramble } from "@/components/ui/text-scramble";
import {
  SiPython,
  SiTypescript,
  SiCplusplus,
  SiC,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiDocker,
  SiLangchain,
  SiPytorch,
  SiFastapi,
  SiGit,
  SiAmazonwebservices,
  SiTensorflow,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiKubernetes,
  SiRedis,
  SiLinux,
  SiNvidia,
  SiHuggingface,
  SiMlflow,
  SiApachespark,
  SiFlask,
  SiGooglecloud,
  SiWeightsandbiases,
} from "react-icons/si";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  FileText,
  Brain,
  Cpu,
  Eye,
  Sigma,
  Server,
  Layers,
  Zap,
  BarChart3,
  Binary,
  Microscope,
  Target,
  Boxes,
  Workflow,
  Users,
  Wrench,
  Network,
  Bot,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────── */
/*  DATA                                                        */
/* ──────────────────────────────────────────────────────────── */

const experience = [
  {
    num: "01",
    company: "BOARDWALKTECH",
    url: "https://www.boardwalktech.com",
    tags: "AI AGENTS, RAG, NLP, LLM SYSTEMS",
    description:
      "Designing and deploying AI agent systems for enterprise automation — multi-agent orchestration, tool-calling agents (APIs, databases, code execution), and self-correcting planning loops. Building production RAG pipelines with vector search optimization and LLM serving for Fortune 500 clients. Shipping autonomous agents that automate complex workflows for multiple enterprise clients.",
    roles: [
      { title: "ML & Software Engineer", date: "AUG 2025 – NOW" },
      { title: "ML & AI Engineering Intern", date: "MAY – AUG 2025" },
    ],
    colors: ["#3B82F6", "#8B5CF6", "#06B6D4"],
    span: "md:col-span-3",
    logo: "/boardwalktech_logo-2-removebg-preview.png",
  },
  {
    num: "02",
    company: "UL SOLUTIONS",
    url: "https://www.ul.com",
    tags: "DATA PIPELINES, ETL, AUTOMATION",
    description:
      "Built and maintained scalable data pipelines and ETL workflows for safety compliance data. Automated data quality checks and validation across high-volume datasets; processed and validated large-scale compliance records for downstream analytics.",
    roles: [
      { title: "Software and Data Intern", date: "MAY – AUG 2025" },
    ],
    colors: ["#F59E0B", "#FBBF24", "#F97316"],
    span: "",
    logo: "/logos/ul-solutions.svg",
  },
  {
    num: "03",
    company: "SJSU RESEARCH FOUNDATION",
    url: "https://www.sjsu.edu/researchfoundation",
    tags: "RESEARCH, STATISTICAL MODELING",
    description:
      "Applied statistical methods and hypothesis testing to environmental data under Dr. Costanza Rampini. Built reproducible analysis pipelines for Rapid Trash Assessment research.",
    roles: [
      { title: "Research Assistant", date: "MAR – OCT 2025" },
    ],
    colors: ["#6366F1", "#818CF8", "#A5B4FC"],
    span: "",
    logo: "/462-4626870_san-jose-state-university-spartan-png-download-spartans-removebg-preview.png",
  },
  {
    num: "04",
    company: "SAN JOSÉ STATE UNIVERSITY",
    url: "https://www.sjsu.edu",
    tags: "ANALYTICS, STATISTICAL ANALYSIS",
    description:
      "Regression modeling, hypothesis testing, and data visualization at scale for university operations and enrollment insights.",
    roles: [
      { title: "Data Analyst Intern", date: "FEB 2025 – NOW" },
    ],
    colors: ["#10B981", "#34D399", "#6EE7B7"],
    span: "",
    logo: "/462-4626870_san-jose-state-university-spartan-png-download-spartans-removebg-preview.png",
  },
  {
    num: "05",
    company: "SPARTAN RACING — FORMULA SAE",
    url: "#",
    tags: "REAL-TIME SYSTEMS, SIGNAL PROCESSING, TELEMETRY",
    description:
      "Sensor fusion and real-time telemetry processing for electric race cars — time-series analysis over 50+ sensors, performance prediction under hardware constraints, and embedded data systems. Team ranked 2nd nationally.",
    roles: [
      { title: "Data & Software Engineer", date: "MAY 2024 – AUG 2025" },
    ],
    colors: ["#EC4899", "#F472B6", "#A855F7"],
    span: "md:col-span-3",
    logo: "/sjsufsae_logo-removebg-preview.png",
  },
];

// Used when PROJECTS section is uncommented
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const projects = [
  {
    name: "SYNQUI",
    oneLiner: "AI-powered workflow automation for teams",
    tags: "AI AGENTS, LLM, TOOL CALLING, MULTI-AGENT",
    description:
      "Building an agentic platform that orchestrates multi-step workflows with tool-calling LLMs, self-correcting planning, and integrations. Designed for teams that need reliable automation without brittle scripts.",
    github: "https://github.com/aryankumar01",
    demo: "#",
  },
  {
    name: "LLM FINE-TUNING (LoRA/PEFT)",
    oneLiner: "Efficient adaptation of small models for domain-specific tasks",
    tags: "PYTORCH, FINE-TUNING, LoRA, PEFT, HUGGING FACE",
    description:
      "Fine-tuned open-source LLMs using LoRA and PEFT for task-specific behavior — reduced trainable parameters while preserving base model capabilities. Experimented with instruction tuning and alignment techniques.",
    github: "https://github.com/aryankumar01",
    demo: "#",
  },
  {
    name: "RAG + AGENT PIPELINE",
    oneLiner: "Retrieval-augmented agent with tool use and planning",
    tags: "RAG, LANGGRAPH, VECTOR DB, TOOL CALLING",
    description:
      "End-to-end RAG pipeline with an agent layer: semantic search over documents, tool-calling for APIs and code, and a planning loop that corrects on failure. Built for enterprise knowledge bases and internal tools.",
    github: "https://github.com/aryankumar01",
    demo: "#",
  },
];

const techGroups = [
  {
    title: "ML & DEEP LEARNING",
    items: [
      { icon: SiPytorch, label: "PYTORCH" },
      { icon: SiTensorflow, label: "TENSORFLOW" },
      { icon: SiHuggingface, label: "HUGGING FACE" },
      { icon: SiWeightsandbiases, label: "W&B" },
      { icon: SiScikitlearn, label: "SCIKIT-LEARN" },
      { icon: SiMlflow, label: "MLFLOW" },
      { icon: Brain, label: "JAX" },
    ],
  },
  {
    title: "AI AGENTS & AUTOMATION",
    items: [
      { icon: Workflow, label: "LANGGRAPH" },
      { icon: Users, label: "CREWAI" },
      { icon: Wrench, label: "TOOL CALLING" },
      { icon: Network, label: "MULTI-AGENT SYSTEMS" },
      { icon: Bot, label: "AUTOGEN" },
    ],
  },
  {
    title: "LLMs & NLP",
    items: [
      { icon: Layers, label: "FINE-TUNING (LoRA/PEFT)" },
      { icon: Zap, label: "RAG" },
      { icon: SiLangchain, label: "LANGCHAIN" },
      { icon: Server, label: "vLLM" },
      { icon: Binary, label: "TOKENIZERS" },
      { icon: Target, label: "PROMPT ENGINEERING" },
    ],
  },
  {
    title: "COMPUTER VISION",
    items: [
      { icon: SiOpencv, label: "OPENCV" },
      { icon: Eye, label: "YOLO" },
      { icon: Boxes, label: "DETECTRON2" },
    ],
  },
  {
    title: "SYSTEMS & LOW-LEVEL",
    items: [
      { icon: SiNvidia, label: "CUDA" },
      { icon: SiCplusplus, label: "C++" },
      { icon: SiC, label: "C" },
      { icon: Cpu, label: "TRITON" },
      { icon: SiLinux, label: "LINUX" },
      { icon: Microscope, label: "DEEPSPEED / FSDP" },
    ],
  },
  {
    title: "FULL STACK & CLOUD",
    items: [
      { icon: SiPython, label: "PYTHON" },
      { icon: SiTypescript, label: "TYPESCRIPT" },
      { icon: SiReact, label: "REACT" },
      { icon: SiNextdotjs, label: "NEXT.JS" },
      { icon: SiFastapi, label: "FASTAPI" },
      { icon: SiFlask, label: "FLASK" },
      { icon: SiDocker, label: "DOCKER" },
      { icon: SiKubernetes, label: "KUBERNETES" },
      { icon: SiAmazonwebservices, label: "AWS" },
      { icon: SiGooglecloud, label: "GCP" },
      { icon: SiGit, label: "GIT" },
    ],
  },
  {
    title: "DATA & INFRA",
    items: [
      { icon: SiPostgresql, label: "POSTGRESQL" },
      { icon: SiRedis, label: "REDIS" },
      { icon: SiApachespark, label: "SPARK" },
      { icon: Boxes, label: "VECTOR DBs" },
      { icon: SiNumpy, label: "NUMPY" },
      { icon: SiPandas, label: "PANDAS" },
    ],
  },
  {
    title: "MATH & THEORY",
    items: [
      { icon: Sigma, label: "LINEAR ALGEBRA" },
      { icon: BarChart3, label: "PROBABILITY & STATISTICS" },
      { icon: Target, label: "OPTIMIZATION" },
      { icon: Binary, label: "NUMERICAL METHODS" },
    ],
  },
];

const navLinks = [
  { label: "GITHUB", href: "https://github.com/aryan5v", icon: Github },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/aryan-kumar01",
    icon: Linkedin,
  },
  { label: "MAIL", href: "mailto:1@aryank.xyz", icon: Mail },
  { label: "RESUME", href: "/resume_aryan.pdf", icon: FileText },
];

/* ──────────────────────────────────────────────────────────── */
/*  ANIMATION VARIANTS                                          */
/* ──────────────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

/* ──────────────────────────────────────────────────────────── */
/*  PAGE                                                        */
/* ──────────────────────────────────────────────────────────── */

const viewportOnce = { once: true, margin: "-50px" as const };

type ExperienceItem = (typeof experience)[number];

function ExperienceCard({
  exp,
  idx,
}: {
  exp: ExperienceItem;
  idx: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl border border-white/5 p-5 sm:p-6 ${exp.span}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3 + idx * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <AnimatedGradient
        colors={exp.colors}
        speed={0.05}
        blur="heavy"
        runAnimation={isInView}
      />
      <div className="relative z-10">
        <div className="mb-3 flex items-center gap-2.5">
          <Image
            src={exp.logo}
            alt={exp.company}
            width={24}
            height={24}
            className="h-6 w-6 shrink-0 object-contain brightness-0 invert opacity-70"
          />
          <a
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-sm font-bold tracking-wide text-white transition hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          >
            {exp.company}
            <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition group-hover:opacity-100" />
          </a>
        </div>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {exp.tags.split(", ").map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-white/5 px-2 py-0.5 text-[10px] tracking-wider text-white/35"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="mb-3 text-sm leading-relaxed text-white/50">
          {exp.description}
        </p>
        {exp.roles.map((role) => (
          <div
            key={role.title}
            className="flex items-baseline justify-between border-t border-white/5 py-2"
          >
            <span className="text-sm text-white/60">{role.title}</span>
            <span className="ml-3 shrink-0 text-xs text-white/30">
              {role.date}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* ── NAV ─────────────────────────────────────────────── */}
      <motion.nav
        className="mx-auto flex max-w-3xl items-center justify-between px-6 pt-8 pb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-6 text-xs tracking-wider text-white/50">
          <span className="text-white/90">AK</span>
        </div>
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 transition hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              title={link.label}
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </motion.nav>

      <main className="mx-auto max-w-3xl px-6 pb-20">
        {/* ── HERO ────────────────────────────────────────────── */}
        <motion.section
          className="mb-16 flex flex-col gap-4 px-2 sm:flex-row sm:items-center sm:gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            src="/IMG_7025.JPG"
            alt="Aryan Kumar"
            width={96}
            height={96}
            className="h-20 w-20 shrink-0 rounded-lg object-cover grayscale sm:h-24 sm:w-24"
          />
          <div className="min-w-0">
            <TextScramble
              as="h1"
              className="mb-1 text-2xl font-bold tracking-tight text-white sm:text-3xl"
              duration={1.2}
              speed={0.035}
              characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ01234"
            >
              ARYAN KUMAR
            </TextScramble>
            <TextScramble
              as="p"
              className="text-sm tracking-wider text-white/50"
              duration={1.0}
              speed={0.03}
              characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ/&@. "
            >
              ML &amp; SOFTWARE ENGINEER / MATH &amp; CS @SJSU
            </TextScramble>
            <div className="mt-1.5 flex items-center gap-2 text-xs tracking-wider text-white/30">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <TextScramble
                as="span"
                className="text-[11px] tracking-[0.15em] text-white/30"
                duration={1.4}
                speed={0.04}
                characterSet="0123456789°NSEW. "
              >
                37.77°N 122.42°W — SF BAY AREA, CA
              </TextScramble>
            </div>
            {/* <p className="mt-1.5 text-[11px] tracking-[0.2em] text-white/25">
              SEEKING ML / AI ENGINEER ROLES — 2026
            </p> */}
          </div>
        </motion.section>

        {/* ── ABOUT ───────────────────────────────────────────── */}
        <motion.section
          className="mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          custom={0}
        >
          <h2 className="mb-6 text-sm font-bold tracking-[0.2em] text-white/40">
            ABOUT ME
          </h2>
          <p className="mb-4 text-white/70">
            I am an ML &amp; software engineer at{" "}
            <a
              href="https://www.boardwalktech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              Boardwalktech
            </a>
            {" "}building AI agents, RAG pipelines, and LLM systems for
            enterprise clients. Previously I&apos;ve worked on data
            infrastructure, research, and real-time telemetry for electric race
            cars.
          </p>
          <p className="mb-4 text-white/70">
            Currently building{" "}
            <a
              href="https://synqui.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              @synqui
            </a>
            , digging into CUDA kernels, and exploring what makes agents
            actually reliable. Always up for building and learning alongside
            great people — say hi at{" "}
            <a
              href="mailto:1@aryank.xyz"
              className="text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              1@aryank.xyz
            </a>
            .
          </p>
        </motion.section>

        <motion.div
          className="section-divider mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4 }}
        />

        {/* ── EXPERIENCE ──────────────────────────────────────── */}
        <motion.section
          className="mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="mb-6 text-sm font-bold tracking-[0.2em] text-white/40">
            EXPERIENCE
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {experience.map((exp, idx) => (
              <ExperienceCard key={exp.num} exp={exp} idx={idx} />
            ))}
          </div>
        </motion.section>

        {/* <div className="section-divider mb-14" /> */}

        {/* ── PROJECTS (commented out for now) ─────────────────
        <section id="projects" className="mb-14">
          <h2 className="mb-6 text-sm font-bold tracking-[0.2em] text-white/40">
            PROJECTS
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((proj, idx) => (
              <motion.div
                key={proj.name}
                className="relative overflow-hidden rounded-2xl border border-white/5 p-5 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + idx * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <AnimatedGradient
                  colors={["#8B5CF6", "#06B6D4", "#3B82F6"]}
                  speed={0.05}
                  blur="heavy"
                />
                <div className="relative z-10">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold tracking-wide text-white">
                      {proj.name}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 transition hover:text-white/80"
                        title="GitHub"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      {proj.demo !== "#" && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/40 transition hover:text-white/80"
                          title="Demo"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mb-2 text-xs text-white/50">{proj.oneLiner}</p>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {proj.tags.split(", ").map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/8 bg-white/5 px-2 py-0.5 text-[10px] tracking-wider text-white/35"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-white/50">
                    {proj.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="section-divider mb-14" />
        ── END PROJECTS ──────────────────────────────────────── */}

        {/* ── TECH STACK ──────────────────────────────────────── */}
        <motion.section
          className="mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          custom={0}
        >
          <h2 className="mb-6 text-sm font-bold tracking-[0.2em] text-white/40">
            TECH STACK
          </h2>
          <div className="grid grid-cols-2 gap-x-12 gap-y-5 sm:grid-cols-3">
            {techGroups.map((group) => (
              <div key={group.title}>
                <p className="mb-2 text-[10px] font-bold tracking-[0.25em] text-white/25">
                  {group.title}
                </p>
                <ul className="space-y-1">
                  {group.items.map((tech) => (
                    <li
                      key={tech.label}
                      className="group flex min-w-0 items-center gap-2 text-xs tracking-wider text-white/40 transition hover:text-white/80"
                    >
                      <tech.icon className="h-3 w-3 shrink-0 text-white/20 transition group-hover:text-white/50" />
                      <span className="break-words">{tech.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="section-divider mb-14" />

        {/* ── EDUCATION ───────────────────────────────────────── */}
        <motion.section
          className="mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          custom={0}
        >
          <h2 className="mb-6 text-sm font-bold tracking-[0.2em] text-white/40">
            EDUCATION
          </h2>
          <div className="mb-4 flex items-start justify-between">
            <div>
              <a
                href="https://www.sjsu.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-bold tracking-wide text-white transition hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                SAN JOS&Eacute; STATE UNIVERSITY
                <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition group-hover:opacity-100" />
              </a>
              <p className="text-sm text-white/50">
                Bachelor&apos;s in Mathematics
              </p>
            </div>
            <span className="text-xs text-white/30">2022 – 2026</span>
          </div>
          <p className="mb-1.5 text-xs text-white/40">Relevant coursework</p>
          <div className="mb-4 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-wider text-white/30">
            <span>LINEAR ALGEBRA I & II</span>
            <span>REAL ANALYSIS</span>
            <span>NUMERICAL ANALYSIS & SCIENTIFIC COMPUTING</span>
            <span>LINEAR & NONLINEAR OPTIMIZATION</span>
            <span>COMBINATORICS</span>
            <span>GRAPH THEORY</span>
            <span>COMPLEX VARIABLES</span>
            <span>CRYPTOGRAPHY</span>
            <span>PROOFS</span>
          </div>
          <p className="mb-1.5 text-xs text-white/40">Achievements & certifications</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-wider text-white/30">
            <span>FOUNDER INSTITUTE</span>
            <span>BUILDSPACE S5</span>
            <span>ORACLE CLOUD INFRASTRUCTURE 2024</span>
            <span>GLOBAL SPARTAN SCHOLARSHIP</span>
          </div>
        </motion.section>

        <div className="section-divider mb-14" />

        {/* ── HOBBIES ──────────────────────────────────────────── */}
        <motion.section
          className="mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          custom={0}
        >
          <h2 className="mb-6 text-sm font-bold tracking-[0.2em] text-white/40">
            WHEN I&apos;M NOT CODING
          </h2>
          <div className="flex flex-wrap gap-4 text-2xl">
            <span title="F1">🏎️</span>
            <span title="Cricket">🏏</span>
            <span title="Photography">📸</span>
            <span title="Motorcycle">🏍️</span>
            <span title="Ping Pong">🏓</span>
            <span title="Soccer">⚽</span>
            <span title="Books">📚</span>
            <span title="Cars">🚗</span>
          </div>
        </motion.section>

        {/* ── FOOTER ──────────────────────────────────────────── */}
        <motion.footer
          className="section-divider pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="mb-6 text-xs italic leading-relaxed text-white/25">
            &ldquo;Become the best in the world at what you do. Keep redefining
            what you do until this is true.&rdquo;
            <span className="ml-1 not-italic text-white/15">— Naval Ravikant</span>
          </p>
          <p className="text-xs tracking-wider text-white/20">
            &copy;{new Date().getFullYear()}. ALL RIGHTS RESERVED.
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
