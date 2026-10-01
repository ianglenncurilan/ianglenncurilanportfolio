import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "About me, background, and how to get in touch.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="border-foreground/5 bg-foreground/1.5 dark:bg-foreground/3 rounded-4xl border p-8 sm:p-12">
            <h1 className="text-foreground font-serif text-[1.75rem] font-medium tracking-tight sm:text-[2rem]">
              Hello! I&rsquo;m{" "}
              <span className="border-foreground/30 border-b pb-0.5">
                Ian Glenn Curilan
              </span>
              .
            </h1>
            <div className="text-foreground/75 mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight sm:text-[18px]">
              <p>
                I&rsquo;m a{" "}
                <strong className="text-foreground font-semibold">
                  Full-Stack Developer &amp; Web Designer
                </strong>{" "}
                who bridges the gap between{" "}
                <strong className="text-foreground font-semibold">
                  clean aesthetics
                </strong>{" "}
                and{" "}
                <strong className="text-foreground font-semibold">
                  scalable code
                </strong>
                . Rather than treating design and development as separate
                phases, I work across the entire lifecycle, taking products from{" "}
                <strong className="text-foreground font-semibold">
                  low-fidelity wireframes
                </strong>{" "}
                to
                <strong className="text-foreground font-semibold">
                  {" "}
                  production-ready deployments
                </strong>
                .
              </p>
              <p>
                My entry into tech started with frustration: powerful tools
                often suffer from bloated, unintuitive software . That friction
                pushed me to master both sides of the stack. I build
                <strong className="text-foreground font-semibold">
                  {" "}
                  user-centered interfaces
                </strong>{" "}
                backed by{" "}
                <strong className="text-foreground font-semibold">
                  resilient architectures
                </strong>
                , ensuring responsive interactions, tight feedback loops, and
                <strong className="text-foreground font-semibold">
                  {" "}
                  resilient backend logic
                </strong>
                .
              </p>
              <p>
                Currently designing and shipping{" "}
                <strong className="text-foreground font-semibold">
                  full-stack products
                </strong>{" "}
                for modern web teams. Whether architecting{" "}
                <strong className="text-foreground font-semibold">
                  accessible UI systems
                </strong>{" "}
                or
                <strong className="text-foreground font-semibold">
                  {" "}
                  optimizing database queries
                </strong>
                , I focus on building digital products that look effortless and{" "}
                <strong className="text-foreground font-semibold">
                  perform under load
                </strong>
                .
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
