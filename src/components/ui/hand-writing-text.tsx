"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface HandWrittenTitleProps {
    title?: string;
    subtitle?: string;
}

function HandWrittenTitle({
    title = "Hand Written",
    subtitle = "Optional subtitle",
}: HandWrittenTitleProps) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number] },
                opacity: { duration: 0.5 },
            },
        },
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto py-24">
            <div className="absolute inset-0">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1200 600"
                    initial="hidden"
                    animate="visible"
                    className="w-full h-full"
                >
                    <title>EducandoNaRede</title>
                    <motion.path
                        d="M 950 90
                           C 1250 300, 1050 480, 600 520
                           C 250 520, 150 480, 150 300
                           C 150 120, 350 80, 600 80
                           C 850 80, 950 180, 950 180"
                        fill="none"
                        strokeWidth="12"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={draw}
                        className="text-black dark:text-white opacity-90"
                    />
                </motion.svg>
            </div>
            <div className="relative text-center z-10 flex flex-col items-center justify-center">
                <motion.h1
                    className="text-4xl md:text-6xl text-black dark:text-white tracking-tighter flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        className="text-xl text-black/80 dark:text-white/80"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
}

/* ── DrawnUnderline: animated hand-drawn wavy underline for card titles ── */
interface DrawnUnderlineProps {
    color?: string;
    width?: number;
    className?: string;
}

function DrawnUnderline({ color = "#4f46e5", width = 180, className }: DrawnUnderlineProps) {
    const ref = useRef<SVGSVGElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.8 });

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number] },
                opacity: { duration: 0.3 },
            },
        },
    };

    return (
        <motion.svg
            ref={ref}
            width={width}
            height="10"
            viewBox={`0 0 ${width} 10`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={className}
            aria-hidden="true"
        >
            <motion.path
                d={`M 4 6 Q ${width * 0.15} 2, ${width * 0.3} 6 Q ${width * 0.45} 10, ${width * 0.6} 5 Q ${width * 0.75} 2, ${width * 0.9} 6 Q ${width * 0.95} 7, ${width - 4} 5`}
                fill="none"
                strokeWidth="2.5"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={draw}
            />
        </motion.svg>
    );
}

/* ── DrawnHighlight: oval path around inline text ── */
interface DrawnHighlightProps {
    children: React.ReactNode;
    color?: string;
    delay?: number;
}

function DrawnHighlight({ children, color = "#4f46e5", delay = 0.3 }: DrawnHighlightProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 0.6,
            transition: {
                pathLength: { duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number], delay },
                opacity: { duration: 0.3, delay },
            },
        },
    };

    return (
        <span ref={ref} style={{ position: "relative", display: "inline-block" }}>
            {children}
            <motion.svg
                viewBox="0 0 220 60"
                style={{
                    position: "absolute",
                    top: "-8px",
                    left: "-10px",
                    width: "calc(100% + 20px)",
                    height: "calc(100% + 16px)",
                    pointerEvents: "none",
                    overflow: "visible",
                }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                aria-hidden="true"
            >
                <motion.path
                    d="M 185 8 C 230 28, 215 52, 110 56 C 10 56, -5 42, 5 28 C 15 10, 60 4, 110 4 C 160 4, 185 16, 185 16"
                    fill="none"
                    strokeWidth="4"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={draw}
                />
            </motion.svg>
        </span>
    );
}

export { HandWrittenTitle, DrawnUnderline, DrawnHighlight };
