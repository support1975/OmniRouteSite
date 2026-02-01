"use client";

import { motion } from "framer-motion";

const partners = [
    "Booking.com", "Expedia", "Airbnb", "Google Maps", "Skyscanner", "TripAdvisor"
];

export default function Ecosystem() {
    return (
        <section className="py-32 bg-slate-50 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Our Ecosystem</h2>
                    <p className="text-slate-500">Native integrations and deep partnerships with world-leading services.</p>
                </div>

                <div className="relative">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        className="flex gap-12 items-center"
                    >
                        {[...partners, ...partners].map((partner, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 px-8 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm text-slate-400 font-bold uppercase tracking-widest text-sm"
                            >
                                {partner}
                            </div>
                        ))}
                    </motion.div>

                    {/* Gradient Overlays */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
                </div>
            </div>
        </section>
    );
}
