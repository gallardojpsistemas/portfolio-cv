const Contact = () => {
    return (
        <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center">
            <h2 className="text-4xl font-bold mb-8">Contacto</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
                Si te interesa trabajar conmigo, no dudes en escribirme.
            </p>

            <form className="flex flex-col gap-4 max-w-md mx-auto">
                <input
                    type="text"
                    placeholder="Nombre"
                    className="px-4 py-2 rounded-lg border dark:bg-gray-900 dark:border-gray-700"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 rounded-lg border dark:bg-gray-900 dark:border-gray-700"
                />
                <textarea
                    placeholder="Mensaje"
                    className="px-4 py-2 rounded-lg border dark:bg-gray-900 dark:border-gray-700"
                    rows={4}
                ></textarea>
                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                >
                    Enviar
                </button>
            </form>

            <div className="flex gap-6 justify-center mt-8">
                <a href="https://github.com/gallardojpsistemas" target="_blank" className="hover:text-blue-600">GitHub</a>
                <a href="https://linkedin.com/in/gallardo-juan-pablo" target="_blank" className="hover:text-blue-600">LinkedIn</a>
                <a href="mailto:gallardojpsistemas@gmail.com" className="hover:text-blue-600">Email</a>
            </div>
        </section>
    );
};

export default Contact;
