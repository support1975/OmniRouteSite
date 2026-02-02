"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Info, X } from "lucide-react";

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200]"
                >
                    <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900 shadow-2xl shadow-indigo-500/10 border border-slate-800 backdrop-blur-xl">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                            <Info className="w-5 h-5" />
                        </div>
                        <p className="text-white font-medium pr-4">{message}</p>
                        <button
                            onClick={onClose}
                            className="p-1 hover:bg-slate-800 rounded-lg text-slate-500 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
