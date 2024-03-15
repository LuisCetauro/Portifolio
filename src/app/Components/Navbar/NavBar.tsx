"use client";

import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const handleRoute = (page: string) => {
    router.push(page);
  };

  return (
    <div className="fixed left-0 w-screen top-0 border-b-8 z-10 border-cor2 h-16 bg-cor4 md:text-xl md:h-20 text-cor1 flex justify-center items-center ">
      <div className="-mt-1 flex flex-row gap-16 md:gap-64  lg:gap-96 ">
        <h3
          className="bg-cor3 mt-2 p-2 rounded-xl"
          onClick={() => {
            handleRoute("/");
          }}
        >
          Home
        </h3>
        <h3
          className="bg-cor3 mt-2 p-2 rounded-xl"
          onClick={() => {
            handleRoute("/About");
          }}
        >
          Sobre
        </h3>
        <h3
          className="bg-cor3 mt-2 p-2 rounded-xl"
          onClick={() => {
            handleRoute("/Contact");
          }}
        >
          Contato
        </h3>
      </div>
    </div>
  );
}
