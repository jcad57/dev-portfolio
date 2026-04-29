export function SkillCategoryCard({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="rounded-xl bg-[var(--color-surface)] p-6 cursor-default">
      <p className="text-xs font-medium uppercase tracking-wider text-white/45">
        {title}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-white/15 px-2.5 py-1 text-xs text-white/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
