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
    async function fetchData() {
      const projetoData = await getProject(slug);
      if (projetoData) {
        setProjeto(projetoData);
      }
    }
    fetchData();
  }, [slug]);

  if (!projeto) {
    return (
      <div>
        Página não encontrada, favor retornar
        <button
          className=""
          onClick={() => {
            router.push("/");
          }}
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className=" w-screen text-sm pb-20 md:text-xl text-cor1">
      <div className="text-center mt-20 md:mt-28  ">
        <div className="lg:flex lg:flex-row">
          <div className="w-4/5 ml-8 mb-6 lg:mt-6 lg:ml-0 ">
            <h1>Título: {projeto.title}</h1>
            <p className="md:ml-12 lg:mt-12 lg:ml-4">
              Descrição: {projeto.description}
            </p>
          </div>
          <div className="relative w-4/5 h-60 ml-9 md:w-full md:ml-0 md:h-96 2xl:w-4/5 2xl:mr-20 2xl:ml-12">
            <Image
              src={projeto.src[image]}
              fill
              alt=""
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className=" flex flex-row gap-12 w-2/5 ml-28 mt-2 mb-2 md:gap-32 md:ml-52  lg:-mt-24 lg:ml-36">
          <button
            className="border-4 border-cor2 rounded-2xl p-1"
            onClick={() => {
              router.push(projeto.interact);
            }}
          >
            Interagir
          </button>

          <button
            className="border-4 border-cor2 rounded-2xl p-1"
            onClick={() => {
              router.push(projeto.github);
            }}
          >
            Github
          </button>
        </div>
        <div className="flex flex-row  gap-3 ml-20  md:gap-12 md:ml-40 lg:ml-24">
          <button
            className="border-4 border-cor2 rounded-2xl p-1"
            onClick={prevImage}
          >
            Imagem anterior
          </button>
          <button
            className="border-4 border-cor2 rounded-2xl p-1"
            onClick={nextImage}
          >
            Próxima imagem
          </button>
        </div>
        <div>
          <button
            className="border-4 border-cor2 rounded-2xl p-1 ml-4 mt-2 md:-ml-4 lg:-ml-56"
            onClick={() => {
              router.push("/");
            }}
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
