'use client';
import { User } from 'lucide-react';
import Image from 'next/image';

const cursos = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  titulo: 'COMO CONSEGUIR EMPREGO PELA INTERNET',
  descricao:
    'Com o vídeo, vais poder criar conteúdo na tua voz e mergulhar no que te diferencia dos demais. Nossa ferramenta pode abrir portas para boas escolas e até recrutadores com poucos cliques, permitindo que você procure mais.',
  prazo: '2 DIAS',
  preco: '10.500',
  imagem: '/esss.jpg',
}));

const CardCurso = ({ curso }: any) => (
  <div className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition p-2">
    <div className="w-full h-40 relative rounded-lg overflow-hidden mb-1.5">
      <Image
        src={curso.imagem}
        alt={curso.titulo}
        fill
        className="object-cover"
      />
    </div>

    <div className="p-4">
      <span className="text-xs font-semibold text-orange-500 uppercase">
        TREINAMENTO
      </span>
      <h3 className="font-bold text-gray-600 mt-2 mb-1 leading-snug">
        {curso.titulo}
      </h3>
      <p className="text-[13px] text-gray-600 mb-4 leading-snug">
        {curso.descricao}
      </p>
      <span className="text-xs text-gray-700 font-medium">
        PRAZO: {curso.prazo}
      </span>

      <hr className="border-t border-gray-500 my-3" />

      <div className="flex items-center justify-between mt-2 text-gray-500 text-sm">
        <div className="flex items-center">
          <User size={16} className="mr-1" />
          <span>150</span>
        </div>
        <span className="text-black font-bold">{curso.preco} KZs</span>
      </div>
    </div>
  </div>
);

const CursosMaisProcurados = () => {
  return (
    <section className="bg-white py-16 px-[30px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Primeira linha: Texto + 2 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <h4 className="text-sm text-gray-500 font-medium">
              Cursos E Treinamentos
            </h4>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4">
              MAIS PROCURADOS
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Descobre os cursos e treinamentos que estão a transformar carreiras! Estes são os mais procurados pelos nossos estudantes — Será que o teu próximo passo está aqui?
            </p>
          </div>
          <CardCurso curso={cursos[0]} />
          <CardCurso curso={cursos[1]} />
        </div>

        {/* Segunda linha: 1 card + 2 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <CardCurso curso={cursos[2]} />
          <CardCurso curso={cursos[3]} />
          <CardCurso curso={cursos[4]} />
        </div>
      </div>
    </section>
  );
};

export default CursosMaisProcurados;


