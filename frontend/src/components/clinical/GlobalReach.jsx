// "Global Distribution" section: distribution narrative plus the stylised
// orbit map marking the three served regions. Keeps its #global id as a
// deep-link target (/#global), a leftover of the ported template's scroll
// nav. Takes no props.
function GlobalReach() {
  return (
    <section id="global" style={{ paddingTop: 0 }}>
      <div className="wrap global-inner">
        {/* Narrative + headline stats */}
        <div>
          <div className="eyebrow">Global Distribution</div>
          <h2>Serving healthcare providers across three continents.</h2>
          <p>
            Through authorized distribution partners, MedEvolution systems are installed and
            supported in North America, Asia, and a growing footprint across West Africa — anchored
            by our authorized regional distributor network.
          </p>
          <div className="stat-row">
            <div className="stat">
              <b>3</b>
              <span>Continents</span>
            </div>
            <div className="stat">
              <b>2</b>
              <span>Flagship platforms</span>
            </div>
            <div className="stat">
              <b>4</b>
              <span>Stage QA workflow</span>
            </div>
          </div>
        </div>

        {/* Orbit map — decorative, regions are also named in the copy above */}
        <div className="map-box">
          <svg viewBox="0 0 420 240" role="img" aria-label="Regions served: North America, West Africa, and Asia">
            <ellipse cx="210" cy="120" rx="195" ry="105" fill="none" stroke="#C5C9E2" strokeDasharray="3 5" />
            <ellipse cx="210" cy="120" rx="130" ry="105" fill="none" stroke="#D8DBEE" strokeDasharray="3 5" />
            <line x1="15" y1="120" x2="405" y2="120" stroke="#D8DBEE" strokeDasharray="3 5" />
            <circle cx="120" cy="86" r="7" fill="#0104E5" />
            <text x="120" y="70" textAnchor="middle" fontFamily="Inter" fontSize="11" fill="#0B0D17" fontWeight="600">
              North America
            </text>
            <circle cx="212" cy="132" r="7" fill="#0104E5" />
            <text x="212" y="158" textAnchor="middle" fontFamily="Inter" fontSize="11" fill="#0B0D17" fontWeight="600">
              West Africa
            </text>
            <circle cx="316" cy="96" r="7" fill="#0104E5" />
            <text x="316" y="80" textAnchor="middle" fontFamily="Inter" fontSize="11" fill="#0B0D17" fontWeight="600">
              Asia
            </text>
            <path d="M120 86 Q 170 60 316 96" fill="none" stroke="#0104E5" strokeWidth="1.5" opacity=".4" />
            <path d="M316 96 Q 280 140 212 132" fill="none" stroke="#0104E5" strokeWidth="1.5" opacity=".4" />
            <path d="M120 86 Q 150 130 212 132" fill="none" stroke="#0104E5" strokeWidth="1.5" opacity=".4" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default GlobalReach
