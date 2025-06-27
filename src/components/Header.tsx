"use client";

import Badge from "./ui/Badge";
export default function Header() {
  return (
    <header className="text-center gradient-rose text-white p-16 mb-10 rounded-3xl shadow-xl shadow-rose-400/30 relative overflow-hidden">
      <div className="relative z-10">
        {/* Ícone de sobrancelha */}
        <div className="w-28 h-10 mx-auto mb-6 relative overflow-hidden"></div>

        <h1 className="w-full sm:w-[600px] mx-auto text-center text-4xl sm:text-5xl font-bold mb-3 tracking-tight break-words">
          MICROPIGMENTAÇÃO
        </h1>

        <p className="text-xl font-light mb-5 opacity-95">
          Técnica Mayara Schrodi
        </p>

        <Badge>Shadow Line Technique</Badge>
      </div>
    </header>
  );
}
