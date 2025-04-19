import { FaStar } from "react-icons/fa";

export default function Testemunha() {
  const testemunhos = [
    {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "A Melhor Plataforma Que Já Experimentei!",
      text: "A Melhor Plataforma Que Já Experimentei! Melhor Plataforma Que Já Experimentei!",
      user: "Nome Do Usuário",
    },
    {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "A Melhor Plataforma Que Já Experimentei!",
      text: "A Melhor Plataforma Que Já Experimentei! Melhor Plataforma Que Já Experimentei!",
      user: "Nome Do Usuário",
    },
    {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "A Melhor Plataforma Que Já Experimentei!",
      text: "A Melhor Plataforma Que Já Experimentei! Melhor Plataforma Que Já Experimentei!",
      user: "Nome Do Usuário",
    },
    {
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "A Melhor Plataforma Que Já Experimentei!",
      text: "A Melhor Plataforma Que Já Experimentei! Melhor Plataforma Que Já Experimentei!",
      user: "Nome Do Usuário",
    },
  ];

  return (
    <section className="py-10 bg-gray-100 p-[30px]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl text-black md:text-3xl font-bold mb-2">O que teus colegas dizem?</h2>
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
          Resultados Reais, Histórias Reais. Descobre Como A Nossa Plataforma Ajudou Estudantes Como Tu A Crescer E Conquistar Novas Oportunidades!
        </p>

        {/* Scroll horizontal responsivo */}
        <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-thin scrollbar-thumb-gray-300">
          {testemunhos.map((item, index) => (
            <div
              key={index}
              className="bg-orange-600 text-white rounded-xl shadow-lg w-[90vw] sm:w-[600px] h-[380px] flex-shrink-0 flex"
            >
              {/* Vídeo */}
              <div className="w-1/2 h-full p-2">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <iframe
                    src={item.videoUrl}
                    title={`Vídeo de ${item.user}`}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Texto */}
              <div className="w-1/2 h-full p-2 flex flex-col justify-center text-left">
                <div>
                  <div className="flex text-black mb-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="mr-1" />
                    ))}
                  </div>
                  <h3 className="text-white text-base font-bold leading-snug">{item.title}</h3>
                  <p className="text-white text-sm mt-1 leading-tight">{item.text}</p>
                </div>
                <p className="text-black font-semibold text-sm mt-3">👤 {item.user}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
