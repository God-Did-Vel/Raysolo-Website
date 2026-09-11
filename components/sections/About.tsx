"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Sparkles, Shield, Compass, Award, ArrowRight } from "lucide-react";

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    return (
        <section ref={sectionRef} className="py-32 bg-[#060608] relative overflow-hidden">
            {/* Ambient Background Accent */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Text Content (Col 6) */}
                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-accent uppercase tracking-[0.35em] text-xs mb-4 block font-semibold">
                                The Sunluxe Heritage
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
                                A Sanctuary of <br />
                                <span className="italic text-accent font-light">Timeless Grandeur</span>
                            </h2>

                            <div className="space-y-5 text-gray-300 font-light leading-relaxed mb-8 text-base">
                                <p>
                                    Since its inception, <strong className="text-white font-medium">Sunluxe Hotel &amp; Suites</strong> has redefined the art of bespoke hospitality. Nestled in a prestigious metropolitan sanctuary, our establishment harmoniously combines neoclassical architecture with state-of-the-art modern comforts.
                                </p>
                                <p>
                                    Every detail—from curated museum-grade artwork adorning marble corridors to private butler service attending to every whim—is meticulously tailored to ensure an unforgettable sojourn.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-6 mb-10 border-y border-white/10 py-6">
                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-[15px] bg-white/5 border border-accent/30 flex items-center justify-center flex-shrink-0 text-accent">
                                        <Sparkles size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-serif text-lg">24/7 Royal Butler</h4>
                                        <p className="text-gray-400 text-xs font-light mt-0.5">Intuitive bespoke service</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-[15px] bg-white/5 border border-accent/30 flex items-center justify-center flex-shrink-0 text-accent">
                                        <Award size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-serif text-lg">Michelin Dining</h4>
                                        <p className="text-gray-400 text-xs font-light mt-0.5">Award-winning gastronomy</p>
                                    </div>
                                </div>
                            </div>

                            {/* Stats & CTA */}
                            <div className="flex flex-wrap items-center justify-between gap-6">
                                <div className="flex items-center space-x-6">
                                    <div>
                                        <span className="block text-3xl md:text-4xl font-serif text-accent mb-1 font-semibold">25+</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-400">Years Heritage</span>
                                    </div>
                                    <div className="w-[1px] h-10 bg-white/10" />
                                    <div>
                                        <span className="block text-3xl md:text-4xl font-serif text-accent mb-1 font-semibold">100+</span>
                                        <span className="text-[10px] uppercase tracking-widest text-gray-400">Luxury Suites</span>
                                    </div>
                                </div>

                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white hover:text-accent font-semibold group transition-colors"
                                >
                                    <span>Discover Our Story</span>
                                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Collage (Col 6) with 15px radius */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative h-[550px] w-full">
                            {/* Main High-Res Image (rounded-[15px]) */}
                            <motion.div
                                className="w-4/5 h-[450px] relative rounded-[15px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1600&auto=format&fit=crop"
                                    alt="Sunluxe Grand Hotel Lobby"
                                    className="w-full h-full object-cover rounded-[15px] hover:scale-105 transition-transform duration-700"
                                />
                            </motion.div>

                            {/* Floating Secondary Image (rounded-[15px]) */}
                            <motion.div
                                className="absolute -bottom-6 right-0 w-3/5 h-[260px] rounded-[15px] overflow-hidden border-2 border-accent/40 shadow-[0_20px_40px_rgba(0,0,0,0.9)] bg-[#0e0f14]"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img
                                    src="https://res.cloudinary.com/duweg8kpv/image/upload/v1772119961/d3_xsxaea.jpg"
                                    alt="Sunluxe Suite Lounge"
                                    className="w-full h-full object-cover rounded-[15px] hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
                                        Private Executive Lounge
                                    </span>
                                </div>
                            </motion.div>

                            {/* Golden Decorative Accent Frame */}
                            <div className="absolute -top-4 right-12 w-32 h-32 border border-accent/20 rounded-[15px] -z-10 hidden xl:block" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
