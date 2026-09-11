"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    title: "Activación de Marca",
    description:
      "Llevamos el lenguaje del circo y las artes vivas a experiencias que conectan marcas con sus públicos de una manera memorable.",
    items: [
      "Espectáculos de circo",
      "Show LED",
      "Show de fuego",
      "Batucada y comparsas",
    ],
    color: "#B2CC0F",
  },
  {
    number: "02",
    title: "Logística de Eventos",
    description:
      "Apoyamos la producción de eventos con servicios técnicos y logísticos para que cada experiencia pueda desarrollarse de manera integral.",
    items: [
      "Alquiler de sonido",
      "Luces",
      "Transporte",
      "Decoración y catering",
    ],
    color: "#A95AA7",
  },
  {
    number: "03",
    title: "Formación Artística",
    description:
      "Diseñamos procesos de formación artística informal y experiencias pedagógicas que utilizan las artes como herramientas de encuentro y aprendizaje.",
    items: [
      "Procesos educativos institucionales",
      "Formación artística informal",
      "Salidas pedagógicas",
      "Experiencias territoriales",
    ],
    color: "#4DB4E3",
  },
  {
    number: "04",
    title: "Servicios Empresariales",
    description:
      "Creamos experiencias artísticas para equipos de trabajo que buscan fortalecer la comunicación, la confianza y las relaciones.",
    items: [
      "Bienestar y pausas activas",
      "Team Building",
      "Expresión corporal y comunicación",
      "Jornadas de integración empresarial",
    ],
    color: "#F2871D",
  },
];

export default function ExperiencesPage() {
  return (
    <main className="bg-raiz-ivory">
      {/* HERO */}
      <section className="bg-raiz-black px-6 pb-20 pt-32 text-white sm:px-10 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-raiz-green">
            Experiencias
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl text-5xl leading-[1.05] sm:text-6xl lg:text-8xl"
            style={{ fontFamily: "var(--font-slackey)" }}
          >
            Creamos experiencias
            <span className="block text-raiz-purple">
              que conectan.
            </span>
          </motion.h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            Diseñamos espectáculos, procesos de formación y experiencias
            empresariales y comunitarias adaptadas a las necesidades de cada
            organización, evento y territorio.
          </p>
        </div>
      </section>

      {/* EXPERIENCIAS */}
      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl space-y-6">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group overflow-hidden rounded-3xl bg-white"
            >
              <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
                {/* Número */}
                <div
                  className="relative min-h-[220px] p-8 sm:p-10"
                  style={{ backgroundColor: experience.color }}
                >
                  <span className="text-sm font-bold">
                    {experience.number}
                  </span>

                  <div className="absolute bottom-8 left-8 right-8 sm:bottom-10 sm:left-10">
                    <h2
                      className="max-w-sm text-3xl leading-tight sm:text-4xl"
                      style={{ fontFamily: "var(--font-slackey)" }}
                    >
                      {experience.title}
                    </h2>
                  </div>
                </div>

                {/* Información */}
                <div className="p-8 sm:p-10 lg:p-12">
                  <p className="max-w-2xl text-base leading-7 text-black/60">
                    {experience.description}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {experience.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-raiz-black text-white">
                          <Check size={14} />
                        </span>

                        {item}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contacto"
                    className="mt-10 inline-flex items-center gap-2 text-sm font-semibold transition-transform group-hover:translate-x-1"
                  >
                    Solicitar información
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 sm:px-10 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl rounded-3xl bg-raiz-green p-8 sm:p-12 lg:p-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]">
            ¿Tienes una idea?
          </p>

          <h2
            className="max-w-3xl text-4xl leading-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-slackey)" }}
          >
            Cuéntanos qué necesitas y diseñemos la experiencia.
          </h2>

          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-raiz-black px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-1"
          >
            Hablemos
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}