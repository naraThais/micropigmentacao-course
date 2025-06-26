import Card from "./ui/Card";

const contentCards = [
  {
    title: "✨ Técnica Shadow Line",
    content: [
      "Aprenda a técnica mais requisitada no mercado! Combinação perfeita entre fios finos e delicados no Tebori com esfumado para Shadow Line no Dermógrafo.",
      "Faça fio a fio ou shadowline nas suas clientes!",
    ],
  },
  {
    title: "📚 Conteúdo Completo",
    content: [
      "🔬 Cicatrização e estrutura da pele",
      "🎨 Pigmentologia e colorimetria",
      "⚡ Técnicas Tebori e Dermógrafo",
      "🎯 Treinos práticos essenciais",
      "📖 Teoria completa para dominar a micropigmentação",
    ],
  },
  {
    title: "🎁 O que está Incluso",
    content: [
      "📋 Apostila exclusiva do curso",
      "🛠️ Material para aula prática",
      "☕ Coffee Break incluso",
      "🏆 Certificado personalizado",
      "📸 Fotos para divulgação",
      "💬 Auxílio vitalício",
    ],
  },
];

export default function ContentGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
      {contentCards.map((card, index) => (
        <Card key={index}>
          <h2 className="text-2xl font-semibold text-rose-600 mb-5 flex items-center gap-3">
            <span className="w-2 h-2 gradient-rose rounded-full"></span>
            {card.title}
          </h2>

          <div className="text-gray-600 leading-relaxed space-y-2">
            {card.content.map((item, itemIndex) => (
              <p key={itemIndex}>
                {item.includes("Faça fio a fio") ? (
                  <strong>{item}</strong>
                ) : (
                  item
                )}
              </p>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
