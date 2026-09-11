"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar, Users, ChevronRight, Award, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

const SLIDES = [
    "https://res.cloudinary.com/duweg8kpv/image/upload/v1774303408/f9_xenxet.jpg",
    "https://res.cloudinary.com/duweg8kpv/image/upload/v1772988986/360_F_692511356_6jleOpKpvIMrGRtXo7TZk70aD8ePbZvQ_q7ahz9.jpg",
    "https://res.cloudinary.com/duweg8kpv/image/upload/v1774299834/f2_hdwzqg.jpg"
];

export default function Hero() {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState("2");
    const [roomType, setRoomType] = useState("all");

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    const handleQuickSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (checkIn) params.append("checkIn", checkIn);
        if (checkOut) params.append("checkOut", checkOut);
        if (guests) params.append("guests", guests);
        if (roomType && roomType !== "all") params.append("type", roomType);
        router.push(`/book?${params.toString()}`);
    };

    return (
        <section className="relative min-h-[100vh] w-full flex flex-col justify-between overflow-hidden bg-[#060608] pt-32 pb-12">
            {/* Background Slider */}
            {SLIDES.map((slide, index) => (
                <motion.div
                    key={slide}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                        opacity: index === currentSlide ? 1 : 0,
                        scale: index === currentSlide ? 1 : 1.12,
                    }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                >
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide})` }}
                    />
                    {/* Layered Luxury Overlay Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-black/60 to-black/75" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/80" />
                </motion.div>
            ))}

            {/* Main Center Content */}
            <div className="relative z-10 container mx-auto px-6 text-center my-auto">
                {/* 5-Star Luxury Accreditation Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-accent/40 mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                >
                    <Award size={14} className="text-accent" />
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold text-accent/90">
                        ★★★★★ World Luxury Hotel Awards 2026 Winner
                    </span>
                </motion.div>

                {/* Subtitle Accent */}
                <motion.span
                    className="block text-accent uppercase tracking-[0.4em] text-xs md:text-sm mb-3 font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Welcome to
                </motion.span>

                {/* Main Headline */}
                <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 tracking-[0.05em] font-serif font-light leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    Sunluxe <br className="hidden sm:inline" />
                    <span className="italic font-normal text-white/95">Hotel &amp; Suites</span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    className="text-gray-300 max-w-2xl mx-auto mb-10 text-base md:text-lg font-light leading-relaxed tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                >
                    Where timeless grandeur meets modern opulence. Experience an uncompromising sanctuary of bespoke comfort in the heart of the city.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                >
                    <Link
                        href="/rooms"
                        className="btn-gold-shimmer w-full sm:w-auto bg-accent hover:bg-accent-light text-black font-semibold px-8 py-3.5 rounded-[15px] uppercase tracking-[0.2em] text-xs transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-[1.03] flex items-center justify-center gap-2"
                    >
                        <Sparkles size={14} />
                        Explore Our Suites
                    </Link>
                    <Link
                        href="/about"
                        className="w-full sm:w-auto border border-white/30 hover:border-accent text-white hover:text-accent backdrop-blur-md bg-black/40 px-8 py-3.5 rounded-[15px] uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-2"
                    >
                        Our Heritage Story
                        <ChevronRight size={14} />
                    </Link>
                </motion.div>
            </div>

            {/* Floating Luxury Quick Reservation / Availability Bar */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="relative z-20 container mx-auto px-4 sm:px-6 max-w-6xl mt-4"
            >
                <div className="bg-[#0e0f14]/90 backdrop-blur-2xl border border-accent/30 rounded-[15px] p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                    <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
                        {/* Check-In */}
                        <div className="flex flex-col text-left border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 sm:pr-4">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-1 flex items-center gap-1.5">
                                <Calendar size={12} />
                                Check-In
                            </label>
                            <input
                                type="date"
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                                className="bg-transparent text-white text-xs font-light focus:outline-none [color-scheme:dark]"
                            />
                        </div>

                        {/* Check-Out */}
                        <div className="flex flex-col text-left border-b sm:border-b-0 lg:border-r border-white/10 pb-3 sm:pb-0 lg:pr-4">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-1 flex items-center gap-1.5">
                                <Calendar size={12} />
                                Check-Out
                            </label>
                            <input
                                type="date"
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                className="bg-transparent text-white text-xs font-light focus:outline-none [color-scheme:dark]"
                            />
                        </div>

                        {/* Suite Type */}
                        <div className="flex flex-col text-left border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 sm:pr-4">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-1">
                                Suite Category
                            </label>
                            <select
                                value={roomType}
                                onChange={(e) => setRoomType(e.target.value)}
                                className="bg-transparent text-white text-xs font-light focus:outline-none [&>option]:bg-[#0e0f14]"
                            >
                                <option value="all">All Suites</option>
                                <option value="deluxe">Deluxe Suite</option>
                                <option value="executive">Executive Suite</option>
                                <option value="presidential">Presidential Suite</option>
                                <option value="honeymoon">Honeymoon Suite</option>
                            </select>
                        </div>

                        {/* Guests */}
                        <div className="flex flex-col text-left pb-3 sm:pb-0">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold mb-1 flex items-center gap-1.5">
                                <Users size={12} />
                                Guests
                            </label>
                            <select
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                className="bg-transparent text-white text-xs font-light focus:outline-none [&>option]:bg-[#0e0f14]"
                            >
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4">4+ Guests</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn-gold-shimmer w-full bg-accent hover:bg-accent-light text-black font-semibold py-3.5 px-4 rounded-[15px] uppercase tracking-[0.15em] text-xs transition-all shadow-[0_4px_20px_rgba(212,175,55,0.3)] hover:scale-[1.02] flex items-center justify-center gap-2"
                        >
                            Reserve Suite
                        </button>
                    </form>
                </div>
            </motion.div>

            {/* Slide indicators */}
            <div className="relative z-10 flex justify-center items-center gap-2.5 mt-8">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                            i === currentSlide ? "w-8 bg-accent" : "w-2 bg-white/30 hover:bg-white/60"
                        }`}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
