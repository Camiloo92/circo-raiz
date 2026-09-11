import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-raiz-ivory">
      {/* Encabezado */}
      <section className="relative overflow-hidden bg-raiz-black px-6 pb-20 pt-32 text-white sm:px-10 lg:px-12 lg:pb-28">
        <div
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-80"
          style={{ backgroundColor: project.color }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Link
            href="/proyectos"
            className="mb-16 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={17} />
            Volver a proyectos
          </Link>

          <div className="max-w-4xl">
            <div
              className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: project.color }}
            >
              {project.number} · {project.category}
            </div>

            <h1
              className="text-5xl leading-[1.05] sm:text-6xl lg:text-8xl"
              style={{ fontFamily: "var(--font-slackey)" }}
            >
              {project.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Información */}
      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-raiz-red">
              El proyecto
            </p>

            <h2
              className="max-w-2xl text-4xl leading-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-slackey)" }}
            >
              Arte que se encuentra con el territorio.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-black/65">
              Este espacio documentará el proceso, las personas, los
              territorios y los resultados que hicieron parte de esta
              experiencia de Circo Raíz.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-black/40">
              Circo Raíz
            </p>

            <div
              className="mt-5 h-1 w-16 rounded-full"
              style={{ backgroundColor: project.color }}
            />

            <p className="mt-6 text-sm leading-7 text-black/65">
              Creación, formación artística informal, circulación y trabajo
              comunitario desde el circo, el teatro, la música y las artes
              vivas.
            </p>
          </div>
        </div>
      </section>

      {/* Audiovisual */}
      {project.videoId && (
        <section className="bg-raiz-black px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p
                className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ color: project.color }}
              >
                Archivo audiovisual
              </p>

              <h2
                className="text-4xl text-white sm:text-5xl"
                style={{ fontFamily: "var(--font-slackey)" }}
              >
                Mira el proceso.
              </h2>
            </div>

            <div className="aspect-video overflow-hidden rounded-3xl bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${project.videoId}`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl rounded-3xl bg-raiz-green p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]">
                Hagamos algo juntos
              </p>

              <h2
                className="text-4xl leading-tight sm:text-5xl"
                style={{ fontFamily: "var(--font-slackey)" }}
              >
                ¿Tienes un proyecto en mente?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-black/70">
                Conversemos sobre cómo podemos desarrollar una experiencia
                artística, cultural o comunitaria.
              </p>
            </div>

            <Link
              href="/contacto"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-raiz-black px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-1"
            >
              Hablemos
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}