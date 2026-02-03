"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
    planName?: string | null;
}

export default function WaitlistModal({ isOpen, onClose, planName }: WaitlistModalProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Basic Regex Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        setStatus("submitting");
        try {
            console.log("Attempting to save to Firestore...");

            // Timeout after 10 seconds
            const savePromise = addDoc(collection(db, "waitlist"), {
                email: email,
                plan: planName || "general",
                registeredAt: serverTimestamp(),
            });

            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error("Request timed out. Please check your Firestore rules or database ID.")), 10000)
            );

            await Promise.race([savePromise, timeoutPromise]);
            setStatus("success");
        } catch (err: any) {
            console.error("Firestore Error:", err);
            setError(err.message || "An unexpected error occurred.");
            setStatus("idle");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl overflow-hidden border border-slate-100"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-50 text-slate-400 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8 md:p-10 pt-12 text-center">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">You&apos;re on the list!</h3>
                                    <p className="text-slate-500 mb-8">
                                        We&apos;ll notify you at <span className="font-bold text-slate-900">{email}</span> as soon as we open access.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-all"
                                    >
                                        Got it
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <Mail className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">
                                        {planName ? "Great choice!" : "Early Access"}
                                    </h3>
                                    <p className="text-slate-500 mb-8 leading-relaxed">
                                        {planName
                                            ? `We are launching soon. Join the waitlist to get the ${planName} plan at launch.`
                                            : "Join our exclusive waitlist to be the first to experience the future of travel planning."}
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="relative text-left">
                                            <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest ml-4 mb-2 block">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="alex@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium text-slate-900"
                                            />
                                        </div>

                                        {error && (
                                            <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs font-bold border border-red-100 mb-4">
                                                {error}
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "submitting"}
                                            className="w-full py-4 rounded-2xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-100 transition-all active:scale-95 flex items-center justify-center gap-2 group"
                                        >
                                            {status === "submitting" ? (
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                            ) : (
                                                <>
                                                    Join the Waitlist
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    <p className="mt-8 text-[11px] font-medium text-slate-400 italic">
                                        No spam. Just priority access and updates.
                                    </p>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
