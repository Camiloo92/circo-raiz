"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-black">
      {/* Imagen principal */}
      <Image
        src="/images/hero-circo-raiz.jpeg"
        alt="Circo Raíz en una experiencia artística y comunitaria"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Capa de contraste */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Degradado inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-end px-6 pb-16 pt-32 sm:px-10 lg:px-12 lg:pb-24">
        <div className="max-w-4xl">
          {/* Etiqueta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-[#B2CC0F]" />
            Fundación Artística y Cultural Circo Raíz
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-slackey)" }}
          >
            Arte que conecta.
            <span className="block text-[#B2CC0F]">
              Experiencias que transforman.
            </span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
          >
            Diseñamos espectáculos, procesos formativos y experiencias
            comunitarias para instituciones, empresas y territorios.
          </motion.p>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/experiencias"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#B2CC0F] px-6 py-3.5 font-semibold text-[#151515] transition-transform duration-200 hover:scale-[1.03]"
            >
              Ver nuestras experiencias
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/apoyanos"
              className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-[#151515]"
            >
              Apóyanos
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}