"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Helper function to render a skill category */}
                    {Object.entries(skills).map(([category, items], catIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/50"
                        >
                            <h3 className="text-xl font-bold mb-6 capitalize text-center border-b pb-2">
                                {category.replace("ml", "Machine Learning")}
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {items.map((skill, index) => (
                                    <motion.li
                                        key={index}
                                        className="list-none"
                                        variants={fadeInAnimationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: false, amount: 0.2 }}
                                        custom={index}
                                    >
                                        <div className="flex flex-col items-center gap-2 p-2 min-w-[80px]">
                                            <skill.icon className="w-8 h-8 text-primary/80" />
                                            <span className="text-sm font-medium text-center">{skill.name}</span>
                                        </div>
                                    </motion.li>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
