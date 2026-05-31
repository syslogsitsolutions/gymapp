import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

interface Exercise {
  id: string; name: string; sets: number; reps: string
  weight: string; icon: string; muscles: string
}

interface WorkoutData {
  title: string; subtitle: string; duration: string
  calories: number; tip: string; exercises: Exercise[]
}

const workouts: Record<string, WorkoutData> = {
  'upper-body': {
    title: 'Upper Body Power', subtitle: 'Wednesday Session',
    duration: '65 min', calories: 520,
    tip: 'Maintain high intensity on compound movements. Keep rest intervals under 90 seconds for optimal hypertrophic response.',
    exercises: [
      { id: 'bench', name: 'Bench Press',    sets: 4, reps: '8-10',  weight: '80 kg', icon: '🏋️', muscles: 'Chest · Triceps · Front Delt' },
      { id: 'pull',  name: 'Pull Ups',       sets: 4, reps: '6-8',   weight: 'BW',    icon: '🔝', muscles: 'Lats · Biceps · Rear Delt' },
      { id: 'ohp',   name: 'Overhead Press', sets: 3, reps: '8-10',  weight: '55 kg', icon: '💪', muscles: 'Delts · Triceps · Traps' },
      { id: 'row',   name: 'Barbell Row',    sets: 3, reps: '8-10',  weight: '70 kg', icon: '🚣', muscles: 'Back · Biceps · Rear Delt' },
      { id: 'dip',   name: 'Weighted Dips',  sets: 3, reps: '10-12', weight: '+20 kg',icon: '⬇️', muscles: 'Chest · Triceps' },
      { id: 'curl',  name: 'EZ Bar Curl',    sets: 3, reps: '12-15', weight: '35 kg', icon: '💪', muscles: 'Biceps · Brachialis' },
    ],
  },
  'lower-body': {
    title: 'Lower Body Strength', subtitle: 'Thursday Session',
    duration: '70 min', calories: 640,
    tip: 'Focus on form over weight. Drive through your heels on squats and keep your back neutral on deadlifts.',
    exercises: [
      { id: 'squat', name: 'Back Squat',      sets: 4, reps: '6-8',   weight: '100 kg', icon: '🦵', muscles: 'Quads · Glutes · Hamstrings' },
      { id: 'dead',  name: 'Deadlift',        sets: 4, reps: '5-6',   weight: '120 kg', icon: '🏋️', muscles: 'Posterior chain · Core' },
      { id: 'lunge', name: 'Walking Lunges',  sets: 3, reps: '12 ea', weight: '20 kg',  icon: '🚶', muscles: 'Glutes · Quads · Balance' },
      { id: 'legp',  name: 'Leg Press',       sets: 3, reps: '12-15', weight: '160 kg', icon: '🦾', muscles: 'Quads · Glutes' },
      { id: 'legl',  name: 'Leg Curl',        sets: 3, reps: '12-15', weight: '60 kg',  icon: '🔄', muscles: 'Hamstrings' },
    ],
  },
  'hiit-cardio': {
    title: 'HIIT Cardio Blast', subtitle: 'Friday Session',
    duration: '45 min', calories: 480,
    tip: 'Push max effort during work intervals. Recovery periods are key — breathe fully to prepare for the next round.',
    exercises: [
      { id: 'burp', name: 'Burpees',           sets: 4, reps: '45 sec', weight: 'BW',   icon: '⚡', muscles: 'Full body' },
      { id: 'boxj', name: 'Box Jumps',         sets: 4, reps: '10',     weight: 'BW',   icon: '📦', muscles: 'Quads · Calves · Power' },
      { id: 'mc',   name: 'Mountain Climbers', sets: 4, reps: '45 sec', weight: 'BW',   icon: '⛰️', muscles: 'Core · Shoulders · Hip Flex' },
      { id: 'kb',   name: 'Kettlebell Swings', sets: 3, reps: '20',     weight: '24 kg',icon: '🔔', muscles: 'Posterior chain · Core' },
    ],
  },
  'core-mobility': {
    title: 'Core & Mobility', subtitle: 'Saturday Session',
    duration: '50 min', calories: 280,
    tip: 'Move slowly and with control. Focus on breathing and releasing tension. This session improves recovery and longevity.',
    exercises: [
      { id: 'plank',  name: 'Plank Hold',          sets: 3, reps: '60 sec', weight: 'BW',  icon: '📏', muscles: 'Core · Shoulders' },
      { id: 'twist',  name: 'Russian Twist',        sets: 3, reps: '20',     weight: '8 kg',icon: '🌀', muscles: 'Obliques · Core' },
      { id: 'hflex',  name: 'Hip Flexor Stretch',   sets: 3, reps: '45 sec', weight: 'BW',  icon: '🦋', muscles: 'Hip Flexors · Glutes' },
      { id: 'pigeon', name: 'Pigeon Pose',           sets: 2, reps: '60 sec', weight: 'BW',  icon: '🕊️', muscles: 'Hips · Piriformis' },
    ],
  },
}

export default function WorkoutDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const workout = workouts[id ?? ''] ?? workouts['upper-body']
  const [completed, setCompleted] = useState<Record<string, boolean>>({})

  const toggle = (exId: string) =>
    setCompleted(prev => ({ ...prev, [exId]: !prev[exId] }))

  const doneCount = Object.values(completed).filter(Boolean).length
  const pct = Math.round((doneCount / workout.exercises.length) * 100)

  return (
    <main className="page animate-fade-in" id="workout-detail-page">
      {/* Header */}
      <header className="page-header animate-fade-up">
        <button className="btn btn-ghost btn-icon" id="back-btn" onClick={() => navigate(-1)} aria-label="Go back" style={{ marginLeft: -8 }}>
          <span className="material-symbols-rounded">arrow_back</span>
        </button>
        <div style={{ textAlign: 'right' }}>
          <p className="label-md text-primary">IRON PULSE</p>
          <p className="body-sm text-muted">{workout.subtitle}</p>
        </div>
      </header>

      {/* Hero card */}
      <section className="glass-card animate-fade-up stagger-1" style={{ background: 'linear-gradient(135deg,rgba(0,229,255,.10) 0%,rgba(18,18,18,.9) 70%)', border: '1px solid rgba(0,229,255,.2)', marginBottom: 'var(--space-lg)' }}>
        <h1 className="headline-lg" id="workout-title">{workout.title}</h1>
        <p className="body-sm text-muted" style={{ marginTop: 4 }}>{workout.subtitle} • {workout.duration} est.</p>
        <div className="row row-gap-md" style={{ marginTop: 'var(--space-md)', flexWrap: 'wrap' }}>
          {([['schedule', workout.duration], ['local_fire_department', `${workout.calories} kcal`], ['fitness_center', `${workout.exercises.length} exercises`]] as [string,string][]).map(([icon, label]) => (
            <div key={icon} className="row row-center" style={{ gap: 6 }}>
              <span className="material-symbols-rounded text-primary" style={{ fontSize: 18 }}>{icon}</span>
              <span className="label-md text-muted">{label}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-lg)' }}>
          <div className="row row-between row-center" style={{ marginBottom: 6 }}>
            <p className="body-sm text-muted">Session progress</p>
            <span className="label-md text-primary">{doneCount}/{workout.exercises.length}</span>
          </div>
          <div className="progress-bar progress-bar--lg">
            <div className="progress-fill" style={{ width: `${pct}%` }} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} />
          </div>
        </div>
      </section>

      {/* Exercises */}
      <section className="animate-fade-up stagger-2">
        <p className="section-title">Exercises</p>
        <div className="stack stack-sm">
          {workout.exercises.map((ex, i) => {
            const done = !!completed[ex.id]
            return (
              <div key={ex.id} className={`exercise-row${done ? ' completed' : ''}`} id={`ex-${ex.id}`} style={{ animationDelay: `${0.05 * i}s` }}>
                <div className={`exercise-icon${done ? ' completed-icon' : ''}`}>
                  {done
                    ? <span className="material-symbols-rounded" style={{ fontSize: 22, color: 'var(--lime-green)' }}>check_circle</span>
                    : <span style={{ fontSize: 22 }}>{ex.icon}</span>}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontFamily: 'var(--font-headline)', fontSize: 15, fontWeight: 600 }}>{ex.name}</p>
                  <p className="body-sm text-muted" style={{ fontSize: 12, marginTop: 2 }}>{ex.muscles}</p>
                  <div className="row row-gap-sm" style={{ marginTop: 6, flexWrap: 'wrap' }}>
                    <span className="badge badge-primary">{ex.sets} sets</span>
                    <span className="badge badge-neutral">{ex.reps} reps</span>
                    <span className="badge badge-neutral">{ex.weight}</span>
                  </div>
                </div>
                <button className={`btn btn-icon ${done ? 'btn-lime' : 'btn-secondary'}`} onClick={() => toggle(ex.id)} aria-label={done ? `Undo ${ex.name}` : `Complete ${ex.name}`} style={{ width: 40, height: 40, minHeight: 40, borderRadius: 'var(--radius-md)' }}>
                  <span className="material-symbols-rounded" style={{ fontSize: 18 }}>{done ? 'check' : 'radio_button_unchecked'}</span>
                </button>
              </div>
            )
          })}
        </div>
      </section>

      {/* Focus tip */}
      <section className="glass-card animate-fade-up stagger-3" style={{ marginTop: 'var(--space-lg)', borderColor: 'rgba(195,244,0,.15)' }}>
        <div className="row row-center row-gap-sm" style={{ marginBottom: 'var(--space-sm)' }}>
          <span className="material-symbols-rounded text-secondary" style={{ fontSize: 20 }}>lightbulb</span>
          <p className="section-title" style={{ margin: 0, color: 'var(--lime-green)' }}>Today's Focus</p>
        </div>
        <p className="body-sm text-muted" style={{ lineHeight: 1.65 }}>{workout.tip}</p>
      </section>

      {/* CTA */}
      <div style={{ marginTop: 'var(--space-lg)' }} className="animate-fade-up stagger-4">
        {pct === 100 ? (
          <Link to="/workouts" style={{ textDecoration: 'none' }}>
            <button className="btn btn-lime btn-full" id="finish-btn">
              <span className="material-symbols-rounded" style={{ fontSize: 20 }}>emoji_events</span>
              Workout Complete! 🎉
            </button>
          </Link>
        ) : (
          <button className="btn btn-primary btn-full" id="start-btn"
            onClick={() => {
              const all: Record<string, boolean> = {}
              workout.exercises.forEach(ex => { all[ex.id] = true })
              setCompleted(all)
            }}
          >
            <span className="material-symbols-rounded" style={{ fontSize: 20 }}>play_circle</span>
            {doneCount === 0 ? 'Start Session' : 'Continue Session'}
          </button>
        )}
      </div>
    </main>
  )
}
