"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

type ScrollSectionProps = {
    children: ReactNode;
    variant?: "fade" | "slideLeft" | "slideRight" | "zoom";
};

export default function ScrollSection({
    children,
    variant = "fade",
}: ScrollSectionProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 30,
        mass: 0.5,
        restDelta: 0.001,
    });

    // Animaciones optimizadas - opacidad 100% cuando está visible
    const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.3]);
    const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.92, 1, 1, 0.92]);

    // Solo efecto zoom para todas las variantes
    let motionStyle: any = { opacity, scale };

    return (
        <motion.div
            ref={ref}
            style={motionStyle}
            transition={{ type: "spring", damping: 25, stiffness: 150 }}
            className="min-h-screen w-full flex items-center justify-center snap-start snap-always relative py-4 sm:py-6 md:py-0 px-4 sm:px-6 lg:px-8"
        >
            <div className="w-full max-w-6xl mx-auto">
                {children}
            </div>
        </motion.div>
    );
}