"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Apple, Play } from "lucide-react";
import IPhoneMockup from "./IPhoneMockup";

interface HeroProps {
    onJoinWaitlist: () => void;
}

export default function Hero({ onJoinWaitlist }: HeroProps) {
    return (
        <section id="waitlist" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-slate-50">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-50/50 -skew-x-12 translate-x-1/4 -z-10" />
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10" />

            <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-xl"
                >
                    <div className="mb-10">
                        <Image
                            src="/logo_cropped.png"
                            alt="OmniRoute Brand"
                            width={240}
                            height={80}
                            className="h-auto w-auto max-h-16 mb-8"
                            priority
                        />
                        <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold animate-pulse">
                            ✨ Next-Gen AI Travel
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                        OmniRoute: Group Travel Planning, <span className="text-indigo-600">Reimagined.</span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                        Stop juggling spreadsheets and group chats. OmniRoute synchronizes your group&apos;s logistics, weather, and documents in one beautiful app.
                    </p>

                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button
                                onClick={onJoinWaitlist}
                                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 transition-all active:scale-95 shadow-lg shadow-indigo-100"
                            >
                                Join the Waitlist
                            </button>
                            <button
                                onClick={onJoinWaitlist}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all active:scale-95 h-full"
                            >
                                Get Early Access
                            </button>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex items-center gap-2 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                                    <Apple className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase font-bold text-slate-400 leading-none">Download on</div>
                                    <div className="text-sm font-bold text-slate-900">App Store</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 group cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white">
                                    <Play className="w-6 h-6 fill-current" />
                                </div>
                                <div>
                                    <div className="text-[10px] uppercase font-bold text-slate-400 leading-none">Get it on</div>
                                    <div className="text-sm font-bold text-slate-900">Google Play</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative perspective-1000 hidden lg:block"
                >
                    <IPhoneMockup />

                    {/* Floating UI Badges */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                        className="absolute top-20 -left-12 p-4 rounded-2xl acrylic shadow-xl border border-white max-w-[160px]"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500" />
                            <div className="text-[10px] font-bold uppercase text-slate-400">Weather Safe</div>
                        </div>
                        <div className="text-xs font-bold text-slate-800">Route adjusted for optimal conditions.</div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                        className="absolute bottom-40 -right-12 p-4 rounded-2xl acrylic shadow-xl border border-white max-w-[160px]"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                            <div className="text-[10px] font-bold uppercase text-slate-400">Team Synced</div>
                        </div>
                        <div className="text-xs font-bold text-slate-800">5 members joined the live itinerary.</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
