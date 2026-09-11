import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contacto | Circo Raíz",
  description:
    "Hablemos sobre espectáculos, proyectos, procesos artísticos, alianzas y experiencias con Circo Raíz.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
    </main>
  );
}