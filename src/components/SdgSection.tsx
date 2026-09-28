import { useState } from 'react';
import { sdg } from '@/data/content';
import FormattedText from '@/components/FormattedText';

export default function SdgSection() {
  const [index, setIndex] = useState(0);
  const total = sdg.slides.length;
  const slide = sdg.slides[index];

  function goTo(i: number) {
    setIndex((i + total) % total);
  }

  const isFirstSlide = index === 0;

  return (
    <section className="container-page py-12">
      <div className="relative overflow-hidden rounded-card">
        {/* Contenedor principal unificado con altura fija/mínima para todos los slides */}
        <div
          key={slide.image}
          className="relative flex min-h-[600px] w-full sm:min-h-[650px] overflow-hidden bg-transparent"
        >
          {/* 1. Fondo difuminado ampliado para cubrir cualquier espacio vacío sin deformar */}
          <div
            className="absolute -inset-1 bg-cover bg-center filter blur-2xl opacity-80 scale-125 pointer-events-none"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Capa de gradiente oscuro para asegurar la legibilidad del texto */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: `linear-gradient(
                0deg,
                rgba(11,13,16,0.92) 0%,
                rgba(11,13,16,0.55) 55%,
                rgba(11,13,16,0.35) 100%
              )`
            }}
          />

          {/* 2. Imagen principal nítida cubriendo el espacio de manera fluida (sin espacios blancos) */}
          <div className="absolute inset-0 z-0 flex items-center justify-center p-4">
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover opacity-35 pointer-events-none rounded-card"
            />
          </div>

          {/* =====================================================
             CONTENIDO DE LOS SLIDES
           ===================================================== */}
          {isFirstSlide ? (
            /* =====================================================
               PRIMER SLIDE
               Imagen ODS grande a la izquierda + texto derecha
             ===================================================== */
            <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 p-8 text-white sm:flex-row sm:gap-12 sm:p-12">

              {/* Imagen ODS principal */}
              <div className="flex w-full items-center justify-center sm:w-1/2">
                <img
                  src={slide.icon}
                  loading='lazy'
                  alt="Objetivos de Desarrollo Sostenible"
                  className="h-auto w-64 object-contain sm:w-80 md:w-[400px] lg:w-[450px] rounded-full"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>

              {/* Texto */}
              <div className="w-full max-w-2xl sm:w-1/2">
                <h3 className="font-display text-2xl font-bold sm:text-3xl">
                  {slide.title}
                </h3>

                <p className="mt-4 whitespace-pre-line text-white/85">
                  <FormattedText text={slide.body} />
                </p>

                {/* Goals SOLO en el primer slide */}
                {slide.goals.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {slide.goals.map((n) => (
                      <li
                        key={n}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-eco-green text-sm font-bold text-white"
                      >
                        {n}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ) : (
            /* =====================================================
               SLIDES 2-8
               Imagen ODS centrada + texto centrado
             ===================================================== */
            <div className="relative z-10 flex w-full flex-col items-center justify-center p-8 text-white sm:p-12">

              {/* Imagen ODS */}
              <div className="flex w-full items-center justify-center">
                <img
                  src={slide.icon}
                  alt=""
                  className="h-20 w-20 object-contain sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-3xl"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>

              {/* Texto */}
              <div className="relative mt-4 max-w-2xl text-center">
                <h3 className="font-display text-2xl font-bold sm:text-3xl">
                  {slide.title}
                </h3>

                <p className="mt-4 whitespace-pre-line text-white/85">
                  <FormattedText text={slide.body} />
                </p>
              </div>
            </div>
          )}
        </div>

        {total > 1 && (
          <>
            {/* Flecha anterior */}
            <button
              type="button"
              aria-label="Slide anterior"
              onClick={() => goTo(index - 1)}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 text-brand-ink shadow transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a50046]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 18l-6-6 6-6"
                />
              </svg>
            </button>

            {/* Flecha siguiente */}
            <button
              type="button"
              aria-label="Siguiente slide"
              onClick={() => goTo(index + 1)}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/50 text-brand-ink shadow transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a50046]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 18l6-6-6-6"
                />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
              {sdg.slides.map((s, i) => (
                <button
                  key={s.image}
                  type="button"
                  aria-label={`Ir al slide ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === index ? 'bg-[#a50046]' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
