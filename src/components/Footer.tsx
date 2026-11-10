import { NAV_ITEMS } from "../data/siteContent";

interface FooterProps {
  onOpenPilot: (opener: HTMLElement) => void;
}

export function Footer({ onOpenPilot }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <a className="wordmark" href="#home">
            <span className="wordmark-mark" aria-hidden="true" />
            <span>SiteVerity</span>
          </a>
          <p className="footer-brand-tagline">
            Contract delivery evidence for UK multi-site cleaning.
          </p>
        </div>

        <div className="footer-nav-actions">
          <nav aria-label="Footer navigation">
            <ul className="footer-links">
              <li>
                <a className="footer-link" href="#home">
                  Home
                </a>
              </li>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a className="footer-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={(event) => onOpenPilot(event.currentTarget)}
          >
            Request a Pilot
          </button>
        </div>
      </div>
    </footer>
  );
}
