import { Nav } from './Nav';

export function Layout({ children }) {
  return (
    <>
      <Nav />
      <main id="top">{children}</main>
      {/* Footer real en Fase 11. Placeholder vacio intencional. */}
      <footer />
    </>
  );
}