import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#2A2522] text-white py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img
            src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80"
            alt="Relaxing in nature"
            className="w-full h-64 object-cover rounded-lg"
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