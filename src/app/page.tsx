"use client";

import { useRouter } from "next/navigation";
import JobHodler from "./Components/JobHolder/JobHolder";

export default function Projects() {
  const router = useRouter();
  const handleNavigation = (slug: string) => {
    router.push(`/${slug}`);
  };

  const Iaara = {
    Título: "Iaara",
    Tecnologia: "NextJs+TailWindCSS+MongoDB",
    src: "/Iaara/img1.png",
  };

  const Api_PHP = {
    Título: "API+ReactJS",
    Tecnologia: "Laravel10+ReactJS+TailWindCSS+Mysql",
    src: "/Api/img1.png",
  };

  const MarketPlace = {
    Título: "MarketPlace",
    Tecnologia: "ReactJs+TailWindCSS+ContextAPI",
    src: "/Market/img1.png",
  };

  const DarkMode = {
    Título: "DarkModeSwitch",
    Tecnologia: "NextJs+TailWindCSS+MongoDB",
    src: "/DarkMode/img1.png",
  };

  const Streaming = {
    Título: "Streaming",
    Tecnologia: "HTML+CSS+JavaScript",
    src: "/Streaming/img1.png",
  };
  return (
    <div className="mt-20 mb-24 flex flex-col justify-center items-center  gap-4 text-white">
      <div onClick={() => handleNavigation("Iaara")}>
        <JobHodler Job={Iaara} />
      </div>
      <div onClick={() => handleNavigation("Api_PHP")}>
        <JobHodler Job={Api_PHP} />
      </div>
      <div onClick={() => handleNavigation("Marketplace")}>
        <JobHodler Job={MarketPlace} />
      </div>
      <div onClick={() => handleNavigation("DarkMode")}>
        <JobHodler Job={DarkMode} />
      </div>
      <div onClick={() => handleNavigation("Streaming")}>
        <JobHodler Job={Streaming} />
      </div>
    </div>
  );
}
