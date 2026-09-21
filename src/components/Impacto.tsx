import { useEffect, useState } from 'react';
import { footer } from '@/data/content';
import FormattedText from '@/components/FormattedText';


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
  // "action: 'contact'" hace que el botón abra el popup con correo/teléfono
  // en vez de navegar a "href" (href se ignora en ese caso, pero puedes
  // dejarlo como '#' de todas formas).
  primaryCta: { label: string; href: string; action?: 'contact' };
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
      <p className="mt-2 text-sm text-brand"><FormattedText text={data.description} /></p>
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

/*
  Popup con correo y teléfono. Se cierra con Escape, con click en el fondo,
  o con el botón ✕. Toma los datos de footer.contact en content.ts, así
  que si cambias ese correo/teléfono, este popup se actualiza solo.
*/
function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id="contact-modal-title" className="font-display text-xl font-extrabold text-brand-ink">
            Contáctanos
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-brand-ink/60 transition hover:bg-brand-cream hover:text-brand-ink"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <p className="mt-2 text-sm text-brand-muted">
          Escríbenos para donar o para sumarte al equipo — con gusto te contestamos.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={`mailto:${footer.contact.email}`}
            className="flex items-center gap-3 rounded-xl border border-brand-ink/10 px-4 py-3 text-sm font-semibold text-brand-ink transition hover:bg-brand-cream"
          >
            <img
              src={footer.contact.emailIcon}
              alt=""
              aria-hidden="true"
              className="h-5 w-5 shrink-0 opacity-70"
            />
            {footer.contact.email}
          </a>
          <a
            href={`tel:${footer.contact.phone}`}
            className="flex items-center gap-3 rounded-xl border border-brand-ink/10 px-4 py-3 text-sm font-semibold text-brand-ink transition hover:bg-brand-cream"
          >
            <img
              src={footer.contact.phoneIcon}
              alt=""
              aria-hidden="true"
              className="h-5 w-5 shrink-0 opacity-70"
            />
            {footer.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ImpactProgressSection({ data }: { data: ImpactSectionData }) {
  const [contactOpen, setContactOpen] = useState(false);

  // Un solo botón que sirve tanto para el bloque de móvil como el de
  // escritorio, para no repetir la condición dos veces.
  const primaryCtaButton = (
    <>
      {data.primaryCta.action === 'contact' ? (
        <button type="button" onClick={() => setContactOpen(true)} className="btn-primary">
          {data.primaryCta.label}
        </button>
      ) : (
        <a href={data.primaryCta.href} className="btn-primary">
          {data.primaryCta.label}
        </a>
      )}
    </>
  );

  return (
    <section id="impacto" className="container-page py-12">
      {/*
        Móvil (<sm): flujo normal — imagen arriba a modo de banner, tarjeta
        y botones debajo, sin superposiciones absolutas. Evita que el texto
        largo o las barras de progreso se encimen con los botones.
      */}
      <div className="overflow-hidden rounded-card bg-white shadow-sm sm:hidden">
        <img src={data.backgroundImage} alt="" className="aspect-[4/3] w-full object-cover" />
        <div className="p-6 text-justify">
          <ImpactCardContent data={data} />
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={data.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-brand-ink/15 px-5 py-2.5 text-sm font-semibold text-brand-ink transition hover:bg-brand-cream"
            >
              {data.secondaryCta.label}
            </a>
            {primaryCtaButton}
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
        <div className="relative flex min-h-[520px] flex-col justify-between gap-6 p-8">
          <div className="max-w-md rounded-2xl bg-white/85 p-8 text-justify shadow-lg backdrop-blur-sm">
            <ImpactCardContent data={data} />
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={data.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-brand-ink shadow transition hover:bg-white"
            >
              {data.secondaryCta.label}
            </a>
            {primaryCtaButton}
          </div>
        </div>
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  );
}
