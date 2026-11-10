import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../data/siteContent";
import { useActiveSection } from "../hooks/useActiveSection";
import { MenuIcon } from "./Icons";

interface HeaderProps {
  onOpenPilot: (opener: HTMLElement) => void;
  menuToggleRef: React.RefObject<HTMLButtonElement | null>;
}

export function Header({ onOpenPilot, menuToggleRef }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, menuToggleRef]);

  return (
    <header
      className={`site-header${scrolled ? " site-header--scrolled" : ""}`}
    >
      <div className="container header-inner">
        <a className="wordmark" href="#home">
          <span className="wordmark-mark" aria-hidden="true" />
          <span>SiteVerity</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === `#${activeSection}`;
              return (
                <li key={item.href}>
                  <a
                    className={`nav-link${isActive ? " nav-link--active" : ""}`}
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={(event) => onOpenPilot(event.currentTarget)}
          >
            Request a Pilot
          </button>
        </nav>

        <button
          ref={menuToggleRef}
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <MenuIcon open={mobileMenuOpen} />
          <span>{mobileMenuOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="mobile-drawer">
          <div className="container">
            <nav aria-label="Mobile navigation">
              <ul className="mobile-nav-links">
                {NAV_ITEMS.map((item) => {
                  const isActive = item.href === `#${activeSection}`;
                  return (
                    <li key={item.href}>
                      <a
                        className={`mobile-nav-link${
                          isActive ? " mobile-nav-link--active" : ""
                        }`}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mobile-drawer-cta">
              <button
                type="button"
                className="btn btn-primary"
                onClick={(event) => {
                  const opener = event.currentTarget;
                  setMobileMenuOpen(false);
                  onOpenPilot(opener);
                }}
              >
                Request a Pilot
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
