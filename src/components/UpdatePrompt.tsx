import { useRegisterSW } from 'virtual:pwa-register/react'
import { useState, useEffect } from 'react'

/**
 * UpdatePrompt
 *
 * Uses the vite-plugin-pwa virtual module to detect when a new service worker
 * is waiting. Shows a toast banner so the user can choose to reload and get the
 * latest version immediately. Thanks to skipWaiting + clientsClaim in
 * vite.config.ts, reloading triggers the new SW to take control at once.
 */
export default function UpdatePrompt() {
  const [show, setShow] = useState(false)

  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      // Poll every 60 seconds for a new SW in production
      if (r) {
        setInterval(async () => {
          if (!(!r.installing && navigator)) return
          if ('connection' in navigator && !navigator.onLine) return
          const resp = await fetch(swUrl, {
            cache: 'no-store',
            headers: { cache: 'no-store', 'cache-control': 'no-cache' },
          })
          if (resp?.status === 200) await r.update()
        }, 60 * 1000) // check every 60 seconds
      }
    },
    onNeedRefresh() {
      setShow(true)
    },
    onOfflineReady() {
      // App is ready for offline use (first install)
      console.log('[PWA] App is ready to work offline.')
    },
  })

  useEffect(() => {
    if (needRefresh) setShow(true)
  }, [needRefresh])

  if (!show) return null

  return (
    <div
      id="pwa-update-toast"
      role="alert"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 'calc(72px + env(safe-area-inset-bottom) + 12px)',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 40px)',
        maxWidth: 390,
        zIndex: 9999,
        background: 'rgba(18, 18, 18, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(0, 229, 255, 0.3)',
        borderRadius: 16,
        padding: '14px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        boxShadow: '0 0 24px rgba(0, 229, 255, 0.2), 0 8px 32px rgba(0,0,0,0.6)',
        animation: 'slideUpToast 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both',
      }}
    >
      {/* Icon */}
      <span
        className="material-symbols-rounded"
        style={{ fontSize: 22, color: 'var(--primary-container)', flexShrink: 0 }}
      >
        system_update
      </span>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontFamily: 'var(--font-headline)', fontSize: 13, fontWeight: 700, color: 'var(--on-surface)', lineHeight: 1.2 }}>
          Update Available
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--on-surface-variant)', marginTop: 2 }}>
          A new version of Iron Pulse is ready.
        </p>
      </div>

      {/* Dismiss */}
      <button
        id="pwa-dismiss-btn"
        onClick={() => setShow(false)}
        aria-label="Dismiss update"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--on-surface-variant)',
          padding: 4,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span className="material-symbols-rounded" style={{ fontSize: 18 }}>close</span>
      </button>

      {/* Reload */}
      <button
        id="pwa-reload-btn"
        onClick={() => updateServiceWorker(true)}
        style={{
          background: 'var(--primary-container)',
          color: 'var(--background)',
          border: 'none',
          borderRadius: 10,
          padding: '8px 14px',
          fontFamily: 'var(--font-headline)',
          fontSize: 12,
          fontWeight: 700,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          boxShadow: '0 0 12px rgba(0,229,255,0.25)',
        }}
      >
        Reload
      </button>

      <style>{`
        @keyframes slideUpToast {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </div>
  )
}
