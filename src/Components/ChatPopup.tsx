'use client';

import { useState } from 'react';
import {  X, Mail } from 'lucide-react';

export default function ChatPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botão flutuante */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition"
    aria-label="Abrir chat"
  >
    {isOpen ? <X size={20} /> : <Mail size={20} />}
  </button>

      {/* Janela do chat */}
      {isOpen && (
        <div className="mt-3 w-full max-w-sm h-[420px] bg-white shadow-2xl rounded-xl flex flex-col overflow-hidden">
          {/* Cabeçalho */}
          <div className="bg-white text-gray-800 text-center p-4 font-bold border-b text-sm">
            Soft Assistente 🤖
          </div>

          {/* Área de mensagens */}
          <div className="flex-1 bg-gray-100 p-4 overflow-y-auto text-sm text-gray-800 space-y-2">
            <div className="bg-white p-3 rounded-lg w-fit max-w-[70%] shadow">
              Hello, how can I help you today?
            </div>
          </div>

          {/* Campo de input */}
          <div className="p-3 border-t bg-white flex items-center gap-2">
            <input
              type="email"
              placeholder="Type your email here..."
              className="flex-1 px-3 py-2 rounded-full bg-gray-200 text-sm outline-none"
            />
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-2 rounded-full">
              <Mail size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

