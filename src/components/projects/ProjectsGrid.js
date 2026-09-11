"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <section className="bg-raiz-ivory px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-raiz-red">
            Nuestro trabajo
          </p>

          <h2
            className="text-4xl leading-tight sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-slackey)" }}
          >
            Proyectos que
            <span className="block text-raiz-purple">
              dejan huella.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
            Conoce algunos de los procesos, proyectos y experiencias que hemos
            desarrollado junto a comunidades, instituciones y territorios.
          </p>
        </motion.div>

        {/* Grilla */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-3xl bg-raiz-black p-7 text-white sm:p-9 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Decoración */}
              <div
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-90 transition-transform duration-500 group-hover:scale-125"
                style={{ backgroundColor: project.color }}
              />

              <div className="relative z-10">
                {/* Número + categoría */}
                <div className="mb-14 flex items-center justify-between">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: project.color }}
                  >
                    {project.number}
                  </span>

                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">
                    {project.category}
                  </span>
                </div>

                {/* Contenido */}
                <div className="max-w-2xl">
                  <h3
                    className="text-3xl leading-tight sm:text-4xl"
                    style={{ fontFamily: "var(--font-slackey)" }}
                  >
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Acción */}
                <div className="mt-8">
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1"
                  >
                    Conocer proyecto
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2}
                      style={{ color: project.color }}
                    />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}