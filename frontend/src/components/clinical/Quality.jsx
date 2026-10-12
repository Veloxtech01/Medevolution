// The four quality/regulatory assurances, each with its short badge label.
const CARDS = [
  {
    badge: 'ISO',
    title: 'ISO 13485 Aligned',
    copy: 'Medical device quality management practices across design control and production oversight.',
  },
  {
    badge: 'IEC',
    title: 'IEC 60601 Safety',
    copy: 'Electrical safety and electromagnetic compatibility standards for medical electrical equipment.',
  },
  {
    badge: 'QA',
    title: 'Pre-Shipment QA',
    copy: 'Every unit imaged, tested, and documented against acceptance criteria before export release.',
  },
  {
    badge: 'DOC',
    title: 'Full Documentation',
    copy: 'DHF-style technical files, user manuals, and service documentation supplied with every system.',
  },
]

// "Quality & Regulatory" section: soft-blue band with the four assurance
// cards. Keeps its #quality id as a deep-link target (/#quality), a
// leftover of the ported template's scroll nav. Takes no props.
function Quality() {
  return (
    <section className="quality" id="quality">
      <div className="wrap">
        {/* Section heading */}
        <div className="sec-head">
          <div className="eyebrow">Quality &amp; Regulatory</div>
          <h2>A quality system you can audit.</h2>
          <p>
            Documentation-complete, standards-aligned, and transparent — because hospital
            procurement teams and regulators deserve nothing less.
          </p>
        </div>

        {/* Assurance cards */}
        <div className="q-grid">
          {CARDS.map((card) => (
            <div className="q-card" key={card.badge}>
              <div className="badge">{card.badge}</div>
              <b>{card.title}</b>
              <p>{card.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Quality
