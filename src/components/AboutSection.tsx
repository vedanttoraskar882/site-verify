import { useReveal } from "../hooks/useReveal";

export function AboutSection() {
  const { ref, revealClass } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section section-alt">
      <div ref={ref} className={`container ${revealClass}`}>
        <div className="section-header">
          <p className="section-kicker">01 / About</p>
          <h2 className="section-title">Why SiteVerity was founded</h2>
        </div>

        <div className="about-layout">
          <div className="about-problem">
            <p>
              The cleaning specification may sit in a Word document or PDF, the
              visit in a check-in app and a photograph or access message on a
              supervisor’s phone. When the client questions an invoice, someone
              must match those records to the task, frequency and standard that
              both parties agreed.
            </p>
            <p>
              SiteVerity is designed to keep the contracted specification,
              on-site records and accepted exceptions connected in a single
              ledger before billing begins, so invoice queries start from shared
              evidence rather than manual reconstruction.
            </p>
            <blockquote className="about-question-pull">
              “How can a contractor connect evidence from a visit to the work a
              client agreed to pay for?”
            </blockquote>
          </div>

          <article className="founder-profile" aria-labelledby="founder-heading">
            <p className="founder-label">Founder profile</p>
            <h3 id="founder-heading" className="founder-heading">
              Manjot Kaur, Founder
            </h3>
            <p>
              As a Team Leader at Green Facility Services, Manjot Kaur
              supervised mobile cleaning teams across multiple client sites and
              was responsible for meeting service-level agreements. She
              introduced a QR-based inspection system that reduced complaints.
              That experience shaped SiteVerity’s central question: how can a
              contractor connect evidence from a visit to the work a client
              agreed to pay for?
            </p>
            <p>
              She holds an MSc in Business Management from Bloomsbury Institute,
              London, and plans to lead product direction, customer discovery,
              pilots and sales.
            </p>
            <dl className="founder-meta-list">
              <div className="founder-meta-row">
                <dt>Planned role</dt>
                <dd>Product direction, customer discovery, pilots and sales</dd>
              </div>
              <div className="founder-meta-row">
                <dt>Qualification</dt>
                <dd>MSc Business Management, Bloomsbury Institute, London</dd>
              </div>
              <div className="founder-meta-row">
                <dt>Operations</dt>
                <dd>Former Team Leader, Green Facility Services</dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>
  );
}
