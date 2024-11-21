import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1589087575290-519f528dfe95?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover"
          alt="Montañas peruanas"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Es hora de tu
            <div className="flex items-center justify-center gap-4">
              próxima <Play className="w-12 h-12" /> ventura
            </div>
          </h1>
          <p className="text-xl mb-8">
            Redefinimos la manera en la que experimentas el mundo.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
            ÚNETE A LA COMUNIDAD
          </button>
        </div>
      </div>
    </div>
  );
}