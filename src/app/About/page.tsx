import Image from "next/image";

export default function About() {
  return (
    <div className="mt-20 mb-24 text-white flex flex-col gap-6 justify-center items-center text-center md:text-2xl md:mt-28">
      <div className="relative size-44 md:size-[300px]">
        <Image fill src="/extra/img3.png" alt="" className="rounded-2xl" />
      </div>
      <div>
        <h1>Luis Cetauro</h1>
        <h3>26 anos</h3>
      </div>
      <div className="w-4/5">
        <h1>Sobre</h1>
        <p>
          Sou um entusiasta de hardware que teve seu primeiro contato com a
          programação durante a pandemia, ao assistir aulas de C no curso CS50.
          Atualmente, estou focado em aprimorar minhas habilidades com Next.js,
          principalmente utilizando TypeScript.
        </p>
      </div>
      <div className="w-4/5">
        <h1>Formação</h1>
        <p>
          Cursos de ReactJs, NextJs e TypeScript pela Danki Code. Formado em
          Inglês como Expert pela casa Thomas Jefferson. Ensino Superior
          Incompleto em Biotecnologia e Química pela Universidade de brasilia.
        </p>
      </div>
      <div className="w-4/5">
        <h1>Habilidades</h1>
        <p>
          Experiência em ReactJs,NextJs BootStrap, TailWindCSS, TypeScript, PHP
          Laravel e programação voltada ao objeto. Inglês fluente. Ótimo com
          atividades coletivas. Aprendo com muita facilidade.
        </p>
      </div>
      <div className="w-4/5">
        <h1>Pretenções</h1>
        <p>
          Estou buscando iniciar minha carreira como desenvolvedor fullStack
          especializado em React.js/Next.js. Além disso, pretendo me
          profissionalizar ainda mais cursando Análise e Desenvolvimento de
          Sistemas em um futuro próximo.
        </p>
      </div>
    </div>
  );
}
