import React from 'react';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import Bonus from './components/Bonus';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Creator from './components/Creator';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-lightGreen font-sans selection:bg-brand-green selection:text-white">
      <Marquee />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <HowItWorks />
        <Bonus />
        <Testimonials />
        <Pricing />
        <Creator />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;