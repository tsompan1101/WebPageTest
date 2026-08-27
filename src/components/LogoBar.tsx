import { logos } from '@/data/content';

// Segundos que tarda CADA logo en cruzar la pantalla. Con ~37 aliados y
// 3s/logo, una vuelta completa dura ~111s. Sube el número para que vaya
// más lento, bájalo para que vaya más rápido — no depende de cuántos
// logos agregues o quites, se ajusta solo.
const SECONDS_PER_LOGO = 5;

export default function LogoBar() {
  const duration = logos.length * SECONDS_PER_LOGO;
  // Se duplica la lista para que el ciclo del carrusel sea continuo (ver
  // el keyframe "marquee" en global.css).
  const track = [...logos, ...logos];

  return (
    <section className="border-y border-black/5 bg-white py-10">
      <div className="container-page flex flex-col items-center gap-8">
        <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-brand-muted">
          Aliados
        </h3>

        <div className="marquee-fade relative w-full overflow-hidden">
          <div
            className="animate-marquee flex w-max items-center gap-14"
            style={{ animationDuration: `${duration}s` }}
          >
            {track.map((logo, i) => (
              <img
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="h-12 w-auto shrink-0 opacity-70 transition hover:opacity-100 hover:grayscale-0 sm:h-16 lg:h-20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
