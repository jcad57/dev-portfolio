import { AboutSection } from "../../components/about/AboutSection";
import { ContractWork } from "../../components/experience/ContractWork";
import { HeroSection } from "../../components/hero/HeroSection";
import { Navbar } from "../../components/layout/Navbar";
import { SiteFooter } from "../../components/layout/SiteFooter";
import { FeaturedProjects } from "../../components/projects/FeaturedProjects";
import { SkillPillsRow } from "../../components/skills/SkillPillsRow";
import { SkillsGridSection } from "../../components/skills/SkillsGridSection";

export function Welcome() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <HeroSection />
        <SkillPillsRow />
        <FeaturedProjects />
        <ContractWork />
        <SkillsGridSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
