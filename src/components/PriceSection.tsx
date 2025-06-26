import Card from "./ui/Card";
import type { PaymentOption } from "@/types";

const paymentOptions: PaymentOption[] = [
  {
    title: "💳 À Vista",
    description: "Débito/Crédito: R$ 1.950,00",
  },
  {
    title: "💸 Dinheiro/PIX",
    description: "R$ 1.800,00",
    highlight: "💰 (Desconto de R$ 150,00)",
  },
  {
    title: "📊 Parcelado",
    description: "2x a 10x sem juros",
    highlight: "💳 no cartão de crédito",
  },
];

export default function PriceSection() {
  return (
    <Card className="text-center my-10">
      <div className="text-5xl font-bold text-rose-600 mb-3">
        💰 R$ 2.200,00
      </div>

      <div className="text-gray-600 mb-5 space-y-1">
        <p>
          <strong>🔒 Reserva:</strong> R$ 250,00 (abatido do valor total)
        </p>
        <p>
          <strong>💳 Restante:</strong> R$ 1.950,00
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {paymentOptions.map((option, index) => (
          <div
            key={index}
            className="bg-rose-50 p-4 rounded-xl text-sm text-gray-600"
          >
            <div className="font-semibold text-rose-600 mb-2">
              {option.title}
            </div>
            <div className="mb-1">{option.description}</div>
            {option.highlight && (
              <div className="text-xs text-rose-500">{option.highlight}</div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
