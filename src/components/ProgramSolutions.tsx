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
  const accentColor =
    accent === 'orange'
      ? 'text-brand-orange'
      : 'text-brand-eco-green';

  return (
    <section
      className="container-page py-14 sm:py-20"
      aria-labelledby="program-solutions-title"
      id="solutions"
    >
      {/* Encabezado */}
      <div className="mx-auto max-w-4xl text-center">
        <p
          className={`text-sm font-bold uppercase tracking-[0.18em] ${accentColor}`}
        >
          {eyebrow}
        </p>

        <h2
          id="program-solutions-title"
          className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>

        <p className="mt-4 text-base leading-7 text-brand-muted sm:text-lg">
          {description}
        </p>
      </div>

      {/* Soluciones */}
      <div className="mx-auto mt-14 max-w-6xl space-y-20 lg:space-y-24">
        {solutions.map((solution, index) => (
          <article
            key={solution.title}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-14 lg:gap-20"
          >
            {/* Imagen */}
            <div
              className={`flex justify-center ${
                index % 2 !== 0 ? 'md:order-2' : ''
              }`}
            >
              <div className="relative w-auto max-w-md">
                <img
                  src={solution.image}
                  alt={solution.alt}
                  loading="lazy"
                  className="mx-auto h-auto max-h-[360px] w-full rounded-2xl object-cover"
                />

                {/* Número */}
                <span
                  className={`absolute -bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white font-display text-xl font-extrabold shadow-md ${accentColor}`}
                >
                  {index + 1}
                </span>
              </div>
            </div>

            {/* Información */}
            <div
              className={`${
                index % 2 !== 0 ? 'md:order-1' : ''
              }`}
            >
              <p
                className={`text-sm font-bold uppercase tracking-[0.14em] ${accentColor}`}
              >
                {solution.category}
              </p>

              <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight text-brand-ink sm:text-3xl">
                {solution.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-brand-muted text-justify">
                {solution.description}
              </p>

              {/* Bullets */}
              <ul className="mt-6 space-y-3">
                {solution.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm leading-6 text-brand-ink/80 sm:text-base"
                  >
                    <span
                      className={`mt-2 h-2 w-2 shrink-0 rounded-full ${
                        accent === 'orange'
                          ? 'bg-brand-orange'
                          : 'bg-brand-eco-green'
                      }`}
                      aria-hidden="true"
                    />

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
