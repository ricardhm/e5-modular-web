import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Nav({ lang, setLang, c }) {
  const { isMobile } = useBreakpoint()

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      background: '#ffffff',
      borderBottom: '1px solid #e4e4e7',
    }}>
      <div style={{
        maxWidth: '72rem',
        margin: '0 auto',
        padding: '0 1.25rem',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo_white.png" alt="E5 Modular" style={{ height: isMobile ? '32px' : '38px', width: 'auto' }} />
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #e4e4e7',
            borderRadius: '5px',
            overflow: 'hidden',
          }}>
            {['es', 'en'].map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  padding: isMobile ? '0.3rem 0.6rem' : '0.35rem 0.75rem',
                  cursor: 'pointer',
                  border: 'none',
                  background: lang === l ? '#716bb6' : 'transparent',
                  color: lang === l ? '#fff' : '#71717a',
                  transition: 'background 0.15s, color 0.15s',
                }}
              >
                {l}
              </button>
            ))}
          </div>

          {!isMobile && (
            <a
              href="#contacto"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 600,
                color: '#fff',
                background: '#716bb6',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                textDecoration: 'none',
                transition: 'background 0.15s, box-shadow 0.15s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#5a55a0'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(113,107,182,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#716bb6'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {c.nav.cta}
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}
