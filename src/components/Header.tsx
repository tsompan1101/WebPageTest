import { useState } from 'react';
import { siteNav } from '@/data/content';

interface HeaderProps {
  // 'transparent': para ir superpuesto sobre el hero oscuro (texto blanco, absolute).
  // 'solid': para cualquier otra página (fondo blanco, texto oscuro, en flujo normal).
  variant?: 'transparent' | 'solid';
  // Ruta actual (Astro.url.pathname) para resaltar automáticamente el link
  // activo, sin tener que armar un elemento distinto por página.
  currentPath?: string;
}

function normalize(path: string) {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

function isRealRoute(href: string) {
  return href !== '#' && href !== '';
}

function sameRoute(a: string, b: string) {
  return isRealRoute(a) && isRealRoute(b) && normalize(a) === normalize(b);
}

export default function Header({ variant = 'transparent', currentPath = '' }: HeaderProps) {
  const [open, setOpen] = useState(false);
  // Qué submenú está desplegado en el menú móvil (por label). null = ninguno.
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const isSolid = variant === 'solid';
  const current = normalize(currentPath);

  function isActive(href: string) {
    if (!isRealRoute(href)) return false;
    return normalize(href) === current;
  }

  function linkClass(href: string) {
    const active = isActive(href);
    if (isSolid) {
      return active
        ? 'text-brand-ink font-semibold'
        : 'text-brand-ink/80 hover:text-brand-ink';
    }
    return active ? 'text-white font-semibold' : 'text-white/90 hover:text-white';
  }

  function closeMobileMenu() {
    setOpen(false);
    setOpenSubmenu(null);
  }

  const ctaDuplicaLink = siteNav.links.some((link) => sameRoute(link.href, siteNav.cta.href));

  return (
    <header className={isSolid ? 'relative z-20 bg-brand-cream shadow-sm' : 'absolute inset-x-0 top-0 z-20'}>
      <div className="container-page flex items-center justify-between py-6">
        <a
          href="/"
          className={`font-display text-lg font-bold ${isSolid ? 'text-brand-ink' : 'text-white'}`}
        >
          <img
            src={isSolid ? siteNav.logo1 : siteNav.logo}
            alt=""
            loading='eager'
            aria-hidden="true"
            className={isSolid ? 'w-80' : 'w-80 opacity-80 brightness-0 invert'}
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteNav.links.map((link) => {
            const hasChildren = !!link.children?.length;
            const childActive = hasChildren && link.children!.some((c) => isActive(c.href));

            return (
              <div key={link.href + link.label} className={hasChildren ? 'group relative' : undefined}>
                <a
                  href={link.href}
                  aria-current={isActive(link.href) || childActive ? 'page' : undefined}
                  aria-haspopup={hasChildren ? 'true' : undefined}
                  className={`relative flex items-center gap-1 pb-1 text-sm font-medium transition ${
                    childActive ? linkClass(link.href).replace('/80', '') : linkClass(link.href)
                  }`}
                >
                  {link.label}
                  {hasChildren && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="transition duration-150 group-hover:rotate-180"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                  {(isActive(link.href) || childActive) && (
                    <span
                      className={`absolute inset-x-0 -bottom-1 h-0.5 rounded-full ${
                        isSolid ? 'bg-[#a50046]' : 'bg-white'
                      }`}
                    />
                  )}
                </a>

                {/* Submenú de escritorio: se abre con hover (o foco, para
                    navegación por teclado) gracias a "group" en el div de
                    arriba — el panel es hijo de ese mismo div, así que el
                    mouse nunca "sale" del área de hover al bajar a él. */}
                {hasChildren && (
                  <div
                    className="invisible absolute left-0 top-full z-30 min-w-[240px] translate-y-1 rounded-xl bg-white py-2 opacity-0 shadow-lg ring-1 ring-black/5 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
                  >
                    {link.children!.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        aria-current={isActive(child.href) ? 'page' : undefined}
                        className={`block px-4 py-2 text-sm transition ${
                          isActive(child.href)
                            ? 'font-semibold text-brand-ink'
                            : 'text-brand-ink/80 hover:bg-brand-cream hover:text-brand-ink'
                        }`}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* El CTA solo se dibuja si no hay ya un link apuntando a la misma
              ruta; si coincide, desaparece automáticamente. */}
          {!ctaDuplicaLink && (
            <a
              href={siteNav.cta.href}
              aria-current={isActive(siteNav.cta.href) ? 'page' : undefined}
              className={isActive(siteNav.cta.href) ? 'btn-primary ring-2 ring-offset-2 ring-[#a50046]' : 'btn-primary'}
            >
              {siteNav.cta.label}
            </a>
          )}
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          className={`lg:hidden ${isSolid ? 'text-brand-ink' : 'text-white'}`}
          onClick={() => (open ? closeMobileMenu() : setOpen(true))}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className={`mx-4 mb-4 flex flex-col gap-1 rounded-2xl p-6 lg:hidden ${
            isSolid ? 'bg-white shadow-md ring-1 ring-black/5' : 'bg-brand-dark/95'
          }`}
        >
          {siteNav.links.map((link) => {
            const hasChildren = !!link.children?.length;

            if (!hasChildren) {
              return (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`py-2 ${linkClass(link.href)}`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              );
            }

            const expanded = openSubmenu === link.label;

            return (
              <div key={link.href + link.label}>
                {/* En móvil el click NO navega si tiene submenú — despliega
                    la lista de programas en su lugar. */}
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpenSubmenu(expanded ? null : link.label)}
                  className={`flex w-full items-center justify-between py-2 text-left ${linkClass(link.href)}`}
                >
                  {link.label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className={`transition duration-150 ${expanded ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {expanded && (
                  <div className="flex flex-col gap-1 py-1 pl-4">
                    {link.children!.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        aria-current={isActive(child.href) ? 'page' : undefined}
                        className={`py-1.5 text-sm ${linkClass(child.href)}`}
                        onClick={closeMobileMenu}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {!ctaDuplicaLink && (
            <a href={siteNav.cta.href} className="btn-primary mt-3 w-full" onClick={closeMobileMenu}>
              {siteNav.cta.label}
            </a>
          )}
        </nav>
      )}
    </header>
  );
}
