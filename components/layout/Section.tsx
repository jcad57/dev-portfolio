export function Section({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  eyebrow: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll ${className}`}>
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">
          {eyebrow}
        </h2>
      </div>
      <div className="h-px w-full bg-white/15" aria-hidden />
      <div className="mt-10">{children}</div>
    </section>
  );
}
