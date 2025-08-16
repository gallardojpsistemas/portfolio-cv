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
        offset: ["start end", "end start"], // Mejor detección del scroll
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 30,
        mass: 0.5,
        restDelta: 0.001,
    });

    // Opacidad más sensible (empieza en 0.8 en lugar de 0.2)
    const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const y = useTransform(smoothProgress, [0, 1], [20, 0]);
    const scale = useTransform(smoothProgress, [0, 1], [0.98, 1]);

    let style: any = { opacity, y };
    if (variant === "zoom") style = { opacity, scale };

    return (
        <motion.div
            ref={ref}
            style={style}
            transition={{ type: "spring", damping: 25, stiffness: 150 }}
            className="h-screen w-full flex items-center justify-center snap-start relative"
        >
            <div className="w-full max-w-6xl mx-auto px-4">
                {children}
            </div>
        </motion.div>
    );
}