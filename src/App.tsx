import { useCallback, useEffect, useRef, useState } from "react";
import { AboutSection } from "./components/AboutSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { MarketPricingSection } from "./components/MarketPricingSection";
import { PilotDialog } from "./components/PilotDialog";
import { PlatformSection } from "./components/PlatformSection";

export function App() {
  const [pilotDialogOpen, setPilotDialogOpen] = useState(false);
  const openerRef = useRef<HTMLElement | null>(null);
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);
  const wasOpenRef = useRef(false);

  const openPilotDialog = useCallback((opener: HTMLElement) => {
    openerRef.current = opener;
    setPilotDialogOpen(true);
  }, []);

  const closePilotDialog = useCallback(() => {
    setPilotDialogOpen(false);
  }, []);

  useEffect(() => {
    if (wasOpenRef.current && !pilotDialogOpen) {
      const opener = openerRef.current;
      if (opener && opener.isConnected && opener.getClientRects().length > 0) {
        opener.focus();
      } else {
        menuToggleRef.current?.focus();
      }
    }
    wasOpenRef.current = pilotDialogOpen;
  }, [pilotDialogOpen]);

  return (
    <>
      <div className="page-shell" inert={pilotDialogOpen || undefined}>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>

        <Header onOpenPilot={openPilotDialog} menuToggleRef={menuToggleRef} />

        <main id="main-content">
          <HeroSection onOpenPilot={openPilotDialog} />
          <AboutSection />
          <PlatformSection />
          <HowItWorksSection />
          <MarketPricingSection onOpenPilot={openPilotDialog} />
          <FaqSection />
        </main>

        <Footer onOpenPilot={openPilotDialog} />
      </div>

      <PilotDialog open={pilotDialogOpen} onClose={closePilotDialog} />
    </>
  );
}
