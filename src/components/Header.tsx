"use client";

import Badge from "./ui/Badge";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // checa ao carregar

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className=" header text-center gradient-rose text-white p-16 mb-10 rounded-3xl shadow-xl shadow-rose-400/30 relative overflow-hidden">
      <div className="relative z-10">
        <div className="w-full sm:w-[600px] mx-auto text-center mb-3">
          {!isMobile && (
            <Image
              src="/logo.svg"
              alt="Logo"
              width={1000}
              height={1000}
              className="relative z-10 mx-auto"
              priority
            />
          )}
          {isMobile && (
            <h1 className="w-full sm:w-[600px] mx-auto text-center text-4xl sm:text-5xl font-bold mb-3 tracking-tight break-words">
              MICROPIGMENTAÇÃO
            </h1>
          )}
        </div>

        <p className="text-xl font-light mb-5 opacity-95">
          Técnica Mayara Schrodi
        </p>

        <Badge>Shadow Line Technique</Badge>
      </div>
    </header>
  );
}
