import { productDivisions } from '../../data/productLines'
import { RevealGroup, RevealItem } from '../motion/Reveal'

// Full portfolio ledger: all 14 product lines grouped into their 4
// divisions, with a short division blurb and a per-line anchor id so the
// header mega menu and homepage teaser can deep-link straight to a line.
// Takes no props.
function ProductsLedger() {
  return (
    <section className="ledger-sec">
      <div className="wrap">
        <RevealGroup as="div">
          {productDivisions.map((division, index) => (
            <RevealItem as="div" key={division.id}>
              <p style={{ fontSize: 14, color: 'var(--color-gray)', lineHeight: 1.65, maxWidth: 640, marginBottom: 14 }}>
                {division.blurb}
              </p>
              <div
                className="pl-div"
                style={index === productDivisions.length - 1 ? { marginBottom: 0 } : undefined}
              >
                <div className="dh">
                  {division.ledgerHeading}
                  <span>{division.range}</span>
                </div>
                {division.lines.map((line) => (
                  <div className="pl-row" id={`line-${line.num}`} key={line.num}>
                    <i>{line.num}</i>
                    <b>{line.name}</b>
                    <em>{line.code}</em>
                  </div>
                ))}
              </div>
              {index !== productDivisions.length - 1 && <div style={{ height: 32 }} />}
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export default ProductsLedger
