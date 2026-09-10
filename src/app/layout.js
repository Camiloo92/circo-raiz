import { Slackey, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const slackey = Slackey({
  weight: "400",
  variable: "--font-slackey",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata = {
  title: "Circo Raíz | Arte que conecta",
  description:
    "Fundación Artística y Cultural Circo Raíz. Arte, cultura y experiencias que conectan personas, territorios y posibilidades de transformación.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${slackey.variable} ${sora.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}