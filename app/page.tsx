import HeroSection from '@/components/Herosection';
import HowIThink from '@/components/HowIThink';
import ExperienceSection from '@/components/WorkExperience';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111111] flex flex-col gap-y-6 md:gap-y-10">
      <HeroSection />
      <HowIThink />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}