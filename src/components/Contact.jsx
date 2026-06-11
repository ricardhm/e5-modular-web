import { useForm, ValidationError } from '@formspree/react'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Contact({ c }) {
  const ct = c.contact
  const { isMobile } = useBreakpoint()
  const [state, handleSubmit] = useForm('mkoaqnqq')

  const inputStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.875rem',
    color: '#18181b',
    background: '#f9f9fb',
    border: '1px solid #e4e4e7',
    borderRadius: '5px',
    padding: '0.8rem 1rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.15s, background 0.15s, box-shadow 0.15s',
    boxSizing: 'border-box',
  }

  const focusHandlers = {
    onFocus: e => { e.target.style.borderColor = '#716bb6'; e.target.style.background = '#fff'; e.target.style.boxShadow = '0 0 0 3px rgba(113,107,182,0.12)' },
    onBlur:  e => { e.target.style.borderColor = '#e4e4e7'; e.target.style.background = '#f9f9fb'; e.target.style.boxShadow = 'none' },
  }

  return (
    <section id="contacto" style={{
      background: '#fafafa',
      borderTop: '1px solid #e4e4e7',
      padding: isMobile ? '4rem 0' : '6rem 0',
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1.25rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr',
          gap: isMobile ? '2.5rem' : '5rem',
          alignItems: 'start',
        }}>

          {/* Left */}
          <div>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#716bb6',
              marginBottom: '1.25rem',
            }}>
              {ct.label}
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
              {ct.title}
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: isMobile ? '0.9375rem' : '1rem',
              color: '#71717a',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}>
              {ct.sub}
            </p>

            <div style={{ borderTop: '1px solid #e4e4e7', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {ct.bullets.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#716bb6', fontSize: '0.875rem', marginTop: '1px', flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#71717a', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          {state.succeeded ? (
            <div style={{
              background: '#ffffff',
              border: '1px solid #e4e4e7',
              borderRadius: '8px',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.75rem',
            }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '2rem', color: '#716bb6' }}>✓</span>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.125rem', fontWeight: 700, color: '#18181b', margin: 0 }}>
                {ct.successTitle}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#71717a', margin: 0 }}>
                {ct.successSub}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '0.875rem' }}>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder={ct.namePlaceholder}
                  style={inputStyle}
                  {...focusHandlers}
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder={ct.emailPlaceholder}
                  style={inputStyle}
                  {...focusHandlers}
                />
              </div>
              <ValidationError field="email" errors={state.errors}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#ef4444' }} />
              <input
                type="text"
                name="company"
                placeholder={ct.companyPlaceholder}
                style={inputStyle}
                {...focusHandlers}
              />
              <textarea
                required
                rows={5}
                name="message"
                placeholder={ct.question}
                style={{ ...inputStyle, resize: 'none' }}
                {...focusHandlers}
              />
              <ValidationError field="message" errors={state.errors}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#ef4444' }} />
              <button
                type="submit"
                disabled={state.submitting}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#fff',
                  background: state.submitting ? '#a8a4d4' : '#716bb6',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '0.875rem 1.75rem',
                  cursor: state.submitting ? 'not-allowed' : 'pointer',
                  alignSelf: isMobile ? 'stretch' : 'flex-start',
                  transition: 'background 0.15s, box-shadow 0.15s',
                  marginTop: '0.25rem',
                }}
                onMouseEnter={e => { if (!state.submitting) { e.currentTarget.style.background = '#5a55a0'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(113,107,182,0.35)' } }}
                onMouseLeave={e => { e.currentTarget.style.background = state.submitting ? '#a8a4d4' : '#716bb6'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {state.submitting ? '...' : ct.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
