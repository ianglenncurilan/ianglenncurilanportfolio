"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CalendarCheck,
  CreditCard,
  FileText,
  Flag,
  Layers,
  LineChart,
  Sparkles,
} from "lucide-react";
import { useState, type ComponentType, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { ProjectModal } from "@/components/projects/project-modal";
import { FadeIn } from "@/components/ui/motion-primitives";

/**
 * Project imagery below is mockup-only. All visuals are sourced from
 * Dribbble and credit belongs to the original creators on dribbble.com.
 * Replace these with your own work before shipping.
 */

export type ProjectStep = {
  title: string;
  subtitle: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

export type ProjectDetails = {
  platform: string;
  overview: string;
  highlights: string[];
  steps?: ProjectStep[];
  fullSiteImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
  };
  video?: {
    src: string;
    caption?: string;
  };
};

export type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  href?: string;
  details?: ProjectDetails;
};

const PROJECTS: Project[] = [
  {
    id: "usg",
    icon: Sparkles,
    iconLabel: "University Student Government",
    title:
      "Empowering student representation and university life through transparent, accessible digital tools.",
    description:
      "Created a dedicated web space for university student governance, enabling direct student engagement, initiative tracking, and transparent council services.",
    meta: "Full-Stack Developer, 2026",
    imageRatio: 752 / 497,
    image: "/usg-home.png",
    imageAlt: "University Student Government website",
  },
  {
    id: "early-learning-program",
    icon: CalendarCheck,
    iconLabel: "Early Learning Program",
    title:
      "Early Learning Program — a 3-step enrollment and live session scheduler for early childhood mentorship.",
    description:
      "Built in GoHighLevel (GHL) for the Mini Miii Education Initiative (ages 9 months to 5 years), guiding families seamlessly from intake form to payment to booking a live session date.",
    meta: "Full-Stack Developer, 2026",
    imageRatio: 1,
    image: "/scheduler3.png",
    imageAlt: "Early Learning Program live session scheduler preview",
    details: {
      platform: "GoHighLevel (GHL)",
      overview:
        "Built in GoHighLevel (GHL) for the Mini Miii Education Initiative's Early Learning Program (ages 9 months to 5 years), this booking funnel streamlines enrollment into a structured 3-step scheduler—collecting family intake details, processing payment, and unlocking live calendar date selection for 30-minute afternoon mentorship blocks.",
      steps: [
        {
          title: "Complete Form",
          subtitle: "01 · Intake",
          description:
            "Parents provide student details, contact info, and choose Little Explorers, Growing Learners, or Early Achievers.",
          icon: FileText,
        },
        {
          title: "Monthly Tuition",
          subtitle: "02 · Secure Payment",
          description:
            "Pay once per month via GHL checkout—subscription memory skips repeat payments all month long.",
          icon: CreditCard,
        },
        {
          title: "Pick Sessions",
          subtitle: "03 · Live Calendar",
          description:
            "Select available Mon–Thu 30-min slots (2–4 PM) while a live counter tracks remaining weekly sessions.",
          icon: CalendarCheck,
        },
      ],
      fullSiteImage: {
        src: "/scheduler2.png",
        alt: "Full-page preview of the Mini Miii Prep Early Learning Program website",
        width: 2168,
        height: 5702,
        caption: "Full site preview",
      },
      highlights: [
        "Designed and built the complete Early Learning Program site in GoHighLevel (GHL) for children ages 9 months to 5 years, including program tiers ($50, $100, and $125/month).",
        "Chained a gated 3-step GHL funnel (Form → Payment → Schedule) with subscription memory so families only pay once per month and avoid duplicate charges.",
        "Configured live Monday–Thursday (2:00–4:00 PM) 30-minute session booking blocks with an automated remaining-session counter.",
      ],
    },
  },
  {
    id: "rhythm",
    icon: LineChart,
    iconLabel: "Rhythm",
    title: "Calm analytics for indie founders.",
    description:
      "A weekly digest that turns raw product data into a simple narrative. Built so you can read it on a Sunday with coffee.",
    meta: "Founder & Designer, 2024",
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/47357856/file/75841fa59f32f05ca6c5ddf02d08dfe6.png?resize=1024x768&vertical=center",
    imageAlt: "Rhythm calm analytics mockup",
  },
  {
    id: "mini-miii-prep-golf-charity",
    icon: Flag,
    iconLabel: "Mini Miii Prep Golf Charity",
    title:
      "A charity golf tournament site funding personalized tutoring and microschool scholarships for K–12 students.",
    description:
      "Built the digital home for the Mini Miii Education Initiative's Annual Charity Golf Classic with built-in payments, allowing visitors to register foursomes, sponsor, and donate directly in the funnel.",
    meta: "Full-Stack Developer, 2026",
    imageRatio: 1,
    image: "/minimiiprepbg.png",
    imageAlt: "Mini Miii Prep Golf Charity website mockup",
    href: "https://minimiiiedu.org/landing",
    details: {
      platform: "GoHighLevel (GHL)",
      overview:
        "This website was built in GoHighLevel (GHL) to give the Mini Miii Education Initiative a fast, conversion-focused landing experience for their Annual Charity Golf Classic—featuring built-in payment processing so visitors can register, sponsor, and donate directly within the funnel without leaving the site.",
      highlights: [
        "Built and styled the responsive event landing page directly in GoHighLevel (GHL) to align with Mini Miii Prep's visual identity.",
        "Configured built-in payment checkout flows so participants, sponsors, and donors can complete foursome registrations, sponsorship packages, and direct donations right inside the funnel.",
        "Integrated GHL registration forms with an automated workflow that tags each golf participant, sends a golfer confirmation email, and triggers an admin registration notification.",
      ],
      video: {
        src: "/gemini_generated_video_92439bbc.mp4",
        caption: "GoHighLevel (GHL) golf registration automation walkthrough",
      },
    },
  },
  {
    id: "fieldnote",
    icon: Layers,
    iconLabel: "Fieldnote",
    title:
      "A pocket sized research tool for design teams that want to get out of their docs and into the world.",
    description:
      "Capture quotes, tag patterns, and synthesize themes in one place. The interface stays out of the way so the thinking can happen.",
    meta: "Design Engineer, 2024",
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/30310902/file/original-621e7fe47be9d11ee14544456c693bec.png?resize=1024x768&vertical=center",
    imageAlt: "Fieldnote pocket sized research tool mockup",
  },
  {
    id: "talkback",
    icon: Bot,
    iconLabel: "Talkback",
    title: "A friendlier interface for talking to language models.",
    description:
      "An exploration of how AI chat could feel less like a terminal and more like a conversation with a curious friend.",
    meta: "Independent Project, 2025",
    imageRatio: 1024 / 768,
    image:
      "https://cdn.dribbble.com/userupload/16560717/file/original-c6f745d50302d66609bfe080f99f5396.png?resize=1024x768&vertical=center",
    imageAlt: "Talkback friendlier AI chat interface mockup",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="text-foreground font-serif text-[2.5rem] leading-[1.05] font-medium tracking-tight md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="text-foreground/65 max-w-[33ch] text-[18px] leading-[1.45] tracking-tight sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the work
              I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border-foreground/8 focus-ring group bg-background text-foreground hover:bg-foreground/5 inline-flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-medium transition-colors"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onViewDetails,
}: {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card border-foreground/8 bg-background flex flex-col gap-4 rounded-3xl border p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 bg-background inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border">
            <Icon className="text-foreground h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="text-foreground text-sm font-medium tracking-tight">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 bg-foreground/5 relative w-full overflow-hidden rounded-2xl ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-foreground text-[20px] leading-[1.2] font-medium tracking-tight sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-foreground/65 text-[14px] leading-normal tracking-tight sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 px-1 pb-2">
          <p className="text-foreground/50 text-[12px] tracking-tight">
            {project.meta}
          </p>

          {project.details || project.href ? (
            <div className="flex flex-wrap items-center gap-2">
              {project.details ? (
                <button
                  type="button"
                  onClick={() => onViewDetails(project)}
                  className="focus-ring border-foreground/10 bg-background text-foreground hover:bg-foreground/5 inline-flex cursor-pointer items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-medium transition-colors"
                >
                  View details
                </button>
              ) : null}
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring bg-foreground text-background inline-flex cursor-pointer items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-medium transition-opacity hover:opacity-90"
                >
                  Visit site
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </article>
    </FadeIn>
  );
}
