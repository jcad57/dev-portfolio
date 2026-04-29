import { skillPills } from "../../data/portfolio";

export function SkillPillsRow() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-4 pt-2 grid grid-cols-3">
      <div className="flex flex-wrap gap-3 col-span-3 md:col-span-2">
        {skillPills.map((pill) => (
          <div
            key={pill.label}
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-[var(--color-surface)] transition-colors cursor-default"
          >
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${pill.dot}`}
              aria-hidden
            />
            <span>{pill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
