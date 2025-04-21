'use client';

import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto ">
        <div className="flex items-center justify-between h-16 pl-[30px]">
          
      {/* LOGO + TEXTO agrupados */}
      <div className="flex items-center gap-2">
        {/* Logo */}
        <div className="relative h-10 w-10">
          <Image
            src="/academia-orange.png"
            alt="Academia Softhard"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Texto ao lado do logo */}
        <div className="h-10 flex flex-col justify-center leading-none">
          <span className="text-orange-600 text-[10px] font-semibold">ACADEMIA</span>
          <span className="text-orange-600 font-bold text-[16px]">SOFTHARD</span>
        </div>
      </div>
          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700 font-medium pr-[30px]">
            <Link href="#cursos" className="hover:text-orange-500">Cursos</Link>
            <Link href="#programas" className="hover:text-orange-500">Programas</Link>
            <Link href="#comunidade" className="hover:text-orange-500">Comunidade</Link>
            <Link href="#entrar" className="hover:text-orange-500">Entrar</Link>
            <Link
              href="#inscrever"
              className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
            >
              INSCREVER-SE
            </Link>
          </div>

          {/* Menu Mobile - Botão hamburguer */}
          <div className="  md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile - Itens visíveis quando aberto */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-[30px] pb-4">
          <nav className="flex flex-col space-y-2 text-sm text-gray-700 font-medium">
            <Link href="#cursos" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Cursos</Link>
            <Link href="#programas" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Programas</Link>
            <Link href="#comunidade" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Comunidade</Link>
            <Link href="#entrar" onClick={() => setIsOpen(false)} className="hover:text-orange-500">Entrar</Link>
            <Link
              href="#inscrever"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center hover:bg-orange-600"
            >
              INSCREVER-SE
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
