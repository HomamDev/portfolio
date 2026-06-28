import { useState, useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import BackgroundEffects from "@/app/components/sections/BackgroundEffects";
import FloatingIcons from "@/app/components/sections/FloatingIcons";
import HeroSection from "@/app/components/sections/HeroSection";
import AboutSection from "@/app/components/sections/AboutSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import ContactSection from "@/app/components/sections/ContactSection";
import { useIsMobile } from "@/app/hooks/useIsMobile";

export default function App() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const isMobile = useIsMobile();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((d) => !d);
  };

  return (
    <div className="relative w-full min-h-screen bg-background overflow-x-hidden flex flex-col items-center justify-start select-none">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <BackgroundEffects />
      <FloatingIcons isMobile={isMobile} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
