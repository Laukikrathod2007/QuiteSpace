import Navigation from '@/components/Navigation';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full min-h-screen bg-black text-white" id="top">
      <Navigation />

      {/* Full-screen Spline hero (simple, clean) */}
      <section className="w-full h-[95vh] md:h-[100dvh] bg-black overflow-hidden relative">
        {!isLoaded && (
          <div className="flex items-center justify-center w-full h-full absolute inset-0 z-10">
            <div className="h-10 w-10 rounded-full border-4 border-white/20 border-t-white animate-spin" />
          </div>
        )}
        <iframe
          src="https://my.spline.design/reactiveorb-MaEIJTj0Lxj1mqcQ6xWQtjgN/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full block"
          title="QuietSpace 3D"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
        />
        {/* Bottom gradient to blend into sections (taller) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-10 h-28 bg-gradient-to-b from-transparent to-black z-10" />
        {/* Full-width solid mask to cover Spline watermark */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-black z-10" />
        {/* Scroll cue (improved visibility) */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20">
          <a href="#how-it-works" className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 text-white/90 backdrop-blur-md border border-white/20 hover:bg-white/15 transition">
            <span className="text-sm">Scroll</span>
            <span className="inline-block animate-bounce">▼</span>
          </a>
        </div>
      </section>

      {/* Engaging sections directly below hero on same black bg */}
      <main id="main-content" className="w-full">
        <section id="how-it-works" className="py-16 md:py-24">
          <HowItWorksSection />
        </section>

        <section id="features" className="py-16 md:py-24">
          <FeaturesSection />
        </section>

        <section className="py-16 md:py-24">
          <AboutSection />
        </section>

        <section className="py-16 md:py-24">
          <TestimonialsSection />
        </section>

        <section id="plans" className="py-16 md:py-24">
          <PricingSection />
        </section>

        {/* Enhanced Get Started below Pricing */}
        <section id="get-started" className="relative py-24 border-t border-white/10">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
          <div className="max-w-6xl mx-auto px-4">
            <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="p-8 md:p-14 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Get Started</h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg">
                  Begin your focus journey with QuietSpace. Jump into the dashboard or explore automations and insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/dashboard" className="neuro-button text-white px-8 py-3 rounded-xl font-medium text-center">Open Dashboard</Link>
                  <a href="#plans" className="px-8 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 font-medium text-center">View Plans</a>
                  <a href="#how-it-works" className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 font-medium text-center">How It Works</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
