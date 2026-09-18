import { useReducedMotion } from "motion/react";
import logo from "../assets/logo.png";
import { Reveal, RevealGroup, RevealItem } from "../components/motion/Reveal";

// Digital channels shown while the site is down — mirrors the list in
// ContactChannels.jsx so the addresses stay in one place conceptually, but
// duplicated here (not imported) since this page intentionally has zero
// dependency on the rest of the routed app.
const channels = [
  { label: "General inquiries", value: "info@medevolutionsinc.com" },
  { label: "Partnerships", value: "partnerships@medevolutionsinc.com" },
];

// Full-screen "site under maintenance" takeover. Rendered standalone at the
// router root (see App.jsx's VITE_MAINTENANCE_MODE branch) instead of inside
// the normal Layout — there is no Header/Footer nav here on purpose, since
// every other route is unreachable while this is up. Takes no props.
function Maintenance() {
  const reduced = useReducedMotion();

  return (
    <main className="maint">
      <div className="wrap maint-inner">
        <Reveal as="div" className="maint-card">
          <div className="maint-body">
            <img src={logo} alt="MedEvolution Inc" className="maint-logo" />

            <div className="eyebrow">Scheduled Maintenance</div>
            <h1 className="maint-h1">We're fine-tuning MedEvolution.com.</h1>
            <p className="maint-p">
              Our engineering team is running scheduled upgrades to the site.
              Nothing here has been affected. We expect to be back online
              shortly.
            </p>

            {/* Live-status row: pulsing dot skips the animation entirely
                when the visitor prefers reduced motion, per CLAUDE.md's
                accessibility conventions. */}
            <div className="maint-status">
              <span
                className={reduced ? "maint-dot maint-dot-static" : "maint-dot"}
                aria-hidden="true"
              />
              <span>Maintenance in progress. Check back shortly</span>
            </div>

            <RevealGroup as="div" className="maint-channels">
              {channels.map((channel) => (
                <RevealItem
                  as="a"
                  key={channel.label}
                  href={`mailto:${channel.value}`}
                  className="maint-channel"
                >
                  <span className="maint-channel-label">{channel.label}</span>
                  <span className="maint-channel-value">{channel.value}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>

        <div className="maint-foot">
          <span>© 2026 MEDEVOLUTION INC.</span>
          <span>ALL SYSTEMS WILL RESUME SHORTLY</span>
        </div>
      </div>
    </main>
  );
}

export default Maintenance;
