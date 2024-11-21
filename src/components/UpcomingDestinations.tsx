import React from 'react';

const upcomingDestinations = [
  {
    title: 'Cañon del Colca',
    location: 'Arequipa',
    image: 'https://www.peru.travel/Contenido/Experiencia/Imagen/es/67/1.1/Visita%20al%20canon%20del%20colca.jpg'
  },
  {
    title: 'Huancaya',
    location: 'Lima',
    image: 'https://huancaya-peru.com/wp-content/uploads/2023/08/315652768_422939040047518_5493777503543601891_n.jpg'
  },
  {
    title: 'Aguas Turquesa Millpu',
    location: 'Ayacucho',
    image: 'https://www.peru.travel/Contenido/General/Imagen/es/394/1.1/Millpu.jpg'
  }
];

export default function UpcomingDestinations() {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" 
         style={{ 
           backgroundImage: 'url(https://media-public.canva.com/oJwqI/MAEthqoJwqI/1/s.jpg)',
           paddingTop: '80px',
           paddingBottom: '80px'
         }}>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-6xl font-bold text-white mb-16">
          Próximos lugares disponibles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingDestinations.map((dest, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src={dest.image}
                alt={dest.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{dest.title}</h3>
                <p className="text-lg">{dest.location}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-16 mx-auto block bg-orange-500 text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-orange-600 transition-colors uppercase">
          Cuéntanos qué otros destinos te gustaría conocer
        </button>
      </div>
    </div>
  );
}