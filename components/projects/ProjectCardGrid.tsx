import type { FeaturedProject } from "../../data/portfolio";
import { TechTag } from "../ui/TechTag";

export function ProjectCardGrid({ project }: { project: FeaturedProject }) {
  return (
    <article className="flex h-full flex-col rounded-xl bg-[var(--color-surface)] p-6">
      {project.badge ? (
        <span className="mb-3 w-fit rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white/85">
          {project.badge}
        </span>
      ) : null}
      <h3 className="font-serif text-xl font-semibold tracking-tight text-white">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-white/85 underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white/55"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
