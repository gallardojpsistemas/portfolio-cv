const Contact = () => {
    return (
        <section
            id="contact"
            className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12 lg:py-16 text-center"
        >
            {/* Título responsive */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
                Contacto
            </h2>

            {/* Descripción con mejor espaciado */}
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 px-4">
                Si te interesa trabajar conmigo, no dudes en escribirme.
            </p>

            {/* Formulario responsive */}
            <form className="flex flex-col gap-2 sm:gap-3 md:gap-4 max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12">
                <input
                    type="text"
                    placeholder="Nombre"
                    className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
                <textarea
                    placeholder="Mensaje"
                    rows={4}
                    className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none transition-all"
                ></textarea>
                <button
                    type="submit"
                    className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg active:transform active:scale-95"
                >
                    Enviar
                </button>
            </form>

            {/* Enlaces sociales responsive */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <a
                    href="https://github.com/gallardojpsistemas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm md:text-base hover:text-blue-600 transition-colors duration-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/gallardo-juan-pablo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm md:text-base hover:text-blue-600 transition-colors duration-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:gallardojpsistemas@gmail.com"
                    className="text-xs sm:text-sm md:text-base hover:text-blue-600 transition-colors duration-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    Email
                </a>
            </div>
        </section>
    );
};

export default Contact;