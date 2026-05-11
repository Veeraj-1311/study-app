export default function BackgroundArt() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        backgroundColor: '#1a1a1a',
        overflow: 'hidden',
      }}
    >
      {/* Aurora blobs - slow drift */}
      <div
        style={{
          position: 'absolute',
          inset: '-15%',
          background:
            'radial-gradient(45% 40% at 18% 22%, rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.24), transparent 65%),' +
            'radial-gradient(40% 40% at 84% 18%, rgba(var(--color-accent-cyan-r), var(--color-accent-cyan-g), var(--color-accent-cyan-b), 0.18), transparent 65%),' +
            'radial-gradient(45% 40% at 78% 84%, rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.16), transparent 65%),' +
            'radial-gradient(45% 40% at 22% 86%, rgba(var(--color-accent-cyan-r), var(--color-accent-cyan-g), var(--color-accent-cyan-b), 0.14), transparent 65%)',
          animation: 'auroraDrift 28s ease-in-out infinite alternate',
          filter: 'blur(30px)',
          willChange: 'transform',
        }}
      />

      {/* Second aurora layer drifting opposite — keeps motion interesting */}
      <div
        style={{
          position: 'absolute',
          inset: '-15%',
          background:
            'radial-gradient(35% 35% at 65% 35%, rgba(var(--color-accent-r), var(--color-accent-g), var(--color-accent-b), 0.12), transparent 65%),' +
            'radial-gradient(35% 35% at 35% 65%, rgba(var(--color-accent-cyan-r), var(--color-accent-cyan-g), var(--color-accent-cyan-b), 0.10), transparent 65%)',
          animation: 'auroraDriftSlow 42s ease-in-out infinite alternate-reverse',
          filter: 'blur(40px)',
          willChange: 'transform',
        }}
      />

      {/* Dot grid - faded toward edges */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.045) 1px, transparent 0)',
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, black 0%, transparent 100%)',
        }}
      />

      {/* Noise grain - SVG fractal noise, very subtle */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: '180px 180px',
          opacity: 0.06,
        }}
      />

      {/* Soft vignette - darken edges for depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 110% 90% at 50% 50%, transparent 40%, rgba(0, 0, 0, 0.45) 100%)',
        }}
      />
    </div>
  )
}
