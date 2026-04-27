import { useLocation, useNavigate } from 'react-router-dom';
import { useLenis } from '../../context/SmoothScrollContext';
import { Signature } from '../brand/Signature';

const NAV_LINKS = [
  { label: 'work', hash: '#work' },
  { label: 'studio', hash: '#studio' },
  { label: 'contact', hash: '#contact' },
];

export function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const lenis = useLenis();
  const isHome = pathname === '/';

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isHome) {
      if (lenis) lenis.scrollTo(0); else window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleAnchorClick = (e, hash) => {
    e.preventDefault();
    if (isHome) {
      if (lenis) lenis.scrollTo(hash); else document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + hash);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 px-6 md:px-10 flex items-center justify-between backdrop-blur-xl bg-ink/60" aria-label="Navegacion principal">
      <a href="/" onClick={handleLogoClick} aria-label="CLICKICLICK home" className="block w-9 h-9 text-cream hover:text-garnet transition-colors duration-300"><Signature className="w-full h-full" aria-hidden="true" /></a>
      <ul className="flex items-center gap-1 font-body text-sm">
        {NAV_LINKS.map((link, i) => (
          <li key={link.hash} className="flex items-center">
            <a href={'/' + link.hash} onClick={(e) => handleAnchorClick(e, link.hash)} className="nav-anchor px-2 text-cream-soft">{link.label}</a>
            {i < NAV_LINKS.length - 1 && <span className="text-cream-soft/40 select-none mx-0.5" aria-hidden="true">·</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}
