
interface DataProps {
  h1: string;
  title: string;
  eyebrow: string;
  description: string;
  name: string;
  image: string;
}

export default function DataSection({ data }: { data: DataProps[] }) {
  return (
    <section id="proveedores" className="container-page py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center ">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
          {data[0].h1}
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
          {data[0].title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-brand-muted sm:text-base">
          {data[0].eyebrow}
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl space-y-5">
        {data.map((data, index) => (
          <article
            key={data.name}
            className="group overflow-hidden rounded-3xl border border-brand-ink/10 bg-brand-cream shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div
              className={`grid items-center gap-6 p-6 sm:grid-cols-[220px_1fr] sm:gap-10 sm:p-8 ${
                index % 2 !== 0 ? 'sm:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="flex min-h-36 items-center justify-center rounded-2xl bg-brand-cream/60 p-6 sm:min-h-40">
                <img
                  src={data.image}
                  alt={data.name}
                  loading="lazy"
                  className="max-h-28 max-w-[180px] object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
                  {data.title === 'Franquicias Gasolineras del Pueblo' ? null : data.h1}
                </p>
                <h3 className="mt-1 font-display text-2xl font-extrabold text-brand-ink sm:text-3xl">
                  {data.name}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-brand-muted sm:text-base whitespace-pre-line text-justify">
                  {data.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
