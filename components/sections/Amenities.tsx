"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, Flower2, Utensils, Waves, Plane } from "lucide-react";

const AMENITIES = [
    {
        title: "The Oasis Spa & Wellness Sanctuary",
        subtitle: "Holistic Healing & Thermal Hydrotherapy",
        description: "Rejuvenate your senses with bespoke aromatherapy, revitalizing hammams, private vitality pools, and ancient thermal bath rituals curated by internationally accredited therapists.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop",
        icon: Flower2,
        link: "/spa",
    },
    {
        title: "Michelin-Caliber Gastronomy & Cellar",
        subtitle: "Haute Cuisine & Grand Cru Pairings",
        description: "Embark on an epicurean journey across three signature restaurants. Featuring seasonal tasting menus, dry-aged prime cuts, and a private sommelier cellar hosting over 3,000 vintage wines.",
        image: "https://res.cloudinary.com/duweg8kpv/image/upload/v1772915872/bb3feec381e3e248e2bd6557bab0e8f7_l5sequ.jpg",
        icon: Utensils,
        link: "/restaurant",
    },
    {
        title: "Skyline Infinity Heated Pool",
        subtitle: "360-Degree Panoramic Horizon",
        description: "Float effortlessly above the vibrant city skyline in our heated infinity pool, complemented by private cabana service, craft cocktails, and sunset lounge sounds.",
        image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1600&auto=format&fit=crop",
        icon: Waves,
        link: "/gallery",
    },
    {
        title: "Private Helipad & Chauffeur Fleet",
        subtitle: "VIP Arrival & Bespoke Transfers",
        description: "Arrive in peerless comfort via our rooftop helipad or our dedicated fleet of Rolls-Royce and Mercedes Maybach chauffeurs available around the clock.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1600&auto=format&fit=crop",
        icon: Plane,
        link: "/events",
    }
];

export default function Amenities() {
    return (
        <section className="py-32 bg-[#060608] overflow-hidden relative">
            {/* Ambient Lighting */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="mb-24 md:flex md:justify-between md:items-end border-b border-white/10 pb-12">
                    <div className="max-w-xl">
                        <motion.span
                            className="text-accent uppercase tracking-[0.35em] text-xs mb-3 block font-semibold"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Privileged Amenities
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Beyond Expectation
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-gray-400 font-light max-w-md mt-6 md:mt-0 text-sm leading-relaxed"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Every facet of Sunluxe Hotel &amp; Suites is crafted to elevate your daily routine into an extraordinary symphony of relaxation and indulgence.
                    </motion.p>
                </div>

                {/* Amenities List */}
                <div className="space-y-32">
                    {AMENITIES.map((amenity, index) => (
                        <div
                            key={index}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
                        >
                            {/* Image Container with 15px radius and overlay */}
                            <div className="w-full lg:w-1/2 relative h-[420px] md:h-[480px]">
                                <motion.div
                                    className="w-full h-full relative rounded-[15px] overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.7)] group"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img
                                        src={amenity.image}
                                        alt={amenity.title}
                                        className="w-full h-full object-cover rounded-[15px] transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                                </motion.div>

                                {/* Decorative Gold Frame (15px radius) */}
                                <div className={`absolute -bottom-4 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-3/4 h-3/4 border border-accent/30 rounded-[15px] -z-10 hidden sm:block`} />
                            </div>

                            {/* Text Container */}
                            <div className="w-full lg:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="space-y-6"
                                >
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[15px] bg-white/5 border border-accent/30 text-accent text-xs">
                                        <amenity.icon size={14} />
                                        <span className="uppercase tracking-wider text-[10px] font-semibold">{amenity.subtitle}</span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-serif text-white leading-snug">
                                        {amenity.title}
                                    </h3>

                                    <p className="text-gray-300 font-light leading-relaxed text-base">
                                        {amenity.description}
                                    </p>

                                    <div>
                                        <Link
                                            href={amenity.link}
                                            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-accent hover:text-white transition-colors group pt-2"
                                        >
                                            <span>Explore Experience</span>
                                            <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}