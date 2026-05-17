"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextScramble } from "@/components/ui/text-scramble";
import {
  SiAmazonwebservices,
  SiDocker,
  SiFastapi,
  SiGit,
  SiHuggingface,
  SiLinux,
  SiNextdotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPytorch,
  SiReact,
  SiRedis,
  SiScikitlearn,
  SiTypescript,
  SiWeightsandbiases,
  SiX,
} from "react-icons/si";
import {
  ArrowUpRight,
  ChevronDown,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const navLinks = [
  { label: "GITHUB", href: "https://github.com/aryan5v", icon: Github },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/aryan-kumar01",
    icon: Linkedin,
  },
  { label: "MAIL", href: "mailto:1@aryank.xyz", icon: Mail },
  { label: "TWITTER", href: "https://x.com/aryan_xv", icon: SiX },
  { label: "RESUME", href: "/resume_aryan.pdf", icon: FileText },
];

const prLinks = [
  {
    label: "FastVideo #1244",
    href: "https://github.com/hao-ai-lab/FastVideo/pull/1244",
  },
  {
    label: "FastVideo #1307",
    href: "https://github.com/hao-ai-lab/FastVideo/pull/1307",
  },
  {
    label: "FastVideo #1363",
    href: "https://github.com/hao-ai-lab/FastVideo/pull/1363",
  },
];

const experience = [
  {
    company: "BOARDWALKTECH",
    role: "ML & Software Engineer / AI Engineering Intern",
    date: "2025 - Present",
    description:
      "Production AI systems for enterprise workflows: agents, LLM-integrated software, data automation, evaluation, and deployment.",
    href: "https://www.boardwalktech.com",
    logo: "/boardwalktech_logo-2-removebg-preview.png",
  },
  {
    company: "UL SOLUTIONS",
    role: "Software & Data Intern",
    date: "2025",
    description:
      "Data pipelines, validation, and automation for compliance workflows.",
    href: "https://www.ul.com",
    logo: "/logos/ul-solutions.svg",
  },
  {
    company: "SJSU RESEARCH FOUNDATION",
    role: "Research Assistant",
    date: "2025",
    description:
      "Statistical modeling and reproducible analysis for environmental research.",
    href: "https://www.sjsu.edu/researchfoundation",
    logo: "/462-4626870_san-jose-state-university-spartan-png-download-spartans-removebg-preview.png",
  },
  {
    company: "SPARTAN RACING",
    role: "Data & Software Engineer",
    date: "2024 - 2025",
    description:
      "Telemetry, signal processing, and real-time data systems for Formula SAE.",
    href: "#",
    logo: "/sjsufsae_logo-removebg-preview.png",
  },
];

const toolPreview = [
  "Python",
  "PyTorch",
  "Hugging Face",
  "W&B",
  "TypeScript",
  "Docker",
  "Postgres",
  "Linux",
];

const toolGroups = [
  {
    title: "ML",
    items: [
      { icon: SiPytorch, label: "PyTorch" },
      { icon: SiHuggingface, label: "Hugging Face" },
      { icon: SiWeightsandbiases, label: "Weights & Biases" },
      { icon: SiScikitlearn, label: "scikit-learn" },
      { icon: SiNumpy, label: "NumPy" },
      { icon: SiOpencv, label: "OpenCV" },
    ],
  },
  {
    title: "Software",
    items: [
      { icon: SiTypescript, label: "TypeScript" },
      { icon: SiReact, label: "React" },
      { icon: SiNextdotjs, label: "Next.js" },
      { icon: SiFastapi, label: "FastAPI" },
      { icon: SiPandas, label: "Pandas" },
      { icon: SiGit, label: "Git" },
    ],
  },
  {
    title: "Systems",
    items: [
      { icon: SiDocker, label: "Docker" },
      { icon: SiLinux, label: "Linux" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: SiRedis, label: "Redis" },
      { icon: SiAmazonwebservices, label: "AWS" },
    ],
  },
];

const outsideWork = [
  { label: "F1", emoji: "🏎️" },
  { label: "Cricket", emoji: "🏏" },
  { label: "Photography", emoji: "📸" },
  { label: "Motorcycle", emoji: "🏍️" },
  { label: "Ping Pong", emoji: "🏓" },
  { label: "Soccer", emoji: "⚽" },
  { label: "Books", emoji: "📚" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const viewportOnce = { once: true, margin: "-60px" as const };

function Section({
  id,
  label,
  children,
  className = "",
}: {
  id?: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={`border-t border-[#e8dfd0]/10 py-12 sm:py-14 ${className}`}
      variants={fadeUp}
      initial={false}
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="mb-7 flex items-center justify-between gap-4">
        <h2 className="text-[11px] font-bold tracking-[0.28em] text-[#8c8377]">
          {label}
        </h2>
      </div>
      {children}
    </motion.section>
  );
}

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href === "#" ? undefined : "_blank"}
      rel={href === "#" ? undefined : "noopener noreferrer"}
      className={`inline-flex items-center gap-1.5 transition hover:text-[#f0b16b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d87924]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070706] ${className}`}
    >
      {children}
      {href !== "#" && <ArrowUpRight className="h-3.5 w-3.5 opacity-55" />}
    </a>
  );
}

function ExperienceRow({
  item,
  idx,
}: {
  item: (typeof experience)[number];
  idx: number;
}) {
  return (
    <motion.article
      className="grid gap-4 border-t border-[#e8dfd0]/10 py-5 first:border-t-0 sm:grid-cols-[44px_1fr_auto]"
      variants={fadeUp}
      custom={idx}
    >
      <div className="flex h-9 w-9 items-center justify-center border border-[#e8dfd0]/10 bg-[#10100e]/70">
        <Image
          src={item.logo}
          alt=""
          width={24}
          height={24}
          className="h-5 w-5 object-contain brightness-0 invert opacity-65"
        />
      </div>
      <div>
        <ExternalLink
          href={item.href}
          className="text-sm font-semibold tracking-[0.16em] text-[#f1eadf]"
        >
          {item.company}
        </ExternalLink>
        <p className="mt-1 text-sm text-[#8c8377]">{item.role}</p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#c5b8a8]">
          {item.description}
        </p>
      </div>
      <p className="text-xs tracking-[0.18em] text-[#8c8377] sm:pt-1">
        {item.date}
      </p>
    </motion.article>
  );
}

function ToolsAccordion() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#c5b8a8]">
        {toolPreview.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 border border-[#e8dfd0]/10 bg-[#10100e]/70 px-3 py-2 text-xs tracking-[0.18em] text-[#8c8377] transition hover:border-[#d87924]/45 hover:text-[#f0b16b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d87924]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070706]"
        aria-expanded={open}
      >
        FULL STACK
        <ChevronDown
          className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <motion.div
          className="mt-7 grid gap-8 sm:grid-cols-3"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {toolGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-[10px] font-bold tracking-[0.25em] text-[#8c8377]">
                {group.title}
              </p>
              <ul className="space-y-2">
                {group.items.map((tool) => (
                  <li
                    key={tool.label}
                    className="flex items-center gap-2 text-xs tracking-[0.12em] text-[#c5b8a8]"
                  >
                    <tool.icon className="h-3.5 w-3.5 text-[#d87924]/70" />
                    {tool.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default function Home() {
  const [nameScrambleKey, setNameScrambleKey] = React.useState(0);
  const [showFooterSecret, setShowFooterSecret] = React.useState(false);

  React.useEffect(() => {
    console.log(
      "Hey, if you're reading this tell me why: 1@aryank.xyz"
    );
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070706] text-[#e8dfd0]">
      <div className="riso-texture pointer-events-none fixed inset-0 z-20 opacity-[0.075]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px]">
        <Image
          src="/studio-theme.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55 saturate-[0.92]"
        />
        <div className="absolute inset-0 bg-[#070706]/45" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(to_bottom,rgba(7,7,6,0),#070706_78%)]" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[#070706]/30" />
      </div>
      <div className="lamp-spill pointer-events-none absolute inset-0 z-[1]" />

      <motion.nav
        className="relative z-10 mx-auto flex max-w-4xl items-center justify-end px-6 pt-8"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div className="flex items-center gap-5 text-[10px] tracking-[0.24em] text-[#8c8377]">
          {[
            { label: "EXPERIENCE", href: "#experience" },
            { label: "WRITING", href: "#writing" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-[#f0b16b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d87924]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070706]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.nav>

      <main className="relative z-10 mx-auto max-w-4xl px-6 pb-20">
        <motion.section
          className="flex min-h-[620px] flex-col justify-end pb-20 pt-24"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <div
            className="w-fit"
            onMouseEnter={() => setNameScrambleKey((key) => key + 1)}
          >
            <TextScramble
              key={nameScrambleKey}
              as="h1"
              className="mb-5 text-4xl font-bold tracking-tight text-[#f8efe3] sm:text-6xl"
              duration={0.75}
              speed={0.028}
              characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>"
            >
              ARYAN KUMAR
            </TextScramble>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#e8dfd0] sm:text-xl sm:leading-9">
            ML engineer interested in deep learning systems, generative models,
            and the software around them.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-[#e8dfd0]/60 transition hover:text-[#f0b16b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d87924]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070706]"
              >
                <link.icon className="h-4 w-4" />
                {link.label === "RESUME" ? (
                  link.label
                ) : (
                  <span className="sr-only">{link.label}</span>
                )}
              </a>
            ))}
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-[#e8dfd0]/55">
              <MapPin className="h-4 w-4 text-[#d87924]/80" />
              SF BAY AREA
            </span>
          </div>
        </motion.section>

        <Section id="work" label="RECENT WORK">
          <div className="max-w-2xl border border-[#e8dfd0]/10 bg-[#10100e]/55 p-5 backdrop-blur-sm">
            <p className="text-sm leading-8 text-[#c5b8a8]">
              Recently I&apos;ve been really fascinated by video diffusion
              models, and I&apos;ve been working with{" "}
              <ExternalLink
                href="https://haoailab.com"
                className="text-[#f1eadf] underline decoration-[#d87924]/35 underline-offset-4"
              >
                HAO AI Lab
              </ExternalLink>{" "}
              at UC San Diego on{" "}
              <ExternalLink
                href="https://haoailab.com/FastVideo/"
                className="text-[#f1eadf] underline decoration-[#d87924]/35 underline-offset-4"
              >
                FastVideo
              </ExternalLink>
              . Some of that work is public in{" "}
              {prLinks.map((link, idx) => (
                <React.Fragment key={link.href}>
                  <ExternalLink
                    href={link.href}
                    className="text-[#f1eadf] underline decoration-[#d87924]/35 underline-offset-4"
                  >
                    {link.label}
                  </ExternalLink>
                  {idx < prLinks.length - 1 ? ", " : "."}
                </React.Fragment>
              ))}
            </p>
          </div>
        </Section>

        <Section id="experience" label="EXPERIENCE">
          <div>
            {experience.map((item, idx) => (
              <ExperienceRow key={item.company} item={item} idx={idx} />
            ))}
          </div>
        </Section>

        <Section label="EDUCATION">
          <div className="border border-[#e8dfd0]/10 bg-[#10100e]/45 p-5">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e8dfd0]/10 bg-[#070706]/45">
                  <Image
                    src="/462-4626870_san-jose-state-university-spartan-png-download-spartans-removebg-preview.png"
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain brightness-0 invert opacity-70"
                  />
                </div>
                <div>
                  <ExternalLink
                    href="https://www.sjsu.edu"
                    className="text-sm font-semibold tracking-[0.16em] text-[#f1eadf]"
                  >
                    SAN JOSE STATE UNIVERSITY
                  </ExternalLink>
                  <p className="mt-1 text-sm text-[#8c8377]">
                    Bachelor&apos;s in Mathematics
                  </p>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[#c5b8a8]">
                    Studying math with an eye toward machine learning, systems,
                    and the parts of AI that reward patient fundamentals.
                  </p>
                </div>
              </div>
              <span className="text-xs tracking-[0.18em] text-[#8c8377]">
                2022 - 2026
              </span>
            </div>
          </div>
        </Section>

        <Section id="writing" label="WRITING">
          <p className="text-sm leading-7 text-[#c5b8a8]">
            A small place for things I am learning slowly.
          </p>
        </Section>

        <Section label="TOOLS">
          <ToolsAccordion />
        </Section>

        <Section label="WHEN I'M NOT CODING" className="pb-16">
          <div className="flex flex-wrap gap-5 text-4xl sm:text-5xl">
            {outsideWork.map((item) => (
              <span
                key={item.label}
                title={item.label}
                className="inline-block cursor-default drop-shadow-[0_10px_18px_rgba(0,0,0,0.32)]"
              >
                {item.emoji}
              </span>
            ))}
          </div>
        </Section>

        <motion.footer
          className="border-t border-[#e8dfd0]/10 pt-8 text-center"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button
            type="button"
            onClick={() => setShowFooterSecret((value) => !value)}
            className="mx-auto mb-4 block max-w-2xl text-xs italic leading-relaxed text-[#8c8377] transition hover:text-[#c5b8a8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d87924]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070706]"
          >
            &ldquo;Become the best in the world at what you do. Keep redefining
            what you do until this is true.&rdquo;
            <span className="ml-1 not-italic text-[#8c8377]/70">
              — Naval Ravikant
            </span>
          </button>
          {showFooterSecret && (
            <motion.p
              className="mb-5 text-[10px] tracking-[0.2em] text-[#d87924]/80"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              STILL REDEFINING
            </motion.p>
          )}
          <p className="text-xs tracking-[0.18em] text-[#8c8377]">
            &copy;{new Date().getFullYear()}. ALL RIGHTS RESERVED.
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
