export interface ProgramSolution {
  title: string;
  category: string;
  description: string;
  benefits: string[];
  image: string;
  alt: string;
}

interface ProgramSolutionsProps {
  title: string;
  eyebrow: string;
  description: string;
  solutions: ProgramSolution[];
  accent?: 'orange' | 'green';
}

export default function ProgramSolutions({
  title,
  eyebrow,
  description,
  solutions,
  accent = 'green',
}: ProgramSolutionsProps) {
  const accentClasses = accent === 'orange'
    ? 'bg-brand-orange text-white'
    : 'bg-brand-eco-green text-white';

  return (
    <section className="container-page py-14 sm:py-20" aria-labelledby="program-solutions-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-eco-green">{eyebrow}</p>
        <h2 id="program-solutions-title" className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-brand-muted sm:text-lg">{description}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => (
          <article
            key={solution.title}
            className="group overflow-hidden rounded-3xl border border-brand-ink/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-brand-cream">
              <img
                src={solution.image}
                alt={solution.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow-sm ${accentClasses}`}>
                {solution.category}
              </span>
            </div>

            <div className="p-6 bg-brand-cream">
              <h3 className="font-display text-xl font-extrabold text-brand-ink">{solution.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{solution.description}</p>

              <ul className="mt-5 space-y-2.5">
                {solution.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2 text-sm text-brand-ink/80">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-eco-green/15 text-brand-eco-green" aria-hidden="true">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

