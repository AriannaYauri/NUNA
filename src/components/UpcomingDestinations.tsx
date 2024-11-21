import React from 'react';

const upcomingDestinations = [
  {
    title: 'Cañon del Colca',
    location: 'Arequipa',
    image: 'https://images.unsplash.com/photo-1589087577383-f5e1e6f9f6cd?auto=format&fit=crop&q=80'
  },
  {
    title: 'Titancayoc',
    location: 'Lima',
    image: 'https://images.unsplash.com/photo-1589087577247-ca0f918a8c66?auto=format&fit=crop&q=80'
  },
  {
    title: 'Aguas Turquesa Millpu',
    location: 'Ayacucho',
    image: 'https://images.unsplash.com/photo-1589087577168-3e6196169e77?auto=format&fit=crop&q=80'
  }
];

export default function UpcomingDestinations() {
  return (
    <div className="py-20 bg-[#2A2522] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Próximos lugares disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingDestinations.map((dest, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img
                src={dest.image}
                alt={dest.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold">{dest.title}</h3>
                <p className="text-sm">{dest.location}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-12 mx-auto block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
          PREGÚNTANOS QUÉ OTROS DESTINOS TE GUSTARÍA CONOCER
        </button>
      </div>
    </div>
  );
}