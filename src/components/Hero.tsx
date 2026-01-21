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
            </div>
        </section>
    );
}
