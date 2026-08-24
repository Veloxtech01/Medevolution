import { RevealGroup, RevealItem } from '../motion/Reveal'

// Four-up strip of headline company facts shown directly under the hero.
const facts = [
  { value: '1990', label: 'Founded — Cambridge, Massachusetts, USA' },
  { value: '14', label: 'Product lines across four divisions' },
  { value: '5', label: 'Global locations across four regions' },
  { value: '6', label: 'Continents served via authorized distributors' },
]

function Facts() {
  return (
    <div className="facts">
      <RevealGroup as="div" className="wrap facts-inner">
        {facts.map((fact) => (
          <RevealItem as="div" className="fact" key={fact.value}>
            <b>{fact.value}</b>
            <span>{fact.label}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  )
}

export default Facts
