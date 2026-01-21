"use client";

import { personalDetails } from "@/lib/data";
import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="flex gap-6 mb-8">
                    {personalDetails.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                        >
                            <social.icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>

                <p className="flex items-center gap-2 text-muted-foreground text-sm text-center">
                    Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> by {personalDetails.name}
                </p>
                <p className="text-muted-foreground/60 text-xs mt-2">
                    © {new Date().getFullYear()} All rights reserved. Built with Next.js & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}
