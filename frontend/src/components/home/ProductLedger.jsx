import { Link } from 'react-router-dom'
import { productDivisions } from '../../data/productLines'
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal'

// "Portfolio ledger" section: all 14 product lines grouped into their 4
// divisions, rendered from the shared productDivisions data. Takes no props.
function ProductLedger() {
  return (
    <section className="ledger-sec" id="portfolio">
      <div className="wrap">
        <Reveal as="div" className="sec-head">
          <div className="eyebrow">Product Portfolio · MEDEV-PLA-2026 · REV 1.0</div>
          <h2>The product ledger.</h2>
          <p>
            Fourteen controlled product lines in canonical order. Line numbers and codes are permanent identifiers
            used across catalogs, price lists, and this website.
          </p>
        </Reveal>

        {/* One bordered block per division, each listing its product lines — the
            division blocks stagger in as a group; rows inside each block don't
            animate individually to keep the reveal quick for 14 total lines. */}
        <RevealGroup as="div">
          {productDivisions.map((division, index) => (
            <RevealItem
              as="div"
              className="pl-div"
              style={index === productDivisions.length - 1 ? { marginBottom: 0 } : undefined}
              key={division.id}
            >
              <div className="dh">
                {division.ledgerHeading}
                <span>{division.range}</span>
              </div>
              {division.lines.map((line) => (
                <Link className="pl-row" to={`/products#line-${line.num}`} key={line.num}>
                  <i>{line.num}</i>
                  <b>{line.name}</b>
                  <em>{line.code}</em>
                </Link>
              ))}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export default ProductLedger
