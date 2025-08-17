const Experience = () => {
    const experiences = [
        {
            title: "Frontend Developer - InboxVIP",
            period: "Agosto 2023 - Presente",
            description: "Desarrollo de nuevas interfaces y componentes reutilizables, corrección de bugs y optimización de vistas con integración de APIs RESTful.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "SQL"],
            type: "Trabajo Actual",
            highlights: ["APIs RESTful", "Componentes reutilizables", "Optimización"]
        },
        {
            title: "Backend Developer - Macro Intell SA",
            period: "Septiembre 2022 - Presente",
            description: "Diseño e implementación de APIs escalables trabajando en arquitectura de microservicios con enfoque modular y metodologías ágiles.",
            tech: ["Node.js", "TypeScript", "MongoDB", "Docker", "Express.js"],
            type: "Trabajo Actual",
            highlights: ["Microservicios", "APIs escalables", "Scrum"]
        },
        {
            title: "QA Automation (Freelance)",
            period: "Enero 2022 - Agosto 2023",
            description: "Creación y automatización de casos de prueba funcionales, generación de reportes y procesos de integración continua (CI).",
            tech: ["Selenium", "Java", "Cucumber", "TestNG", "Maven", "Postman"],
            type: "Freelance",
            highlights: ["Automatización", "CI/CD", "Testing funcional"]
        },
        {
            title: "Infraestructura en Redes - Municipalidad",
            period: "Agosto 2020 - Agosto 2022",
            description: "Administración de Firewalls y control de contenido, monitoreo de servidores y máquinas virtuales en la Subsecretaría de Sistemas.",
            tech: ["Mikrotik", "Unifi", "Fortigate", "Proxmox", "Cambium"],
            type: "Sector Público",
            highlights: ["Administración de red", "Virtualización", "Seguridad"]
        }
    ];

    const getTypeColor = (type: string) => {
        switch (type) {
            case "Trabajo Actual":
                return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
            case "Freelance":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
            case "Sector Público":
                return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
        }
    };

    return (
        <section id="experience" className="bg-gray-100 dark:bg-gray-900 py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
                    Experiencia Profesional
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 sm:p-5 md:p-6 hover:scale-[1.02] transform transition-all duration-300 border-l-4 border-blue-500"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                                    {exp.title}
                                </h3>
                                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                                    {exp.type}
                                </span>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                                {exp.period}
                            </p>

                            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="mb-4">
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                                    Tecnologías:
                                </p>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                    {exp.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-xs rounded-md border border-blue-200 dark:border-blue-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
                                    Aspectos destacados:
                                </p>
                                <div className="flex flex-wrap gap-1 sm:gap-2">
                                    {exp.highlights.map((highlight, highlightIndex) => (
                                        <span
                                            key={highlightIndex}
                                            className="px-2 py-1 bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-xs rounded-md border border-green-200 dark:border-green-700"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;