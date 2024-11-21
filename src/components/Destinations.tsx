import React from 'react';
import { Lock } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: 'Glaciar Chuccon',
    price: 119.00,
    image: 'https://images.unsplash.com/photo-1589087577247-ca0f918a8c66?auto=format&fit=crop&q=80',
    features: [
      'El segundo polo norte - Lima',
      'Trekking Day a La Laguna',
      'Grupo max. 8'
    ]
  },
  {
    id: 2,
    title: 'Laguna Llaguapucho',
    price: 109.00,
    image: 'https://images.unsplash.com/photo-1589087577168-3e6196169e77?auto=format&fit=crop&q=80',
    features: [
      'Trekking Day Laguna Llaguapucho',
      'Ritual de pago a la pachamama',
      'Grupo max. 8'
    ]
  },
  {
    id: 3,
    title: 'Titanicayocc',
    price: 149.00,
    image: 'https://images.unsplash.com/photo-1589087577208-4e7c3c3b630f?auto=format&fit=crop&q=80',
    features: [
      'Bosque de Queñua de Raimondi',
      'Área natural protegida',
      'Grupo max. 8'
    ]
  }
];

export default function Destinations() {
  return (
    <div className="bg-[#FDF6F0] py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-start gap-8 mb-16">
          <Lock className="text-orange-500 w-12 h-12" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Desbloquea lugares</h2>
            <p className="text-gray-600 max-w-2xl">
              Las personas no deberían estar limitadas a los destinos turísticos más populares, esos donde todo el mundo quiere ir. En lugar de ello, nosotros nos enfocamos en brindarles amplias posibilidades donde cada rincón del país tiene cualidades únicas que esperan ser descubiertas.
            </p>
            <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
              OFERTAS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={dest.image} alt={dest.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{dest.title}</h3>
                <p className="text-gray-600 mb-4">Comienza en S/. {dest.price.toFixed(2)}</p>
                <ul className="space-y-2 mb-6">
                  {dest.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600">• {feature}</li>
                  ))}
                </ul>
                <button className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition-colors">
                  RESERVA AHORA
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}