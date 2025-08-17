import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

type ScrollSectionProps = {
    children: ReactNode;
    variant?: "fade" | "slideLeft" | "slideRight" | "zoom";
};

const ScrollSection = ({ children, variant = "fade" }: ScrollSectionProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90%", "end 40%"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 30,
        mass: 0.5,
        restDelta: 0.001,
    });

    // Animaciones optimizadas para mobile y desktop
    const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.2]);
    const scale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.88, 1, 1, 0.88]);

    // Solo efecto zoom para todas las variantes
    let motionStyle: any = { opacity, scale };

    return (
        <motion.div
            ref={ref}
            style={motionStyle}
            transition={{ type: "spring", damping: 25, stiffness: 150 }}
            className="min-h-screen w-full flex items-center justify-center snap-start snap-always relative py-4 sm:py-6 md:py-0"
        >
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </motion.div>
    );
};

export default ScrollSection;