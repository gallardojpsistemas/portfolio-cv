import useSmoothScroll from '../hooks/useSmoothScroll';

const Navigation = () => {
    const scrollToSection = useSmoothScroll();

    return (
        <nav className="w-full sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900 dark:text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                <button
                    onClick={(e) => scrollToSection(e, 'home')}
                    className="text-lg sm:text-xl md:text-2xl font-bold cursor-default"
                >
                    Juan Gallardo
                </button>

                <ul className="flex gap-4 lg:gap-6">
                    <li>
                        <button
                            onClick={(e) => scrollToSection(e, 'home')}
                            className="text-xs sm:text-lg md:text-lg lg:text-base hover:text-blue-600 cursor-default transition-colors"
                        >
                            Home
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={(e) => scrollToSection(e, 'about')}
                            className="text-xs sm:text-lg md:text-lg lg:text-base hover:text-blue-600 cursor-default transition-colors"
                        >
                            Sobre mí
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={(e) => scrollToSection(e, 'experience')}
                            className="text-xs sm:text-lg md:text-lg lg:text-base hover:text-blue-600 cursor-default transition-colors"
                        >
                            Experiencia
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={(e) => scrollToSection(e, 'contact')}
                            className="text-xs sm:text-lg md:text-lg lg:text-base hover:text-blue-600 cursor-default transition-colors"
                        >
                            Contacto
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;