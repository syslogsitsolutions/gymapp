const achievements = [
  { icon: '🏆', label: '24-Week Streak', color: 'var(--lime-green)' },
  { icon: '💪', label: '100+ Workouts',  color: 'var(--electric-blue)' },
  { icon: '🔥', label: '50k Calories',   color: 'var(--blaze-orange)' },
  { icon: '⚡', label: 'HIIT Master',    color: '#c084fc' },
]

const settingsItems = [
  { icon: 'notifications', label: 'Notifications',     id: 'settings-notif' },
  { icon: 'language',      label: 'Language',          id: 'settings-lang' },
  { icon: 'lock',          label: 'Privacy & Security',id: 'settings-privacy' },
  { icon: 'dark_mode',     label: 'Dark Mode',         id: 'settings-dark', active: true },
  { icon: 'help',          label: 'Help & Support',    id: 'settings-help' },
]

const bodyStats = [
  { label: 'Weight',   value: '82', unit: 'kg' },
  { label: 'Height',   value: '178', unit: 'cm' },
  { label: 'Body Fat', value: '14', unit: '%' },
  { label: 'BMI',      value: '25.9', unit: '' },
]

export default function Profile() {
  return (
    <main className="page animate-fade-in" id="profile-page">
      {/* Header */}
      <header className="page-header animate-fade-up">
        <h1 className="headline-lg">Profile</h1>
        <button className="btn btn-secondary btn-icon" id="edit-profile-btn" aria-label="Edit profile">
          <span className="material-symbols-rounded" style={{ fontSize: 20 }}>edit</span>
        </button>
      </header>

      {/* Profile Hero */}
      <section className="glass-card animate-fade-up stagger-1" style={{ textAlign: 'center', marginBottom: 'var(--space-lg)', padding: 'var(--space-xl) var(--space-lg)' }}>
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: 'var(--space-md)' }}>
          <img src="https://i.pravatar.cc/96?img=11" alt="Alex Johnson" width={96} height={96} className="avatar" style={{ width: 96, height: 96 }} />
          <button
            className="btn btn-primary btn-icon"
            id="change-avatar-btn"
            aria-label="Change avatar"
            style={{ position: 'absolute', bottom: -4, right: -4, width: 32, height: 32, minHeight: 32, borderRadius: '50%', padding: 0 }}
          >
            <span className="material-symbols-rounded" style={{ fontSize: 16 }}>photo_camera</span>
          </button>
        </div>
        <h2 className="headline-md">Alex Johnson</h2>
        <p className="body-sm text-muted" style={{ marginTop: 4 }}>alex.johnson@email.com</p>
        <div className="row row-gap-sm" style={{ justifyContent: 'center', marginTop: 'var(--space-sm)' }}>
          <span className="badge badge-primary">
            <span className="material-symbols-rounded" style={{ fontSize: 12 }}>verified</span>
            Premium Member
          </span>
          <span className="badge badge-success">Active</span>
        </div>

        <div className="divider" style={{ margin: 'var(--space-lg) 0' }} />

        {/* Body stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-sm)' }}>
          {bodyStats.map(({ label, value, unit }) => (
            <div key={label}>
              <p style={{ fontFamily: 'var(--font-headline)', fontSize: 22, fontWeight: 900, color: 'var(--on-surface)', lineHeight: 1 }}>
                {value}<span style={{ fontSize: 12, color: 'var(--on-surface-variant)', fontFamily: 'var(--font-label)' }}>{unit}</span>
              </p>
              <p className="label-md text-muted" style={{ marginTop: 4 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section style={{ marginBottom: 'var(--space-lg)' }} className="animate-fade-up stagger-2">
        <p className="section-title">Achievements</p>
        <div className="grid-2">
          {achievements.map(({ icon, label, color }) => (
            <div key={label} className="stat-card" style={{ flexDirection: 'row', alignItems: 'center', gap: 'var(--space-sm)', padding: 'var(--space-md)' }}>
              <span style={{ fontSize: 28 }}>{icon}</span>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workout Summary */}
      <section className="glass-card animate-fade-up stagger-3" style={{ marginBottom: 'var(--space-lg)' }}>
        <p className="section-title" style={{ marginBottom: 'var(--space-md)' }}>All-Time Summary</p>
        <div className="grid-2">
          {[
            { icon: 'fitness_center',        value: '127', unit: 'Workouts' },
            { icon: 'schedule',              value: '94',  unit: 'Hours trained' },
            { icon: 'local_fire_department', value: '52k', unit: 'Calories burned' },
            { icon: 'emoji_events',          value: '24',  unit: 'Week streak' },
          ].map(({ icon, value, unit }) => (
            <div key={icon} className="row row-center row-gap-sm" style={{ gap: 'var(--space-md)', padding: '10px 0' }}>
              <span className="material-symbols-rounded text-primary" style={{ fontSize: 22 }}>{icon}</span>
              <div>
                <p style={{ fontFamily: 'var(--font-headline)', fontSize: 20, fontWeight: 800, lineHeight: 1 }}>{value}</p>
                <p className="label-md text-muted">{unit}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Settings */}
      <section className="animate-fade-up stagger-4" style={{ marginBottom: 'var(--space-lg)' }}>
        <p className="section-title">Settings</p>
        <div className="stack stack-sm">
          {settingsItems.map(({ icon, label, id, active }) => (
            <button key={id} id={id} className="exercise-row" style={{ width: '100%', background: 'none', border: '1px solid var(--outline-variant)', cursor: 'pointer', textAlign: 'left' }}>
              <div className="exercise-icon" style={{ background: 'var(--surface-container-high)' }}>
                <span className="material-symbols-rounded text-muted" style={{ fontSize: 20 }}>{icon}</span>
              </div>
              <p style={{ flex: 1, fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--on-surface)' }}>{label}</p>
              {active
                ? <span className="badge badge-primary" style={{ fontSize: 10 }}>ON</span>
                : <span className="material-symbols-rounded text-muted" style={{ fontSize: 18 }}>chevron_right</span>}
            </button>
          ))}
        </div>
      </section>

      {/* Sign out */}
      <button className="btn btn-ghost btn-full" id="signout-btn" style={{ color: 'rgba(255,100,100,0.7)', border: '1px solid rgba(255,100,100,0.2)', marginBottom: 'var(--space-md)' }}>
        <span className="material-symbols-rounded" style={{ fontSize: 18 }}>logout</span>
        Sign Out
      </button>
    </main>
  )
}
