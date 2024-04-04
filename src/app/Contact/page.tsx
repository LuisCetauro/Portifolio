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
    if (id == "1") {
      navigator.clipboard.writeText(infos[0]);
      setPop(true);
    } else if (id == "2") {
      navigator.clipboard.writeText(infos[1]);
      setPop(true);
    } else if (id == "3") {
      navigator.clipboard.writeText(infos[2]);
      setPop(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPop(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pop]);

  return (
    <div className=" flex flex-col justify-center items-center text-white mt-20 mb-24 gap-8 text-center md:text-2xl md:mt-28 md:gap-14">
      <div className="w-4/5">
        <h2>
          Estou feliz em receber suas perguntas, comentários e feedback. Para
          entrar em contato, estou disponível pelos meios fornecidos abaixo,
          clique nas imagens para copiar as informações.
        </h2>
      </div>
      <div className="flex  gap-4">
        <div
          className="flex flex-col justify-center items-center"
          onClick={() => handleInfo("1")}
        >
          <h1>WhatsApp</h1>
          <div className="relative size-10">
            <Image fill src="/extra/WhatsApp.svg" alt="" />
          </div>
          <h2>{infos[0]}</h2>
        </div>
        <div
          className="flex flex-col justify-center items-center"
          onClick={() => handleInfo("2")}
        >
          <h1>Email</h1>
          <div className="relative size-10">
            <Image fill src="/extra/mail.svg" alt="" />
          </div>
          <h2>{infos[1]}</h2>
        </div>
        <div onClick={() => handleInfo("3")}>
          <h1>GitHub</h1>
          <div className="relative size-10">
            <Image fill src="/extra/github.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="w-4/5">
        <p>
          Esse portifólio também foi feito por mim, caso tenha ficado
          interessado o repositório está disponível no meu Github
        </p>
      </div>
      {pop ? (
        <div className="border-4 border-cor2 p-2 rounded-lg">
          Informação Copiada
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
