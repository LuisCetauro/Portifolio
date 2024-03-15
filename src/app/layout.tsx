import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luis Cetauro",
  description: "Seja bem-vindo ao meu portifólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cor3">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
