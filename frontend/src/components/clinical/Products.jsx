import { Link } from 'react-router-dom'
import Photo from './Photo'
import breastVisionTomo from '../../assets/breastvision-tomo.jpg'
import mobileDr from '../../assets/mobile-dr.jpg'

// The two flagship platforms shown on the homepage. Kept as data so the
// card markup below is written once.
const PRODUCTS = [
  {
    category: "Women's Health Imaging",
    name: 'BreastVision TOMO',
    model: 'Model ME-BV3000T Pro',
    copy: '3D digital breast tomosynthesis with high-resolution detector technology, low-dose acquisition protocols, and an ergonomic patient-comfort design.',
    image: breastVisionTomo,
    alt: 'BreastVision TOMO 3D mammography system',
  },
  {
    category: 'Mobile Radiography',
    name: 'Mobile DR',
    model: 'Model ME-DR20 Pro',
    copy: 'Motorized mobile digital radiography with wireless flat-panel detector, rapid image preview, and full-day battery endurance for bedside and ICU imaging.',
    image: mobileDr,
    alt: 'Mobile DR motorized digital radiography system',
  },
]

// "Product Portfolio" section: section heading plus the two flagship cards.
// Keeps its #products id as a deep-link target (/#products) — the hero
// button now goes straight to the /products page. Takes no props.
function Products() {
  return (
    <section id="products">
      <div className="wrap">
        {/* Section heading */}
        <div className="sec-head">
          <div className="eyebrow">Product Portfolio</div>
          <h2>Imaging systems built for clinical confidence.</h2>
          <p>
            Every MedEvolution system is engineered to our published specifications and passes a
            four-stage pre-production approval workflow before it ever reaches a clinical floor.
          </p>
        </div>

        {/* Flagship cards */}
        <div className="prod-grid">
          {PRODUCTS.map((product) => (
            <div className="prod-card" key={product.name}>
              <Photo className="prod-img" src={product.image} alt={product.alt} />
              <div className="prod-body">
                <div className="cat">{product.category}</div>
                <h3>{product.name}</h3>
                <div className="model">{product.model}</div>
                <p>{product.copy}</p>
                <Link to="/products" className="prod-link">
                  View all Products
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
