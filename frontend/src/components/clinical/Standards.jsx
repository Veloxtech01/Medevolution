// Standards & reach band: the four credential/footprint figures that used to
// sit as a flat inline strip inside the hero. Promoted to its own section
// directly under the hero with a dark, divided-column design so it reads as a
// deliberate credentials statement rather than hero fine print. Takes no props.
function Standards() {
  // Each credential: ordinal index, the headline figure, and a short caption.
  const items = [
    { n: "01", value: "ISO 13485", label: "Certified quality management system governing design and manufacture" },
    { n: "02", value: "IEC 60601", label: "Electrical safety and essential performance compliance across the range" },
    { n: "03", value: "3 Continents", label: "Regional support offices in the US, Europe and Asia-Pacific" },
    { n: "04", value: "OEM Network", label: "Vetted manufacturing partners with full traceability of supply" },
  ];

  return (
    <section className="standards" aria-label="Standards and reach">
      <div className="wrap">
        {/* Section lead-in — kept short so the figures stay the focus */}
        <div className="standards-head">
          <div className="eyebrow">Standards &amp; Reach</div>
          <h2>Built to the codes clinical buyers audit against.</h2>
        </div>

        {/* Divided credential columns */}
        <div className="standards-grid">
          {items.map((item) => (
            <div className="standards-item" key={item.n}>
              <span className="standards-n">{item.n}</span>
              <b>{item.value}</b>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Standards;
