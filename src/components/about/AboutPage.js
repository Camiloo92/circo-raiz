"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const impact = [
  {
    number: "03",
    title: "Localidades",
    description: "Suba, Los Mártires y Teusaquillo.",
  },
  {
    number: "+50",
    title: "Niños y niñas migrantes",
    description:
      "Acompañamiento mediante procesos artísticos en Los Mártires.",
  },
  {
    number: "04",
    title: "Festivales de Juventudes",
    description:
      "Cuatro versiones desarrolladas en Teusaquillo.",
  },
  {
    number: "+30",
    title: "Familias indígenas",
    description:
      "Apoyo durante la iniciativa SOS Leticia en Amazonas.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-raiz-ivory">
      {/* HERO */}
      <section className="relative overflow-hidden bg-raiz-black px-6 pb-20 pt-32 text-white sm:px-10 lg:px-12 lg:pb-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-raiz-green" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-raiz-green">
            La Raíz
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl text-5xl leading-[1.05] sm:text-6xl lg:text-8xl"
            style={{ fontFamily: "var(--font-slackey)" }}
          >
            El arte como punto
            <span className="block text-raiz-purple">
              de encuentro.
            </span>
          </motion.h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            Somos una organización artística y cultural que crea experiencias
            escénicas, pedagógicas y comunitarias para promover la
            transformación social, el cuidado de la vida y el fortalecimiento
            del tejido cultural.
          </p>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-raiz-red">
              Quiénes somos
            </p>

            <h2
              className="max-w-3xl text-4xl leading-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-slackey)" }}
            >
              Una fundación que crea desde el territorio.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-black/65">
              Circo Raíz es una organización artística y cultural que crea
              experiencias escénicas, pedagógicas y comunitarias para promover
              la transformación social, el cuidado de la vida y el
              fortalecimiento del tejido cultural.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-black/65">
              A través del circo, el teatro, la música y las artes vivas,
              desarrollamos proyectos que fomentan la participación ciudadana,
              la protección de la naturaleza, la construcción de paz y el
              reconocimiento de la diversidad cultural en los territorios.
            </p>
          </div>

          <div className="rounded-3xl bg-raiz-green p-8 sm:p-10">
            <MapPin size={28} />

            <p
              className="mt-12 text-3xl leading-tight"
              style={{ fontFamily: "var(--font-slackey)" }}
            >
              El territorio también cuenta historias.
            </p>

            <p className="mt-5 text-sm leading-7 text-black/70">
              Nuestro trabajo nace del encuentro con comunidades, artistas,
              instituciones y personas que encuentran en el arte una
              posibilidad para construir nuevas formas de relacionarse.
            </p>
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <motion.article
            whileInView={{ opacity: [0, 1], y: [25, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-raiz-ivory p-8 sm:p-10"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-raiz-purple">
              Misión
            </p>

            <p className="text-base leading-8 text-black/70">
              La Fundación Artística y Cultural Circo Raíz promueve el arte y
              la cultura como herramientas para el encuentro, la participación
              y la transformación social. A través del circo, el teatro, la
              música y las artes vivas, desarrollamos procesos de formación
              artística informal, creación, producción, circulación y
              experiencias comunitarias que fortalecen la inclusión, la
              diversidad, el respeto por los derechos humanos y el tejido
              cultural en los territorios.
            </p>
          </motion.article>

          <motion.article
            whileInView={{ opacity: [0, 1], y: [25, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-raiz-black p-8 text-white sm:p-10"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-raiz-green">
              Visión
            </p>

            <p className="text-base leading-8 text-white/65">
              Ser una organización artística y cultural reconocida por su
              aporte a la transformación social y al fortalecimiento del sector
              cultural, consolidando procesos sostenibles de creación,
              formación, circulación y participación comunitaria en Colombia y
              proyectándonos hacia escenarios nacionales e internacionales.
            </p>
          </motion.article>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="bg-raiz-black px-6 py-20 text-white sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-raiz-yellow">
              Nuestro impacto
            </p>

            <h2
              className="text-4xl leading-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-slackey)" }}
            >
              El arte se mide también
              <span className="block text-raiz-blue">
                en las personas que conecta.
              </span>
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((item) => (
              <div
                key={item.title}
                className="bg-raiz-black p-7 sm:p-8"
              >
                <div className="text-4xl text-raiz-green">
                  {item.number}
                </div>

                <h3 className="mt-5 font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-3xl bg-raiz-purple p-8 sm:p-12 lg:p-16">
          <h2
            className="max-w-3xl text-4xl leading-tight sm:text-5xl"
            style={{ fontFamily: "var(--font-slackey)" }}
          >
            Conozcamos lo que podemos crear juntos.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-black/70">
            Si tienes una idea, proyecto o proceso que quieras desarrollar
            desde el arte, hablemos.
          </p>

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