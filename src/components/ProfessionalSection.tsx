import { Sparkles, Palette, Microscope, Eye } from "lucide-react";
import Card from "./ui/Card";
import type { SkillItem, Achievement } from "@/types";
import Image from "next/image";
const achievements: Achievement[] = [
  { number: "500+", text: "Clientes Atendidas" },
  { number: "200+", text: "Alunas Formadas" },
  { number: "5", text: "Anos de Experiência" },
];

const skills: SkillItem[] = [
  {
    icon: "Sparkles",
    title: "Shadow Line",
    description: "Especialista na técnica mais natural do mercado",
  },
  {
    icon: "Palette",
    title: "Colorimetria",
    description: "Harmonização perfeita de cores para cada cliente",
  },
  {
    icon: "Microscope",
    title: "Anatomia",
    description: "Conhecimento profundo da pele e cicatrização",
  },
  {
    icon: "Eye",
    title: "Design",
    description: "Criação de formatos únicos para cada rosto",
  },
];

const iconComponents = {
  Sparkles,
  Palette,
  Microscope,
  Eye,
};

export default function ProfessionalSection() {
  return (
    <Card className="text-center my-10">
      {/* Perfil */}
      <div className="flex items-center justify-center gap-10 mb-10 flex-wrap">
        <div className="w-100 h-100 rounded-full relative overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-5xl font-light">
            <Image
              src="/Moça.png" // Caminho relativo à pasta 'public'
              alt="Logo"
              width={950}
              height={950}
              priority
            />
          </div>
        </div>

        <div className="max-w-md">
          <h2 className="text-4xl font-semibold text-rose-600 mb-3">
            Mayara Schrodi
          </h2>
          <p className="text-xl font-light mb-5 opacity-95 transform transition-all duration-1000 ease-out delay-300">
            Técnica Shadow Line{" "}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Especialista em Micropigmentação com anos de experiência
            transformando olhares através da técnica Shadow Line. Formação em
            estética e especialização em colorimetria aplicada.
          </p>
        </div>
      </div>

      {/* Conquistas */}
      <div className="flex justify-center gap-8 mb-10 flex-wrap">
        {achievements.map((achievement, index) => (
          <div key={index} className="text-center p-5">
            <span className="block text-4xl font-bold text-rose-600">
              {achievement.number}
            </span>
            <span className="text-gray-600 text-sm mt-1">
              {achievement.text}
            </span>
          </div>
        ))}
      </div>

      {/* Habilidades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {skills.map((skill, index) => {
          const IconComponent =
            iconComponents[skill.icon as keyof typeof iconComponents];

          return (
            <div
              key={index}
              className="bg-rose-50 p-6 rounded-2xl text-center transition-transform duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-rose-400"
            >
              <div className="w-12 h-12 mx-auto mb-4 gradient-rose rounded-full flex items-center justify-center text-white">
                <IconComponent size={24} strokeWidth={2} />
              </div>
              <div className="font-semibold text-rose-600 mb-2 text-lg">
                {skill.title}
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
