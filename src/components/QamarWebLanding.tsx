import React, { useState, useCallback } from 'react';
import { useScroll } from '@/hooks/use-scroll';
import { useActiveSection } from '@/hooks/use-active-section';
import { Navbar } from '@/components/layout/Navbar';
import { MobileContactFab } from '@/components/layout/MobileContactFab';
import { Footer } from '@/components/layout/Footer';
import { ServiceDrawer } from '@/components/ServiceDrawer';
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
import type { ServiceDetail } from '@/types';

/**
 * Orchestrateur principal du site Qamar Web.
 * Responsabilité unique : composer les sections et passer l'état partagé.
 */
export const QamarWebLanding: React.FC = () => {
  const { tokens: t } = useTheme();
  const scrolled = useScroll(30);
  const activeSection = useActiveSection();
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleServiceClick = useCallback((service: ServiceDetail) => {
    setSelectedService(service);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setSelectedService(null);
  }, []);

  return (
    <div className="min-h-screen w-full" style={{ background: t.canvas, overflowX: 'hidden' }}>
      <ServiceDrawer service={selectedService} onClose={handleDrawerClose} />
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuOpenChange={setMobileMenuOpen}
      />
      <MobileContactFab hidden={mobileMenuOpen || selectedService !== null} />

      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection onServiceClick={handleServiceClick} />
        <ProjectsSection />
        <PricingSection />
        <ProcessSection />
        <AboutSection />
        <TestimonialsSection />
        <CalendlySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
