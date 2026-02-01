"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white py-32">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-slate-900 mb-8 border-b pb-4">Privacy Policy for OmniRoute</h1>

                    <section className="space-y-8 text-slate-600 leading-relaxed">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">1. Introduction</h2>
                            <p>
                                OmniRoute ("we", "our", or "us") is committed to protecting your privacy.
                                This Privacy Policy explains how we collect, use, and safeguard your information
                                when you visit our website <span className="font-semibold">omniroute.eu</span>.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">2. Data Collection</h2>
                            <p>
                                We collect information that you voluntarily provide to us when joining our waitlist,
                                such as your name and email address.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">3. GDPR Compliance</h2>
                            <p>
                                For users in the European Union, we process personal data in accordance with the
                                General Data Protection Regulation (GDPR). You have the right to access, rectify,
                                or delete your personal data at any time.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">4. Data Usage</h2>
                            <p>
                                Your data is used solely to provide updates about the OmniRoute launch and to improve
                                our AI-powered travel planning services. We do not sell your personal information to third parties.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">5. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                                <a href="mailto:support@omniroute.eu" className="text-indigo-600 hover:underline ml-1">
                                    support@omniroute.eu
                                </a>.
                            </p>
                        </div>
                    </section>

                    <div className="mt-16 pt-8 border-t">
                        <a href="/" className="text-indigo-600 font-bold hover:underline flex items-center gap-2">
                            ← Back to Home
                        </a>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
