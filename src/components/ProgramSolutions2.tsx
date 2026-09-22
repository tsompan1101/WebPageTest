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

  const bulletColor =
    accent === 'orange'
      ? 'bg-brand-orange'
      : 'bg-brand-eco-green';

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
          className="mt-3 font-display text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl"
        >
          {title}
        </h2>

        <p className="mt-3 text-base leading-7 text-brand-muted sm:text-lg">
          {description}
        </p>
      </div>

      {/* Soluciones */}
      <div className="mt-12 grid grid-cols-2 md:grid-flow-col md:auto-cols-fr gap-x-10 gap-y-14">
        {solutions.map((solution, index) => (
          <article
            key={solution.title}
            className="flex flex-col"
          >
            {/* Imagen */}
            <div className="relative overflow-hidden rounded-2xl flex items-center justify-center">
              <img
                src={solution.image}
                alt={solution.alt}
                loading="lazy"
                className="h-56 w-auto object-cover transition  duration-500 hover:scale-105 sm:h-64"
              />

              {/* Número */}
              <span
                className={`absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white font-display text-lg font-extrabold shadow-md ${accentColor}`}
              >
                {index + 1}
              </span>
            </div>

            {/* Contenido */}
            <div className="pt-5">

              {/* Título */}
              <h3 className="mt-1 font-display text-xl font-extrabold leading-tight text-brand-ink sm:text-2xl text-center">
                {solution.title}
              </h3>

              {/* Descripción corta */}
              <p className="mt-2 text-xs leading-6 text-brand-muted text-justify">
                {solution.description}
              </p>


            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
