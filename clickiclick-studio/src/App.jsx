import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SmoothScrollProvider } from './context/SmoothScrollContext';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScrollProvider>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
          </Routes>
        </Layout>
      </SmoothScrollProvider>
    </BrowserRouter>
  );
}
