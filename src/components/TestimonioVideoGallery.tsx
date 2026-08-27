import { useEffect, useState } from 'react';
import { videoTestimonials } from '@/data/content';

// Cuántos testimonios se muestran a la vez, según el ancho de pantalla.
// Las flechas avanzan/retroceden por grupos de este tamaño y dan la vuelta
// a todo el directorio (no solo a los que están a la vista).
const DESKTOP_PER_PAGE = 4;
const TABLET_PER_PAGE = 2;
const MOBILE_PER_PAGE = 1;

function usePerPage() {
  const [perPage, setPerPage] = useState(DESKTOP_PER_PAGE);

  useEffect(() => {
    const mqMobile = window.matchMedia('(max-width: 479px)');
    const mqTablet = window.matchMedia('(max-width: 767px)');

    function update() {
      if (mqMobile.matches) setPerPage(MOBILE_PER_PAGE);
      else if (mqTablet.matches) setPerPage(TABLET_PER_PAGE);
      else setPerPage(DESKTOP_PER_PAGE);
    }

    update();
    mqMobile.addEventListener('change', update);
    mqTablet.addEventListener('change', update);
    return () => {
      mqMobile.removeEventListener('change', update);
      mqTablet.removeEventListener('change', update);
    };
  }, []);

  return perPage;
}

export default function TestimonialsVideoGallery() {
  const perPage = usePerPage();
  const total = videoTestimonials.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));

  const [page, setPage] = useState(0);
  // Índice DENTRO de la página actual (no global). null = vista de
  // contenedores de esa página, sin ningún video reproduciéndose.
  const [activeInPage, setActiveInPage] = useState<number | null>(null);

  // Si cambia el tamaño de pantalla (y por tanto perPage/totalPages),
  // evita quedar en una página fuera de rango y cierra cualquier video.
  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
    setActiveInPage(null);
  }, [perPage, totalPages]);

  function goToPage(next: number) {
    setPage(((next % totalPages) + totalPages) % totalPages);
    setActiveInPage(null);
  }

  const visible = videoTestimonials.slice(page * perPage, page * perPage + perPage);
  const isGridMode = activeInPage === null;

  return (
    <div className="relative">
      <div className="flex h-72 gap-3 sm:h-96">
        {visible.map((t, i) => {
          const isActive = activeInPage === i;

          return (
            <div
              key={t.id}
              className="relative rounded-card pantone-glow transition-[flex-grow] duration-500 ease-out"
              style={{ flexGrow: isGridMode || isActive ? (isGridMode ? 1 : 8) : 1, flexBasis: 0, minWidth: 0 }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-card bg-brand-dark">
                {isActive ? (
                  <>
                    <video
                      key={t.video}
                      src={t.video}
                      controls
                      autoPlay
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                    {/* Volver a la vista de contenedores de esta página */}
                    <button
                      type="button"
                      onClick={() => setActiveInPage(null)}
                      aria-label="Volver a ver todos los testimonios"
                      className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/80"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActiveInPage(i)}
                    aria-label={`Ver testimonio de ${t.name}`}
                    className="group relative h-full w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                  >
                    <img
                      src={t.thumbnail}
                      alt={t.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-black/25 transition group-hover:bg-black/10" />
                    <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-ink">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Flechas: avanzan por todo el directorio (grupos de `perPage`),
          sin importar si hay un video expandido o no. */}
      {totalPages > 1 && (
        <>
          <button
            type="button"
            aria-label="Testimonios anteriores"
            onClick={() => goToPage(page - 1)}
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-ink shadow transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Siguientes testimonios"
            onClick={() => goToPage(page + 1)}
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-ink shadow transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Puntos: en qué página del directorio estás */}
          <div className="mt-3 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir a la página ${i + 1} de testimonios`}
                aria-current={i === page}
                onClick={() => goToPage(i)}
                className={`h-2 w-2 rounded-full transition ${i === page ? 'bg-brand-orange' : 'bg-brand-ink/20'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
