import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../components/shared/PageHeader";
import FlagshipCards from "../components/shared/FlagshipCards";
import ProductsLedger from "../components/products/ProductsLedger";
import { Reveal } from "../components/motion/Reveal";

// Products hub: the full 14-line portfolio ledger plus the two flagship
// platforms (BreastVision TOMO, Mobile DR), which live here as Line 02
// entries rather than on separate pages. Header/Footer are rendered once by
// the root Layout route. Takes no props.
function Products() {
  const location = useLocation();

  // Deep links from the header mega menu / homepage teasers land here as a
  // route change with a hash — react-router doesn't auto-scroll to hash
  // targets on client-side navigation, so do it manually once the page mounts.
  useEffect(() => {
    if (!location.hash) return;
    const target = document.querySelector(location.hash);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location]);

  return (
    <>
      <PageHeader
        eyebrow="Product Portfolio · 14 Lines · 4 Divisions"
        title="The complete portfolio."
        description="Fourteen controlled product lines in canonical order. Line numbers and codes are permanent identifiers used across catalogs, price lists, and this website."
      />
      <ProductsLedger />

      <section
        className="ledger-sec"
        id="flagships"
        style={{ background: "#fff" }}
      >
        <div className="wrap">
          <Reveal as="div" className="sec-head">
            <div className="eyebrow">Flagship Platforms · Line 02 — ME-MI</div>
            <h2>Two platforms. Full documentation.</h2>
            <p>
              Specification sheets, user manuals, and service documentation
              available for every system on request.
            </p>
          </Reveal>
          <FlagshipCards />
        </div>
      </section>
    </>
  );
}

export default Products;
