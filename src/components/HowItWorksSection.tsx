import { PROCESS_STEPS } from "../data/siteContent";
import { useReveal } from "../hooks/useReveal";

export function HowItWorksSection() {
  const { ref, revealClass } = useReveal<HTMLDivElement>();

  return (
    <section id="how-it-works" className="section section-alt">
      <div ref={ref} className={`container ${revealClass}`}>
        <div className="section-header">
          <p className="section-kicker">03 / How It Works</p>
          <h2 className="section-title">Specify → Verify → Reconcile</h2>
        </div>

        <ol className="steps-grid">
          {PROCESS_STEPS.map((step) => (
            <li key={step.number} className="step-item">
              <div className="step-header">
                <span className="step-number">Step {step.number}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="workflow-example-strip">
          <span className="workflow-example-label">
            Example in practice — locked meeting room
          </span>
          <p className="workflow-example-text">
            A meeting-room clean was scheduled. The operative recorded that the
            room was locked. Once the client agreed the reason, the statement
            showed the access exception against that task.
          </p>
        </div>
      </div>
    </section>
  );
}
