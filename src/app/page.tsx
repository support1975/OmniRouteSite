"use client";

import Image from "next/image";
import { useEffect } from "react";
import { initAnalytics } from "@/lib/firebase";
import Hero from "@/components/Hero";
import AppFeatures from "@/components/AppFeatures";
import Ecosystem from "@/components/Ecosystem";
import Pricing from "@/components/Pricing";

export default function Home() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6">
        <div className="container mx-auto px-4 flex items-center justify-between backdrop-blur-md bg-white/70 rounded-full border border-slate-100 max-w-4xl px-8 shadow-sm">
          <div className="flex items-center gap-2">
            <Image
              src="/icon.png"
              alt="OmniRoute Icon"
              width={28}
              height={28}
              className="rounded-md"
            />
            <div className="text-xl font-bold tracking-tighter text-slate-900">
              Omni<span className="text-indigo-600">Route</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Our Ecosystem</a>
          </div>
          <button className="px-6 py-2 rounded-full bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100">
            Join Waitlist
          </button>
        </div>
      </nav>

      <Hero />
      <AppFeatures />
      <Ecosystem />
      <Pricing />

      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16 text-left">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/icon.png"
                  alt="OmniRoute Icon"
                  width={36}
                  height={36}
                  className="rounded-lg"
                />
                <div className="text-2xl font-bold tracking-tighter text-indigo-900">
                  Omni<span className="text-indigo-600">Route</span>
                </div>
              </div>
              <p className="text-slate-500 max-w-sm">
                The intelligent layer for group travel planning. Built for modern explorers and professional nomads.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
              <a href="mailto:support@omniroute.eu" className="text-slate-500 hover:text-indigo-600 transition-colors">
                support@omniroute.eu
              </a>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
              <ul className="space-y-4 text-slate-500">
                <li><a href="/privacy" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:text-indigo-600 transition-colors">GDPR Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-50 text-center text-slate-400 text-xs font-medium uppercase tracking-[0.2em]">
            <p>© 2026 OmniRoute Intelligence Europe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
