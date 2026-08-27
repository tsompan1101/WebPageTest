interface ProgressBarData {
  label: string;
  current: number;
  total: number;
}

interface ImpactSectionData {
  title: string;
  eyebrow?: string;
  description: string;
  statLabel: string;
  progressBars: ProgressBarData[];
  question: string;
  linkLabel: string;
  linkHref: string;
  secondaryCta: { label: string; href: string };
  primaryCta: { label: string; href: string };
  backgroundImage: string;
}

function ProgressBar({ label, current, total }: ProgressBarData) {
  const pct = total > 0 ? Math.min(100, Math.round((current / total) * 100)) : 0;

  return (
    <div>
      <p className="text-xs font-medium text-brand-ink/70">{label}</p>
      <div
        className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-brand-ink/10"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="h-full rounded-full bg-brand-orange" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function ImpactCardContent({ data }: { data: ImpactSectionData }) {
  return (
    <>
      <h3 className="font-display text-2xl font-extrabold leading-tight text-brand-ink sm:text-3xl">
        {data.title}
      </h3>

      {data.eyebrow && <p className="mt-4 text-sm font-bold text-brand-ink">{data.eyebrow}</p>}
      <p className="mt-2 text-sm text-brand-muted">{data.description}</p>
      {data.title === 'Gasolineras del pueblo' ? null : (
        <p className="mt-5 flex items-center gap-2 text-sm font-bold text-brand-ink">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="shrink-0 text-brand-eco-green">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 20h5v-1a4 4 0 00-3-3.87M9 20H4v-1a4 4 0 013-3.87m5-4a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 10-4-4"
            />
          </svg>
          {data.statLabel}
        </p>
      )}
      {data.title === 'Gasolineras del pueblo' ? null : (
        <div className="mt-4 space-y-4">
          {data.progressBars.map((bar) => (
            <ProgressBar key={bar.label} {...bar} />
          ))}
        </div>
      )}

      {data.title === 'Gasolineras del pueblo' ? null : (
        <p className="mt-5 text-sm text-brand-muted">
          {data.question}{' '}
          <a
            href={data.linkHref}
            className="inline-flex items-center gap-1 font-bold text-brand-ink underline decoration-brand-orange decoration-2 underline-offset-2"
          >
            {data.linkLabel}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </p>
      )}
    </>
  );
}

export default function ImpactProgressSection({ data }: { data: ImpactSectionData }) {
  return (
    <section id="impacto" className="container-page py-12">
      {/*
        Móvil (<sm): flujo normal — imagen arriba a modo de banner, tarjeta
        y botones debajo, sin superposiciones absolutas. Evita que el texto
        largo o las barras de progreso se encimen con los botones.
      */}
      <div className="overflow-hidden rounded-card bg-white shadow-sm sm:hidden">
        <img src={data.backgroundImage} alt="" className="aspect-[4/3] w-full object-cover" />
        <div className="p-6">
          <ImpactCardContent data={data} />
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={data.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-brand-ink/15 px-5 py-2.5 text-sm font-semibold text-brand-ink transition hover:bg-brand-cream"
            >
              {data.secondaryCta.label}
            </a>
            <a href={data.primaryCta.href} className="btn-primary">
              {data.primaryCta.label}
            </a>
          </div>
        </div>
      </div>

      {/*
        Escritorio (sm+): imagen de fondo con tarjeta y botones
        superpuestos, como el diseño original.
      */}
      <div
        className="relative hidden overflow-hidden rounded-card sm:block"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(11,13,16,0.15) 0%, rgba(11,13,16,0.05) 45%, rgba(11,13,16,0) 70%), url(${data.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative min-h-[520px]">
          <div className="absolute left-8 top-8 z-10 max-w-md rounded-2xl bg-white/85 p-8 shadow-lg backdrop-blur-sm">
            <ImpactCardContent data={data} />
          </div>

          <div className="absolute bottom-8 left-8 z-10 flex flex-wrap gap-3">
            <a
              href={data.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-brand-ink shadow transition hover:bg-white"
            >
              {data.secondaryCta.label}
            </a>
            <a href={data.primaryCta.href} className="btn-primary">
              {data.primaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
