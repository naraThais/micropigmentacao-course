import Badge from "./ui/Badge";

export default function Header() {
  return (
    <header className="text-center gradient-rose text-white p-16 mb-10 rounded-3xl shadow-xl shadow-rose-400/30 relative overflow-hidden">
      {/* Padrão animado de fundo */}
      <div
        className="absolute inset-0 opacity-10 animate-float"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M10,20 Q20,10 30,20 T50,20' stroke='white' stroke-width='2' fill='none'/><path d='M60,30 Q70,20 80,30 T100,30' stroke='white' stroke-width='2' fill='none'/></svg>")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10">
        {/* Ícone de sobrancelha */}
        <div className="w-16 h-5 mx-auto mb-5 bg-white/90 rounded-full relative">
          <div className="absolute top-1/2 left-[10%] w-4/5 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent rounded-full transform -translate-y-1/2" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight">
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
