import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Hero({ c, lang }) {
  const h = c.hero
  const { isMobile } = useBreakpoint()

  const stats = [
    { n: '14', label: lang === 'es' ? 'días' : 'days' },
    { n: '1', label: lang === 'es' ? 'número' : 'number' },
    { n: '3', label: lang === 'es' ? 'tácticas' : 'tactics' },
  ]

  return (
    <section
      id="top"
      style={{
        background: '#09090b',
        backgroundImage: [
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(113,107,182,0.18) 0%, transparent 70%)',
          'radial-gradient(circle at 50% 50%, rgba(113,107,182,0.04) 1px, transparent 1px)',
        ].join(', '),
        backgroundSize: 'auto, 28px 28px',
        borderBottom: '1px solid #27272a',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '60px',
      }}
    >
      <div style={{
        maxWidth: '56rem',
        margin: '0 auto',
        width: '100%',
        padding: isMobile ? '4rem 1.25rem 3.5rem' : '6rem 2rem 5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>

        {/* Badge pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          border: '1px solid rgba(113,107,182,0.4)',
          borderRadius: '999px',
          padding: '0.35rem 1rem',
          marginBottom: '2rem',
          background: 'rgba(113,107,182,0.08)',
        }}>
          <span style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#716bb6',
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#a78bfa',
          }}>
            Mosaico™ · 14 {lang === 'es' ? 'días' : 'days'} · {lang === 'es' ? 'Precio Fijo' : 'Fixed Price'}
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? '2.125rem' : 'clamp(2.25rem, 4vw, 3.5rem)',
          fontWeight: 800,
          color: '#fafafa',
          lineHeight: 1.12,
          letterSpacing: '-0.03em',
          margin: '0 0 1.5rem 0',
          maxWidth: '26ch',
        }}>
          {h.headline[0]}{' '}
          <span style={{ color: '#a78bfa' }}>{h.headline[1]}</span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: isMobile ? '0.9375rem' : '1.0625rem',
          color: '#71717a',
          lineHeight: 1.75,
          margin: '0 0 2.5rem 0',
          maxWidth: '46ch',
        }}>
          {h.sub}
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '0.75rem',
          alignItems: 'center',
          width: isMobile ? '100%' : 'auto',
          marginBottom: '3rem',
        }}>
          <a
            href="#contacto"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#fff',
              background: '#716bb6',
              padding: '0.875rem 1.75rem',
              borderRadius: '5px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'background 0.15s, box-shadow 0.15s',
              width: isMobile ? '100%' : 'auto',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#5a55a0'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(113,107,182,0.45)' }}
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
              color: '#a1a1aa',
              padding: '0.875rem 1.5rem',
              borderRadius: '5px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              border: '1px solid #3f3f46',
              transition: 'border-color 0.15s, color 0.15s',
              width: isMobile ? '100%' : 'auto',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#716bb6'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#3f3f46'; e.currentTarget.style.color = '#a1a1aa' }}
          >
            {h.ctaSecondary}
          </a>
        </div>

        {/* Stats row */}
        <div style={{
          width: '100%',
          borderTop: '1px solid #27272a',
          paddingTop: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
        }}>
          {stats.map((s, i) => (
            <div
              key={s.n}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.375rem',
                paddingRight: i < 2 ? '1rem' : 0,
                borderRight: i < 2 ? '1px solid #27272a' : 'none',
              }}
            >
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: isMobile ? '1.375rem' : '1.875rem',
                fontWeight: 500,
                color: '#a78bfa',
                margin: 0,
                lineHeight: 1,
              }}>
                {s.n}
              </p>
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#52525b',
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
