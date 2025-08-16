const Projects = () => {
    const projects = [
        {
            title: "App de Tareas",
            description: "Gestor de tareas con drag & drop y persistencia.",
            tech: ["Next.js", "Tailwind", "TypeScript"],
            github: "#",
            demo: "#",
        },
        {
            title: "Clon de Spotify",
            description: "Reproductor con playlists y consumo de API.",
            tech: ["React", "Styled Components", "Node.js"],
            github: "#",
            demo: "#",
        },
        {
            title: "E-commerce básico",
            description: "Carrito de compras y checkout simulado.",
            tech: ["Next.js", "Stripe API"],
            github: "#",
            demo: "#",
        },
    ];

    return (
        <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-4 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center">
                    Proyectos
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 sm:p-5 md:p-6 hover:scale-105 transform transition-transform duration-300"
                        >
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                                {p.title}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                                {p.description}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 font-medium">
                                {p.tech.join(" • ")}
                            </p>
                            <div className="flex gap-3 sm:gap-4">
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs sm:text-sm md:text-base text-blue-600 hover:text-blue-500 hover:underline transition-colors duration-200"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={p.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs sm:text-sm md:text-base text-green-600 hover:text-green-500 hover:underline transition-colors duration-200"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;