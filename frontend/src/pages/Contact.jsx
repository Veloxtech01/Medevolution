import PageHeader from "../components/shared/PageHeader";
import OfficesDirectory from "../components/shared/OfficesDirectory";
import ContactChannels from "../components/contact/ContactChannels";
import QuoteForm from "../components/contact/QuoteForm";

// Contact / Request a Quote: the global office directory, digital
// channels, and the buyer-facing quote-request form. Header/Footer are
// rendered once by the root Layout route. Takes no props.
function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Global Contact Directory"
        title="Reach MedEvolution."
        description="Corporate leadership and engineering sit in Cambridge, MA. Regional offices in China, Germany, South Korea, and India handle manufacturing, market access, and clinical support closer to you."
      />

      {/* <section>
        <div className="wrap">
          <OfficesDirectory />
        </div>
      </section> */}

      <QuoteForm />
      <ContactChannels />
    </>
  );
}

export default Contact;
