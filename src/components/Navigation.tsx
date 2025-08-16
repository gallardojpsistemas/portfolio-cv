import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="w-full sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900 dark:text-white">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Juan Dev</h1>
                <ul className="flex gap-6">
                    <li><a href="#home" className="hover:text-blue-600">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-600">Sobre mí</a></li>
                    <li><a href="#projects" className="hover:text-blue-600">Proyectos</a></li>
                    <li><a href="#contact" className="hover:text-blue-600">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
