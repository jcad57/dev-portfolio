import type { FeaturedProject } from "../../data/portfolio";
import { TechTag } from "../ui/TechTag";
import { ScreenshotCarousel } from "./ScreenshotCarousel";

export function ProjectCardFeatured({ project }: { project: FeaturedProject }) {
  return (
    <article className="grid gap-8 rounded-2xl border border-[var(--color-mint)] bg-linear-to-br from-[var(--color-page)] to-[var(--color-surface-elevated)] p-4 md:p-8 md:grid-cols-2 md:items-stretch md:gap-10">
      <div className="flex min-h-0 flex-col">
        <span className="mb-4 w-fit rounded-md bg-[var(--color-mint-muted)] px-2.5 py-1 text-xs font-medium text-[var(--color-mint-dark)]">
          {project.badge}
        </span>
        <h3 className="font-serif text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-6">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/85 underline underline-offset-8 decoration-white/30 decoration-2 transition-colors hover:decoration-white/55"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="flex min-h-[240px] items-stretch justify-center rounded-xl bg-[var(--color-surface)] text-center text-sm text-white/40">
        {project.screenshots?.length ? (
          <ScreenshotCarousel screenshots={project.screenshots} className="min-h-[240px] w-full" />
        ) : (
          <span className="flex min-h-[240px] w-full items-center justify-center">
            App screenshot
          </span>
        )}
      </div>
    </article>
  );
}
