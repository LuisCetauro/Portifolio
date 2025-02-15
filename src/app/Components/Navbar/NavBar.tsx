"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const router = useRouter();
  const [active, setActive] = useState("");

  const handleRoute = (page: string) => {
    setActive(page);
    router.push(page);
  };

  return (
    <nav className="fixed left-0 top-0 w-full h-16 md:h-20 bg-cor4 border-b-4 border-cor2 z-50 shadow-lg flex justify-center items-center text-cor1">
      <ul className="flex gap-8 md:gap-16 lg:gap-32 text-lg md:text-xl font-semibold">
        {[
          { name: "Home", path: "/" },
          { name: "Sobre", path: "/About" },
          { name: "Contato", path: "/Contact" },
        ].map((item) => (
          <li
            key={item.path}
            className={`cursor-pointer px-4 py-2 rounded-lg bg-cor3 transition transform hover:scale-105 hover:bg-opacity-80 ${
              active === item.path ? "ring-2 ring-cor1" : ""
            }`}
            onClick={() => handleRoute(item.path)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
