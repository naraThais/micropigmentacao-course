// src/components/ToolsSection.tsx
import {
  Zap,
  PenTool,
  Droplets,
  Ruler,
  ShieldCheck,
  FlaskConical,
} from "lucide-react";
import type { ToolItem } from "@/types";

const tools: ToolItem[] = [
  { icon: "Zap", name: "Dermógrafo", description: "Para esfumados" },
  { icon: "PenTool", name: "Tebori", description: "Para fios naturais" },
  { icon: "Droplets", name: "Pigmentos", description: "Qualidade premium" },
  { icon: "Ruler", name: "Design", description: "Medição precisa" },
  { icon: "FlaskConical", name: "Anestésicos", description: "Conforto total" },
  {
    icon: "ShieldCheck",
    name: "Esterilização",
    description: "Máxima segurança",
  },
];

const iconComponents = {
  Zap,
  PenTool,
  Droplets,
  Ruler,
  ShieldCheck,
  FlaskConical,
};

export default function ToolsSection() {
  return (
    <section className="gradient-rose-light p-10 rounded-xl my-10">
      <h2 className="text-center text-rose-600 mb-3 font-semibold text-3xl">
        Equipamentos Profissionais
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Trabalhamos apenas com os melhores equipamentos do mercado
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {tools.map((tool, index) => {
          const IconComponent =
            iconComponents[tool.icon as keyof typeof iconComponents];

          return (
            <div
              key={index}
              className="bg-white p-5 rounded-xl text-center shadow-md shadow-rose-400/10"
            >
              <div className="w-10 h-10 mx-auto mb-3 gradient-rose rounded-lg flex items-center justify-center text-white">
                <IconComponent size={20} strokeWidth={2} />
              </div>
              <div className="font-semibold text-rose-600 break-words whitespace-normal max-w-full">
                {tool.name}
              </div>
              <div className="text-xs text-gray-600">{tool.description}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
