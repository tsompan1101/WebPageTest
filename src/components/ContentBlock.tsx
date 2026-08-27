interface ContentBlockProps {
  title: string;
  body: string;
  image: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSide?: 'left' | 'right';
}

export default function ContentBlock({
  title,
  body,
  image,
  primaryCta,
  secondaryCta,
  imageSide = 'right',
}: ContentBlockProps) {
  const imageFirst = imageSide === 'left';

  return (
    <section id="programas" className="container-page py-12">
      <div className="grid items-start gap-10 rounded-card bg-brand-cream p-8 md:grid-cols-2 md:p-12">
        <div className={imageFirst ? 'order-2 md:order-1' : 'order-2'}>
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-card object-cover"
          />
        </div>

        <div className={imageFirst ? 'order-1 md:order-2' : 'order-1'}>
          {/*
            Título grande, difuminado hacia abajo (mask-image) — se queda
            en su columna de siempre, no salta arriba de todo el bloque.
          */}
          <h3
            className="font-display text-4xl font-extrabold leading-[1.05] text-brand-ink sm:text-5xl lg:text-5xl"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            }}
          >
            {title}
          </h3>
          <p className="-mt-3 text-brand-muted text-justify sm:mt-4">{body}</p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {primaryCta && (
                <a href={primaryCta.href} className="btn-primary">
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className={
                    title === 'Gasolineras del pueblo'
                      ? 'btn-secondary'
                      : 'btn-default disabled:opacity-50'
                  }
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
