export default function Footer() {
  return (
    <footer className="text-center p-10 gradient-rose text-white rounded-3xl mt-10">
      <div className="contact-info mb-5">
        <strong className="text-xl">Studio Beauty Center</strong>
      </div>

      <div className="text-sm opacity-90 leading-relaxed space-y-2">
        <p>Auxílio pós-curso disponível via WhatsApp</p>
        <p>Demonstrações e acompanhamento conforme necessidade</p>
        <p>Roupas preferenciais: pretas ou jaleco</p>
      </div>

      <div className="mt-6 pt-4 border-t border-white">
        <p className="text-xs opacity-75">
          © 2024 Studio Beauty Center - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
