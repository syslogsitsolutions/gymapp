import { Link } from 'react-router-dom'

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const dayStates: Array<'done' | 'active' | 'today' | 'default'> = [
  'done', 'done', 'active', 'today', 'default', 'default', 'default'
]

const quickActions = [
  { icon: 'play_circle', label: 'Start Session', color: 'var(--electric-blue)', link: '/workouts' },
  { icon: 'bar_chart',   label: 'Log Workout',   color: 'var(--lime-green)',    link: '/workouts' },
  { icon: 'self_improvement', label: 'Recovery', color: 'var(--blaze-orange)', link: '/home' },
  { icon: 'monitor_heart',    label: 'Vitals',   color: '#ff79c6',             link: '/home' },
]

const stats = [
  { value: '12', unit: 'kg',  label: 'Weight Lost',    icon: 'trending_down' },
  { value: '89', unit: '%',   label: 'Consistency',    icon: 'insights' },
  { value: '4.2', unit: 'k',  label: 'Calories Burned',icon: 'local_fire_department' },
  { value: '24',  unit: 'wks',label: 'Active Streak',  icon: 'emoji_events' },
]

export default function Home() {
  const now = new Date()
  const greeting = now.getHours() < 12 ? 'Good morning' : now.getHours() < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <main className="page animate-fade-in" id="home-page">
      {/* Header */}
      <header className="page-header animate-fade-up">
        <div className="stack stack-sm">
          <p className="body-sm text-muted">{greeting} 👋</p>
          <h1 className="headline-lg" style={{ color: 'var(--on-surface)' }}>
            Welcome back, <span className="text-primary">Alex</span>
          </h1>
          <p className="body-sm text-muted">Ready to crush your goals today?</p>
        </div>
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <img
            src="https://i.pravatar.cc/48?img=11"
            alt="Alex's avatar"
            width={48} height={48}
            className="avatar"
          />
          <span
            className="badge badge-success"
            style={{ position: 'absolute', top: -6, right: -6, padding: '2px 6px', fontSize: 9 }}
          >
            Pro
          </span>
        </div>
      </header>

      {/* Weekly Consistency */}
      <section className="glass-card animate-fade-up stagger-1" aria-labelledby="consistency-title">
        <div className="row row-between row-center" style={{ marginBottom: 'var(--space-md)' }}>
          <p className="section-title" id="consistency-title" style={{ margin: 0 }}>Weekly Consistency</p>
          <span className="badge badge-success">89%</span>
        </div>
        <div className="row row-gap-sm" style={{ justifyContent: 'space-between', marginBottom: 'var(--space-md)' }}>
          {DAYS.map((d, i) => (
            <div
              key={i}
              className={`day-circle ${dayStates[i] === 'active' ? 'active' : dayStates[i] === 'done' ? 'done' : dayStates[i] === 'today' ? 'today' : ''}`}
            >
              {d}
            </div>
          ))}
        </div>
        <div className="progress-bar progress-bar--lg">
          <div className="progress-fill" style={{ width: '57%' }} role="progressbar" aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} />
        </div>
        <p className="body-sm text-muted" style={{ marginTop: 'var(--space-sm)' }}>4 of 7 sessions completed this week</p>
      </section>

      {/* Today's Workout */}
      <section style={{ marginTop: 'var(--space-lg)' }} className="animate-fade-up stagger-2">
        <p className="section-title">Today's Workout</p>
        <Link to="/workouts/upper-body" style={{ textDecoration: 'none' }}>
          <div
            className="glass-card"
            style={{
              background: 'linear-gradient(135deg, rgba(0,229,255,0.12) 0%, rgba(18,18,18,0.9) 60%)',
              border: '1px solid rgba(0,229,255,0.2)',
              cursor: 'pointer',
            }}
          >
            <div className="row row-between row-center" style={{ marginBottom: 'var(--space-md)' }}>
              <div>
                <p className="label-md text-primary">Day 3 — Upper Body</p>
                <h2 className="headline-md" style={{ marginTop: 4 }}>Upper Body Power</h2>
                <p className="body-sm text-muted" style={{ marginTop: 4 }}>Wednesday Session • 65 min</p>
              </div>
              <div
                style={{
                  width: 56, height: 56,
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(0,229,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(0,229,255,0.2)',
                }}
              >
                <span className="material-symbols-rounded text-primary" style={{ fontSize: 28 }}>fitness_center</span>
              </div>
            </div>
            <div className="row row-gap-sm" style={{ flexWrap: 'wrap' }}>
              {['Bench Press', 'Pull Ups', 'OHP', '+3 more'].map((ex, i) => (
                <span key={i} className="badge badge-primary">{ex}</span>
              ))}
            </div>
            <div style={{ marginTop: 'var(--space-lg)' }}>
              <button className="btn btn-primary btn-full" id="start-workout-btn" aria-label="Start upper body power workout">
                <span className="material-symbols-rounded" style={{ fontSize: 20 }}>play_circle</span>
                Start Workout
              </button>
            </div>
          </div>
        </Link>
      </section>

      {/* Quick Actions */}
      <section style={{ marginTop: 'var(--space-lg)' }} className="animate-fade-up stagger-3">
        <p className="section-title">Quick Actions</p>
        <div className="grid-2">
          {quickActions.map(({ icon, label, color, link }, i) => (
            <Link key={i} to={link} style={{ textDecoration: 'none' }}>
              <div
                className="stat-card"
                style={{ cursor: 'pointer', gap: 'var(--space-md)' }}
                id={`quick-action-${i}`}
              >
                <span
                  className="material-symbols-rounded"
                  style={{ fontSize: 28, color }}
                >
                  {icon}
                </span>
                <p className="body-sm" style={{ fontWeight: 600 }}>{label}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Grid */}
      <section style={{ marginTop: 'var(--space-lg)' }} className="animate-fade-up stagger-4">
        <p className="section-title">Your Progress</p>
        <div className="grid-2">
          {stats.map(({ value, unit, label, icon }, i) => (
            <div key={i} className="stat-card" id={`stat-card-${i}`}>
              <span className="material-symbols-rounded text-primary" style={{ fontSize: 20 }}>{icon}</span>
              <div className="row row-center row-gap-sm" style={{ alignItems: 'baseline' }}>
                <span className="stat-card__value">{value}</span>
                <span className="stat-card__unit">{unit}</span>
              </div>
              <p className="stat-card__label">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Motivational Banner */}
      <section
        className="glass-card animate-fade-up stagger-5"
        style={{
          marginTop: 'var(--space-lg)',
          background: 'linear-gradient(135deg, rgba(195,244,0,0.08), rgba(18,18,18,0.9))',
          border: '1px solid rgba(195,244,0,0.18)',
          textAlign: 'center',
        }}
      >
        <span className="material-symbols-rounded" style={{ fontSize: 40, color: 'var(--lime-green)' }}>emoji_events</span>
        <h3 className="headline-sm" style={{ marginTop: 'var(--space-sm)', color: 'var(--on-surface)' }}>
          24-Week Streak! 🔥
        </h3>
        <p className="body-sm text-muted" style={{ marginTop: 4 }}>
          You're in the top 5% of Iron Pulse members. Keep it up!
        </p>
      </section>
    </main>
  )
}
