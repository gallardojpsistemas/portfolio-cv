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
        <section id="projects" className="bg-gray-100 dark:bg-gray-800 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center">Proyectos</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 hover:scale-105 transform transition"
                        >
                            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{p.description}</p>
                            <p className="text-sm text-gray-500 mb-4">
                                {p.tech.join(" • ")}
                            </p>
                            <div className="flex gap-4">
                                <a href={p.github} target="_blank" className="text-blue-600 hover:underline">
                                    GitHub
                                </a>
                                <a href={p.demo} target="_blank" className="text-green-600 hover:underline">
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
