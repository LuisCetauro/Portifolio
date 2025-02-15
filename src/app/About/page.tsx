import Image from "next/image";

export default function About() {
  return (
    <div className="mt-20 mb-24 text-white flex flex-col gap-8 justify-center items-center text-center md:text-2xl md:mt-28 px-6">
      <div className="relative size-44 md:size-[300px] shadow-lg">
        <Image
          fill
          src="/extra/img3.png"
          alt="Profile Picture"
          className="rounded-2xl object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold">Luis Cetauro</h1>
        <h3 className="text-lg text-gray-300">26 anos</h3>
      </div>
      <div className="w-full max-w-2xl space-y-6">
        <section>
          <h1 className="text-2xl font-semibold border-b-2 border-gray-600 pb-2">
            Sobre
          </h1>
          <p className="text-gray-300">
            Sou um entusiasta de hardware que teve seu primeiro contato com a
            programação durante a pandemia, ao assistir aulas de C no curso
            CS50. Atualmente, estou focado em aprimorar minhas habilidades com
            Next.js, principalmente utilizando TypeScript.
          </p>
        </section>
        <section>
          <h1 className="text-2xl font-semibold border-b-2 border-gray-600 pb-2">
            Formação
          </h1>
          <p className="text-gray-300">
            Cursos de ReactJs, NextJs e TypeScript pela Danki Code. Formado em
            Inglês como Expert pela Casa Thomas Jefferson. Ensino Superior
            incompleto em Biotecnologia e Química pela Universidade de Brasília.
          </p>
        </section>
        <section>
          <h1 className="text-2xl font-semibold border-b-2 border-gray-600 pb-2">
            Habilidades
          </h1>
          <p className="text-gray-300">
            Experiência em ReactJs, NextJs, Bootstrap, TailwindCSS, TypeScript,
            PHP Laravel e programação orientada a objetos. Inglês fluente. Ótimo
            com atividades coletivas. Aprendo com muita facilidade.
          </p>
        </section>
        <section>
          <h1 className="text-2xl font-semibold border-b-2 border-gray-600 pb-2">
            Pretensões
          </h1>
          <p className="text-gray-300">
            Estou buscando iniciar minha carreira como desenvolvedor full-stack
            especializado em React.js/Next.js. Além disso, pretendo me
            profissionalizar ainda mais cursando Análise e Desenvolvimento de
            Sistemas em um futuro próximo.
          </p>
        </section>
      </div>
    </div>
  );
}
