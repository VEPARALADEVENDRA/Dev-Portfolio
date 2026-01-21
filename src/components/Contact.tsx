"use client";

import { motion } from "framer-motion";
import { personalDetails } from "@/lib/data";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold mb-6">Let&apos;s Talk</h3>
                        <p className="text-muted-foreground text-lg mb-8">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Email Me</h4>
                                    <a href={`mailto:${personalDetails.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {personalDetails.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Call Me</h4>
                                    <a href={`tel:${personalDetails.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {personalDetails.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Location</h4>
                                    <p className="text-muted-foreground">
                                        {personalDetails.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="bg-card border rounded-xl p-8 shadow-sm"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-md bg-background border ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-input transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-md bg-background border ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-input transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-md bg-background border ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:border-input transition-all resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                            >
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
