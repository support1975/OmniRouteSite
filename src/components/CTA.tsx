"use client";

import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[40px] acrylic neon-border text-center overflow-hidden">
                    {/* Animated background element */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-600/20 rounded-full blur-[80px]" />

                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        Ready to Redefine Your <br />
                        <span className="text-gradient">Travel Experience?</span>
                    </h2>

                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Join thousands of explorers using OmniRoute to navigate the world with intelligence and style.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                            Launch Web App
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-10 py-5 rounded-2xl bg-transparent text-white font-bold text-lg border border-white/20 hover:bg-white/5 transition-colors">
                            Request Demo
                        </button>
                    </div>

                    <div className="mt-12 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 text-gray-500 font-mono text-xs uppercase tracking-[0.2em]">
                        <span>Secured By OmniGuard</span>
                        <span>256-bit Encryption</span>
                        <span>GDPR Compliant</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
