"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-1/2" />

                            <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                {/* Timeline Dot (Desktop) */}
                                <div className="hidden md:block absolute left-[50%] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                                <div className="w-full md:w-[calc(50%-2rem)]">
                                    <div className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative">
                                        {/* Mobile Dot */}
                                        <div className="md:hidden absolute -left-10 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                                        <div className="flex items-center gap-2 mb-2 text-primary">
                                            <Briefcase className="w-4 h-4" />
                                            <span className="text-sm font-medium">{exp.location}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                        <h4 className="text-muted-foreground font-medium mb-4">{exp.company}</h4>
                                        <ul className="list-disc list-inside space-y-2 text-muted-foreground/90">
                                            {exp.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full md:w-[calc(50%-2rem)]" /> {/* Spacer */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
