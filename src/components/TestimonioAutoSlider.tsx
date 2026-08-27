import { useEffect, useRef, useState } from 'react';
import { testimonials } from '@/data/content';

const AUTOPLAY_MS = 5000;

export default function TestimonialAutoSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const total = testimonials.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing, total]);

  const t = testimonials[index];

  return (
    <div className="relative overflow-hidden rounded-card">
      {/* Imagen o GIF de fondo del testimonio activo */}
      <div
        key={t.slideImage}
        className="relative flex min-h-[380px] w-full items-end sm:min-h-[460px]"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(11,13,16,0.85) 0%, rgba(11,13,16,0.25) 60%, rgba(11,13,16,0.05) 100%), url(${t.slideImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Cita del testimonio, superpuesta dentro del mismo slide */}
        <div className="relative z-10 max-w-xl p-8 text-white sm:p-12">
          <p className="font-display text-xl font-semibold leading-snug sm:text-2xl">
            “{t.quote}”
          </p>
          <p className="mt-4 text-sm text-white/80">
            — {t.name}, {t.role}
          </p>
        </div>
      </div>

      {/* Controles: play/pausa + puntos, como en el diseño de referencia */}
      <div className="absolute inset-x-0 bottom-4 z-10 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label={playing ? 'Pausar slider' : 'Reproducir slider'}
          onClick={() => setPlaying((p) => !p)}
          className="flex h-6 w-6 items-center justify-center text-white/90 transition hover:text-white"
        >
          {playing ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {testimonials.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Ir al testimonio ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
