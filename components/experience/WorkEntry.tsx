import type { WorkEntry as WorkEntryType } from "../../data/portfolio";

export function WorkEntry({
  entry,
  showDivider,
}: {
  entry: WorkEntryType;
  showDivider: boolean;
}) {
  return (
    <div>
      <div className="grid gap-8 pb-12 md:grid-cols-[minmax(0,0.22fr)_minmax(0,1fr)] md:gap-12">
        <div className="text-sm text-white/45">
          <p className="tabular-nums">{entry.dates}</p>
          <p className="mt-1">{entry.kind}</p>
        </div>
        <div>
          <span className="inline-block rounded-md bg-white px-2.5 py-1 text-xs font-medium text-blue-800">
            {entry.badge}
          </span>
          <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">
            {entry.title}
          </h3>
          <p className="mt-1 text-sm text-white/45">{entry.context}</p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-white/60">
            {entry.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {showDivider ? <div className="h-px w-full bg-white/10 mb-12" /> : null}
    </div>
  );
}
