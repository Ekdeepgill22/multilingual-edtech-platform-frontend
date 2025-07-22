'use client';

import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-black overflow-hidden">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}