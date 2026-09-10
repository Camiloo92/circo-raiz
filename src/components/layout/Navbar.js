"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "La Raíz", href: "/la-raiz" },
  { name: "Experiencias", href: "/experiencias" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Apóyanos", href: "/apoyanos" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-raiz-ivory/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-brand text-2xl text-raiz-black transition-transform hover:scale-105"
          onClick={() => setIsOpen(false)}
        >
          Circo Raíz
        </Link>

        {/* Navegación desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-raiz-purple ${
                item.name === "Apóyanos"
                  ? "rounded-full bg-raiz-green px-5 py-2.5 text-raiz-black hover:bg-raiz-yellow"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Botón móvil */}
        <button
          type="button"
          className="rounded-full p-2 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-black/5 bg-raiz-ivory md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`border-b border-black/5 py-4 text-base font-medium last:border-b-0 ${
                    item.name === "Apóyanos"
                      ? "my-2 rounded-full border-0 bg-raiz-green px-5 text-center"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}