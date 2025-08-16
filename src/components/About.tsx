const About = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20 text-gray-800 dark:text-gray-200">
      <h2 className="text-4xl font-bold mb-12 text-center">Sobre mí</h2>

      <p className="leading-relaxed text-lg text-center max-w-3xl mx-auto mb-12">
        Soy <b>Juan Gallardo</b>, desarrollador frontend apasionado por crear aplicaciones
        web modernas y escalables.
        <br />Trabajo con <b>React</b>, <b>Next.js</b>, <b>TailwindCSS</b> y <b>TypeScript</b>.
        <br />Me encanta aprender nuevas tecnologías y aportar soluciones efectivas en equipo.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">Habilidades técnicas</h3>
          <ul className="space-y-2">
            <li>⚛️ React / Next.js</li>
            <li>🎨 TailwindCSS</li>
            <li>🛠️ TypeScript / JavaScript</li>
            <li>🌐 API REST</li>
            <li>💾 MongoDB / SQL</li>
            <li>⚙️ Git / CI/CD</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">Soft skills</h3>
          <ul className="space-y-2">
            <li>🤝 Trabajo en equipo</li>
            <li>💬 Comunicación clara</li>
            <li>🚀 Proactividad</li>
            <li>🧠 Resolución de problemas</li>
            <li>📚 Aprendizaje constante</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
