"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Calendar, Users } from "lucide-react";

export default function IPhoneMockup() {
    return (
        <div className="relative mx-auto w-[280px] h-[580px] iphone-bezel bg-slate-900 overflow-hidden select-none">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-50 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500/50 mr-auto ml-4" />
            </div>

            {/* Screen Content */}
            <div className="absolute inset-0 bg-slate-50 p-4 pt-12 flex flex-col gap-4 font-sans text-slate-900">
                <header className="flex items-center justify-between mb-2">
                    <div className="text-xl font-bold tracking-tight text-indigo-900">OmniRoute</div>
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Users className="w-4 h-4 text-indigo-600" />
                    </div>
                </header>

                {/* Dynamic Route Animation */}
                <div className="relative h-48 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-3">
                    <div className="flex items-center justify-between mb-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        <span>Paris to Lyon</span>
                        <span className="text-emerald-500">Active</span>
                    </div>

                    <div className="space-y-3">
                        {[1, 2, 3].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.5, duration: 0.5 }}
                                className="flex items-center gap-3"
                            >
                                <div className="w-6 h-6 rounded-lg bg-indigo-50 flex items-center justify-center">
                                    {i === 0 ? <MapPin className="w-3 h-3 text-indigo-600" /> : <Navigation className="w-3 h-3 text-slate-400" />}
                                </div>
                                <div className="h-2 flex-1 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: i * 0.5 + 0.2, duration: 1 }}
                                        className="h-full bg-indigo-600"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute bottom-3 right-3 w-10 h-10 bg-indigo-600 rounded-full shadow-lg shadow-indigo-200 flex items-center justify-center"
                    >
                        <Navigation className="w-5 h-5 text-white" />
                    </motion.div>
                </div>

                {/* Calendar View */}
                <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm p-3 overflow-hidden">
                    <div className="text-sm font-bold mb-3">Group Itinerary</div>
                    <div className="space-y-2">
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="flex gap-3">
                                <div className="w-10 text-[10px] text-slate-400 pt-1">09:0{i}</div>
                                <div className="flex-1 p-2 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="text-[10px] font-bold">Trip Sync Phase {i}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tab Bar */}
                <div className="h-14 bg-white/80 backdrop-blur-md border-t border-slate-200 flex items-center justify-around px-2">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <Calendar className="w-5 h-5 text-slate-400" />
                    <Users className="w-5 h-5 text-slate-400" />
                </div>
            </div>
        </div>
    );
}
