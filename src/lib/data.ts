import { Github, Linkedin, BookOpen, Code2, Terminal, Cpu, Layout, Server, Database, Smartphone } from "lucide-react";

export const personalDetails = {
    name: "Veparala Devendra",
    role: "Full Stack Developer",
    tagline: "Building scalable, user-centric web & mobile applications.",
    email: "Vdevendra746@gmail.com",
    phone: "+91 9247897027",
    location: "Proddatur, Andhra Pradesh, India",
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/VEPARALADEVENDRA",
            icon: Github,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/veparala-devendra-41034226a",
            icon: Linkedin,
        },
        {
            name: "IEEE Profile",
            url: "https://ieeexplore.ieee.org/author/968720097337954",
            icon: BookOpen,
        },
    ],
};

export const skills = {
    frontend: [
        { name: "HTML/CSS", icon: Layout },
        { name: "React.js", icon: Code2 },
        { name: "Next.js", icon: Code2 },
        { name: "Angular", icon: Code2 },
        { name: "Tailwind CSS", icon: Layout },
        { name: "Bootstrap", icon: Layout },
    ],
    backend: [
        { name: "Node.js", icon: Server },
        { name: "Express.js", icon: Server },
        { name: "Spring Boot", icon: Server },
        { name: "FastAPI", icon: Server },
        { name: "PHP", icon: Server },
        { name: "Django", icon: Server },
    ],
    database: [
        { name: "MongoDB", icon: Database },
        { name: "SQL", icon: Database },
        { name: "Firebase", icon: Database },
    ],
    mobile: [
        { name: "Flutter", icon: Smartphone },
        { name: "Android (Kotlin)", icon: Smartphone },
    ],
    ml: [
        { name: "Random Forest", icon: Cpu },
        { name: "RNN / LSTM", icon: Cpu },
        { name: "NLP", icon: Cpu },
    ],
    tools: [
        { name: "Git & GitHub", icon: Terminal },
        { name: "VS Code", icon: Code2 },
        { name: "Android Studio", icon: Smartphone },
    ],
};

export const experience = [
    {
        role: "Trainee – MEAN Full Stack Developer",
        company: "Dr. Reddy’s Foundation – GROW Tech Program",
        location: "June 2025 – Present",
        description: [
            "Specializing in MongoDB, Express.js, Angular, and Node.js.",
            "Building production-ready applications through Agile team collaboration.",
        ],
    },
    {
        role: "Trainee – Advanced Full Stack Developer",
        company: "VCodeZ IT Services",
        location: "Chennai",
        description: [
            "Developed responsive websites using Bootstrap.",
            "Built dynamic applications using PHP & Django.",
            "Created React interfaces and Flutter cross-platform apps.",
        ],
    },
    {
        role: "Trainee – Full Stack Developer",
        company: "NSIC – Government Program",
        location: "Chennai | Nov 2024 – Dec 2024",
        description: [
            "Built responsive web applications using HTML, CSS, JavaScript, and Node.js.",
            "Designed interactive UI components and handled frontend-backend integration.",
        ],
    },
];

export const education = [
    {
        degree: "B.Tech in Computer Science & Engineering",
        institution: "Kalasalingam University",
        year: "July 2021 – May 2025",
        score: "80%",
    },
];

export const projects = [
    {
        title: "Smart Building Management (Dwell)",
        tech: ["Firebase", "Kotlin", "Android Studio"],
        description:
            "A smart residential building management application featuring three user interfaces: Residents, Building Owners, and Security. Improves living experience with secure access, efficient communication, and centralized management.",
        link: "#",
        github: "#",
    },
    {
        title: "Sentiment Analysis Using NLP",
        tech: ["Python", "Machine Learning", "NLP"],
        description:
            "Analyzed large textual datasets from social media and news sites using Random Forest, RNN, and LSTM algorithms to classify sentiment and extract meaningful insights.",
        link: "#",
        github: "#",
    },
];

export const awards = [
    {
        title: "Project published in IEEE Research Conference",
        issuer: "IEEE",
        date: "2024",
    },
    {
        title: "Certified Data Science Professional",
        issuer: "Oracle Cloud Infrastructure",
        date: "2023",
    },
    {
        title: "Single Page Web Application using AngularJS",
        issuer: "Coursera - Johns Hopkins University",
        date: "2023",
    },
];
