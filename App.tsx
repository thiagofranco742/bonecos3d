import React, { Suspense, lazy } from 'react';
import Marquee from './components/Marquee';
import Hero from './components/Hero';

// Lazy load components below the fold
const Features = lazy(() => import('./components/Features'));
const Gallery = lazy(() => import('./components/Gallery'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Bonus = lazy(() => import('./components/Bonus'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Pricing = lazy(() => import('./components/Pricing'));
const Creator = lazy(() => import('./components/Creator'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="py-20 text-center">
    <div className="inline-block w-8 h-8 border-4 border-brand-green border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-dots font-sans selection:bg-brand-blue selection:text-white">
      <Marquee />
      <main>
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <Features />
          <Gallery />
          <HowItWorks />
          <Bonus />
          <Testimonials />
          <Pricing />
          <Creator />
          <FAQ />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;