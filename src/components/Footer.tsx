import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#2A2522] text-white py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src="https://i.pinimg.com/736x/19/a7/50/19a7503875d6d2d9834d6f08d8f67876.jpg"
            alt="Relaxing in nature"
            className="w-1007px h-745px object-cover rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">nuna</h2>
            <p className="text-xl">Desbloqueemos tu próxima experiencia</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Dirección</h3>
            <p>NUNA SAC</p>
            <p>Lima - Perú</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Contacto</h3>
            <p>Celular: +51 914 299 708</p>
            <p>nuna.pe.01@gmail.com</p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">Horario de oficina</h3>
            <p>Lunes a Sábado:</p>
            <p>9:00 a.m. - 7:00 p.m.</p>
            <p>Domingos y Festivos</p>
            <p>8:00 a.m. - 2:00 p.m.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}