import { Nav } from './Nav';
import { Footer } from './Footer';

export function Layout({ children }) {
  return (
    <>
      <Nav />
      <main id="top">{children}</main>
      <Footer />
    </>
  );
}