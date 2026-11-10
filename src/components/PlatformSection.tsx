import { useState } from "react";
import {
  LEDGER_OUTCOMES,
  PLANNED_ROLLOUT,
  PLATFORM_MODULES,
  SUPPORTING_CAPABILITIES,
} from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";
import { ChevronDownIcon, OutcomeGlyph } from "./Icons";

export function PlatformSection() {
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const { ref, revealClass } = useReveal<HTMLDivElement>();

  return (
    <section id="platform" className="section">
      <div ref={ref} className={`container ${revealClass}`}>
        <div className="section-header">
          <p className="section-kicker">02 / Platform</p>
          <h2 className="section-title">
            From cleaning specification to invoice evidence
          </h2>
          <p className="section-lead">
            SiteVerity is designed to work alongside a contractor’s existing
            rostering, payroll and field-service tools, connecting six core
            modules from agreed schedule to signed statement.
          </p>
        </div>

        <ol className="modules-list">
          {PLATFORM_MODULES.map((mod) => (
            <li key={mod.number} className="module-row">
              <span className="module-num" aria-hidden="true">
                {mod.number}
              </span>
              <div className="module-title-col">
                <h3 className="module-title">
                  <span className="sr-only">Module {mod.number}: </span>
                  {mod.title}
                </h3>
                <span className="module-metatag">{mod.metaTag}</span>
              </div>
              <div className="module-body">
                <p>{mod.description}</p>
                {mod.detailNote && (
                  <p className="module-note">{mod.detailNote}</p>
                )}

                {mod.number === "04" && (
                  <div
                    className="ledger-outcomes-grid"
                    aria-label="Obligation Ledger outcome categories"
                  >
                    {LEDGER_OUTCOMES.map((outcome) => (
                      <div key={outcome.label} className="ledger-outcome-item">
                        <span
                          className={`outcome-badge outcome-badge--${outcome.tone}`}
                        >
                          <OutcomeGlyph tone={outcome.tone} />
                          <span>{outcome.label}</span>
                        </span>
                        <span className="ledger-outcome-note">
                          {outcome.note}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="capabilities-box">
          <button
            type="button"
            className="capabilities-trigger"
            aria-expanded={capabilitiesOpen}
            aria-controls="supporting-capabilities-panel"
            onClick={() => setCapabilitiesOpen((prev) => !prev)}
          >
            <span>Supporting capabilities</span>
            <span className="capabilities-trigger-hint">
              <span>{capabilitiesOpen ? "Hide details" : "Show details"}</span>
              <ChevronDownIcon className="capabilities-chevron" />
            </span>
          </button>

          <div
            id="supporting-capabilities-panel"
            className={`disclosure-region${
              capabilitiesOpen ? " disclosure-region--open" : ""
            }`}
            aria-hidden={!capabilitiesOpen}
            inert={!capabilitiesOpen || undefined}
          >
            <div className="disclosure-inner">
              <div className="capabilities-panel">
                <div className="capabilities-grid">
                  {SUPPORTING_CAPABILITIES.map((group) => (
                    <div key={group.category} className="capability-group">
                      <h4>{group.category}</h4>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rollout-block">
          <div className="rollout-header">
            <h3 className="rollout-title">Planned rollout</h3>
            <p className="rollout-note">
              Rollout timing is separate from subscription entitlements (for
              example, Service Delivery Statements sit in Year 1 product scope
              and are included commercially from Assure upwards).
            </p>
          </div>
          <ul className="rollout-grid">
            {PLANNED_ROLLOUT.map((item) => (
              <li key={item.phase} className="rollout-item">
                <strong className="rollout-phase">{item.phase}</strong>
                <p className="rollout-scope">{item.scope}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
