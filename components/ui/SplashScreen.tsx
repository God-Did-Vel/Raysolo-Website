'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ children }: { children: React.ReactNode }) {
    const [showSplash, setShowSplash] = useState(true);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Immediately hide splash screen if on admin route
        if (typeof window !== "undefined" && window.location.pathname.startsWith('/admin')) {
            setShowSplash(false);
            return;
        }

        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2400);

        return () => clearTimeout(timer);
    }, []);

    if (!isClient) return null;

    return (
        <>
            <AnimatePresence>
                {showSplash && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[10001] flex flex-col items-center justify-center bg-[#060608]"
                    >
                        {/* Luxury Crest / Monogram */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mb-6 flex flex-col items-center"
                        >
                            <div className="w-16 h-16 rounded-full border border-accent/40 flex items-center justify-center relative mb-4">
                                <span className="font-cinzel text-2xl text-accent font-bold">S</span>
                                <div className="absolute -top-1 w-2 h-2 rounded-full bg-accent animate-ping" />
                            </div>
                            <div className="flex items-center gap-1.5 text-accent/80 text-xs mb-2 tracking-[0.3em] font-light">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-center px-4"
                        >
                            <h1 className="font-serif text-3xl md:text-5xl text-white tracking-[0.15em] uppercase font-light mb-2">
                                Sunluxe
                            </h1>
                            <p className="font-sans text-[11px] md:text-xs tracking-[0.4em] uppercase text-accent font-semibold">
                                Hotel &amp; Suites
                            </p>
                            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto my-4" />
                            <p className="text-gray-400 text-xs tracking-widest font-light">
                                Sanctuary of Timeless Luxury
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </>
    );
}
