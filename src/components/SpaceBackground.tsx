"use client";

import { useEffect, useRef } from "react";

export default function SpaceBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let stars: { x: number; y: number; radius: number; speed: number; opacity: number; color: string }[] = [];
        let shootingStars: { x: number; y: number; length: number; speed: number; opacity: number; angle: number }[] = [];
        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        };

        const initStars = () => {
            const starCount = Math.floor((width * height) / 2000); // Dense starfield
            stars = Array.from({ length: starCount }, () => {
                const depth = Math.random();
                return {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1.5 * depth, // Smaller stars for depth
                    speed: (Math.random() * 0.1 + 0.02) * depth, // Parallax speed
                    opacity: Math.random() * 0.8 + 0.2,
                    color: Math.random() > 0.9 ? '#a0c4ff' : '#ffffff' // Occasional blue stars
                };
            });
        };

        const createShootingStar = () => {
            if (Math.random() < 0.02 && shootingStars.length < 3) { // Rare spawn
                shootingStars.push({
                    x: Math.random() * width,
                    y: Math.random() * (height / 2),
                    length: Math.random() * 80 + 20,
                    speed: Math.random() * 10 + 5,
                    opacity: 1,
                    angle: Math.PI / 4 // 45 degrees
                });
            }
        };

        const drawBlackhole = (ctx: CanvasRenderingContext2D) => {
            // Optional: Canvas based glow if needed, but CSS handles the main blackhole
        };

        const animate = () => {
            ctx.fillStyle = "#030014"; // Deep space blue-black
            ctx.fillRect(0, 0, width, height);

            // Stars
            stars.forEach((star) => {
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = height;
                    star.x = Math.random() * width;
                }

                // Twinkle
                if (Math.random() > 0.99) {
                    star.opacity = Math.random();
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = star.color;
                ctx.globalAlpha = star.opacity;
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            // Shooting Stars
            createShootingStar();
            shootingStars.forEach((star, index) => {
                star.x -= star.speed;
                star.y += star.speed;
                star.opacity -= 0.02;

                if (star.opacity <= 0 || star.x < 0 || star.y > height) {
                    shootingStars.splice(index, 1);
                    return;
                }

                const tailX = star.x + Math.cos(star.angle) * star.length;
                const tailY = star.y - Math.sin(star.angle) * star.length;

                const gradient = ctx.createLinearGradient(star.x, star.y, tailX, tailY);
                gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
                gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

                ctx.beginPath();
                ctx.moveTo(star.x, star.y);
                ctx.lineTo(tailX, tailY);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        resize();
        animate();

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-0 pointer-events-none"
            />
            {/* Blackhole / Nebula Gradient Overlay */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),rgba(15,23,42,0.6))] mix-blend-screen" />
            <div className="fixed top-[-50%] left-[-20%] w-[800px] h-[800px] rounded-full bg-purple-900/20 blur-[120px] animate-pulse pointer-events-none mix-blend-screen" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900/20 blur-[100px] animate-pulse delay-1000 pointer-events-none mix-blend-screen" />
        </>
    );
}
