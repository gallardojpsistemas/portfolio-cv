const About = () => {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-4 sm:px-6 text-gray-900 dark:text-gray-100 py-12"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Sobre mí</h2>

      <p className="leading-relaxed text-lg text-center max-w-2xl mx-auto mb-12 text-gray-700 dark:text-gray-300">
        Soy <b>Juan Gallardo</b>, desarrollador frontend apasionado por crear aplicaciones
        web modernas y escalables.
        <br />Trabajo con <b>React</b>, <b>Next.js</b>, <b>TailwindCSS</b> y <b>TypeScript</b>.
        <br />Me encanta aprender nuevas tecnologías y aportar soluciones efectivas en equipo.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">Habilidades técnicas</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>⚛️ React / Next.js</li>
            <li>🎨 TailwindCSS</li>
            <li>🛠️ TypeScript / JavaScript</li>
            <li>🌐 API REST</li>
            <li>💾 MongoDB / SQL</li>
            <li>⚙️ Git / CI/CD</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">Soft skills</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
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