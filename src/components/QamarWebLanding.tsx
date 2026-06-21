import React, { useState, useCallback } from 'react';
import { LayoutGroup } from 'framer-motion';
import { useScroll } from '@/hooks/use-scroll';
import { useLenis } from '@/hooks/use-lenis';
import { useActiveSection } from '@/hooks/use-active-section';
import { useProjectUrl } from '@/hooks/use-project-url';
import { Navbar } from '@/components/layout/Navbar';
import { MobileContactFab } from '@/components/layout/MobileContactFab';
import { Footer } from '@/components/layout/Footer';
import { ServiceDrawer } from '@/components/ServiceDrawer';
import { ProjectCaseModal } from '@/components/ProjectCaseModal';
import { IntroAnimation } from '@/components/IntroAnimation';
import { CustomCursor } from '@/components/CustomCursor';
import { SectionWipe } from '@/components/ui/SectionWipe';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CalendlySection } from '@/components/sections/CalendlySection';
import { ContactSection } from '@/components/sections/ContactSection';
import { useTheme } from '@/hooks/use-theme';
import type { ServiceDetail, Project } from '@/types';

export const QamarWebLanding: React.FC = () => {
  const { tokens: t } = useTheme();
  const scrolled = useScroll(30);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const activeSection = useActiveSection(introComplete);

  useLenis(introComplete);

  const handleServiceClick = useCallback((service: ServiceDetail) => setSelectedService(service), []);
  const handleDrawerClose  = useCallback(() => setSelectedService(null), []);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  const { openProject } = useProjectUrl(selectedProject, setSelectedProject, introComplete);

  const handleProjectClose = useCallback(() => openProject(null), [openProject]);

  return (
    <div className="min-h-screen w-full" style={{ background: t.canvas, overflowX: 'hidden' }}>
      <div className="grain-overlay" aria-hidden />
      {typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches && <CustomCursor />}
      <IntroAnimation onComplete={handleIntroComplete} />

      {introComplete && (
        <>
          <ServiceDrawer service={selectedService} onClose={handleDrawerClose} />
          <Navbar
            scrolled={scrolled}
            activeSection={activeSection}
            mobileMenuOpen={mobileMenuOpen}
            onMobileMenuOpenChange={setMobileMenuOpen}
          />
          <MobileContactFab hidden={mobileMenuOpen || selectedService !== null || selectedProject !== null} />

          <LayoutGroup>
            <ProjectCaseModal
              project={selectedProject}
              onClose={handleProjectClose}
              onNavigate={openProject}
            />
            <main>
              <HeroSection introComplete={introComplete} />
              <SectionWipe index={1} />
              <TrustSection />
              <SectionWipe index={2} />
              <ServicesSection onServiceClick={handleServiceClick} />
              <SectionWipe index={3} />
              <ProjectsSection
                onCaseStudy={openProject}
                activeProjectSlug={selectedProject?.slug ?? null}
              />
              <SectionWipe index={4} />
              <PricingSection />
              <SectionWipe index={5} />
              <ProcessSection />
              <SectionWipe index={6} />
              <AboutSection />
              <SectionWipe index={7} />
              <TestimonialsSection />
              <SectionWipe index={8} />
              <CalendlySection />
              <SectionWipe index={9} />
              <ContactSection />
            </main>
          </LayoutGroup>

          <Footer />
        </>
      )}
    </div>
  );
};
