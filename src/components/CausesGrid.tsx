import { causes } from '@/data/content';

export default function CausesGrid() {
  return (
    <section id="causa" className="container-page py-16">
      <h2 className="text-center font-display text-2xl font-bold text-brand-ink sm:text-2xl">
        Súmate a la Causa
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-brand-muted">
        Elige un proyecto y forma parte del cambio.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {causes.map((cause) => (
          <a
            key={cause.title}
            href={cause.href}
            className="group overflow-hidden rounded-card pantone-glow"
          >
            <img
              src={cause.image}
              alt={cause.title}
              loading="lazy"
              className="w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="p-6 bg-brand-cream">
              <h3 className="font-display text-lg font-bold text-brand-ink">{cause.title}</h3>
              <p className="mt-2 text-sm text-brand-muted">{cause.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
