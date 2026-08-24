import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import { productDivisions } from "../../data/productLines";
import { Reveal } from "../motion/Reveal";
import { hoverLift } from "../../lib/motion";

// Flatten the 4 divisions into a single list of the 14 lines for the
// product-of-interest dropdown, so the options stay in sync with the
// canonical portfolio data instead of being retyped here.
const allLines = productDivisions.flatMap((division) => division.lines);

// Request-a-quote form for prospective equipment buyers. No backend exists
// yet (per project status), so submission is simulated client-side:
// validate, show a success toast, and reset. Takes no props.
function QuoteForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Placeholder submit handler — swap for a real API call once /backend
  // exists and a quote-request endpoint is defined.
  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast.success(
      "Request received. A MedEvolution representative will be in touch shortly.",
    );
    reset();
  };

  return (
    <section className="ledger-sec" style={{ background: "#fff" }}>
      <div className="wrap">
        <Reveal as="div" className="sec-head">
          <div className="eyebrow">Request a Quote </div>
          <h2>Talk to MedEvolution about your requirements.</h2>
          <p>
            Tell us about your facility and the equipment you&rsquo;re
            evaluating, and a regional representative will follow up.
          </p>
        </Reveal>

        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ maxWidth: 640 }}
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="form-label" htmlFor="fullName">
                Full name
              </label>
              <input
                id="fullName"
                className="form-input"
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && (
                <p className="form-err">{errors.fullName.message}</p>
              )}
            </div>
            <div>
              <label className="form-label" htmlFor="organization">
                Hospital / organization
              </label>
              <input
                id="organization"
                className="form-input"
                {...register("organization", {
                  required: "Organization is required",
                })}
              />
              {errors.organization && (
                <p className="form-err">{errors.organization.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="form-label" htmlFor="email">
                Work email
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="form-err">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="form-label" htmlFor="country">
                Country
              </label>
              <input
                id="country"
                className="form-input"
                {...register("country", { required: "Country is required" })}
              />
              {errors.country && (
                <p className="form-err">{errors.country.message}</p>
              )}
            </div>
          </div>

          <div className="mb-5">
            <label className="form-label" htmlFor="productLine">
              Product line of interest
            </label>
            <select
              id="productLine"
              className="form-input"
              defaultValue=""
              {...register("productLine", {
                required: "Select a product line",
              })}
            >
              <option value="" disabled>
                Select a product line
              </option>
              {allLines.map((line) => (
                <option value={line.code} key={line.code}>
                  {line.num} — {line.name} ({line.code})
                </option>
              ))}
            </select>
            {errors.productLine && (
              <p className="form-err">{errors.productLine.message}</p>
            )}
          </div>

          <div className="mb-5">
            <label className="form-label" htmlFor="message">
              Requirements
            </label>
            <textarea
              id="message"
              rows={5}
              className="form-input"
              placeholder="Volume, timeline, facility type, and any specification requirements."
              {...register("message", { required: "This field is required" })}
            />
            {errors.message && (
              <p className="form-err">{errors.message.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            className="btn btn-blue"
            disabled={isSubmitting}
            {...hoverLift}
          >
            {isSubmitting ? "Submitting…" : "Request a Quote"}
          </motion.button>
        </form>
      </div>
    </section>
  );
}

export default QuoteForm;
