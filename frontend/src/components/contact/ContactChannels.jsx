import { Reveal, RevealGroup, RevealItem } from "../motion/Reveal";

// Digital contact channels from the approved brand directory. Marked as
// placeholders per the source company profile until official handles are
// confirmed. Takes no props.
const channels = [
  { label: "General inquiries", value: "info@medevolutionsinc.com" },
  { label: "Partnerships", value: "partnerships@medevolutionsinc.com" },
];

function ContactChannels() {
  return (
    <section>
      <div className="wrap">
        <Reveal as="div" className="sec-head" style={{ marginBottom: 28 }}>
          <div className="eyebrow">Digital Channels</div>
          <h2>Reach MedEvolution directly.</h2>
        </Reveal>

        <RevealGroup as="div" className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {channels.map((channel) => (
            <RevealItem
              as="div"
              key={channel.label}
              style={{
                border: "1px solid var(--color-line)",
                padding: "20px 22px",
                background: "#fff",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10.5,
                  letterSpacing: "0.1em",
                  color: "#9AA0B8",
                  marginBottom: 8,
                  textTransform: "uppercase",
                }}
              >
                {channel.label}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>
                {channel.value}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default ContactChannels;
