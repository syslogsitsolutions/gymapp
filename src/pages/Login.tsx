import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'authenticating' | 'success'>('idle')
  const navigate = useNavigate()

  useEffect(() => {
    const canvas = document.getElementById('particles') as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let particles: Particle[] = []
    let animationFrameId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Particle {
      x = 0
      y = 0
      size = 0
      speedX = 0
      speedY = 0
      life = 0

      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.life = Math.random() * 0.5 + 0.2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset()
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `rgba(0, 229, 255, ${this.life})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      resize()
      particles = Array.from({ length: 40 }, () => new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.update()
        p.draw()
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    init()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (status !== 'idle') return

    setStatus('authenticating')

    setTimeout(() => {
      setStatus('success')
      setTimeout(() => {
        navigate('/home')
      }, 1000)
    }, 2000)
  }

  return (
    <div className="login-page-container">
      {/* Background Layer */}
      <img
        alt="Dark mood gym"
        className="login-bg-img"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuATGtk9KrIKM_-WELfzOOir590bjmYI34t6xmd2x2GAUB0JegaQHgxtdve3HajRtdXZI_XMFsTr89GrFqG84ZfqYQemKc7Rh0l8n7NmZGQaDpuoPz6k4QApUnesdFKdnDC0KKfR-WdIc3QhaCUc82NCZb7Pyuak4ni-e7H4f4lzl8zGB9BKkPYGjX_-c0ZYPmWdPLdfqMncf_jQopMJNOpdaJWrB0fNAz3E9p6vrX8hE0kYBL_3Z9BQjBKBga49h93kcM0o-PRCkj8"
      />
      <div className="login-gradient-overlay" />

      {/* Header Section */}
      <header className="login-header animate-fade-in">
        <h1 className="login-title">IRON PULSE</h1>
        <p className="login-subtitle">Fuel your fire</p>
      </header>

      {/* Main Login Canvas */}
      <main className="login-card animate-scale-in">
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="input-group">
            <label className="input-label" htmlFor="email">
              EMAIL ADDRESS
            </label>
            <div className="input-wrapper">
              <span className="input-icon material-symbols-rounded">mail</span>
              <input
                className="login-input"
                id="email"
                name="email"
                placeholder="alex@example.com"
                required
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={status !== 'idle'}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="input-group">
            <div className="row row-between row-center" style={{ padding: '0 4px' }}>
              <label className="input-label" htmlFor="password" style={{ margin: 0 }}>
                PASSWORD
              </label>
              <a
                className="input-label"
                href="#forgot"
                style={{ margin: 0, color: 'var(--primary-container)', textDecoration: 'none' }}
                onClick={e => e.preventDefault()}
              >
                Forgot?
              </a>
            </div>
            <div className="input-wrapper">
              <span className="input-icon material-symbols-rounded">lock</span>
              <input
                className="login-input"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                disabled={status !== 'idle'}
              />
            </div>
          </div>

          {/* Action Button */}
          <button
            className="login-btn"
            type="submit"
            disabled={status !== 'idle'}
            style={{
              opacity: status !== 'idle' ? 0.8 : 1,
              cursor: status !== 'idle' ? 'not-allowed' : 'pointer',
              backgroundColor: status === 'success' ? 'var(--secondary-container)' : 'var(--primary-container)',
              color: 'var(--background)',
            }}
          >
            {status === 'idle' && (
              <>
                LOGIN
                <span className="material-symbols-rounded" style={{ fontVariationSettings: "'wght' 700" }}>
                  bolt
                </span>
              </>
            )}
            {status === 'authenticating' && (
              <>
                <span className="material-symbols-rounded" style={{ animation: 'spin 1.5s linear infinite' }}>
                  sync
                </span>
                AUTHENTICATING...
              </>
            )}
            {status === 'success' && <>SUCCESS</>}
          </button>
        </form>

        {/* Divider */}
        <div className="login-divider">
          <div className="login-divider-line" />
          <span className="login-divider-text">OR CONTINUE WITH</span>
          <div className="login-divider-line" />
        </div>

        {/* Social Logins */}
        <div className="social-grid">
          <button className="social-btn" type="button" onClick={() => navigate('/home')}>
            <svg className="social-icon" style={{ width: 20, height: 20 }} viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="currentColor"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="currentColor"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="currentColor"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                fill="currentColor"
              />
            </svg>
            <span className="label-md" style={{ color: 'var(--on-surface)' }}>
              GOOGLE
            </span>
          </button>
          <button className="social-btn" type="button" onClick={() => navigate('/home')}>
            <svg className="social-icon" style={{ width: 20, height: 20 }} viewBox="0 0 24 24">
              <path
                d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.11.8 1.12-.16 2.41-1.04 4.09-.73 1.94.35 3.32 1.6 4.04 2.85-3.69 1.84-2.83 6.92.8 8.16-.48 1.48-1.56 3.1-4.04 1.89zM12.03 7.25c-.02-2.13 1.6-3.92 3.53-4.04.18 2.24-2.23 4.19-3.53 4.04z"
                fill="currentColor"
              />
            </svg>
            <span className="label-md" style={{ color: 'var(--on-surface)' }}>
              APPLE
            </span>
          </button>
        </div>
      </main>

      {/* Secondary Action */}
      <div className="signup-prompt">
        New to Iron Pulse?
        <a className="signup-link" href="#signup" onClick={e => e.preventDefault()}>
          Sign Up
        </a>
      </div>

      {/* Visual Polish: Floating Particles */}
      <canvas className="particles-canvas" id="particles" />

      {/* Spin Animation Definition */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
