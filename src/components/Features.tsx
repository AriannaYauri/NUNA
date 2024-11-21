import React from 'react';

const features = [
  {
    title: 'Más allá de lo típico',
    description: 'No más destinos populares, explora nuevas posibilidades y crea experiencias diferentes.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80'
  },
  {
    title: 'Redefiniendo la proximidad',
    description: 'No más tours masivos, conoce cada historia y expresión cultural, en grupos reducidos.',
    image: 'https://images.unsplash.com/photo-1533591380348-14193f1de18f?auto=format&fit=crop&q=80'
  },
  {
    title: 'El miedo no es el límite',
    description: 'Guías turísticos y agencias locales te llevarán a y regresarán a salvo de cada aventura.',
    image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80'
  },
  {
    title: 'No eres un turista más',
    description: 'Crea una experiencia que te vuelve parte de una comunidad y cambia la forma en que ves el mundo.',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80'
  }
];

export default function Features() {
  return (
    <div className="py-20 bg-[#FDF6F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Con Nuna desbloquearás
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 items-start">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-40 h-32 object-cover rounded-lg flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}