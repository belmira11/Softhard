"use client";
import { useState } from "react";

export default function Curso() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      {/* Botão "Ver tudo" alinhado à direita */}
      <div className="flex justify-end  p-30">
  <button
    onClick={() => setIsOpen(true)}
    className="bg-white text-black px-6 py-2 rounded-full border-1 border-black text-sm transition "
  >
    Ver tudo
  </button>
</div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-[90%] md:w-[80%] h-[85%] rounded-lg p-6 overflow-y-auto relative">
            
            {/* Botão de fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-black"
            >
              &times;
            </button>

            {/* Linha de Filtro + Pesquisa */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h2 className="text-base md:text-lg font-semibold">Filtro:</h2>
              <div className="flex items-center gap-2 border-b border-gray-300 px-2 py-1 w-full md:w-1/2">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Pesquisar"
                  className="flex-1 outline-none text-sm"
                />
                <span className="text-gray-400 text-lg">🔍</span>
              </div>
            </div>

            {/* Conteúdo da pesquisa */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold mb-2">Curso  {i + 1}</h3>
                  <p className="text-sm text-gray-600">
                    Descrição breve do curso...
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
