"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    title: "Activación de Marca",
    description:
      "Llevamos el lenguaje del circo y las artes vivas a eventos, campañas y experiencias de marca.",
    items: [
      "Espectáculos de circo",
      "Show LED",
      "Show de fuego",
      "Batucada y comparsas",
    ],
    color: "bg-raiz-green",
  },
  {
    number: "02",
    title: "Logística de Eventos",
    description:
      "Apoyamos la producción de eventos con soluciones técnicas y logísticas integrales.",
    items: [
      "Alquiler de sonido",
      "Luces",
      "Transporte",
      "Decoración y catering",
    ],
    color: "bg-raiz-purple",
  },
  {
    number: "03",
    title: "Formación Artística",
    description:
      "Desarrollamos procesos de formación artística informal y experiencias pedagógicas a través de las artes vivas.",
    items: [
      "Procesos educativos institucionales",
      "Formación artística informal",
      "Salidas pedagógicas",
      "Experiencias territoriales",
    ],
    color: "bg-raiz-blue",
  },
  {
    number: "04",
    title: "Servicios Empresariales",
    description:
      "Creamos experiencias artísticas para fortalecer equipos, comunicación y bienestar en organizaciones.",
    items: [
      "Bienestar y pausas activas",
      "Team Building",
      "Expresión corporal",
      "Jornadas de integración",
    ],
    color: "bg-raiz-orange",
  },
];

export default function ExperiencesSection() {
  return (
    <section className="bg-raiz-black px-6 py-24 text-raiz-ivory sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-raiz-red px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Experiencias
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2
              className="max-w-4xl text-3xl leading-tight sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-slackey)" }}
            >
              Creamos experiencias para conectar personas, marcas y
              territorios.
            </h2>
          </motion.div>
        </div>

        {/* Experiencias */}
        <div className="mt-16 space-y-4">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
            >
              <div className="grid lg:grid-cols-[100px_1fr_1fr]">
                {/* Número */}
                <div
                  className={`flex min-h-24 items-center justify-center ${experience.color} text-2xl font-bold text-raiz-black lg:min-h-full`}
                >
                  {experience.number}
                </div>

                {/* Título y descripción */}
                <div className="p-7 sm:p-8 lg:p-10">
                  <h3
                    className="text-2xl sm:text-3xl"
                    style={{ fontFamily: "var(--font-slackey)" }}
                  >
                    {experience.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-raiz-ivory/65 sm:text-base">
                    {experience.description}
                  </p>
                </div>

                {/* Servicios */}
                <div className="border-t border-white/10 p-7 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-raiz-ivory/40">
                    Incluye
                  </p>

                  <ul className="space-y-3">
                    {experience.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-raiz-ivory/80"
                      >
                        <span
                          className={`h-2 w-2 rounded-full ${experience.color}`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Link
            href="/experiencias"
            className="group inline-flex items-center gap-2 rounded-full bg-raiz-ivory px-6 py-3.5 text-sm font-semibold text-raiz-black transition-colors hover:bg-raiz-green"
          >
            Conoce todas nuestras experiencias
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}