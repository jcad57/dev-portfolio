import {
  featuredProjectsLarge,
  featuredProjectsSmall,
} from "../../data/portfolio";
import { ProjectCardFeatured } from "./ProjectCardFeatured";
import { ProjectCardGrid } from "./ProjectCardGrid";

export function FeaturedProjects() {
  const total = featuredProjectsLarge.length + featuredProjectsSmall.length;

  return (
    <section id="projects" className="scroll">
      <div className="mx-auto max-w-6xl px-6 pt-8 md:pt-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Featured projects
          </h2>
          <p className="text-sm tabular-nums text-white/45">{total} total</p>
        </div>
        <div className="mt-6 h-px w-full bg-white/15" />
        <div className="mt-10 flex flex-col gap-4">
          {featuredProjectsLarge.map((project) => (
            <ProjectCardFeatured key={project.title} project={project} />
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {featuredProjectsSmall.map((project) => (
            <ProjectCardGrid key={project.title} project={project} />
          ))}
        </div>
        <button
          className="w-full border border-white/15 rounded-md px-4 py-2 hover:cursor-pointer hover:bg-white/10 transition-colors mt-8"
          onClick={() => {
            window.location.href = "https://github.com/jcad57";
          }}
        >
          See all projects
        </button>
      </div>
    </section>
  );
}
