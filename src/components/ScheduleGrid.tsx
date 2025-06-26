import type { DaySchedule } from "@/types";

const scheduleData: DaySchedule[] = [
  {
    day: "📅 Dia 1",
    items: [
      { time: "09:00", activity: "📖 Início da aula teórica" },
      { time: "12:00", activity: "🍽️ Almoço no Shopping São José" },
      { time: "13:00", activity: "📚 Teoria e treinos" },
      { time: "15:30", activity: "☕ Coffee Break" },
      { time: "16:00", activity: "✏️ Início dos treinos Tebori" },
      { time: "19:00", activity: "🏁 Finalização do primeiro dia" },
    ],
  },
  {
    day: "📅 Dia 2",
    items: [
      { time: "09:00", activity: "✨ Demonstração da Shadow Line" },
      { time: "11:40", activity: "🍽️ Almoço no Shopping São José" },
      { time: "12:40", activity: "⚡ Treinos no Dermógrafo" },
      { time: "15:00", activity: "☕ Coffee Break" },
      { time: "15:30", activity: "👥 Início da Modelo da Aluna" },
      { time: "19:00", activity: "🏆 Finalização e entrega de certificado" },
    ],
  },
];

export default function ScheduleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
      {scheduleData.map((day, dayIndex) => (
        <div
          key={dayIndex}
          className="bg-white p-6 rounded-2xl border-l-4 border-rose-400 shadow-md shadow-rose-400/10"
        >
          <h3 className="font-semibold text-rose-600 mb-4 text-lg">
            {day.day}
          </h3>

          <div className="space-y-2">
            {day.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex items-center text-gray-600 text-sm"
              >
                <span className="font-medium text-rose-600 min-w-fit mr-3">
                  {item.time}
                </span>
                <span>{item.activity}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
