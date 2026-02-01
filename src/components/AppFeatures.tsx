"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Calendar, Map, CheckCircle2, Navigation } from "lucide-react";

export default function AppFeatures() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="bg-white py-32 space-y-40">

            {/* Smart Sync Block */}
            <section className="container px-4 mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-indigo-100">
                        <MessageSquare className="w-6 h-6" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        Smart Sync: <br />
                        <span className="text-indigo-600">The End of Group Chaos.</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                        Our AI engine monitors your group chat and automatically populates the shared calendar. No more "where are we meeting?" or "what time?".
                    </p>

                    <ul className="mt-10 space-y-4">
                        {["Auto-extracts locations from chat", "Real-time calendar collision detection", "Instant group notifications"].map((text, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                {text}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <div className="relative h-[500px] rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden p-8 shadow-inner">
                    {/* Animated Chat Bubbles */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-4 max-w-sm"
                    >
                        <div className="p-4 rounded-2xl bg-white shadow-sm border border-slate-100 text-sm">
                            "Hey guys, should we meet at <span className="text-indigo-600 font-bold">Cafe de Paris</span> at 7pm?"
                        </div>

                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 1.5, type: "spring" }}
                            className="p-3 rounded-2xl bg-indigo-600 text-white text-xs font-bold w-fit ml-auto flex items-center gap-2"
                        >
                            <Calendar className="w-4 h-4" />
                            Adding to Itinerary...
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.5 }}
                            className="p-4 rounded-2xl bg-indigo-50 border border-indigo-100 text-sm text-indigo-900 ml-auto"
                        >
                            "Perfect! OmniRoute just updated the group map."
                        </motion.div>
                    </motion.div>

                    {/* Animated Calendar Grid Mockup */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 p-8 pt-0">
                        <div className="h-full bg-white rounded-t-3xl border-t border-x border-slate-200 p-6 shadow-2xl">
                            <div className="flex items-center justify-between mb-4">
                                <div className="h-4 w-32 bg-slate-100 rounded-full" />
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100" />
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100" />
                                </div>
                            </div>
                            <div className="grid grid-cols-7 gap-2">
                                {Array.from({ length: 21 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.1 * i }}
                                        className={`h-12 rounded-lg ${i === 12 ? 'bg-indigo-600 ring-4 ring-indigo-50 shadow-lg' : 'bg-slate-50'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI-Powered Routes Block */}
            <section className="container px-4 mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl bg-slate-900 overflow-hidden shadow-2xl shadow-indigo-200">
                    {/* Dark Map Mockup */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full border-2 border-dashed border-indigo-500/20 rounded-full scale-[1.5] animate-[spin_60s_linear_infinite]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#312e81_0,transparent_100%)]" />
                    </div>

                    {/* Dynamic Route Line */}
                    <svg className="absolute inset-0 w-full h-full p-20" viewBox="0 0 400 300">
                        <motion.path
                            d="M 50 250 Q 100 50 350 150"
                            fill="none"
                            stroke="#6366f1"
                            strokeWidth="4"
                            strokeLinecap="round"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                        />
                        <motion.circle
                            r="6"
                            fill="#818cf8"
                            initial={{ offset: 0 }}
                            animate={{ offset: 1 }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        >
                            <animateMotion path="M 50 250 Q 100 50 350 150" dur="5s" repeatCount="indefinite" />
                        </motion.circle>
                        {/* Start/End Points */}
                        <circle cx="50" cy="250" r="4" fill="#fff" />
                        <circle cx="350" cy="150" r="4" fill="#fff" />
                    </svg>

                    {/* Floating Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute bottom-10 left-10 p-5 rounded-2xl bg-slate-800/80 backdrop-blur-md border border-slate-700 max-w-[200px]"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                <Navigation className="w-4 h-4 text-emerald-400" />
                            </div>
                            <div className="text-xs font-bold text-white uppercase tracking-widest">Optimized</div>
                        </div>
                        <div className="text-sm text-slate-300">Route adjusted for optimal group timing.</div>
                    </motion.div>
                </div>

                <motion.div
                    className="order-1 lg:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-indigo-100">
                        <Map className="w-6 h-6" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        AI-Powered Routes: <br />
                        <span className="text-indigo-600">The Path Less Troubled.</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                        OmniRoute doesn&apos;t just show you a map. It predicts delays, monitors weather changes, and suggests the most scenic or efficient route for your group.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">Weather Aware</h4>
                            <p className="text-sm text-slate-500">Real-time adjustments for local conditions.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">Group ETA</h4>
                            <p className="text-sm text-slate-500">Know exactly when everyone arrives.</p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
