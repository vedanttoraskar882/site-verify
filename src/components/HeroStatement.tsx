import { useState } from "react";
import { STATEMENT_ROWS } from "../data/siteContent";
import { ChevronDownIcon, OutcomeGlyph } from "./Icons";

export function HeroStatement() {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  function toggleRow(id: string) {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <aside
      className="statement-doc hero-enter hero-enter--d4"
      aria-labelledby="hero-statement-heading"
    >
      <div className="statement-header">
        <div className="statement-title-group">
          <span className="statement-doc-ref">Period reconciliation</span>
          <h2 id="hero-statement-heading" className="statement-title">
            Service Delivery Statement
          </h2>
        </div>
        <span className="statement-caption">Illustrative example</span>
      </div>

      <div className="statement-meta">
        <div className="statement-meta-item">
          <span className="statement-meta-label">Schedule:</span>
          <span className="statement-meta-value">Contracted evening clean</span>
        </div>
        <div className="statement-meta-item">
          <span className="statement-meta-label">Basis:</span>
          <span className="statement-meta-value">
            Approved obligation ledger
          </span>
        </div>
      </div>

      <div className="statement-columns-head" aria-hidden="true">
        <span>Zone &amp; task</span>
        <span>Outcome</span>
        <span>Record</span>
        <span>Details</span>
      </div>

      <ul className="statement-rows">
        {STATEMENT_ROWS.map((row) => {
          const isExpanded = Boolean(expandedRows[row.id]);
          const panelId = `statement-detail-${row.id}`;
          const badgeClass =
            row.outcomeTone === "verified"
              ? "outcome-badge outcome-badge--verified"
              : "outcome-badge outcome-badge--exception";

          return (
            <li key={row.id} className="statement-row-item">
              <button
                type="button"
                className="statement-row-trigger"
                aria-expanded={isExpanded}
                aria-controls={panelId}
                onClick={() => toggleRow(row.id)}
              >
                <span className="statement-cell">
                  <span className="statement-cell-zone">{row.zone}</span>
                  <span className="statement-cell-task">{row.task}</span>
                </span>

                <span className="statement-cell">
                  <span className={badgeClass}>
                    <OutcomeGlyph tone={row.outcomeTone} />
                    <span>{row.outcome}</span>
                  </span>
                </span>

                <span className="statement-cell statement-cell-summary">
                  {row.summary}
                </span>

                <span className="statement-toggle-cue">
                  <span>{isExpanded ? "Hide" : "Inspect"}</span>
                  <ChevronDownIcon className="statement-chevron" />
                </span>
              </button>

              <div
                id={panelId}
                className={`disclosure-region${
                  isExpanded ? " disclosure-region--open" : ""
                }`}
                aria-hidden={!isExpanded}
                inert={!isExpanded || undefined}
              >
                <div className="disclosure-inner">
                  <div className="statement-row-detail">
                    <dl className="statement-detail-grid">
                      <div className="statement-detail-pair">
                        <dt>Approved obligation</dt>
                        <dd>{row.obligation}</dd>
                      </div>
                      <div className="statement-detail-pair">
                        <dt>Supporting evidence</dt>
                        <dd>{row.evidence}</dd>
                      </div>
                      <div
                        className={`statement-detail-pair${
                          row.outcomeTone === "exception"
                            ? " statement-clause-note"
                            : ""
                        }`}
                      >
                        <dt>Invoice treatment</dt>
                        <dd>{row.invoiceTreatment}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="statement-footer-note">
        <span>Select either row to inspect its obligation and evidence.</span>
        <span className="statement-summary-count">
          2 entries · 1 verified · 1 agreed exception
        </span>
      </div>
    </aside>
  );
}
