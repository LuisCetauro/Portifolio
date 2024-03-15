import Image from "next/image";

export default function About() {
  return (
    <div className="w-screen pb-28 text-cor1 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 text-center mt-20 mb-2 justify-center items-center md:mt-24 ">
        <div className="relative w-44 h-44 md:h-72 md:w-72   ">
          <Image fill src="/extra/img3.png" alt="" />
        </div>
        <div>
          <h1>Luis Cetauro</h1>
          <h3>26 anos</h3>
        </div>
      </div>
      <div className="w-4/5  text-center text-sm flex flex-col gap-4  md:text-base lg:w-3/5 l  ">
        <div className="">
          <h1 className="mt-2 mb-2">Sobre</h1>
          <p>
            Sou um entusiasta de hardware que teve seu primeiro contato com a
            programação durante a pandemia, ao assistir aulas de C no curso
            CS50. Atualmente, estou focado em aprimorar minhas habilidades com
            Next.js, principalmente utilizando TypeScript.
          </p>
        </div>
        <div>
          <h1 className="mt-2 mb-2">Formação</h1>
          <p>
            Cursos de ReactJs, NextJs e TypeScript pela Danki Code. Formado em
            Inglês como Expert pela casa Thomas Jefferson. Ensino Superior
            Incompleto em Biotecnologia e Química pela Universidade de brasilia.
          </p>
        </div>
        <div>
          <h1 className="mt-2 mb-2">Habilidades</h1>
          <p>
            Experiência em ReactJs,NextJs BootStrap, TailWindCSS, TypeScript e
            programação voltada ao objeto. Inglês fluente. Ótimo com atividades
            coletivas. Aprendo com muita facilidade.
          </p>
        </div>
        <div>
          <h1 className="mt-2 mb-2">Pretenções</h1>
          <p>
            Estou buscando iniciar minha carreira como desenvolvedor
            especializado em React.js/Next.js. Além disso, pretendo me
            profissionalizar ainda mais cursando Análise e Desenvolvimento de
            Sistemas na faculdade.
          </p>
        </div>
      </div>
    </div>
  );
}
