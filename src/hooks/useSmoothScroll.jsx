import { useCallback } from 'react';

const useSmoothScroll = () => {
    return useCallback((e, sectionId) => {
        e.preventDefault();

        const element = document.getElementById(sectionId);
        if (element) {
            // Obtener la altura del navbar para el offset
            const navbar = document.querySelector('nav');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;

            // Calcular la posición considerando el navbar fijo
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20; // 20px extra de margen

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Actualizar la URL sin recargar la página
            window.history.pushState(null, '', `#${sectionId}`);
        }
    }, []);
};

export default useSmoothScroll;