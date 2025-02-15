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

interface Params {
  params: {
    slug: string;
  };
}

export default function IndividualProject({ params }: Params) {
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
        <p className="text-lg md:text-2xl">
          Página não encontrada, favor retornar
        </p>
        <button
          className="border-2 border-gray-300 p-2 rounded-lg hover:bg-gray-700 transition"
          onClick={() => router.push("/")}
        >
          Home
        </button>
      </div>
    );
  }

  return (
    <div className="mt-20 mb-28 flex flex-col justify-center items-center text-white text-center gap-8 px-4">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">{projeto.title}</h1>
        <p className="text-lg text-gray-300">{projeto.description}</p>
      </div>
      <div className="relative size-60 md:size-[400px] lg:w-[650px] 2xl:w-[1000px] 2xl:h-[600px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src={projeto.src[image]}
          fill
          alt={projeto.title}
          className="object-cover"
        />
      </div>
      <div className="flex gap-4">
        <button
          className="border-2 border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          onClick={prevImage}
        >
          Anterior
        </button>
        <button
          className="border-2 border-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          onClick={nextImage}
        >
          Próxima
        </button>
      </div>
      <div className="flex gap-4">
        <button
          className="border-2 border-green-400 px-4 py-2 rounded-lg hover:bg-green-500 transition"
          onClick={() => router.push(projeto.interact)}
        >
          Interagir
        </button>
        <button
          className="border-2 border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-500 transition"
          onClick={() => router.push(projeto.github)}
        >
          Github
        </button>
      </div>
      <button
        className="border-2 border-red-400 px-4 py-2 rounded-lg hover:bg-red-500 transition"
        onClick={() => router.push("/")}
      >
        Voltar
      </button>
    </div>
  );
}
