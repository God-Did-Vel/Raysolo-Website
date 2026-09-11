"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Users, ArrowRight, Sparkles } from "lucide-react";

const EVENTS = [
    {
        id: 1,
        title: "Global Executive Leaders Summit",
        category: "Corporate Summit",
        date: "14 Oct 2026",
        location: "Sunluxe Imperial Grand Hall",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Royal Gala & Champagne Soirée",
        category: "Exclusive Gala",
        date: "18 Nov 2026",
        location: "Sunluxe Starlight Ballroom",
        image: "https://res.cloudinary.com/duweg8kpv/image/upload/v1772988986/360_F_692511356_6jleOpKpvIMrGRtXo7TZk70aD8ePbZvQ_q7ahz9.jpg",
    },
    {
        id: 3,
        title: "Haute Couture & Fine Arts Showcase",
        category: "Cultural Gala",
        date: "05 Dec 2026",
        location: "Sunluxe Pavilion & Garden",
        image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop",
    }
];

export default function EventsPreview() {
    return (
        <section className="py-32 bg-[#060608] text-white relative overflow-hidden">
            {/* Top Border Divider */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="mb-16 md:flex md:justify-between md:items-end border-b border-white/10 pb-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-3">
                            <span className="w-8 h-[1px] bg-accent"></span>
                            <h4 className="text-[10px] uppercase font-semibold tracking-[0.3em] text-accent">
                                Prestigious Gatherings
                            </h4>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                            Galas, Summits &amp; Weddings
                        </h2>
                    </div>

                    <Link
                        href="/events"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent hover:text-white font-semibold mt-4 md:mt-0 transition-colors group"
                    >
                        <span>Request Event Proposal</span>
                        <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Events Cards Grid (15px radius) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {EVENTS.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group bg-[#0e0f14] rounded-[15px] overflow-hidden border border-white/10 hover:border-accent/40 transition-all duration-500 flex flex-col justify-between"
                        >
                            {/* Image Container with 15px radius */}
                            <div className="overflow-hidden aspect-[16/10] relative rounded-t-[15px]">
                                <img
                                    src={event.image}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-t-[15px]"
                                    alt={event.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14] via-transparent to-transparent" />
                                
                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-[15px] border border-white/15 text-[10px] uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                                    <Sparkles size={10} />
                                    {event.category}
                                </div>
                            </div>

                            {/* Details */}
                            <div className="p-6">
                                <h3 className="font-serif text-xl mb-3 text-white group-hover:text-accent transition-colors leading-snug">
                                    {event.title}
                                </h3>

                                <div className="space-y-1 text-xs text-gray-400 font-light">
                                    <p className="flex items-center gap-1.5 text-accent/90">
                                        <Calendar size={12} />
                                        <span>{event.date}</span>
                                    </p>
                                    <p className="text-[11px] text-gray-400">
                                        {event.location}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <Link
                                        href="/events"
                                        className="text-xs uppercase tracking-wider text-white group-hover:text-accent font-semibold flex items-center justify-between"
                                    >
                                        <span>Reserve / Inquire</span>
                                        <ArrowRight size={13} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
