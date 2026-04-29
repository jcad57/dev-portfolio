export function TechTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm bg-[var(--color-page)] px-2.5 py-1 text-xs text-white/75 hover:cursor-default">
      {children}
    </span>
  );
}
