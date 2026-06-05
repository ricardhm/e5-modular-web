import { ShieldCheck } from 'lucide-react'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Mosaico({ c }) {
  const m = c.mosaico
  const { isMobile, isTablet } = useBreakpoint()

  return (
    <section id="mosaico" style={{
      background: '#fafafa',
      borderBottom: '1px solid #e4e4e7',
      padding: isMobile ? '4rem 0' : '6rem 0',
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '2.5rem', maxWidth: '42rem' }}>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#716bb6',
            marginBottom: '1.25rem',
          }}>
            {m.label}
          </p>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? '1.5rem' : 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 800,
            color: '#18181b',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}>
            {m.title}
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? '0.9375rem' : '1rem',
            color: '#71717a',
            lineHeight: 1.7,
            margin: 0,
          }}>
            {m.intro}
          </p>
        </div>

        {/* Bento: 3 gaps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
          border: '1px solid #e4e4e7',
          borderRadius: '6px',
          overflow: 'hidden',
          marginBottom: '1px',
        }}>
          {m.gaps.map((gap, i) => (
            <div key={gap.number} style={{
              background: '#ffffff',
              padding: isMobile ? '1.5rem' : '2rem',
              borderRight: (!isMobile && !isTablet && i < 2) || (isTablet && !isMobile && i === 0) ? '1px solid #e4e4e7' : 'none',
              borderBottom: isMobile && i < 2 ? '1px solid #e4e4e7' : isTablet && !isMobile && i < 2 ? '1px solid #e4e4e7' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '1.5rem',
                fontWeight: 500,
                color: '#716bb6',
                lineHeight: 1,
              }}>
                {gap.number}
              </span>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                fontWeight: 700,
                color: '#18181b',
                lineHeight: 1.4,
                margin: 0,
              }}>
                {gap.title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                color: '#71717a',
                lineHeight: 1.7,
                margin: 0,
              }}>
                {gap.body}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div style={{
          background: '#f4f4f5',
          border: '1px solid #e4e4e7',
          borderTop: '3px solid #716bb6',
          borderRadius: '6px',
          padding: isMobile ? '1.5rem' : '2.5rem',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '1rem' : '2rem',
          alignItems: 'flex-start',
          marginBottom: '2rem',
          marginTop: '1px',
        }}>
          <div style={{
            flexShrink: 0,
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(113,107,182,0.1)',
            border: '1px solid rgba(113,107,182,0.2)',
            borderRadius: '6px',
          }}>
            <ShieldCheck size={18} strokeWidth={1.5} color="#716bb6" />
          </div>
          <div>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#716bb6',
              marginBottom: '0.75rem',
            }}>
              {m.guaranteeLabel}
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? '0.9375rem' : '1rem',
              color: '#52525b',
              lineHeight: 1.7,
              margin: 0,
            }}>
              {m.guarantee}
            </p>
          </div>
        </div>

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
            textDecoration: 'none',
            transition: 'background 0.15s, box-shadow 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#5a55a0'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(113,107,182,0.35)' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#716bb6'; e.currentTarget.style.boxShadow = 'none' }}
        >
          {m.cta}
        </a>
      </div>
    </section>
  )
}
