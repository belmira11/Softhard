'use client'; 
import React from 'react';

const Select = () => {
  return (
    <section className="bg-orange-600 rounded-t-3xl py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Texto da Esquerda */}
        <div className="w-full lg:w-1/2 px-8 text-white text-center lg:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug">
            Aprende sem limites. Onde <br /> 
            quiseres, quando quiseres!
          </h2>
        </div>

        {/* Card branco da Direita */}
        <div className="w-full lg:w-2/3 px-8">
          <div className="bg-white rounded-xl p-6 flex flex-wrap justify-center sm:justify-around lg:justify-between text-center shadow-lg">
            <div className="mb-4 w-full sm:w-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-black">+200</h3>
              <p className="text-sm text-orange-600 font-medium">Cursos Online</p>
            </div>
            <div className="mb-4 w-full sm:w-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-black">+3450</h3>
              <p className="text-sm text-orange-600 font-medium">Estudantes Ativos</p>
            </div>
            <div className="mb-4 w-full sm:w-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-black">+35</h3>
              <p className="text-sm text-orange-600 font-medium">Profissionais Especialistas</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Select;
