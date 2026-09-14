"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const donationAmounts = [20000, 50000, 100000];

const kits = [
    {
        id: "kit-1",
        number: "01",
        name: "Kit Raíz",
        price: 150000,
        description: "Una forma de llevar contigo parte de nuestra identidad.",
        items: [
            "Camiseta",
            "Tula",
            "Termo",
            "3 pelotas",
            "Postal de agradecimiento",
        ],
        color: "#B2CC0F",
    },
    {
        id: "kit-2",
        number: "02",
        name: "Kit Movimiento",
        price: 250000,
        description: "Un kit pensado para quienes quieren llevar el movimiento más lejos.",
        items: [
            "Camiseta",
            "Tula",
            "Termo",
            "2 hula hulas",
            "Postal de agradecimiento",
        ],
        color: "#A95AA7",
    },
    {
        id: "kit-3",
        number: "03",
        name: "Kit Circo",
        price: 300000,
        description: "Una experiencia completa para quienes hacen parte de esta raíz.",
        items: [
            "Camiseta",
            "Tula",
            "Termo",
            "3 clavas",
            "Postal de agradecimiento",
        ],
        color: "#F2871D",
    },
];

function formatPrice(value) {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
    }).format(value);
}

export default function SupportPage() {
    const [supportType, setSupportType] = useState("donation");
    const [donationType, setDonationType] = useState("person");
    const [amount, setAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState("");

    const selectedAmount =
        amount === "other"
            ? Number(customAmount.replace(/\D/g, ""))
            : amount;

    return (
        <main className="bg-raiz-ivory">
            {/* HERO */}
            <section className="relative overflow-hidden bg-raiz-black px-6 pb-20 pt-32 text-white sm:px-10 lg:px-12 lg:pb-28">
                <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-raiz-green" />

                <div className="relative z-10 mx-auto max-w-7xl">
                    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-raiz-green">
                        Apóyanos
                    </p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-5xl text-5xl leading-[1.05] sm:text-6xl lg:text-8xl"
                        style={{ fontFamily: "var(--font-slackey)" }}
                    >
                        Tu apoyo hace posible
                        <span className="block text-raiz-purple">
                            que el arte llegue más lejos.
                        </span>
                    </motion.h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
                        Puedes contribuir al fortalecimiento de nuestros procesos
                        artísticos y comunitarios mediante una donación o apoyando nuestro
                        trabajo a través de nuestros kits.
                    </p>
                </div>
            </section>

            {/* SELECTOR PRINCIPAL */}
            <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <button
                            type="button"
                            onClick={() => setSupportType("donation")}
                            className={`rounded-3xl p-7 text-left transition-all sm:p-9 ${supportType === "donation"
                                ? "bg-raiz-black text-white"
                                : "bg-white hover:-translate-y-1"
                                }`}
                        >
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-full ${supportType === "donation"
                                    ? "bg-raiz-green text-raiz-black"
                                    : "bg-raiz-red text-white"
                                    }`}
                            >
                                $
                            </div>

                            <h2
                                className="mt-8 text-3xl"
                                style={{ fontFamily: "var(--font-slackey)" }}
                            >
                                Quiero donar
                            </h2>

                            <p
                                className={`mt-3 text-sm leading-6 ${supportType === "donation"
                                    ? "text-white/60"
                                    : "text-black/55"
                                    }`}
                            >
                                Apoya directamente nuestros procesos artísticos, culturales y
                                comunitarios.
                            </p>
                        </button>

                        <button
                            type="button"
                            onClick={() => setSupportType("kit")}
                            className={`rounded-3xl p-7 text-left transition-all sm:p-9 ${supportType === "kit"
                                ? "bg-raiz-black text-white"
                                : "bg-white hover:-translate-y-1"
                                }`}
                        >
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-full ${supportType === "kit"
                                        ? "bg-raiz-yellow text-raiz-black"
                                        : "bg-raiz-purple text-white"
                                    }`}
                            >
                                K
                            </div>

                            <h2
                                className="mt-8 text-3xl"
                                style={{ fontFamily: "var(--font-slackey)" }}
                            >
                                Apoyar con un kit
                            </h2>

                            <p
                                className={`mt-3 text-sm leading-6 ${supportType === "kit"
                                    ? "text-white/60"
                                    : "text-black/55"
                                    }`}
                            >
                                Adquiere uno de nuestros kits y recibe productos de Circo
                                Raíz.
                            </p>
                        </button>
                    </div>

                    {/* DONACIONES */}
                    {supportType === "donation" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 rounded-3xl bg-white p-7 sm:p-10 lg:p-12"
                        >
                            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-raiz-red">
                                        Donaciones
                                    </p>

                                    <h2
                                        className="mt-4 text-4xl leading-tight sm:text-5xl"
                                        style={{ fontFamily: "var(--font-slackey)" }}
                                    >
                                        Elige cómo quieres aportar.
                                    </h2>

                                    {/* Tipo de donante */}
                                    <div className="mt-8">
                                        <p className="mb-3 text-sm font-semibold">
                                            Soy:
                                        </p>

                                        <div className="grid gap-3 sm:grid-cols-2">
                                            <button
                                                type="button"
                                                onClick={() => setDonationType("person")}
                                                className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${donationType === "person"
                                                    ? "border-raiz-green bg-raiz-green/10"
                                                    : "border-black/10"
                                                    }`}
                                            >
                                                <span className="text-lg">P</span>
                                                <span className="text-sm font-semibold">
                                                    Persona
                                                </span>
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => setDonationType("company")}
                                                className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition ${donationType === "company"
                                                    ? "border-raiz-purple bg-raiz-purple/10"
                                                    : "border-black/10"
                                                    }`}
                                            >
                                                <span className="text-lg">E</span>
                                                <span className="text-sm font-semibold">
                                                    Empresa
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Empresa */}
                                    {donationType === "company" && (
                                        <div className="mt-6 rounded-2xl bg-raiz-ivory p-5">
                                            <p className="text-sm leading-6 text-black/65">
                                                Las donaciones realizadas a entidades pertenecientes
                                                al Régimen Tributario Especial pueden acceder a los
                                                beneficios tributarios establecidos por la legislación
                                                colombiana, de acuerdo con los requisitos aplicables.
                                            </p>
                                        </div>
                                    )}

                                    {/* Montos */}
                                    <div className="mt-8">
                                        <p className="mb-3 text-sm font-semibold">
                                            Selecciona un monto:
                                        </p>

                                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                            {donationAmounts.map((value) => (
                                                <button
                                                    key={value}
                                                    type="button"
                                                    onClick={() => setAmount(value)}
                                                    className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition ${amount === value
                                                        ? "border-raiz-green bg-raiz-green"
                                                        : "border-black/10 hover:border-black/30"
                                                        }`}
                                                >
                                                    {formatPrice(value)}
                                                </button>
                                            ))}

                                            <button
                                                type="button"
                                                onClick={() => setAmount("other")}
                                                className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition ${amount === "other"
                                                    ? "border-raiz-purple bg-raiz-purple"
                                                    : "border-black/10 hover:border-black/30"
                                                    }`}
                                            >
                                                Otro valor
                                            </button>
                                        </div>
                                    </div>

                                    {amount === "other" && (
                                        <div className="mt-4">
                                            <label
                                                htmlFor="customAmount"
                                                className="mb-2 block text-sm font-semibold"
                                            >
                                                ¿Cuánto quieres donar?
                                            </label>

                                            <input
                                                id="customAmount"
                                                type="number"
                                                min="1"
                                                value={customAmount}
                                                onChange={(event) =>
                                                    setCustomAmount(event.target.value)
                                                }
                                                placeholder="Ej. 75000"
                                                className="w-full rounded-2xl border border-black/10 bg-raiz-ivory px-4 py-4 text-sm outline-none focus:border-raiz-green"
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Resumen */}
                                <div className="rounded-3xl bg-raiz-black p-7 text-white sm:p-8">
                                    <p className="text-sm uppercase tracking-[0.15em] text-white/40">
                                        Tu aporte
                                    </p>

                                    <div className="mt-8">
                                        <p className="text-sm text-white/50">
                                            Monto seleccionado
                                        </p>

                                        <p
                                            className="mt-2 text-4xl text-raiz-green"
                                            style={{ fontFamily: "var(--font-slackey)" }}
                                        >
                                            {selectedAmount
                                                ? formatPrice(selectedAmount)
                                                : "$0"}
                                        </p>
                                    </div>

                                    <p className="mt-6 text-sm leading-6 text-white/50">
                                        Tu aporte ayudará a fortalecer los procesos artísticos,
                                        culturales y comunitarios de Circo Raíz.
                                    </p>

                                    <button
                                        type="button"
                                        disabled={!selectedAmount || selectedAmount <= 0}
                                        className="mt-8 w-full rounded-full bg-raiz-green px-6 py-4 font-semibold text-black transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        Continuar
                                        <ArrowRight className="ml-2 inline-block" size={18} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* KITS */}
                    {supportType === "kit" && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8"
                        >
                            <div className="mb-10">
                                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-raiz-purple">
                                    Kits de apoyo
                                </p>

                                <h2
                                    className="mt-4 text-4xl leading-tight sm:text-5xl"
                                    style={{ fontFamily: "var(--font-slackey)" }}
                                >
                                    Lleva un pedacito de la raíz contigo.
                                </h2>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-black/60">
                                    Cada kit contribuye al sostenimiento de nuestros procesos.
                                    Los precios indicados no incluyen el envío.
                                </p>
                            </div>

                            <div className="grid gap-6 lg:grid-cols-3">
                                {kits.map((kit) => (
                                    <article
                                        key={kit.id}
                                        className="group overflow-hidden rounded-3xl bg-white"
                                    >
                                        <div
                                            className="h-3"
                                            style={{ backgroundColor: kit.color }}
                                        />

                                        <div className="p-7 sm:p-8">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-bold">
                                                    {kit.number}
                                                </span>

                                                <span className="text-sm font-bold">KIT</span>
                                            </div>

                                            <h3
                                                className="mt-8 text-3xl"
                                                style={{ fontFamily: "var(--font-slackey)" }}
                                            >
                                                {kit.name}
                                            </h3>

                                            <p className="mt-3 text-sm leading-6 text-black/55">
                                                {kit.description}
                                            </p>

                                            <p
                                                className="mt-8 text-3xl"
                                                style={{ fontFamily: "var(--font-slackey)" }}
                                            >
                                                {formatPrice(kit.price)}
                                            </p>

                                            <div className="my-7 h-px bg-black/10" />

                                            <p className="mb-4 text-sm font-semibold">
                                                Incluye:
                                            </p>

                                            <ul className="space-y-3">
                                                {kit.items.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="flex gap-3 text-sm text-black/65"
                                                    >
                                                        <span
                                                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                                                            style={{ backgroundColor: kit.color }}
                                                        />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            <button
                                                type="button"
                                                className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-raiz-black px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-1"
                                            >
                                                Elegir este kit
                                                <ArrowRight size={17} />
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CIERRE */}
            <section className="px-6 pb-20 sm:px-10 lg:px-12 lg:pb-28">
                <div className="mx-auto max-w-7xl rounded-3xl bg-raiz-purple p-8 sm:p-12 lg:p-16">
                    <h2
                        className="max-w-3xl text-4xl leading-tight sm:text-5xl"
                        style={{ fontFamily: "var(--font-slackey)" }}
                    >
                        Cada aporte ayuda a que sigamos creando.
                    </h2>

                    <p className="mt-5 max-w-2xl leading-7 text-black/70">
                        Si prefieres conocer más sobre nuestro trabajo antes de apoyar,
                        puedes explorar nuestros proyectos y experiencias.
                    </p>

                    <Link
                        href="/proyectos"
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-raiz-black px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-1"
                    >
                        Conocer nuestros proyectos
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </main>
    );
}