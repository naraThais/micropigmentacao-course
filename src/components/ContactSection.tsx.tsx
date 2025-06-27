import Card from "./ui/Card";

export default function ContactSection() {
  return (
    <Card className="text-center my-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-rose-600 mb-4">
        Entre em Contato
      </h2>

      <p className="text-gray-600 mb-6">
        Tire suas dúvidas ou agende seu atendimento. Será um prazer falar com
        você!
      </p>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Seu nome"
          className="bg-rose-50 text-gray-800 p-3 rounded-xl border border-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-400"
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="bg-rose-50 text-gray-800 p-3 rounded-xl border border-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-400"
        />
        <textarea
          placeholder="Sua mensagem"
          rows={4}
          className="col-span-1 sm:col-span-2 bg-rose-50 text-gray-800 p-3 rounded-xl border border-rose-100 resize-none focus:outline-none focus:ring-2 focus:ring-rose-400"
        ></textarea>
        <button
          type="submit"
          className="col-span-1 sm:col-span-2 bg-rose-500 hover:bg-rose-600 transition text-white font-semibold py-3 px-6 rounded-xl"
        >
          Enviar mensagem
        </button>
      </form>
    </Card>
  );
}
