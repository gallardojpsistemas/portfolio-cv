import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="w-full sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900 dark:text-white">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="#home" passHref>
                    <h1 className="text-2xl font-bold cursor-default">Juan Gallardo</h1>
                </Link>
                <ul className="flex gap-6">
                    <li><a href="#home" className="hover:text-blue-600 cursor-default">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-600 cursor-default">Sobre mí</a></li>
                    <li><a href="#projects" className="hover:text-blue-600 cursor-default">Proyectos</a></li>
                    <li><a href="#contact" className="hover:text-blue-600 cursor-default">Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;