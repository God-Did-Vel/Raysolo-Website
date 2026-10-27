"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Bed, Users, Maximize, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

const FEATURED_ROOMS = [
    {
        id: "69b2e1484f4211ddc6d25798",
        name: "Sunluxe Presidential Suite",
        category: "presidential",
        size: "180 sqm / 1,937 sq ft",
        price: 950,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop",
        badge: "Pinnacle of Luxury",
        features: ["Panoramic Ocean & City View", "2 King Master Bedrooms", "Private Rooftop Terrace", "24/7 Butler Service"]
    },
    {
        id: "69b2e1484f4211ddc6d25797",
        name: "Grand Executive Penthouse",
        category: "executive",
        size: "115 sqm / 1,237 sq ft",
        price: 550,
        image: "https://res.cloudinary.com/duweg8kpv/image/upload/v1772119962/d4_s0joyk.jpg",
        badge: "Executive Favorite",
        features: ["Skyline Balcony", "Italian Marble Bath", "Private Meeting Lounge", "High-Speed Wi-Fi 6"]
    },
    {
        id: "69b2e1484f4211ddc6d2579b",
        name: "Royal Honeymoon Haven",
        category: "honeymoon",
        size: "95 sqm / 1,022 sq ft",
        price: 600,
        image: "https://res.cloudinary.com/duweg8kpv/image/upload/v1772120021/d6_pebx9x.jpg",
        badge: "Romantic Escape",
        features: ["Heart Hydrotherapy Jacuzzi", "King Canopy Bed", "Champagne & Caviar Service", "Sunset Ocean View"]
    }
];

export default function FeaturedRooms() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredRooms = selectedCategory === "all"
        ? FEATURED_ROOMS
        : FEATURED_ROOMS.filter(room => room.category === selectedCategory);

    return (
        <section className="py-32 bg-[#0a0a0f] relative overflow-hidden">
            {/* Top divider accent */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.span
                        className="text-accent uppercase tracking-[0.35em] text-xs mb-3 block font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Accommodations &amp; Sanctuaries
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Signature Suites
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 font-light text-base leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Indulge in bespoke architectural masterpieces designed for supreme tranquility, privacy, and classical elegance.
                    </motion.p>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2.5 mt-8">
                        {[
                            { id: "all", label: "All Suites" },
                            { id: "presidential", label: "Presidential" },
                            { id: "executive", label: "Executive" },
                            { id: "honeymoon", label: "Honeymoon" },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setSelectedCategory(tab.id)}
                                className={`px-5 py-2 rounded-[15px] text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 ${
                                    selectedCategory === tab.id
                                        ? "bg-accent text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                        : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Suites Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredRooms.map((room, index) => (
                            <motion.div
                                key={room.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-[#0e0f14] rounded-[15px] overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between"
                            >
                                {/* Image Container (15px radius) */}
                                <div className="h-72 w-full overflow-hidden rounded-t-[15px] relative">
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 rounded-t-[15px]"
                                        style={{ backgroundImage: `url(${room.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14] via-black/20 to-transparent" />
                                    
                                    {/* Badge */}
                                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-accent/40 text-accent px-3.5 py-1 rounded-[15px] text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                                        <Sparkles size={11} />
                                        {room.badge}
                                    </div>

                                    {/* Price Tag */}
                                    <div className="absolute top-4 right-4 bg-accent text-black font-serif px-3.5 py-1 rounded-[15px] text-sm font-semibold shadow-lg">
                                        ₦{room.price} <span className="text-[10px] font-sans font-normal text-black/80">/ Night</span>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-7 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-accent transition-colors duration-300">
                                            {room.name}
                                        </h3>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest font-light mb-6 flex items-center gap-2">
                                            <Maximize size={13} className="text-accent" />
                                            {room.size}
                                        </p>

                                        {/* Features List */}
                                        <ul className="space-y-2.5 mb-8 border-t border-white/10 pt-5">
                                            {room.features.map((feature, i) => (
                                                <li key={i} className="text-gray-300 font-light text-xs flex items-center">
                                                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2.5 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* CTAs */}
                                    <div className="grid grid-cols-2 gap-3 pt-2">
                                        <Link
                                            href={`/rooms`}
                                            className="text-center py-2.5 rounded-[15px] border border-white/20 text-white text-xs uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                                        >
                                            Details
                                        </Link>
                                        <Link
                                            href={`/book?roomId=${room.id}`}
                                            className="btn-gold-shimmer text-center py-2.5 rounded-[15px] bg-accent hover:bg-accent-light text-black text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(212,175,55,0.25)]"
                                        >
                                            Reserve
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Explore All Suites Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Link
                        href="/rooms"
                        className="inline-flex items-center gap-3 border border-accent/60 bg-white/5 hover:bg-accent hover:text-black text-accent font-semibold px-8 py-3.5 rounded-[15px] uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.15)] group"
                    >
                        <span>View All Accommodations</span>
                        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
