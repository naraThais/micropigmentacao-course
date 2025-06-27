export default function RequirementsBox() {
  return (
    <div className="bg-white/90 p-8 rounded-2xl my-10">
      <h3 className="text-rose-600 mb-4 font-semibold text-xl flex items-center gap-2">
        Requisitos Importantes
      </h3>

      <div className="space-y-3 text-gray leading-relaxed">
        <p>
          <strong className="text-rose-600">
            Ser atuante na área de design há pelo menos 6 meses
          </strong>{" "}
          e saber fazer marcações, pois a micropigmentação é uma técnica com
          maior duração.
        </p>

        <p className="mt-3">
          <strong className="text-rose-600">Cancelamento:</strong> Sinal
          devolvido mediante cancelamento prévio de no mínimo 14 dias antes.
        </p>
      </div>
    </div>
  );
}
