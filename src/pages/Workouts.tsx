import { Link } from 'react-router-dom'

const trainingCycles = [
  {
    id: 'upper-body',
    title: 'Upper Body Power',
    subtitle: 'Wednesday Session • 65 min',
    tag: 'Today',
    tagType: 'badge-primary',
    icon: 'fitness_center',
    exercises: ['Bench Press', 'Pull Ups', 'OHP'],
    difficulty: 'Advanced',
    calories: 520,
    sets: 18,
  },
  {
    id: 'lower-body',
    title: 'Lower Body Strength',
    subtitle: 'Thursday Session • 70 min',
    tag: 'Tomorrow',
    tagType: 'badge-neutral',
    icon: 'directions_run',
    exercises: ['Squats', 'Deadlift', 'Lunges'],
    difficulty: 'Advanced',
    calories: 640,
    sets: 20,
  },
  {
    id: 'hiit-cardio',
    title: 'HIIT Cardio Blast',
    subtitle: 'Friday Session • 45 min',
    tag: 'Fri',
    tagType: 'badge-neutral',
    icon: 'local_fire_department',
    exercises: ['Burpees', 'Box Jumps', 'Mountain Climbers'],
    difficulty: 'Intense',
    calories: 480,
    sets: 12,
  },
  {
    id: 'core-mobility',
    title: 'Core & Mobility',
    subtitle: 'Saturday Session • 50 min',
    tag: 'Sat',
    tagType: 'badge-neutral',
    icon: 'self_improvement',
    exercises: ['Plank', 'Russian Twist', 'Hip Flexors'],
    difficulty: 'Moderate',
    calories: 280,
    sets: 14,
  },
]

const weekProgress = [
  { day: 'Mon', done: true,  label: 'Push' },
  { day: 'Tue', done: true,  label: 'Pull' },
  { day: 'Wed', done: false, label: 'Upper', active: true },
  { day: 'Thu', done: false, label: 'Lower' },
  { day: 'Fri', done: false, label: 'HIIT' },
  { day: 'Sat', done: false, label: 'Core' },
  { day: 'Sun', done: false, label: 'Rest' },
]

export default function Workouts() {
  return (
    <main className="page animate-fade-in" id="workouts-page">
      {/* Header */}
      <header className="page-header animate-fade-up">
        <div>
          <h1 className="headline-lg">Training<br /><span className="text-primary">Cycle</span></h1>
        </div>
        <div className="row row-gap-sm">
          <button className="btn btn-secondary btn-icon" id="workouts-filter-btn" aria-label="Filter workouts">
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>tune</span>
          </button>
          <button className="btn btn-primary btn-icon" id="workouts-add-btn" aria-label="Add workout">
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>add</span>
          </button>
        </div>
      </header>

      {/* Week Overview */}
      <section className="glass-card animate-fade-up stagger-1" aria-labelledby="week-overview-title">
        <p className="section-title" id="week-overview-title" style={{ margin: 0, marginBottom: 'var(--space-md)' }}>This Week</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 4 }}>
          {weekProgress.map(({ day, done, label, active }) => (
            <div
              key={day}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: 1 }}
            >
              <div
                className={`day-circle ${done ? 'done' : active ? 'active' : ''}`}
                style={{ width: 32, height: 32, fontSize: 11 }}
              >
                {done
                  ? <span className="material-symbols-rounded" style={{ fontSize: 14 }}>check</span>
                  : day.charAt(0)}
              </div>
              <p style={{ fontSize: 9, color: active ? 'var(--electric-blue)' : 'var(--on-surface-variant)', fontFamily: 'var(--font-label)', letterSpacing: '0.04em', textAlign: 'center' }}>
                {label}
              </p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-md)' }}>
          <div className="row row-between row-center" style={{ marginBottom: 6 }}>
            <p className="body-sm text-muted">Week progress</p>
            <span className="label-md text-primary">2/6</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '33%' }} role="progressbar" aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} />
          </div>
        </div>
      </section>

      {/* Workout Cards */}
      <section style={{ marginTop: 'var(--space-lg)' }} className="animate-fade-up stagger-2">
        <p className="section-title">Workout Plans</p>
        <div className="stack stack-md">
          {trainingCycles.map((workout, i) => (
            <Link
              key={workout.id}
              to={`/workouts/${workout.id}`}
              style={{ textDecoration: 'none' }}
              id={`workout-card-${workout.id}`}
            >
              <div
                className="glass-card"
                style={{
                  animationDelay: `${0.1 * i}s`,
                  cursor: 'pointer',
                  ...(i === 0 ? {
                    background: 'linear-gradient(135deg, rgba(0,229,255,0.10) 0%, rgba(18,18,18,0.9) 65%)',
                    border: '1px solid rgba(0,229,255,0.22)',
                  } : {}),
                }}
              >
                <div className="row row-between row-center" style={{ marginBottom: 'var(--space-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                    <div
                      style={{
                        width: 48, height: 48,
                        borderRadius: 'var(--radius-md)',
                        background: i === 0 ? 'rgba(0,229,255,0.12)' : 'var(--surface-container-high)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        border: `1px solid ${i === 0 ? 'rgba(0,229,255,0.2)' : 'var(--outline-variant)'}`,
                        flexShrink: 0,
                      }}
                    >
                      <span
                        className="material-symbols-rounded"
                        style={{ fontSize: 24, color: i === 0 ? 'var(--electric-blue)' : 'var(--on-surface-variant)' }}
                      >
                        {workout.icon}
                      </span>
                    </div>
                    <div>
                      <h2 className="headline-sm">{workout.title}</h2>
                      <p className="body-sm text-muted" style={{ marginTop: 2 }}>{workout.subtitle}</p>
                    </div>
                  </div>
                  <span className={`badge ${workout.tagType}`}>{workout.tag}</span>
                </div>

                {/* Exercise tags */}
                <div className="row row-gap-sm" style={{ flexWrap: 'wrap', marginBottom: 'var(--space-md)' }}>
                  {workout.exercises.map((ex) => (
                    <span key={ex} className="badge badge-neutral">{ex}</span>
                  ))}
                </div>

                {/* Stats row */}
                <div className="row row-gap-md" style={{ borderTop: '1px solid var(--outline-variant)', paddingTop: 'var(--space-md)' }}>
                  {[
                    { icon: 'local_fire_department', value: `${workout.calories} kcal` },
                    { icon: 'repeat',                value: `${workout.sets} sets` },
                    { icon: 'speed',                 value: workout.difficulty },
                  ].map(({ icon, value }) => (
                    <div key={icon} className="row row-center row-gap-sm" style={{ gap: 4, flex: 1 }}>
                      <span className="material-symbols-rounded text-muted" style={{ fontSize: 14 }}>{icon}</span>
                      <p className="label-md text-muted">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
