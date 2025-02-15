"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Contact() {
  const infos = [
    "+556192575574",
    "cetaurot@gmail.com",
    "https://github.com/LuisCetauro",
  ];
  const [pop, setPop] = useState(false);

  const handleInfo = (id: string) => {
    navigator.clipboard.writeText(infos[parseInt(id) - 1]);
    setPop(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPop(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pop]);

  return (
    <main className="flex flex-col justify-center items-center text-white mt-20 mb-24 gap-8 text-center md:text-2xl md:mt-28 md:gap-14">
      <header className="w-4/5 max-w-3xl">
        <h2 className="md:text-3xl font-semibold leading-relaxed">
          Estou feliz em receber suas perguntas, comentários e feedback. Para
          entrar em contato, clique nas imagens para copiar as informações.
        </h2>
      </header>
      <section className="flex flex-wrap justify-center gap-8 md:gap-16">
        {[
          { label: "WhatsApp", src: "/extra/WhatsApp.svg", id: "1" },
          { label: "Email", src: "/extra/mail.svg", id: "2" },
          { label: "GitHub", src: "/extra/github.svg", id: "3" },
        ].map((item) => (
          <article
            key={item.id}
            className="flex flex-col items-center gap-3 p-4 bg-cor3 rounded-lg shadow-lg cursor-pointer transform transition hover:scale-110"
            onClick={() => handleInfo(item.id)}
          >
            <h3 className="text-lg md:text-2xl font-bold">{item.label}</h3>
            <div className="relative w-14 h-14 md:w-20 md:h-20">
              <Image
                fill
                src={item.src}
                alt={item.label}
                className="rounded-full"
              />
            </div>
            <p className="text-sm md:text-lg text-cor1">
              {infos[parseInt(item.id) - 1]}
            </p>
          </article>
        ))}
      </section>
      <footer className="w-4/5 max-w-3xl">
        <p className="text-lg md:text-xl leading-relaxed">
          Esse portfólio também foi feito por mim. Caso tenha ficado
          interessado, o repositório está disponível no meu GitHub.
        </p>
      </footer>
      {pop && (
        <section className="border-4 border-cor2 p-3 rounded-lg bg-cor3 text-lg md:text-xl font-semibold shadow-md animate-bounce">
          Informação Copiada!
        </section>
      )}
    </main>
  );
}
