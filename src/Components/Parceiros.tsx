import Image from 'next/image';

export default function Parceiros() {
  const parceiros = [
    "/FB_IMG_17423036616386834.jpg", // Caminho relativo na pasta public
    "/FB_IMG_17423036616386834.jpg",
    "/FB_IMG_17423036616386834.jpg",
    "/FB_IMG_17423036616386834.jpg",
    "/FB_IMG_17423036616386834.jpg",
    "/FB_IMG_17423036616386834.jpg",
  ];

  return (
    <section className="p-[30px] bg-gray.100 mb-2">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-gray-100 p-8 rounded-xl">
          <h2 className="text-2xl text-black md:text-3xl font-bold mb-6">Conheça Nossos Parceiros</h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {parceiros.map((src, index) => (
              <div
                key={index}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-orange-600 rounded-full flex items-center justify-center shadow-md overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Parceiro ${index + 1}`}
                  layout="intrinsic" // Garante que a imagem se ajuste corretamente
                  width={60} // Largura máxima
                  height={60} // Altura máxima
                  className="object-contain" // Não distorce a imagem
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
