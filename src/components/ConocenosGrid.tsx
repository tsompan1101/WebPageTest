import { equipo } from '@/data/content';

export default function ConocenosGrid() {
  return (
    <section id="conocenos" className="container-page py-16">
      <h2 className="text-center font-display text-2xl font-bold text-brand-ink sm:text-2xl">
        Conoce el a equipo
      </h2>
      <p className="mx-auto mt-2 max-w-xl text-center text-brand-muted">
        Ellos son los encargados de hacer esto posible.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {equipo.map((cause) => (
          <div key={cause.title} tabIndex={0} className="group relative rounded-card pantone-glow outline-none">
            <div className="relative aspect-[3/4] overflow-hidden rounded-card bg-white shadow-sm ring-1 ring-black/5 transition group-hover:shadow-md group-focus-visible:shadow-md">
              <img
                src={cause.image}
                alt={cause.title}
                loading="lazy"
                className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
              />

              {/*
                Panel con nombre y descripción.
                - Móvil (por defecto): siempre visible, pegado abajo.
                - Escritorio (sm+): oculto, se desliza hacia arriba desde
                  abajo del contenedor al hacer hover o foco (teclado).
              */}
              <div
                className="absolute inset-x-0 bottom-0 translate-y-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-5 text-white transition-transform duration-300 ease-out sm:translate-y-full sm:group-hover:translate-y-0 sm:group-focus-visible:translate-y-0"
              >
                <h3 className="font-display text-lg font-bold">{cause.title}</h3>
                <p className="mt-1 text-sm text-white/85">{cause.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
