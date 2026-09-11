"use client";

import { useState } from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Loader2, Award, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { apiClient } from "@/lib/api";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error', message?: string }>({ type: 'idle' });

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) return;

        setStatus({ type: 'loading' });

        try {
            await apiClient.post("/api/newsletter/subscribe", { email });
            setStatus({ type: 'success', message: "Welcome to Sunluxe Privileged Members Club." });
            setEmail("");
        } catch (error: any) {
            setStatus({
                type: 'error',
                message: error.response?.data?.message || "Subscription currently unavailable."
            });
        }
    };

    return (
        <footer className="bg-[#060608] text-white pt-24 pb-12 border-t border-accent/20 relative z-40">
            {/* Top gold ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

            <div className="container mx-auto px-6 lg:px-12">
                {/* Upper Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-sm pb-16 border-b border-white/10">
                    
                    {/* Brand Col (2 spans on lg) */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-3 group inline-flex">
                            <div className="w-11 h-11 rounded-[15px] border border-accent/40 bg-black/60 flex items-center justify-center group-hover:border-accent transition-all">
                                <span className="font-cinzel text-accent font-bold text-xl">S</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-serif text-white tracking-[0.2em] uppercase block">
                                    Sunluxe
                                </span>
                                <span className="text-[9px] tracking-[0.4em] uppercase text-accent font-semibold">
                                    Hotel &amp; Suites
                                </span>
                            </div>
                        </Link>

                        <p className="text-gray-400 font-light leading-relaxed max-w-md text-sm">
                            Where classical grandeur meets contemporary bespoke luxury. Impeccable accommodations, Michelin-inspired gastronomy, and timeless European hospitality in an iconic sanctuary.
                        </p>

                        <div className="flex items-center gap-6 pt-2">
                            <div className="flex items-center gap-2 text-xs text-accent/90">
                                <Award size={16} />
                                <span>Forbes 5-Star Rated</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-accent/90">
                                <ShieldCheck size={16} />
                                <span>World Luxury Winner 2026</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.25em] mb-6 font-semibold text-accent">The Hotel</h4>
                        <ul className="space-y-3 font-light text-gray-400 text-sm">
                            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-accent transition-colors">Our Heritage &amp; Story</Link></li>
                            <li><Link href="/rooms" className="hover:text-accent transition-colors">Suites &amp; Residences</Link></li>
                            <li><Link href="/restaurant" className="hover:text-accent transition-colors">Gastronomy &amp; Lounge</Link></li>
                            <li><Link href="/spa" className="hover:text-accent transition-colors">Oasis Wellness &amp; Spa</Link></li>
                            <li><Link href="/events" className="hover:text-accent transition-colors">Weddings &amp; Galas</Link></li>
                            <li><Link href="/gallery" className="hover:text-accent transition-colors">Visual Anthology</Link></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.25em] mb-6 font-semibold text-accent">Concierge Desk</h4>
                        <ul className="space-y-3.5 font-light text-gray-400 text-sm">
                            <li className="flex items-start gap-2.5">
                                <MapPin size={16} className="text-accent flex-shrink-0 mt-1" />
                                <span>104 Sunluxe Boulevard, Victoria Island / Benin</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone size={16} className="text-accent flex-shrink-0" />
                                <span>+1 (800) 786-5893 / +234 810 000 7865</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Mail size={16} className="text-accent flex-shrink-0" />
                                <span>concierge@sunluxehotel.com</span>
                            </li>
                            <li className="text-xs text-gray-500 pt-1">
                                24/7 Dedicated Royal Butler &amp; Valet Service
                            </li>
                        </ul>
                    </div>

                    {/* VIP Newsletter */}
                    <div>
                        <h4 className="text-xs uppercase tracking-[0.25em] mb-6 font-semibold text-accent">VIP Gazette</h4>
                        <p className="font-light text-gray-400 mb-4 text-xs leading-relaxed">
                            Subscribe for private invitations, seasonal suite privileges, and culinary showcases.
                        </p>

                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="bg-black/60 border border-white/15 rounded-[15px] px-4 py-3 text-xs focus:outline-none focus:border-accent w-full text-white placeholder:text-gray-600 transition-colors"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status.type === 'loading'}
                                className="w-full bg-accent hover:bg-accent-light text-black font-semibold py-3 rounded-[15px] uppercase tracking-[0.2em] text-[10px] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {status.type === 'loading' ? (
                                    <>
                                        <Loader2 className="animate-spin w-3.5 h-3.5" />
                                        <span>Subscribing...</span>
                                    </>
                                ) : (
                                    'Join Sunluxe Club'
                                )}
                            </button>

                            {status.message && (
                                <p className={`text-xs mt-2 ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </div>

                </div>

                {/* Bottom Copyright & Social */}
                <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs font-light gap-4">
                    <p>&copy; {new Date().getFullYear()} Sunluxe Hotel &amp; Suites. All rights reserved. Designed for Extraordinary Living.</p>
                    
                    <div className="flex space-x-6 items-center">
                        <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
                        <div className="h-3 w-px bg-white/10" />
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="Instagram">
                            <Instagram size={17} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="Facebook">
                            <Facebook size={17} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors" aria-label="Twitter">
                            <Twitter size={17} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
