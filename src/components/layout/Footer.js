import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const footerLinks = [
  { name: "La Raíz", href: "/la-raiz" },
  { name: "Experiencias", href: "/experiencias" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Archivo Vivo", href: "/archivo-vivo" },
  { name: "Apóyanos", href: "/apoyanos" },
  { name: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-raiz-black text-raiz-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Marca */}
          <div>
            <Link
              href="/"
              className="font-brand text-3xl text-raiz-green"
            >
              Circo Raíz
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-raiz-ivory/70">
              Arte, cultura y experiencias que conectan personas,
              territorios y posibilidades de transformación.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              Explora
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-raiz-ivory/70 transition-colors hover:text-raiz-green"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              Hablemos
            </h2>

            <div className="mt-5 flex flex-col gap-4 text-sm">
              <a
                href="https://wa.me/573195687095"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-raiz-ivory/70 transition-colors hover:text-raiz-green"
              >
                <Phone size={18} />
                319 568 7095
              </a>

              <a
                href="mailto:raizcirco@gmail.com"
                className="flex items-center gap-3 text-raiz-ivory/70 transition-colors hover:text-raiz-green"
              >
                <Mail size={18} />
                raizcirco@gmail.com
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              <span className="rounded-full border border-raiz-ivory/20 px-4 py-2 text-xs text-raiz-ivory/60">
                Instagram
              </span>

              <span className="rounded-full border border-raiz-ivory/20 px-4 py-2 text-xs text-raiz-ivory/60">
                YouTube
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-raiz-ivory/10 pt-6 text-xs text-raiz-ivory/50">
          © {new Date().getFullYear()} Fundación Artística y Cultural Circo
          Raíz. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}