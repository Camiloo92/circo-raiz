"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const requestTypes = [
  "Contratación espectáculo",
  "Activación de marca",
  "Logística",
  "Formación artística",
  "Servicios empresariales",
  "Proyecto / alianza",
  "Donación",
  "Otro",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-raiz-ivory">
      {/* Encabezado */}
      <section className="bg-raiz-black px-6 pb-20 pt-32 text-white sm:px-10 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-raiz-green">
            Contacto
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl text-5xl leading-[1.05] sm:text-6xl lg:text-8xl"
            style={{ fontFamily: "var(--font-slackey)" }}
          >
            Hablemos de tu
            <span className="block text-raiz-purple">
              próximo proyecto.
            </span>
          </motion.h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            ¿Tienes una idea, evento, proceso formativo o proyecto
            comunitario? Cuéntanos qué necesitas y construyamos juntos una
            experiencia desde el arte.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Información */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-raiz-red">
              Hablemos
            </p>

            <h2
              className="text-4xl leading-tight sm:text-5xl"
              style={{ fontFamily: "var(--font-slackey)" }}
            >
              Estamos para escucharte.
            </h2>

            <div className="mt-10 space-y-6">
              <a
                href="https://wa.me/573195687095"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4"
              >
                <div className="rounded-2xl bg-raiz-green p-3">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="mt-1 text-sm text-black/55">
                    +57 319 568 7095
                  </p>
                </div>
              </a>

              <a
                href="mailto:raizcirco@gmail.com"
                className="flex items-start gap-4"
              >
                <div className="rounded-2xl bg-raiz-purple p-3">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="font-semibold">Correo electrónico</p>
                  <p className="mt-1 text-sm text-black/55">
                    raizcirco@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-raiz-blue p-3">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="font-semibold">Territorio</p>
                  <p className="mt-1 text-sm text-black/55">
                    Bogotá, Colombia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-10">
            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-raiz-green">
                  <Send size={26} />
                </div>

                <h2
                  className="mt-6 text-3xl"
                  style={{ fontFamily: "var(--font-slackey)" }}
                >
                  ¡Gracias por escribirnos!
                </h2>

                <p className="mt-4 max-w-md text-sm leading-6 text-black/55">
                  Recibimos tu información. Pronto nos pondremos en contacto
                  contigo para conocer mejor tu proyecto.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full bg-raiz-black px-6 py-3 text-sm font-semibold text-white"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    label="Nombre / Empresa"
                    name="name"
                    required
                    placeholder="Tu nombre o empresa"
                  />

                  <Field
                    label="Correo electrónico"
                    name="email"
                    type="email"
                    required
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    label="Teléfono / WhatsApp"
                    name="phone"
                    placeholder="+57 300 000 0000"
                  />

                  <div>
                    <label
                      htmlFor="requestType"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Tipo de solicitud
                    </label>

                    <select
                      id="requestType"
                      name="requestType"
                      required
                      className="w-full rounded-2xl border border-black/10 bg-raiz-ivory px-4 py-3 text-sm outline-none transition focus:border-raiz-green"
                    >
                      <option value="">Selecciona una opción</option>

                      {requestTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Cuéntanos sobre tu proyecto
                  </label>

                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={6}
                    placeholder="Cuéntanos qué necesitas, qué quieres realizar y cómo podemos ayudarte..."
                    className="w-full resize-none rounded-2xl border border-black/10 bg-raiz-ivory px-4 py-3 text-sm outline-none transition focus:border-raiz-green"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    label="Fecha aproximada"
                    name="date"
                    type="date"
                  />

                  <Field
                    label="Ciudad / Lugar"
                    name="location"
                    placeholder="Bogotá, Colombia"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-raiz-black px-6 py-4 font-semibold text-white transition-transform hover:-translate-y-1"
                >
                  Enviar solicitud
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-black/10 bg-raiz-ivory px-4 py-3 text-sm outline-none transition focus:border-raiz-green"
      />
    </div>
  );
}