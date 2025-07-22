'use client';

import { useEffect, useRef, useState } from 'react';
import { FileText, Mic, Globe } from 'lucide-react';

const FeaturesSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: FileText,
      title: "Upload Handwritten Notes",
      description: "AI checks spelling, converts to editable Word doc",
      color: "from-orange-500 to-red-500",
      delay: "delay-100"
    },
    {
      icon: Mic,
      title: "Practice Speaking with AI",
      description: "Speech recognition + pronunciation feedback",
      color: "from-red-500 to-pink-500",
      delay: "delay-300"
    },
    {
      icon: Globe,
      title: "Multilingual Grammar Correction",
      description: "Supports English, Hindi, Punjabi",
      color: "from-orange-500 to-yellow-500",
      delay: "delay-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#50fa7b] via-[#00c3ff] to-[#00c3ff] bg-clip-text text-transparent"
            style={{
              fontFamily: '"Poppins", "Space Grotesk", "Bebas Neue", Arial, sans-serif',
              letterSpacing: '-0.03em',
            }}
          >
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of language learning with AI-powered tools
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-orange-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 ${
                  visibleCards[index] 
                    ? `translate-y-0 opacity-100 ${feature.delay}` 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: visibleCards[index] ? '0ms' : '0ms',
                  transitionDuration: '800ms'
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-4 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-4 w-40 h-40 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default FeaturesSection;