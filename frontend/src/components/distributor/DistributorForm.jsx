import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'
import { Reveal } from '../motion/Reveal'
import { hoverLift } from '../../lib/motion'

// Distributor partnership inquiry form. No backend exists yet (per project
// status), so submission is simulated client-side: validate, show a success
// toast, and reset. Takes no props.
function DistributorForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  // Placeholder submit handler — swap for a real API call once /backend
  // exists and a distributor-inquiry endpoint is defined.
  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    toast.success('Inquiry received. Our partnerships team will follow up shortly.')
    reset()
  }

  return (
    <section className="ledger-sec" style={{ background: '#fff' }}>
      <div className="wrap">
        <Reveal as="div" className="sec-head">
          <div className="eyebrow">Partnership Inquiry</div>
          <h2>Request the distributor partnership pack.</h2>
          <p>
            Territory availability, training programs, and commercial terms for qualified medical equipment
            distributors.
          </p>
        </Reveal>

        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 640 }} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="form-label" htmlFor="companyName">
                Company name
              </label>
              <input
                id="companyName"
                className="form-input"
                {...register('companyName', { required: 'Company name is required' })}
              />
              {errors.companyName && <p className="form-err">{errors.companyName.message}</p>}
            </div>
            <div>
              <label className="form-label" htmlFor="contactName">
                Contact name
              </label>
              <input
                id="contactName"
                className="form-input"
                {...register('contactName', { required: 'Contact name is required' })}
              />
              {errors.contactName && <p className="form-err">{errors.contactName.message}</p>}
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
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
                })}
              />
              {errors.email && <p className="form-err">{errors.email.message}</p>}
            </div>
            <div>
              <label className="form-label" htmlFor="country">
                Country / region
              </label>
              <input
                id="country"
                className="form-input"
                {...register('country', { required: 'Country / region is required' })}
              />
              {errors.country && <p className="form-err">{errors.country.message}</p>}
            </div>
          </div>

          <div className="mb-5">
            <label className="form-label" htmlFor="message">
              Territory & experience
            </label>
            <textarea
              id="message"
              rows={5}
              className="form-input"
              placeholder="Tell us about your territory, distribution experience, and the product lines you're interested in."
              {...register('message', { required: 'This field is required' })}
            />
            {errors.message && <p className="form-err">{errors.message.message}</p>}
          </div>

          <motion.button type="submit" className="btn btn-blue" disabled={isSubmitting} {...hoverLift}>
            {isSubmitting ? 'Submitting…' : 'Request Partnership Pack'}
          </motion.button>
        </form>
      </div>
    </section>
  )
}

export default DistributorForm
