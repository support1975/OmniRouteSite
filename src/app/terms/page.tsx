"use client";

import { motion } from "framer-motion";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white py-32">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-slate-900 mb-8 border-b pb-4">Terms of Service</h1>

                    <section className="space-y-8 text-slate-600 leading-relaxed">
                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">1. Acceptance of Terms</h2>
                            <p>
                                By accessing <span className="font-semibold">omniroute.eu</span>, you agree to be bound by
                                these Terms of Service and all applicable laws and regulations.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">2. Service Description</h2>
                            <p>
                                OmniRoute provides an AI-powered travel planning platform. Currently, the service
                                is in a pre-launch phase, and users may join a waitlist for early access.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">3. Intellectual Property</h2>
                            <p>
                                All content, including the OmniRoute logo, design, and AI-generated route logic,
                                is the exclusive property of OmniRoute.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">4. Limitation of Liability</h2>
                            <p>
                                OmniRoute is provided "as is" without any warranties. We are not liable for any
                                disruptions or inaccuracies in travel planning data provided during the beta phase.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">5. Governing Law</h2>
                            <p>
                                These terms are governed by the laws of the European Union and the specific
                                jurisdiction of our primary operations.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-slate-800 mb-3">6. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify these terms at any time. Continued use of the site
                                constitutes acceptance of the updated terms.
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
