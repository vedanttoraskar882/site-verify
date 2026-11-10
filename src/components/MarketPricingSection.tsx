import {
  COMMERCIAL_ROWS,
  SECONDARY_AUDIENCES,
  SUBSCRIPTION_TIERS,
} from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

interface MarketPricingSectionProps {
  onOpenPilot: (opener: HTMLElement) => void;
}

export function MarketPricingSection({
  onOpenPilot,
}: MarketPricingSectionProps) {
  const { ref, revealClass } = useReveal<HTMLDivElement>();

  return (
    <section id="market-pricing" className="section">
      <div ref={ref} className={`container ${revealClass}`}>
        <div className="section-header">
          <p className="section-kicker">04 / Market &amp; Pricing</p>
          <h2 className="section-title">Who SiteVerity is being built for</h2>
        </div>

        <div className="audience-block">
          <div className="audience-layout">
            <div className="audience-lead-card">
              <span className="audience-lead-tag">Primary focus</span>
              <p className="audience-lead-text">
                Independent UK cleaning contractors employing 10–250 staff and
                serving 20–300 client sites, particularly offices, retail
                premises and education buildings.
              </p>
              <div className="audience-metrics-strip">
                <div>
                  <span className="audience-metric-val">10–250</span>
                  <span className="audience-metric-lbl">Cleaning staff</span>
                </div>
                <div>
                  <span className="audience-metric-val">20–300</span>
                  <span className="audience-metric-lbl">Client sites</span>
                </div>
              </div>
            </div>

            <ul className="audience-secondary-list">
              {SECONDARY_AUDIENCES.map((audience) => (
                <li key={audience}>{audience}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pricing-block">
          <h3 className="subsection-heading">Planned pricing</h3>
          <p className="subsection-intro">
            Planned contractor subscriptions are priced per active client site in
            GBP, alongside separate buyer and onboarding arrangements.
          </p>

          <div className="pricing-cards-grid">
            {SUBSCRIPTION_TIERS.map((tier) => (
              <article
                key={tier.id}
                className={`pricing-card${
                  tier.featured ? " pricing-card--featured" : ""
                }`}
              >
                <div className="tier-header-row">
                  <h4 className="tier-name">{tier.name}</h4>
                  {tier.featured && (
                    <span className="tier-badge">Includes Statements</span>
                  )}
                </div>
                <div className="tier-price-block">
                  <div className="tier-price-line">
                    <span className="tier-amount">{tier.unitPrice}</span>
                    <span className="tier-unit">{tier.unitPeriod}</span>
                  </div>
                  {tier.minimumLine && (
                    <p className="tier-minimum">{tier.minimumLine}</p>
                  )}
                </div>
                <p className="tier-summary">{tier.summary}</p>
              </article>
            ))}
          </div>

          <div className="commercial-rows">
            {COMMERCIAL_ROWS.map((row) => (
              <div key={row.id} className="commercial-row">
                <h4 className="commercial-name">{row.name}</h4>
                <div>
                  <span className="commercial-price">{row.price}</span>
                  <span className="commercial-cadence">{row.cadenceNote}</span>
                </div>
                <p className="commercial-desc">{row.description}</p>
              </div>
            ))}
          </div>

          <p className="pricing-clarification">
            A contractor’s client can use the included free, read-only portal to
            review shared information. The paid Buyer edition serves buying
            organisations comparing multiple suppliers. Software licensing is a
            separate opportunity with no published price.
          </p>

          <div className="pilot-invitation">
            <div>
              <span className="pilot-invitation-kicker">
                Proposed design-partner programme
              </span>
              <p className="pilot-invitation-copy">
                The proposed design-partner programme is for three to five
                cleaning contractors in West London and the Heathrow corridor.
                The plan offers a free pilot across 10–20 sites per contractor in
                exchange for case-study rights.
              </p>
            </div>
            <div className="pilot-invitation-action">
              <button
                type="button"
                className="btn btn-primary"
                onClick={(event) => onOpenPilot(event.currentTarget)}
              >
                Request a Pilot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
