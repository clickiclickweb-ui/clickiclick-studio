import { Hero } from '../sections/Hero';
import { Manifesto } from '../sections/Manifesto';
import { SelectedWork } from '../sections/SelectedWork';
import { Process } from '../sections/Process';
import { Services } from '../sections/Services';
import { About } from '../sections/About';
import { Contact } from '../sections/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <SelectedWork />
      <Process />
      <Services />
      <About />
      <Contact />
    </>
  );
}
