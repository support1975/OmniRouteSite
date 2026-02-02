"use client";

import { Check } from "lucide-react";

const tiers = [
    {
        name: "Explorer",
        price: "0",
        description: "Perfect for casual travelers discovering new horizons.",
        features: ["AI Itineraries", "Public Transport Layers", "Community Guides"],
    },
    {
        name: "Navigator",
        price: "12",
        description: "Advanced tools for the frequent globetrotter.",
        features: ["Everything in Explorer", "Weather-Based Adaptation", "Offline Access", "Priority Support"],
        popular: true,
    },
    {
        name: "Voyager",
        price: "29",
        description: "Ultimate intelligence for professional nomads.",
        features: ["Everything in Navigator", "Custom Neural Training", "Multi-Member Sharing", "Concierge API Access"],
    },
];

interface PricingProps {
    onJoinWaitlist: () => void;
}

export default function Pricing({ onJoinWaitlist }: PricingProps) {
    return (
        <section id="pricing" className="py-32 relative bg-white">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Flexible <span className="text-indigo-600">Plans</span></h2>
                    <p className="text-slate-500 text-lg">Choose the intelligence level that fits your journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={`p-10 rounded-[32px] flex flex-col transition-all duration-300 ${tier.popular ? 'bg-white border-2 border-indigo-600 scale-105 shadow-2xl shadow-indigo-100 ring-4 ring-indigo-50' : 'bg-slate-50 border border-slate-100 shadow-sm'}`}
                        >
                            {tier.popular && (
                                <span className="bg-indigo-600 text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full w-fit mb-6">Most Popular</span>
                            )}
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                            <div className="mb-6 flex items-baseline gap-1">
                                <span className="text-5xl font-extrabold text-slate-900">${tier.price}</span>
                                <span className="text-slate-500 font-bold">/mo</span>
                            </div>
                            <p className="text-sm text-slate-500 mb-10 leading-relaxed">{tier.description}</p>

                            <ul className="space-y-4 mb-10 flex-1">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                                        <Check className="w-5 h-5 text-indigo-500" strokeWidth={3} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={onJoinWaitlist}
                                className={`w-full py-5 rounded-2xl font-bold transition-all shadow-lg text-center block ${tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-200' : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-slate-100'}`}
                            >
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
