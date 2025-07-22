'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';

// Import font if using next/font or add to _app.tsx/_document.tsx for global use
// Example for next/font (uncomment if using):
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['700'] });

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #0b0c2a 0%, #2b00b5 100%)',
      }}
    >
      {/* Globe Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          {/* Globe Grid */}
          <div className="w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] opacity-30">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full animate-pulse"
              style={{
                animationDuration: '4s',
                animationDelay: '1s'
              }}
            >
              {/* Latitude lines */}
              <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="#FF5722" strokeWidth="2" />
              <ellipse cx="200" cy="200" rx="180" ry="120" fill="none" stroke="#FF5722" strokeWidth="1.5" />
              <ellipse cx="200" cy="200" rx="180" ry="180" fill="none" stroke="#FF5722" strokeWidth="2" />
              
              {/* Longitude lines */}
              <ellipse cx="200" cy="200" rx="60" ry="180" fill="none" stroke="#FF5722" strokeWidth="2" />
              <ellipse cx="200" cy="200" rx="120" ry="180" fill="none" stroke="#FF5722" strokeWidth="1.5" />
              <path d="M 200 20 Q 260 200 200 380 Q 140 200 200 20" fill="none" stroke="#FF5722" strokeWidth="1.5" />
              <path d="M 200 20 Q 320 200 200 380 Q 80 200 200 20" fill="none" stroke="#FF5722" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1
            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-[#50fa7b] via-[#00c3ff] to-[#00c3ff] bg-clip-text text-transparent"
            style={{
              fontFamily: '"Poppins", "Space Grotesk", "Bebas Neue", Arial, sans-serif',
              letterSpacing: '-0.03em',
            }}
          >
            Scribble
            <span className="bg-gradient-to-r from-[#00c3ff] via-[#50fa7b] to-[#00c3ff] bg-clip-text text-transparent">
              Sense
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-8 max-w-3xl mx-auto font-medium">
            From pen to progress — AI-driven learning in your language.
          </p>
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 delay-600 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <Link
            href="/login"
            className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
            aria-label="Start Now"
          >
            <Zap className="w-6 h-6 group-hover:animate-pulse" />
            Start Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;