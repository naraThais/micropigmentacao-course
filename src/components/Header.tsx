"use client";

import Badge from "./ui/Badge";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // checa ao carregar

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="header text-center gradient-rose text-white p-16 mb-10 rounded-3xl shadow-xl shadow-rose-400/30 relative overflow-hidden">
      <div className="relative z-10">
        <div className="w-full sm:w-[600px] mx-auto text-center mb-3">
          {!isMobile && (
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              <Image
                src="/logo.svg"
                alt="Nany"
                width={1000}
                height={1000}
                className="relative z-10 mx-auto hover:scale-105 transition-transform duration-300 ease-in-out"
                priority
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,..."
                style={{
                  filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                  imageRendering: "crisp-edges",
                }}
              />
            </div>
          )}
          {isMobile && (
            <h1
              className={`w-full sm:w-[600px] mx-auto text-center text-4xl sm:text-5xl font-bold mb-3 tracking-tight break-words transform transition-all duration-1000 ease-out ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              } hover:scale-105 transition-transform duration-300`}
            >
              <span className="inline-block animate-fadeInUp">M</span>
              <span className="inline-block animate-fadeInUp animation-delay-100">
                I
              </span>
              <span className="inline-block animate-fadeInUp animation-delay-200">
                C
              </span>
              <span className="inline-block animate-fadeInUp animation-delay-300">
                R
              </span>
              <span className="inline-block animate-fadeInUp animation-delay-400">
                O
              </span>
              <span className="inline-block animate-fadeInUp animation-delay-500">
                P
              </span>
              <span className="inline-block animate-fadeInUp animation-delay-600">
                I
              </span>
              <span className="inline-block animate-fadeInUp animation-delay-700">
                G
              </span>
              <span className="inline-block animate-fadeInUp animation-delay-800">
                M
              </span>
              <span className="inline-block animate-fadeInUp animation-delay-900">
                E
              </span>
              <span className="inline-block animate-fadeInUp animation-delay-1000">
                N
              </span>
              <span className="inline-block animate-fadeInUp animation-delay-1100">
                T
              </span>
              <span className="inline-block animate-fadeInUp animation-delay-1200">
                A
              </span>
              <span className="inline-block animate-fadeInUp animation-delay-1300">
                Ç
              </span>
              <span className="inline-block animate-fadeInUp animation-delay-1400">
                Ã
              </span>
              <span className="inline-block animate-fadeInUp animation-delay-1500">
                O
              </span>
            </h1>
          )}
        </div>

        <div
          className={`transform transition-all duration-1000 ease-out delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs">
            <Badge>Shadow Line Technique</Badge>
            <Badge>Shadow Line Technique</Badge>
            <Badge>Shadow Line Technique</Badge>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1100 {
          animation-delay: 1.1s;
        }
        .animation-delay-1200 {
          animation-delay: 1.2s;
        }
        .animation-delay-1300 {
          animation-delay: 1.3s;
        }
        .animation-delay-1400 {
          animation-delay: 1.4s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </header>
  );
}
