import { useState } from "react";
import { FAQ_ITEMS } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";
import { PlusMinusIcon } from "./Icons";

export function FaqSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const { ref, revealClass } = useReveal<HTMLDivElement>();

  function toggleItem(id: string) {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <section id="faq" className="section section-alt">
      <div ref={ref} className={`container ${revealClass}`}>
        <div className="faq-layout">
          <div className="section-header">
            <p className="section-kicker">05 / FAQ</p>
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="faq-intro-note">
              Practical answers on how statements, exceptions, offline capture
              and the proposed West London pilot are designed to operate.
            </p>
          </div>

          <div className="faq-list">
            {FAQ_ITEMS.map((item) => {
              const isOpen = Boolean(openItems[item.id]);
              const buttonId = `${item.id}-button`;
              const panelId = `${item.id}-panel`;

              return (
                <div key={item.id} className="faq-item">
                  <h3 className="faq-heading">
                    <button
                      id={buttonId}
                      type="button"
                      className="faq-trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon" aria-hidden="true">
                        <PlusMinusIcon open={isOpen} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`disclosure-region${
                      isOpen ? " disclosure-region--open" : ""
                    }`}
                    aria-hidden={!isOpen}
                    inert={!isOpen || undefined}
                  >
                    <div className="disclosure-inner">
                      <div className="faq-panel-inner">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
