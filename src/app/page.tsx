"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Projects() {
  const router = useRouter();
  const handleNavigation = (slug: string) => {
    router.push(`/${slug}`);
  };
  const iaaraText = "Tecnologias:NextJs+TailwindCss+MongoDB(NoSQL)";

  return (
    <div className="w-screen pb-20 text-cor1 ">
      <div className="flex flex-col justify-center items-center ">
        <div
          className=" w-4/5  mt-20 text-center pb-4 lg:w-5/5  lg:mt-28 "
          onClick={() => handleNavigation("Iaara")}
        >
          <h1 className="mt-2 mb-2 text-xl lg:mb-8 lg:text-3xl">Iaara</h1>
          <div className="relative w-full h-72 lg:h-96 lg:w-4/5 lg:ml-24 2xl:w-3/5 2xl:ml-80">
            <Image
              src="/project5/img1.png"
              alt=""
              fill
              className="rounded-2xl w-"
            />
          </div>
          <p className="mt-2 text-sm lg:text-xl">{iaaraText}</p>
        </div>
        <div
          className="w-4/5  mt-20 text-center pb-4 lg:w-5/5   "
          onClick={() => handleNavigation("Marketplace")}
        >
          <h1 className="mt-2 mb-2 text-xl lg:mb-8 lg:text-3xl">MarketPlace</h1>
          <div className="relative w-full h-72 lg:h-96 lg:w-4/5 lg:ml-24 2xl:w-3/5 2xl:ml-80 ">
            <Image
              src="/project2/img1.png"
              alt=""
              fill
              className="rounded-2xl"
            />
          </div>
          <p className="mt-2 text-sm lg:text-xl">
            Tecnologias:ReactJs+TailwindCss
          </p>
        </div>
        <div
          className=" w-4/5  mt-20 text-center pb-4 lg:w-5/5   "
          onClick={() => handleNavigation("Streaming")}
        >
          <h1 className="mt-2 mb-2 text-xl lg:mb-8 lg:text-3xl">Streaming</h1>
          <div className="relative w-full h-72 lg:h-96 lg:w-4/5 lg:ml-24 2xl:w-3/5 2xl:ml-80 ">
            <Image
              src="/project1/img1.png"
              alt=""
              fill
              className="rounded-2xl"
            />
          </div>
          <p className="mt-2 text-sm lg:text-xl">
            Tecnologias:Html+JavaScript+CSS
          </p>
        </div>

        <div
          className=" w-4/5  mt-20 text-center pb-4 lg:w-5/5   "
          onClick={() => handleNavigation("Quizz")}
        >
          <h1 className="mt-2 mb-2 text-xl lg:mb-8 lg:text-3xl">Quizz</h1>
          <div className="relative w-full h-72 lg:h-96 lg:w-4/5 lg:ml-24 2xl:w-3/5 2xl:ml-80 ">
            <Image
              src="/project4/img1.png"
              alt=""
              fill
              className="rounded-2xl"
            />
          </div>
          <p className="mt-2 text-sm lg:text-xl">
            Tecnologias:Html+JavaScript+CSS
          </p>
        </div>
        <div
          className="w-4/5  mt-20 text-center pb-4 lg:w-5/5   "
          onClick={() => handleNavigation("Landing")}
        >
          <h1 className="mt-2 mb-2 text-xl lg:mb-8 lg:text-3xl">
            Landing Page Estática
          </h1>
          <div className="relative w-full h-72 lg:h-96 lg:w-4/5 lg:ml-24 2xl:w-3/5 2xl:ml-80">
            <Image
              src="/project3/img1.png"
              alt=""
              fill
              className="rounded-2xl"
            />
          </div>
          <p className="mt-2 text-sm lg:text-xl">
            Tecnologias:Html+JavaScript+CSS
          </p>
        </div>
      </div>
    </div>
  );
}
