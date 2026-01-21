"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap, Heart, User } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <User className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-semibold">Who I Am</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            I am a final-year Computer Science student at Kalasalingam University and a passionate Full Stack Developer.
                            My journey involves building scalable web applications and exploring the depths of AI/ML.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            Currently, I am undergoing advanced training in MEAN and MERN stacks, working on real-world projects that demand
                            clean code and efficient backend logic. When I&apos;m not coding, I&apos;m likely running a marathon or sketching new ideas.
                        </p>
                    </motion.div>

                    {/* Education & Interests */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Education */}
                        <div className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <GraduationCap className="w-6 h-6 text-primary" />
                                <h3 className="text-xl font-semibold">Education</h3>
                            </div>
                            {education.map((edu, index) => (
                                <div key={index} className="space-y-2">
                                    <h4 className="font-medium text-lg">{edu.degree}</h4>
                                    <p className="text-muted-foreground">{edu.institution}</p>
                                    <div className="flex justify-between text-sm text-muted-foreground/80 mt-1">
                                        <span>{edu.year}</span>
                                        <span className="font-semibold text-primary">{edu.score}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Interests */}
                        <div className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <Heart className="w-6 h-6 text-primary" />
                                <h3 className="text-xl font-semibold">Interests</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Marathon Running", "Tech Learning", "Drawing & Craft", "Traveling"].map((interest) => (
                                    <span
                                        key={interest}
                                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
