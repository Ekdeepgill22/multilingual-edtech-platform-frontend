'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Zap, Upload, Mic, BookOpen } from 'lucide-react';

// Modern thin fonts - Inter for readability
import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap'
});

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 ${inter.className}`}
      style={{
        background: 'linear-gradient(135deg, #0b0c2a 0%, #2b00b5 100%)',
      }}
    >
      {/* Globe Background - centered behind title and tagline */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-15 lg:left-1/4 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-1/2">
        <div className="relative">
          <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
            <svg
              viewBox="0 0 400 400"
              className="w-full h-full animate-pulse"
              style={{
                animationDuration: '6s',
                animationDelay: '0.5s'
              }}
            >
              {/* Latitude lines */}
              <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="#FF5722" strokeWidth="1.5" />
              <ellipse cx="200" cy="200" rx="180" ry="120" fill="none" stroke="#FF5722" strokeWidth="1" />
              <ellipse cx="200" cy="200" rx="180" ry="180" fill="none" stroke="#FF5722" strokeWidth="1.5" />

              {/* Longitude lines */}
              <ellipse cx="200" cy="200" rx="60" ry="180" fill="none" stroke="#FF5722" strokeWidth="1.5" />
              <ellipse cx="200" cy="200" rx="120" ry="180" fill="none" stroke="#FF5722" strokeWidth="1" />
              <path d="M 200 20 Q 260 200 200 380 Q 140 200 200 20" fill="none" stroke="#FF5722" strokeWidth="1" />
              <path d="M 200 20 Q 320 200 200 380 Q 80 200 200 20" fill="none" stroke="#FF5722" strokeWidth="0.8" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content - Hero Text (40% width) */}
          <div className="lg:max-w-lg text-center lg:text-left">
            {/* Main Heading */}
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 leading-tight bg-gradient-to-r from-[#50fa7b] via-[#00c3ff] to-[#00c3ff] bg-clip-text text-transparent"
                style={{
                  letterSpacing: '-0.02em',
                  fontWeight: '300'
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
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
                From pen to progress — AI-driven learning in your language.
              </p>
            </div>

            {/* CTA Button */}
            <div className={`transition-all duration-1000 delay-600 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} flex justify-center lg:justify-start`}>
              <Link
                href="/login"
                className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
                aria-label="Start Now"
              >
                <Zap className="w-6 h-6 group-hover:animate-pulse" />
                Start Now
              </Link>
            </div>
          </div>

          {/* Right Content - Feature Highlights */}
          <div className="lg:ml-auto">
            <div className="space-y-6">

              {/* Feature Card 1 */}
              <div className={`transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent backdrop-blur-md border border-cyan-300/20 rounded-2xl p-6 hover:from-cyan-400/15 hover:via-blue-400/8 hover:to-cyan-300/5 transition-all duration-300 group shadow-xl shadow-cyan-500/10">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Upload className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-lg mb-2">Upload & Analyze Handwriting</h3>
                      <p className="text-gray-300 text-sm font-light">Transform your handwritten notes into digital insights with AI-powered analysis.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className={`transition-all duration-700 delay-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent backdrop-blur-md border border-cyan-300/20 rounded-2xl p-6 hover:from-cyan-400/15 hover:via-blue-400/8 hover:to-cyan-300/5 transition-all duration-300 group shadow-xl shadow-cyan-500/10">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Mic className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-lg mb-2">Voice Practice with AI</h3>
                      <p className="text-gray-300 text-sm font-light">Perfect pronunciation and fluency through interactive AI conversation partners.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className={`transition-all duration-700 delay-900 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent backdrop-blur-md border border-cyan-300/20 rounded-2xl p-6 hover:from-cyan-400/15 hover:via-blue-400/8 hover:to-cyan-300/5 transition-all duration-300 group shadow-xl shadow-cyan-500/10">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-lg mb-2">Multilingual Grammar Feedback</h3>
                      <p className="text-gray-300 text-sm font-light">Receive personalized corrections and suggestions across multiple languages.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
