import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const allProjects = [
  {
    title: "ResQSX",
    description: "A smart ambulance dispatch and emergency management system featuring real-time maps, incident tracking, and decision support tools for operators.",
    image: "/src/assets/ResQSX.png",
    tags: ["TypeScript", "React", "JSON Server", "ChadCN/UI", "UML", "Jira"],
    github: "https://github.com/solixman/resQSX",

    live: "#",
    category: "Backend",
  },
  {

    title: "CareFlow",
    description: "A clinic and patient management platform that helps doctors, patients, and administrators manage appointments, schedules, and records efficiently.",
    image: "/src/assets/careFlow.png",
    tags: ["Express", "Node.js", "TypeScript", "React", "ChadCN/UI", "UML", "Jira"],
    github: "https://github.com/solixman/careFlow",
    live: "#",
    category: "Full Stack",
  },
  {
    title: "CodeFolio",
    description: "A full-stack personal portfolio system where users can manage and update their projects through an integrated admin dashboard.",
    image: "/src/assets/codeFolio.png",
    tags: ["Qraphql","Express", "Node.js", "TypeScript", "React", "ChadCN/UI", "UML", "Jira"],
    github: "https://github.com/solixman/codeFolio",
    live: "#",
    category: "Full Stack",
  },
  {
    title: "SLX-Auth",
    description: "A modular authentication package for Node.js and Express providing secure, reusable REST APIs for modern web applications.",
    image: "/src/assets/SLX-Auth.png",
    tags: ["Express", "Node.js", "JavaScript"],
    github: "https://github.com/solixman/SLX-auth",
    live: "#",
    category: "Full Stack",
  },
  {
    title: "FinTrack",
    description: "A FinTech web app that allows users to monitor expenses, set savings goals, and visualize financial trends through interactive dashboards.",
    image: "/src/assets/FinTrack.png",
    tags: ["Express", "Node.js", "JavaScript", "EJS (SSR)", "UML", "Jira"],
    github: "https://github.com/solixman/FinTrack",

    live: "#",
    category: "FinTech",
  },
  {

    title: "TicTacToe",
    description: "A flexible, customizable version of Tic Tac Toe that supports dynamic grid sizes and winning conditions for a modern, engaging experience.",
    image: "/src/assets/tictactoe.png",
    tags: ["JavaScript (Vanilla)"],
    github: "https://github.com/solixman/tictactoe",
    live: "#",
    category: "EdTech",
  },
  {
    title: "NotesDeFrais",
    description: "An expense management system that simplifies reimbursement processes, travel budgeting, and financial reporting for organizations.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
    tags: ["AI-driven Development", "Vue.js", "Laravel"],
    github: "https://github.com/solixman/NotesDeFrais",
    live: "#",
    category: "AI/ML",
  },
  {
    title: "Borne-de-Commande",
    description: "A self-ordering terminal app built in Flutter, allowing users to browse products, place orders, and make payments seamlessly.",
    image: "/src/assets/Borne.png",
    tags: ["AI-driven Development", "Flutter"],
    github: "https://github.com/solixman/Borne_de_comande",
    live: "#",
    category: "Mobile",
  },
  {

    title: "Solixmen’z",
    description: "An e-commerce store for luxury fashion products with cart management, checkout system, and admin tools for order tracking.",
    image: "/src/assets/Solixmen'z.png",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/solixman/Solixmen-z",
    live: "#",
    category: "Full Stack",
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

          {/* Contact Me CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link
              to="/#contact"
              className="hero-button inline-flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Contact Me
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProjects;
