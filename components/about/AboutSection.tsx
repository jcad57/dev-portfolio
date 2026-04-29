import { about } from "../../data/portfolio";
import { Section } from "../layout/Section";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      className="mx-auto max-w-6xl px-6 pt-8 md:pt-20 pb-8"
    >
      <div className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.75fr)] md:gap-16">
        <div className="space-y-6 text-base leading-relaxed text-white/90">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <dl className="space-y-6">
          {about.details.map((row) => (
            <div key={row.label}>
              <dt className="text-xs font-medium uppercase tracking-wider text-white/45">
                {row.label}
              </dt>
              <dd className="mt-1">
                {"href" in row ? (
                  <a
                    href={row.href}
                    className="text-sm text-sky-300/90 underline decoration-sky-400/30 underline-offset-4 hover:decoration-sky-400/60"
                  >
                    {row.value}
                  </a>
                ) : "highlight" in row ? (
                  <span className="text-sm text-[var(--color-mint)]">
                    {row.value}
                  </span>
                ) : (
                  <span className="text-sm text-white">{row.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
