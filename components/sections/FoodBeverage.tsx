"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Utensils, Wine, Clock, Sparkles } from "lucide-react";

export default function FoodBeverage() {
    return (
        <section className="py-32 bg-[#0a0a0f] relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                    
                    {/* Gold-Accented Feature Box (lg:col-span-5) */}
                    <div className="lg:col-span-5 bg-gradient-to-br from-[#d4af37] via-[#c5a059] to-[#9e7d23] p-10 md:p-14 rounded-[15px] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-black relative overflow-hidden">
                        {/* Shimmer overlay */}
                        <div className="absolute -top-24 -right-24 w-60 h-60 bg-white/20 rounded-full blur-2xl pointer-events-none" />

                        <div>
                            <motion.span
                                className="text-black/80 uppercase tracking-[0.25em] text-[10px] font-bold mb-3 block flex items-center gap-1.5"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <Sparkles size={13} />
                                Epicurean Distinction
                            </motion.span>
                            <motion.h2
                                className="text-3xl md:text-5xl font-serif text-black mb-6 leading-tight font-medium"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                The Symphony of Haute Cuisine
                            </motion.h2>
                            <motion.p
                                className="text-black/90 font-normal leading-relaxed mb-8 text-sm md:text-base"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                At Sunluxe Hotel &amp; Suites, our master culinary artisans transform seasonal, sustainably sourced produce into unforgettable sensory journeys. From private sommelier tastings to panoramic rooftop dinners.
                            </motion.p>
                        </div>

                        {/* Quick Highlights */}
                        <div className="space-y-3 border-t border-black/15 pt-6 mb-8 text-xs font-semibold text-black/90">
                            <div className="flex items-center gap-2">
                                <Clock size={14} />
                                <span>Breakfast: 06:30 - 11:00 | Dinner: 18:00 - 23:30</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Wine size={14} />
                                <span>Cellar: 3,000+ Rare Vintage Bottles</span>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link
                                href="/restaurant"
                                className="inline-block w-full text-center bg-black hover:bg-black/80 text-white font-semibold py-3.5 px-8 rounded-[15px] text-xs uppercase tracking-[0.2em] transition-all shadow-lg hover:scale-[1.02]"
                            >
                                Explore Menus &amp; Reserve Table
                            </Link>
                        </motion.div>
                    </div>

                    {/* Image Section with 15px radius (lg:col-span-7) */}
                    <div className="lg:col-span-7 relative min-h-[450px] lg:min-h-full rounded-[15px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                        <img
                            src="https://res.cloudinary.com/duweg8kpv/image/upload/v1771930902/ricceee_cjmnwu.jpg"
                            alt="Sunluxe Fine Dining Showcase"
                            className="absolute inset-0 w-full h-full object-cover rounded-[15px] group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[15px]" />
                        
                        {/* Overlay Tag */}
                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-4 rounded-[15px] bg-black/70 backdrop-blur-md border border-white/15">
                            <div>
                                <span className="text-accent text-[10px] uppercase tracking-widest block font-semibold">Signature Dish</span>
                                <h4 className="text-white font-serif text-lg">A5 Japanese Wagyu &amp; Truffle Risotto</h4>
                            </div>
                            <span className="text-accent font-serif text-xl">₦85,000</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
