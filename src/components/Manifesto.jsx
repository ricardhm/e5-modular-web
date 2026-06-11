import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Manifesto({ c }) {
  const m = c.manifesto
  const { isMobile, isTablet } = useBreakpoint()

  return (
    <section id="nosotros" style={{
      position: 'relative',
      overflow: 'hidden',
      background: '#ffffff',
      borderBottom: '1px solid #e4e4e7',
      padding: isMobile ? '4rem 0' : '6rem 0',
    }}>
      <img
        src="/E5_figures.png"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: isMobile ? '-20%' : '-8%',
          bottom: '-15%',
          width: isMobile ? '80%' : '45%',
          maxWidth: '600px',
          opacity: 0.06,
          transform: 'scaleX(-1)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem' }}>

        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#716bb6',
          marginBottom: '2rem',
        }}>
          {m.label}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isTablet ? '1fr' : '1fr 2fr',
          gap: isTablet ? '2rem' : '4rem',
          alignItems: 'start',
        }}>

          {/* Left: title + CTA */}
          <div style={isTablet ? {} : { position: 'sticky', top: '5rem' }}>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? '1.625rem' : 'clamp(1.75rem, 2.5vw, 2.25rem)',
              fontWeight: 800,
              color: '#18181b',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: '0 0 2rem 0',
            }}>
              {m.title}
            </h2>

            {!isTablet && (
              <a
                href="#contacto"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#716bb6',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.6rem 1rem',
                  borderRadius: '5px',
                  border: '1px solid rgba(113,107,182,0.3)',
                  transition: 'background 0.15s, border-color 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(113,107,182,0.06)'; e.currentTarget.style.borderColor = '#716bb6'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(113,107,182,0.15)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(113,107,182,0.3)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {m.cta} →
              </a>
            )}
          </div>

          {/* Right: body */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[m.p1, m.p2, m.p3].filter(Boolean).map((p, i) => (
              <p key={i} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? '0.9375rem' : '1.0625rem',
                color: '#52525b',
                lineHeight: 1.75,
                margin: 0,
              }}>
                {p}
              </p>
            ))}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? '0.9375rem' : '1.0625rem',
              color: '#52525b',
              lineHeight: 1.75,
              margin: 0,
            }}>
              {m.p4}{' '}
              <strong style={{ color: '#18181b', fontWeight: 600 }}>{m.p4Bold}</strong>
            </p>

            {isTablet && (
              <a
                href="#contacto"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#716bb6',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.6rem 1rem',
                  borderRadius: '5px',
                  border: '1px solid rgba(113,107,182,0.3)',
                  alignSelf: 'flex-start',
                  marginTop: '0.5rem',
                  transition: 'background 0.15s, border-color 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(113,107,182,0.06)'; e.currentTarget.style.borderColor = '#716bb6' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(113,107,182,0.3)' }}
              >
                {m.cta} →
              </a>
            )}
          </div>
        </div>

        {/* Firm tags */}
        <div style={{
          marginTop: '3.5rem',
          paddingTop: '2rem',
          borderTop: '1px solid #e4e4e7',
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
        }}>
          {['McKinsey', 'Meta', 'Experian', 'Fortune 500'].map(tag => (
            <span key={tag} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#71717a',
              padding: '0.35rem 0.75rem',
              border: '1px solid #e4e4e7',
              borderRadius: '4px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
