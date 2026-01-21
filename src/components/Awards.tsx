"use client";

import { motion } from "framer-motion";
import { awards } from "@/lib/data";
import { Award } from "lucide-react";

export default function Awards() {
    return (
        <section id="awards" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Certifications</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
                        >
                            <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-1">{award.title}</h3>
                                <p className="text-muted-foreground text-sm">{award.issuer}</p>
                                <p className="text-muted-foreground/60 text-xs mt-1">{award.date}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
