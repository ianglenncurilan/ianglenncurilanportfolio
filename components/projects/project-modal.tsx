"use client";

import { ArrowUpRight, Layers, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";

import type { Project } from "@/components/projects/projects";

const EASE = [0.22, 1, 0.36, 1] as const;

function useIsMounted(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}): ReactNode {
  const mounted = useIsMounted();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!mounted) return null;

  const Icon = project?.icon;
  const details = project?.details;

  return createPortal(
    <AnimatePresence>
      {project && details && Icon ? (
        <motion.div
          key={project.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
          data-lenis-prevent
          className="bg-foreground/40 fixed inset-0 z-100 flex items-center justify-center overflow-y-auto p-4 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-modal-title-${project.id}`}
            aria-describedby={`project-modal-desc-${project.id}`}
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="border-foreground/10 bg-background text-foreground relative my-auto flex max-h-[90vh] w-full max-w-xl flex-col overflow-hidden rounded-3xl border shadow-2xl"
          >
            <div className="border-foreground/8 flex items-center justify-between gap-3 border-b px-5 py-4 sm:px-6">
              <div className="flex items-center gap-2.5">
                <span className="border-foreground/10 bg-background inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border">
                  <Icon
                    className="text-foreground h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <p className="text-foreground text-sm font-medium tracking-tight">
                    {project.iconLabel}
                  </p>
                  <p className="text-foreground/50 text-xs tracking-tight">
                    {project.meta}
                  </p>
                </div>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="focus-ring border-foreground/10 text-foreground/70 hover:bg-foreground/5 hover:text-foreground inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border transition-colors"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-col gap-5 overflow-y-auto p-5 sm:p-6">
              <div
                className="ring-foreground/8 bg-foreground/5 relative w-full overflow-hidden rounded-2xl ring-1"
                style={{ aspectRatio: project.imageRatio }}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 640px) 540px, 95vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="border-foreground/10 bg-foreground/5 text-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-tight">
                  <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                  Built in {details.platform}
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                <h3
                  id={`project-modal-title-${project.id}`}
                  className="text-foreground text-[20px] leading-[1.25] font-medium tracking-tight sm:text-[22px]"
                >
                  {project.title}
                </h3>
                <p
                  id={`project-modal-desc-${project.id}`}
                  className="text-foreground/75 text-[14px] leading-relaxed tracking-tight sm:text-[15px]"
                >
                  {details.overview}
                </p>
              </div>

              {details.video ? (
                <div className="border-foreground/8 bg-foreground/3 flex flex-col gap-2.5 rounded-2xl border p-4">
                  <p className="text-foreground text-xs font-medium tracking-wide uppercase">
                    {details.video.caption ?? "Workflow walkthrough"}
                  </p>
                  <div className="ring-foreground/8 overflow-hidden rounded-xl bg-black/95 ring-1">
                    <video
                      src={details.video.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="mx-auto max-h-[420px] w-full object-contain"
                    />
                  </div>
                </div>
              ) : null}

              {details.highlights.length > 0 ? (
                <div className="border-foreground/8 bg-foreground/3 flex flex-col gap-2.5 rounded-2xl border p-4">
                  <p className="text-foreground text-xs font-medium tracking-wide uppercase">
                    Implementation notes
                  </p>
                  <ul className="text-foreground/75 flex list-disc flex-col gap-1.5 pl-4 text-[13px] leading-relaxed sm:text-[14px]">
                    {details.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="flex flex-wrap items-center justify-end gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="focus-ring border-foreground/10 text-foreground hover:bg-foreground/5 inline-flex cursor-pointer items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium transition-colors"
                >
                  Close
                </button>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring bg-foreground text-background inline-flex cursor-pointer items-center gap-1.5 rounded-xl px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90"
                  >
                    Visit live site
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
