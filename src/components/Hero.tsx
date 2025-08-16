import Image from "next/image";

const Hero = () => {
    return (
        <section
            id="home"
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-6"
        >
            <Image
                src="/avatar.png"
                alt="Foto de perfil"
                width={160}
                height={160}
                className="rounded-full shadow-xl border-4 border-blue-600 mb-6"
            />
            <h1 className="text-5xl font-bold mb-2">Hola, soy Juan</h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-6">
                Frontend Developer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed">
                Me apasiona crear interfaces intuitivas y performantes con{" "}
                <b>React</b>, <b>Next.js</b> y <b>TypeScript</b>.
                Esta web es mi CV interactivo, donde muestro habilidades, proyectos y cómo trabajo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
                <a
                    href="https://github.com/gallardojpsistemas"
                    target="_blank"
                    className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/gallardo-juan-pablo"
                    target="_blank"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:gallardojpsistemas@gmail.com"
                    className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-500"
                >
                    Contacto
                </a>
                <a
                    href="https://drive.google.com/file/d/1_iqMqu7Xu3uO0RVtpqNejxob02CvLd5O/view?usp=drive_link"
                    target="_blank"
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-500"
                >
                    Descargar CV
                </a>
            </div>
        </section>
    );
};

export default Hero;
