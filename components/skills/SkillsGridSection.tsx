import { skillCategories } from "../../data/portfolio";
import { Section } from "../layout/Section";
import { SkillCategoryCard } from "./SkillCategoryCard";

export function SkillsGridSection() {
  return (
    <Section
      eyebrow="Skills"
      className="mx-auto max-w-6xl px-6 pt-8 md:pt-20 pb-12"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((cat) => (
          <SkillCategoryCard
            key={cat.title}
            title={cat.title}
            items={cat.items}
          />
        ))}
      </div>
    </Section>
  );
}
