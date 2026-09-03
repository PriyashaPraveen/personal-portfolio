import HeroSection from '@/components/Herosection';
import HowIThink from '@/components/HowIThink';
import WorkExperience from '@/components/WorkExperience';
import SelectedProjects from '@/components/SelectedProjects';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* 1. Interactive Puzzle Hero + About Me */}
      <HeroSection />

      {/* 2. Decision Trade-Off Walkthrough (Directly after About Me) */}
      <HowIThink />

      {/* 3. Heineken Work Experience & Resume Download */}
      <WorkExperience />

      {/* 4. Projects Slider & Repositories */}
      <SelectedProjects />

      {/* 5. Core Skills & Systems Competencies */}
      <SkillsSection />

      {/* 6. Academic Flightpath (Mysuru to NYU) */}
      <EducationSection />

      {/* 7. Contact, Email Copy & Footer */}
      <ContactSection />
    </main>
  );
}