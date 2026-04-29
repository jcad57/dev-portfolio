import { contractWork } from "../../data/portfolio";
import { Section } from "../layout/Section";
import { WorkEntry } from "./WorkEntry";

export function ContractWork() {
  return (
    <Section
      id="experience"
      eyebrow="Professional work"
      className="mx-auto max-w-6xl px-6 pt-8 md:pt-20"
    >
      <div>
        {contractWork.map((entry, index) => (
          <WorkEntry
            key={entry.title}
            entry={entry}
            showDivider={index < contractWork.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
