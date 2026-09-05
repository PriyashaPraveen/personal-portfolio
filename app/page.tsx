import HeroSection from '@/components/Herosection';
import HowIThink from '@/components/HowIThink';
import ExperienceSection from '@/components/WorkExperience';
import ProjectsSection from '@/components/SelectedProjects';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111] flex flex-col gap-y-8 md:gap-y-12">
      <HeroSection />
      <HowIThink />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}