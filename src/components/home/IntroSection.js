"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="bg-raiz-ivory px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        {/* Etiqueta */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full bg-raiz-green px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-raiz-black">
            La Raíz
          </span>

          <p className="mt-6 max-w-xs text-sm leading-6 text-raiz-black/60">
            Arte, cultura y comunidad como puntos de encuentro para
            transformar nuestros territorios.
          </p>
        </motion.div>

        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="max-w-4xl text-3xl leading-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-slackey)" }}
          >
            Creamos experiencias donde el arte se encuentra con la vida.
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-raiz-black/70 sm:text-lg">
            Circo Raíz es una organización artística y cultural que crea
            experiencias escénicas, pedagógicas y comunitarias para promover
            la transformación social, el cuidado de la vida y el
            fortalecimiento del tejido cultural.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-raiz-black/70 sm:text-lg">
            A través del circo, el teatro, la música y las artes vivas,
            desarrollamos proyectos que fomentan la participación ciudadana,
            la protección de la naturaleza, la construcción de paz y el
            reconocimiento de la diversidad cultural en los territorios.
          </p>

          <Link
            href="/la-raiz"
            className="group mt-8 inline-flex items-center gap-2 border-b-2 border-raiz-black pb-1 text-sm font-semibold transition-colors hover:border-raiz-purple hover:text-raiz-purple"
          >
            Conoce nuestra historia
            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}