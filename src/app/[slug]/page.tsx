"use client";

import { useEffect, useState } from "react";
import { getProject } from "../../../public/Json/ProjectsData";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Projeto {
  title: string;
  slug: string;
  description: string;
  github: string;
  interact: string;
  src: string[];
}

interface params {
  params: {
    slug: string;
  };
}

export default function IndividualProject({ params }: params) {
  const { slug } = params;
  const [projeto, setProjeto] = useState<Projeto | null>(null);
  const router = useRouter();
  const [image, setImage] = useState(0);

  const nextImage = () => {
    const limite = (projeto?.src?.length ?? 0) - 1;

    if (image !== limite) {
      setImage(image + 1);
    }
  };

  const prevImage = () => {
    if (image !== 0) {
      setImage(image - 1);
    }
  };

  useEffect(() => {
    const pegarProjeto = async () => {
      const projetoData = await getProject(slug);
      if (projetoData) {
        setProjeto(projetoData);
      }
    };

    pegarProjeto();
  }, [slug]);

  if (!projeto) {
    return (
      <div className="mt-24 text-center text-white flex flex-col gap-4 justify-center items-center md:text-2xl">
        Página não encontrada, favor retornar
        <button
          className="border-4 border-cor2 p-2 rounded-lg"
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </button>
      </div>
    );
  }

  return (
    <div className="mt-20 mb-28 flex flex-col justify-center items-center text-white text-center gap-8 md:text-2xl">
      <div className="w-[350px] md:w-[500px] lg:w-[650px] 2xl:w-[800px]">
        <h1>Título: {projeto.title}</h1>
        <p>Descrição: {projeto.description}</p>
      </div>
      <div className="relative size-60 md:size-[400px] lg:w-[650px] 2xl:w-[1000px] 2xl:h-[600px]">
        <Image src={projeto.src[image]} fill alt="" className="rounded-2xl" />
      </div>
      <div className=" flex flex-row gap-4 -ml-2">
        <button
          className="border-4 border-cor2 p-1 rounded-lg"
          onClick={() => {
            router.push(projeto.interact);
          }}
        >
          Interagir
        </button>

        <button
          className="border-4 border-cor2 p-1 rounded-lg"
          onClick={() => {
            router.push(projeto.github);
          }}
        >
          Github
        </button>
      </div>
      <div className=" flex flex-row gap-4">
        <button
          className="border-4 border-cor2 p-1 rounded-lg"
          onClick={prevImage}
        >
          Imagem anterior
        </button>
        <button
          className="border-4 border-cor2 p-1 rounded-lg"
          onClick={nextImage}
        >
          Próxima imagem
        </button>
      </div>
      <div>
        <button
          className="border-4 border-cor2 p-1 rounded-lg"
          onClick={() => {
            router.push("/");
          }}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
