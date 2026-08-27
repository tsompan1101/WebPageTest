import { footer } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-brand-darker py-12 text-white">
      <div className="container-page grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <span className="font-display text-lg font-bold">
            <img
              src={footer.logo}
              alt=""
              loading='lazy'
              aria-hidden="true"
              className=" w-80 opacity-80 brightness-0 invert"
            />
          </span>
          <p className="mt-3 max-w-xs text-sm text-white/70">{footer.description}</p>

          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <img
                src={footer.contact.emailIcon}
                alt=""
                loading="lazy"
                aria-hidden="true"
                className="h-4 w-4 shrink-0 opacity-80 brightness-0 invert"
              />
              <a href={`mailto:${footer.contact.email}`} className="break-all hover:text-white">
                {footer.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img
                src={footer.contact.phoneIcon}
                alt=""
                loading="lazy"
                aria-hidden="true"
                className="h-4 w-4 shrink-0 opacity-80 brightness-0 invert"
              />
              <a href={`tel:${footer.contact.phone}`} className="hover:text-white">
                {footer.contact.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Links Rápidos
          </h4>
          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {footer.quickLinks.map((link) => (
              <li key={link.label + link.href}>
                <a href={link.href} className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
                  <img
                    src={footer.redirectIcon}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 opacity-70 brightness-0 invert"
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Más información
          </h4>
          <div className="mt-4 flex flex-wrap gap-4">
            {footer.social.map((s) => (
              <a key={s.label} href={s.href} className="text-sm text-white/70 hover:text-white">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
        © {new Date().getFullYear()} — Todos los derechos reservados.
      </div>
    </footer>
  );
}
