import { hero } from "../../data/portfolio";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-6 pt-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-start md:gap-16 md:pt-16">
      <div>
        <p className="mb-6 flex items-center gap-2 text-sm text-white/80">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-mint)]"
            aria-hidden
          />
          <span>{hero.status}</span>
        </p>
        <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          {hero.name}
        </h1>
        <p className="mt-4 text-lg text-white/50 font-light">{hero.role}</p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 italic">
          {hero.description}
        </p>
      </div>
      <div className="rounded-full overflow-hidden w-48 h-48 justify-self-end hidden md:block">
        <img
          src="avatar-scaled-1-1.jpg"
          alt="Hero"
          className="w-48 h-48 object-cover "
        />
      </div>
    </section>
  );
}
