import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
    category: "Full Stack",
  },
  {
    title: "AI Dashboard",
    description: "Interactive dashboard for AI/ML model monitoring with real-time metrics, data visualization, and automated alerts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    tags: ["Next.js", "Python", "TensorFlow", "D3.js"],
    github: "#",
    live: "#",
    category: "AI/ML",
  },
  {
    title: "Social Media App",
    description: "Mobile-first social platform with real-time messaging, stories, and content sharing capabilities.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
    tags: ["React Native", "Firebase", "Node.js"],
    github: "#",
    live: "#",
    category: "Mobile",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with Kanban boards, time tracking, and team analytics.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800",
    tags: ["Vue.js", "Express", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
    category: "Full Stack",
  },
  {
    title: "Crypto Portfolio Tracker",
    description: "Real-time cryptocurrency portfolio management with price alerts, historical charts, and tax reporting.",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800",
    tags: ["React", "GraphQL", "Redis", "WebSocket"],
    github: "#",
    live: "#",
    category: "FinTech",
  },
  {
    title: "Health & Fitness App",
    description: "Personal fitness companion with workout tracking, nutrition planning, and progress analytics.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    tags: ["Flutter", "Firebase", "TensorFlow Lite"],
    github: "#",
    live: "#",
    category: "Mobile",
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management system with virtual tours, mortgage calculator, and agent portal.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Three.js"],
    github: "#",
    live: "#",
    category: "Full Stack",
  },
  {
    title: "Learning Management System",
    description: "Educational platform with course creation, video streaming, quizzes, and certification.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
    tags: ["React", "Django", "AWS", "FFmpeg"],
    github: "#",
    live: "#",
    category: "EdTech",
  },
];

const categories = ["All", "Full Stack", "AI/ML", "Mobile", "FinTech", "EdTech"];

const ProjectCard = ({ project, index }: { project: typeof allProjects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="card-glass overflow-hidden">
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
              {project.category}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg glass text-foreground hover:text-primary"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href={project.live}
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg glass text-foreground hover:text-primary"
            >
              <ExternalLink size={18} />
            </motion.a>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AllProjects = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <h1 className="section-title text-4xl md:text-5xl lg:text-6xl mb-4">
              All Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive showcase of my work across various technologies and industries.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* Download Resume CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <a
              href="/resume.pdf"
              download
              className="hero-button inline-flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

import React from "react";

export default AllProjects;
