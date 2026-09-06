import HeroSection from '../components/Herosection';
import HowIThink from '../components/HowIThink';
import ExperienceSection from '../components/WorkExperience';
import ProjectsSection from '../components/SelectedProjects';
import SkillsSection from '../components/SkillsSection';
import EducationSection from '../components/EducationSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] antialiased">
      <main className="flex flex-col">
        <HeroSection />
        <HowIThink />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
}