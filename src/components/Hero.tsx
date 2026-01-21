"use client";

import { motion } from "framer-motion";
import { personalDetails } from "@/lib/data";
import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">Hello, I&apos;m</h2>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                        {personalDetails.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        {personalDetails.role}
                    </p>
                    <p className="text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Motivated Full Stack Developer with strong fundamentals in React, Node.js, and scaling web applications.
                        Passionate about building impactful software that solves real-world problems.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all flex items-center gap-2"
                        >
                            View Projects <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                            href="/resume.pdf" // Placeholder for resume
                            className="px-8 py-3 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-all flex items-center gap-2"
                        >
                            Download Resume <Download className="w-4 h-4" />
                        </a>
                        <Link
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium transition-all flex items-center gap-2"
                        >
                            Contact Me <Mail className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="mt-16 flex gap-6 justify-center">
                        {personalDetails.socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
                            >
                                <social.icon className="w-8 h-8" />
                            </a>
                        ))}
                    </div>
                </motion.div>
                {/* Astronaut Image - High Fidelity Blend */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative flex justify-center items-center"
                >
                    {/* Glowing backdrop for depth */}
                    <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[80px] -z-10 animate-pulse" />
                    <div className="absolute w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[60px] -z-10 top-10 right-10" />

                    <div className="astronaut-float relative z-10 w-full max-w-[600px] mix-blend-lighten filter contrast-125 brightness-110">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/astronaut_v2.png"
                            alt="Astronaut floating in space"
                            className="w-full h-auto drop-shadow-2xl opacity-90"
                            style={{ maskImage: 'radial-gradient(ellipse at center, black 70%, transparent 100%)' }} // Subtle feathering edges just in case
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
