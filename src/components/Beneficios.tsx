import type { ReactNode } from 'react';

export interface BenefitItem {
  label: string;
  description?: string;
  icon: string;
}

interface BeneficiosProps {
  title: string;
  centerLabel?: string;
  items: BenefitItem[];
}

const ICONS: Record<string, ReactNode> = {
  badge: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="8" r="5" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 12.5 7 21l5-2.5L17 21l-1.5-8.5"
      />
    </svg>
  ),

  gear: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="3" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"
      />
    </svg>
  ),

  bolt: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  ),

  expand: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"
      />
    </svg>
  ),

  map: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-7-6.5-7-11.5A7 7 0 0119 9.5C19 14.5 12 21 12 21z"
      />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
};

const RADIUS = 42;

export default function Beneficios({
  title,
  centerLabel,
  items = [],
}: BeneficiosProps) {
  const angleStep = items.length > 0 ? 360 / items.length : 0;

  return (
    <section className="container-page py-16 sm:py-20">
      <h2 className="text-center font-display text-2xl font-extrabold text-brand-ink sm:text-3xl">
        {title}
      </h2>
      {/* Escritorio (sm+): diagrama circular. La posición de cada ítem se calcula con trigonometría (ángulo = 360°/cantidad de ítems), así que funciona igual con 4, 5 u 8 beneficios sin tocar el código — solo agrega/quita objetos del arreglo "items". */}
      <div className="relative mx-auto mt-16 hidden aspect-square max-w-xl sm:block">
        <div className="absolute inset-[8%] rounded-full border border-dashed border-brand-ink/20" aria-hidden="true" />
        <div className="absolute inset-[26%] rounded-full bg-brand-cream" aria-hidden="true" />
        {centerLabel &&
          (<div
              className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              "
            >
              <img
                src={centerLabel}
                alt=""
                className="h-auto w-40 object-contain"
              />
            </div>)}
        {items.map((item, i) => {
          const angle = angleStep * i - 90;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + RADIUS * Math.cos(rad);
          const y = 50 + RADIUS * Math.sin(rad);
          return (
            <div key={item.label} className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-md">
                {ICONS[item.icon] ?? (
                  item.icon ? (
                    <img
                      src={item.icon}
                      alt=""
                      className="h-8 w-8 object-contain"
                    />
                  ) : null
                )}
              </span>
              <p className="absolute left-1/2 top-1/2 w-40 -translate-x-1/2 pt-10 text-center text-sm font-semibold leading-snug text-brand-ink">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
      {/* Móvil: el círculo se apretaría demasiado, mejor lista simple */}
      <div className="mt-10 flex flex-col gap-6 sm:hidden">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
              {ICONS[item.icon] ?? (
                item.icon ? (
                  <img
                    src={item.icon}
                    alt=""
                    className="h-7 w-7 object-contain"
                  />
                ) : null
              )}
            </span>
            <p className="text-sm font-semibold leading-snug text-brand-ink">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
  }
