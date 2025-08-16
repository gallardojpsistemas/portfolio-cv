const About = () => {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-4 sm:px-6 text-gray-900 dark:text-gray-100 py-4 sm:py-8 md:py-12 lg:py-16"
    >
      {/* Título responsive */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
        Sobre mí
      </h2>

      {/* Párrafo principal con mejor espaciado móvil */}
      <p className="leading-relaxed text-sm sm:text-base lg:text-lg text-center max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-gray-700 dark:text-gray-300 px-2">
        Soy <b>Juan Gallardo</b>, desarrollador frontend apasionado por crear aplicaciones
        web modernas y escalables.
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        Trabajo con <b>React</b>, <b>Next.js</b>, <b>TailwindCSS</b> y <b>TypeScript</b>.
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        Me encanta aprender nuevas tecnologías y aportar soluciones efectivas en equipo.
      </p>

      {/* Grid responsive que se adapta mejor a móviles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
        {/* Card de habilidades técnicas */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
            Habilidades técnicas
          </h3>
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">⚛️</span>
              React / Next.js
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎨</span>
              TailwindCSS
            </li>
            <li className="flex items-center">
              <span className="mr-2">🛠️</span>
              TypeScript / JavaScript
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌐</span>
              API REST
            </li>
            <li className="flex items-center">
              <span className="mr-2">💾</span>
              MongoDB / SQL
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚙️</span>
              Git / CI/CD
            </li>
          </ul>
        </div>

        {/* Card de soft skills */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
            Soft skills
          </h3>
          <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">🤝</span>
              Trabajo en equipo
            </li>
            <li className="flex items-center">
              <span className="mr-2">💬</span>
              Comunicación clara
            </li>
            <li className="flex items-center">
              <span className="mr-2">🚀</span>
              Proactividad
            </li>
            <li className="flex items-center">
              <span className="mr-2">🧠</span>
              Resolución de problemas
            </li>
            <li className="flex items-center">
              <span className="mr-2">📚</span>
              Aprendizaje constante
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;