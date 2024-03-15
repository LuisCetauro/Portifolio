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
    <div className="w-screen text-cor1 flex flex-col justify-center items-center">
      <div className=" w-4/5  mt-32 text-xl md:mt-72 md:text-3xl    lg:w-3/5 lg:mt-60">
        <h2>
          Estou feliz em receber suas perguntas, comentários e feedback. Para
          entrar em contato, estou disponível pelos meios fornecidos abaixo,
          clique nas imagens para copiar as informações.
        </h2>
      </div>
      <div className=" flex flex-row gap-6  mt-20 text-xs md:text-xl md:gap-32 ">
        <div className=" w-24 text-center" onClick={() => handleInfo("1")}>
          <h1>WhatsApp</h1>
          <div className="relative w-10 h-10 ml-6 mt-2 mb-2">
            <Image fill src="/extra/WhatsApp.svg" alt="" />
          </div>
          <h2 className="md:-ml-8">{infos[0]}</h2>
        </div>
        <div className=" w-24 text-center" onClick={() => handleInfo("2")}>
          <h1>Email</h1>
          <div className="relative w-10 h-10 ml-6 mt-2 mb-2">
            <Image fill src="/extra/mail.svg" alt="" />
          </div>
          <h2 className="md:-ml-8">{infos[1]}</h2>
        </div>
        <div className=" w-24 text-center" onClick={() => handleInfo("3")}>
          <h1>GitHub</h1>
          <div className="relative w-10 h-10 ml-6 mt-2 mb-2">
            <Image fill src="/extra/github.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="text-center w-4/5 mt-12">
        <p>
          Esse portifólio também foi feito por mim, caso tenha ficado
          interessado o repositório está disponível no meu Github
        </p>
      </div>
      {pop ? (
        <div className="border-2 border-cor2 p-1 rounded-2xl text-center w-3/5 ml-16 mt-4 lg:w-1/5 lg:ml-96 lg:-mt-60">
          Informação Copiada
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
