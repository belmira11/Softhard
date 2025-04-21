export default function Video() {
    return (
      <section className="p-[30px] bg-gray-100 mt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Lado do vídeo */}
          <div className="w-full md:w-1/2">
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vídeo de Apresentação"
                className="w-full h-full"
                allowFullScreen
              ></iframe>
            </div>
          </div>
  
          {/* Lado do texto */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl text-black md:text-3xl font-bold mb-4">Posso te contar um segredo?</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              O conhecimento certo pode mudar tudo — abrir portas, criar oportunidades e transformar vidas.
              Na Academia Softhard, não oferecemos apenas cursos, oferecemos um caminho para o teu sucesso.
              Mas não vamos só contar-te isso, queremos mostrar-te! Assiste ao vídeo e descobre como tudo começou.
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
              Começar
            </button>
          </div>
        </div>
      </section>
    );
  }
  