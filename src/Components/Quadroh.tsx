import Image from 'next/image';

const honors = [
  { id: 1, src: '/menina.jpg', alt: 'Estudante 1' },
  { id: 2, src: '/menina.jpg', alt: 'Estudante 2' },
  { id: 3, src: '/menina.jpg', alt: 'Estudante 3' },
  { id: 4, src: '/menina.jpg', alt: 'Estudante 4' },
  { id: 5, src: '/menina.jpg', alt: 'Estudante 5' },
];

export default function Quadroh() {
  return (
    <section className="bg-white text-center py-16 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-black">
        Será que tens o que é preciso para entrar no <br />
        nosso <span className="text-orange-600">QUADRO DE HONRA?</span>
      </h2>

      <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
        Aqui Só Entram Os Melhores! Dá O Teu Máximo, Destaca-Te Nos Treinos E Garante O Teu Lugar No Nosso Quadro De
        Honra. Estás Pronto Para O Desafio?
      </p>

      {/* Linha 1: 3 imagens centralizadas */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 place-items-center">
        {honors.slice(0, 3).map((student) => (
          <div
            key={student.id}
            className="relative w-40 h-52 md:w-44 md:h-56 overflow-hidden shadow-lg rounded-xl"
          >
            <Image src={student.src} alt={student.alt} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>

      {/* Linha 2: 2 imagens afastadas responsivamente */}
      <div className="mt-6 flex justify-center gap-x-20 sm:gap-x-32 lg:gap-x-48 flex-wrap">
        <div className="relative w-40 h-52 md:w-44 md:h-56 overflow-hidden shadow-lg rounded-xl">
          <Image src={honors[3].src} alt={honors[3].alt} layout="fill" objectFit="cover" />
        </div>
        <div className="relative w-40 h-52 md:w-44 md:h-56 overflow-hidden shadow-lg rounded-xl">
          <Image src={honors[4].src} alt={honors[4].alt} layout="fill" objectFit="cover" />
        </div>
      </div>
    </section>
  );
}
