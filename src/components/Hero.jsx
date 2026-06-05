import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Hero({ c, lang }) {
  const h = c.hero
  const { isMobile, isTablet } = useBreakpoint()

  const stats = [
    { n: '14', label: lang === 'es' ? 'días' : 'days' },
    { n: '$3K–$5K', label: lang === 'es' ? 'precio fijo' : 'fixed price' },
    { n: '2', label: lang === 'es' ? 'acciones ejecutables' : 'executable actions' },
  ]

  return (
    <section
      id="top"
      style={{
        background: '#ffffff',
        borderBottom: '1px solid #e4e4e7',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '60px',
      }}
    >
      <div style={{
        maxWidth: '72rem',
        margin: '0 auto',
        width: '100%',
        padding: isMobile ? '3.5rem 1.25rem 3rem' : '5rem 1.25rem 4rem',
      }}>

        {/* Kicker */}
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#716bb6',
          margin: '0 0 1.5rem 0',
        }}>
          {h.kicker}
        </p>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : 'clamp(2.25rem, 4vw, 3.5rem)',
          fontWeight: 800,
          color: '#18181b',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          margin: '0 0 1.5rem 0',
          maxWidth: '22ch',
        }}>
          {h.headline[0]}{' '}
          <span style={{ color: '#716bb6' }}>{h.headline[1]}</span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? '0.9375rem' : '1.0625rem',
          color: '#71717a',
          lineHeight: 1.7,
          margin: '0 0 2.5rem 0',
          maxWidth: '52ch',
        }}>
          {h.sub}
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '0.75rem',
          marginBottom: '3.5rem',
        }}>
          <a
            href="#contacto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#fff',
              background: '#716bb6',
              padding: '0.875rem 1.5rem',
              borderRadius: '5px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'background 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#5a55a0'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(113,107,182,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#716bb6'; e.currentTarget.style.boxShadow = 'none' }}
          >
            {h.ctaPrimary}
          </a>
          <a
            href="#mosaico"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#52525b',
              padding: '0.875rem 1.5rem',
              borderRadius: '5px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              border: '1px solid #d4d4d8',
              transition: 'border-color 0.15s, color 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#716bb6'; e.currentTarget.style.color = '#716bb6'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#d4d4d8'; e.currentTarget.style.color = '#52525b'; e.currentTarget.style.boxShadow = 'none' }}
          >
            {h.ctaSecondary}
          </a>
        </div>

        {/* Stats row */}
        <div style={{
          borderTop: '1px solid #e4e4e7',
          paddingTop: '2rem',
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(3, max-content)',
          gap: isMobile ? '1rem' : '4rem',
        }}>
          {stats.map(s => (
            <div key={s.n}>
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: isMobile ? '1.25rem' : '1.75rem',
                fontWeight: 500,
                color: '#716bb6',
                margin: '0 0 0.25rem 0',
                lineHeight: 1,
              }}>
                {s.n}
              </p>
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#a1a1aa',
                margin: 0,
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
