const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1a1a1a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
        <div className="flex items-center gap-4">
          <img
            src="../public/avatar-scaled-1-1.jpg"
            alt="Hero"
            className="w-10 h-10 rounded-full block md:hidden"
          />
          <a
            href="#top"
            className="font-serif text-lg font-semibold tracking-tight text-white md:justify-self-start"
          >
            Jon Deichmann
          </a>
        </div>
        <nav
          className="flex flex-wrap justify-center gap-6 md:gap-10"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#about"
          className="rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-[#1a1a1a] transition-opacity hover:opacity-90 md:justify-self-end md:text-left"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
