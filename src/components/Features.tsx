"use client";

import { Brain, CloudRain, Globe, Map, Shield, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "AI Synthesis",
        description: "Our neural engine generates complete, optimized travel itineraries in seconds based on your preferences.",
        icon: Brain,
        color: "text-cyan-500",
    },
    {
        title: "Weather Guard",
        description: "Real-time weather monitoring that suggests route alternatives before the first drop of rain falls.",
        icon: CloudRain,
        color: "text-blue-500",
    },
    {
        title: "Offline Vault",
        description: "Access your documents, maps, and itineraries anywhere in the world, even without an internet connection.",
        icon: Shield,
        color: "text-cyan-600",
    },
    {
        title: "Global Intelligence",
        description: "Insights into local transport, local gems, and cultural nuances across every continent.",
        icon: Globe,
        color: "text-blue-600",
    },
    {
        title: "Interactive Maps",
        description: "High-precision mapping with integrated logistics and accommodation layers.",
        icon: Map,
        color: "text-cyan-400",
    },
    {
        title: "Multi-Platform",
        description: "Synchronize your plans across all your devices seamlessly. Your journey, everywhere.",
        icon: Smartphone,
        color: "text-blue-400",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Engineered for <span className="text-gradient">Modern Explorers</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Beyond just a map, OmniRoute is your digital travel concierge, powered by advanced machine learning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group p-8 rounded-3xl acrylic neon-border hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={cn("p-3 rounded-2xl bg-white/5 w-fit mb-6 group-hover:bg-white/10 transition-colors", feature.color)}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
