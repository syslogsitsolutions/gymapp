const paymentHistory = [
  { date: 'Sep 1, 2023', desc: 'Monthly Subscription', amount: '$49.99', status: 'Paid' },
  { date: 'Aug 1, 2023', desc: 'Monthly Subscription', amount: '$49.99', status: 'Paid' },
  { date: 'Jul 1, 2023', desc: 'Monthly Subscription', amount: '$49.99', status: 'Paid' },
  { date: 'Jun 1, 2023', desc: 'Monthly Subscription', amount: '$49.99', status: 'Paid' },
]

const perks = [
  { icon: 'fitness_center', label: 'All Equipment Access' },
  { icon: 'pool',           label: 'Pool & Sauna' },
  { icon: 'groups',         label: 'Group Classes' },
  { icon: 'self_improvement', label: 'Personal Training (2/mo)' },
  { icon: 'local_parking',  label: 'Free Parking' },
  { icon: 'restaurant',     label: 'Nutrition Consultation' },
]

export default function Membership() {
  return (
    <main className="page animate-fade-in" id="membership-page">
      <header className="page-header animate-fade-up">
        <h1 className="headline-lg">Membership<br /><span className="text-primary">&amp; Billing</span></h1>
        <button className="btn btn-secondary" id="manage-plan-btn" style={{ fontSize: 13, padding: '0 var(--space-md)' }}>
          Manage Plan
        </button>
      </header>

      {/* Membership Card */}
      <section className="animate-fade-up stagger-1" style={{ marginBottom: 'var(--space-lg)' }}>
        <div
          style={{
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-lg)',
            background: 'linear-gradient(135deg, #00363d 0%, #004f58 50%, #131313 100%)',
            border: '1px solid rgba(0,229,255,0.3)',
            boxShadow: '0 0 32px rgba(0,229,255,0.12)',
            position: 'relative',
            overflow: 'hidden',
          }}
          aria-label="Membership card"
        >
          {/* Glow orb */}
          <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(0,229,255,0.08)', filter: 'blur(40px)', pointerEvents: 'none' }} />

          <div className="row row-between row-center" style={{ marginBottom: 'var(--space-lg)' }}>
            <div>
              <p className="label-md" style={{ color: 'var(--electric-blue)', marginBottom: 4 }}>IRON PULSE GYM</p>
              <span className="badge badge-primary" style={{ fontSize: 11 }}>
                <span className="material-symbols-rounded" style={{ fontSize: 12 }}>verified</span>
                Premium Access
              </span>
            </div>
            <span className="material-symbols-rounded" style={{ fontSize: 40, color: 'var(--electric-blue)' }}>card_membership</span>
          </div>

          <p style={{ fontFamily: 'var(--font-headline)', fontSize: 22, fontWeight: 800, letterSpacing: '0.12em', color: 'var(--on-surface)', marginBottom: 'var(--space-lg)' }}>
            **** **** **** 4242
          </p>

          <div className="row row-between row-center">
            <div>
              <p className="label-md text-muted" style={{ marginBottom: 2 }}>Member</p>
              <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 700 }}>Alex Johnson</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p className="label-md text-muted" style={{ marginBottom: 2 }}>Valid Until</p>
              <p style={{ fontFamily: 'var(--font-label)', fontWeight: 600, color: 'var(--lime-green)' }}>Oct 1, 2023</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p className="label-md text-muted" style={{ marginBottom: 2 }}>Status</p>
              <span className="badge badge-success">Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Details */}
      <section className="glass-card animate-fade-up stagger-2" style={{ marginBottom: 'var(--space-lg)' }}>
        <div className="row row-between row-center" style={{ marginBottom: 'var(--space-md)' }}>
          <div>
            <p className="section-title" style={{ margin: 0 }}>Premium Monthly</p>
            <p className="body-sm text-muted" style={{ marginTop: 4 }}>Renews Oct 1, 2023</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontFamily: 'var(--font-headline)', fontSize: 28, fontWeight: 900, color: 'var(--electric-blue)', lineHeight: 1 }}>$49.99</p>
            <p className="label-md text-muted">/ month</p>
          </div>
        </div>
        <div className="divider" style={{ margin: 'var(--space-md) 0' }} />
        <p className="section-title" style={{ marginBottom: 'var(--space-md)' }}>Included Perks</p>
        <div className="grid-2" style={{ gap: 'var(--space-sm)' }}>
          {perks.map(({ icon, label }) => (
            <div key={icon} className="row row-center row-gap-sm" style={{ gap: 8, padding: '8px 0' }}>
              <span className="material-symbols-rounded text-primary" style={{ fontSize: 18 }}>{icon}</span>
              <p className="body-sm" style={{ fontSize: 13 }}>{label}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-lg)' }}>
          <button className="btn btn-primary btn-full" id="upgrade-btn">
            <span className="material-symbols-rounded" style={{ fontSize: 18 }}>upgrade</span>
            Upgrade to Annual — Save 20%
          </button>
        </div>
      </section>

      {/* Next billing notice */}
      <section className="glass-card animate-fade-up stagger-3" style={{ marginBottom: 'var(--space-lg)', borderColor: 'rgba(0,229,255,0.12)', background: 'rgba(0,229,255,0.04)' }}>
        <div className="row row-center row-gap-sm">
          <span className="material-symbols-rounded text-primary" style={{ fontSize: 20 }}>info</span>
          <p className="body-sm" style={{ lineHeight: 1.6 }}>
            Your next bill of <strong style={{ color: 'var(--electric-blue)' }}>$49.99</strong> will be processed on{' '}
            <strong>Oct 1, 2023</strong> using your Visa ending in <strong>4242</strong>.
          </p>
        </div>
      </section>

      {/* Payment History */}
      <section className="animate-fade-up stagger-4">
        <div className="row row-between row-center" style={{ marginBottom: 'var(--space-md)' }}>
          <p className="section-title" style={{ margin: 0 }}>Payment History</p>
          <button className="btn btn-ghost" id="view-all-payments-btn" style={{ fontSize: 13, padding: '0 var(--space-sm)', minHeight: 32 }}>
            View all
          </button>
        </div>
        <div className="stack stack-sm">
          {paymentHistory.map((p, i) => (
            <div key={i} className="glass-card" style={{ padding: 'var(--space-md)' }}>
              <div className="row row-between row-center">
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14 }}>{p.desc}</p>
                  <p className="label-md text-muted" style={{ marginTop: 4 }}>{p.date}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontFamily: 'var(--font-label)', fontWeight: 700, fontSize: 15 }}>{p.amount}</p>
                  <span className="badge badge-success" style={{ marginTop: 4 }}>{p.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cancel */}
      <div style={{ marginTop: 'var(--space-lg)', textAlign: 'center' }}>
        <button className="btn btn-ghost" id="cancel-btn" style={{ color: 'rgba(255,100,100,0.7)', fontSize: 13 }}>
          Cancel Membership
        </button>
      </div>
    </main>
  )
}
