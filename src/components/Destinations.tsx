import React from 'react';
import { Lock, Unlock } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: 'Glaciar Chuccon',
    price: 119.00,
    image: 'https://i0.wp.com/360explora.com.pe/wp-content/uploads/2022/06/trekking-day-a-la-laguna-congelada-chueco-banner-portada-del-tour.jpg?resize=1280%2C580&ssl=1',
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
    image: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/463443195_566730905879020_1802767510078809479_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEAPnTNQ9WVt5e2DTiRiY0utvzqkLUNfqu2_OqQtQ1-qwlMx5zpo5bNjXEu2D-6_dn_dMjpz-po-DQ-qw7CPPLh&_nc_ohc=cZ2gNANviTYQ7kNvgH8Nvmp&_nc_zt=23&_nc_ht=scontent.flim13-1.fna&_nc_gid=ABSM3FFbGwBZrz_yFsJGTjB&oh=00_AYBAQ89oOTdCDxlwy_x8IfXh01AFlHa3WcY_UgahWGm_Hw&oe=6744960D',
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
    image: 'https://www.peru.travel/Contenido/General/Imagen/es/291/1.1/titankayoc.jpg',
    features: [
      'Bosque de Queñua de Raimondi',
      'Área natural protegida',
      'Grupo max. 8'
    ]
  },
  {
    id: 4,
    title: 'Bosque de piedras de Corani',
    price: 149.00,
    image: 'https://scontent.flim9-1.fna.fbcdn.net/v/t1.6435-9/44661634_2292841200947289_761525013277835264_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHJOnpnnomNMtM-Tv8Iiv4fTzz2qLjr4MFPPPaouOvgwY0j_Tq8JVfBRLtam4AA8zeNFejaQTCYvwroJbTZe3U6&_nc_ohc=G0SRzyDb9DUQ7kNvgHfh2iM&_nc_zt=23&_nc_ht=scontent.flim9-1.fna&_nc_gid=AbJCK58Sr8BwxoR-H_cNEnj&oh=00_AYClun-ol6xi4nkzaNGYZVprEFhWQZNK63lXmXtAw7QjzQ&oe=676628A1',
    features: [
      'Bosque de Queñua de Raimondi',
      'Área natural protegida',
      'Grupo max. 8'
    ]
  },
  {
    id: 5,
    title: 'Qoricancha',
    price: 149.00,
    image: 'https://terandes.com/wp-content/uploads/2023/04/Templo-Qorikancha-900x623.webp',
    features: [
      'Bosque de Queñua de Raimondi',
      'Área natural protegida',
      'Grupo max. 8'
    ]
  },
  {
    id: 6,
    title: 'Cavernas de Quiocta',
    price: 149.00,
    image: 'https://www.chullostravelperu.com/wp-content/uploads/2023/02/caverna_quiocta.jpg',
    features: [
      'Bosque de Queñua de Raimondi',
      'Área natural protegida',
      'Grupo max. 8'
    ]
  },
  {
    id: 7,
    title: 'Grutas de Ushcupishgo',
    price: 149.00,
    image: 'https://scontent.flim13-1.fna.fbcdn.net/v/t39.30808-6/357703958_605213101711041_2736651161992153519_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFlg_jSwoEydRV9PIKgukSHTV08mhl494dNXTyaGXj3h5DQauWuOzFAFuRWzdqS7ppUrP_AIGPKVbVQhCNoBHwx&_nc_ohc=FU6Vn7HKnXoQ7kNvgENkQj9&_nc_zt=23&_nc_ht=scontent.flim13-1.fna&_nc_gid=AwYUoE2sXK_Ham6W7sVZ3Mb&oh=00_AYARltWarEpzD_aOjIiA4hBPMMNn8BBF3oi4KcaZt0qDjA&oe=67448A44',
    features: [
      'Bosque de Queñua de Raimondi',
      'Área natural protegida',
      'Grupo max. 8'
    ]
  },
  {
    id: 8,
    title: 'Circuito Espejo de Lagunas',
    price: 149.00,
    image: 'https://www.ytuqueplanes.com/imagenes/fotos/destinos/laguna-pultocc_desk.jpg',
    features: [
      'Bosque de Queñua de Raimondi',
      'Área natural protegida',
      'Grupo max. 8'
    ]
  },
  {
    id: 9,
    title: 'Géiseres de Candarave',
    price: 149.00,
    image: 'https://www.wamanadventures.com/blog/wp-content/uploads/2020/07/Candarave.jpg',
    features: [
      'Bosque de Queñua de Raimondi',
      'Área natural protegida',
      'Grupo max. 8'
    ]
  }
];

export default function Destinations() {
  return (
    <div>
      {/* Contenedor superior con texto e imagen */}
      <div className="bg-[#2A2522] py-20">
        <div className="container mx-auto px-20 flex flex-col md:flex-row items-center gap-10">
          {/* Texto */}
          <div className="md:w-1/2">
            <div className="flex items-start gap-4 mb-6">
              <Unlock className="text-orange-500 w-12 h-12" />
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Desbloquea lugares</h2>
                <p className="text-gray-400 max-w-2xl">
                  Las personas no deberían estar limitadas a los destinos turísticos más populares, esos donde todo el mundo quiere ir. En lugar de ello, nosotros nos enfocamos en brindarles amplias posibilidades donde cada rincón del país tiene cualidades únicas que esperan ser descubiertas.
                </p>
                <button className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
                  OFERTAS
                </button>
              </div>
            </div>
          </div>
          {/* Imagen */}
          <div className="md:w-1/2">
            <img
              src="https://media-public.canva.com/MDPYU/MAEthsMDPYU/1/s3.jpg"
              alt="Viaje"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Contenedor inferior con destinos */}
      <div className="bg-[#D9C4B1] py-20">
        <div className="container mx-auto px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {destinations.map((dest) => (
              <div key={dest.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{dest.title}</h3>
                  <p className="text-gray-600 mb-4">
                    Comienza en S/. {dest.price.toFixed(2)}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {dest.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        • {feature}
                      </li>
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
    </div>
  );
}
