import { offices } from '../../data/offices'
import { RevealGroup, RevealItem } from '../motion/Reveal'

// The five regional office rows, shared between the homepage teaser and
// the full Global Presence page. Takes no props.
function OfficesDirectory() {
  return (
    <RevealGroup as="div" className="gdir">
      {offices.map((office) => (
        <RevealItem as="div" className="row" key={office.region}>
          <div className="r">{office.region}</div>
          <div>
            <b>{office.name}</b>
            <p>{office.address}</p>
          </div>
          <div className="role-txt">{office.role}</div>
        </RevealItem>
      ))}
    </RevealGroup>
  )
}

export default OfficesDirectory
