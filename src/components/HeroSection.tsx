import { HeroStatement } from "./HeroStatement";
import { ArrowRightIcon } from "./Icons";

interface HeroSectionProps {
  onOpenPilot: (opener: HTMLElement) => void;
}

export function HeroSection({ onOpenPilot }: HeroSectionProps) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div>
          <p className="hero-eyebrow hero-enter">
            Proposed UK Contractor Platform
          </p>
          <h1 className="hero-title hero-enter hero-enter--d1">
            Show clients what was delivered with every cleaning invoice.
          </h1>
          <p className="hero-copy hero-enter hero-enter--d2">
            SiteVerity is being built for UK multi-site cleaning contractors. It
            connects each agreed cleaning task to the visit record, quality
            evidence and any accepted exception. At invoice time, contractor and
            client can see what was due, what was delivered and whether the
            contract calls for a credit.
          </p>
          <div className="hero-actions hero-enter hero-enter--d3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={(event) => onOpenPilot(event.currentTarget)}
            >
              Request a Pilot
            </button>
            <a className="btn btn-secondary" href="#how-it-works">
              <span>See How It Works</span>
              <ArrowRightIcon className="btn-icon" />
            </a>
          </div>
          <p className="hero-scope-note hero-enter hero-enter--d3">
            Designed to work alongside existing rostering, payroll and
            field-service tools. Proposed pilot programme in West London and the
            Heathrow corridor.
          </p>
        </div>

        <HeroStatement />
      </div>
    </section>
  );
}
