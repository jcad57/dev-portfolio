import { footer } from "../../data/portfolio";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#1a1a1a]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-end gap-6 px-6 py-8 sm:flex-row">
        <nav
          className="flex flex-wrap items-center justify-center gap-6 text-sm"
          aria-label="Footer"
        >
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
