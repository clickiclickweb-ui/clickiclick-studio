import { Signature } from '../brand/Signature';

const NAV_LINKS = [
  { label: 'work', href: '#work' },
  { label: 'studio', href: '#studio' },
  { label: 'contact', href: '#contact' },
];

export function Nav() {
  // TODO Paso 8: cross-route nav. Cuando exista React Router:
  // - En "/" los anchors hacen scroll-to id (actual).
  // - En "/work/:slug" hay que navigate("/") + scroll al id tras montar.

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 bg-ink/70 backdrop-blur-xl" aria-label="Navegacion principal">
      <div className="flex h-full items-center justify-between px-6 md:px-12">
        <a href="#top" className="flex items-center" aria-label="CLICKICLICK studio inicio">
          <Signature className="w-9 text-cream" aria-hidden="true" />
        </a>
        <ul className="flex items-center gap-3 font-body text-sm">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} className="flex items-center gap-3">
              <a href={link.href} className="nav-anchor text-cream-soft">{link.label}</a>
              {i < NAV_LINKS.length - 1 && (<span className="text-cream-soft" aria-hidden="true">·</span>)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}