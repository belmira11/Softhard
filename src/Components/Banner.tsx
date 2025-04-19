'use client';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="p-30 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        
        {/* Coluna Esquerda - Texto (50%) */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor" />
            </svg>
            <span className="text-sm">Luanda, Angola</span>
          </div>
          
          <h2 className="text-3xl font-bold text-orange-600">Aumenta as tuas competências</h2>
          <h3 className="text-2xl font-bold text-black">
            e avance na tua <span className="text-orange-600">carreira profissional</span>
          </h3>
          
          <p className="text-gray-600 mt-2">
            Na Academia Softhard, tens acesso a cursos online flexíveis, adaptados ao teu ritmo.
            Seja iniciante ou avançado, aqui encontras a formação ideal para crescer na tua área
            e dar aquele upgrade na tua carreira. Bora começar!
          </p>
          
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition">
              Começar
            </button>
            <button className="flex items-center texy-black gap-2 py-2 px-6 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ver Demo
            </button>
          </div>
        </div>

        {/* Coluna Direita - Card (50%) */}
        <div className="w-full lg:w-2/3 bg-orange-600 rounded-3xl overflow-hidden flex flex-col md:flex-row items-start">
  {/* Imagem com espaço: top, bottom e left */}
  <div className="w-1/2 pt-2 pb-2 pl-2">
    <img
      src="/ffff.jpg"
      alt="Estudante sorridente com laptop"
      className="object-cover h-full w-full rounded-xl"
    />
  </div>
          
     {/* Caixa Branca com Texto */}
<div className="w-2/3 mt-1.5 mr-1.5 p-2">
  <div className="bg-white rounded-2xl shadow-md flex flex-col justify-start p-4 h-[250px]">
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    </div>
    <div className="flex-grow"></div>
    <br />
    <br />
    <br />
    <h4 className="text-black font-semibold">Simplificando o Processo de Aprendizagem!</h4>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Banner;