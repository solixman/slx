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
    description: "Ambulance dispatching solution with real-time fleet management, emergency incident tracking, and interactive map visualization for regulation operators to manage interventions efficiently.",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800",
    tags: ["TypeScript", "React", "JSON Server", "Shadcn/UI", "UML", "Jira"],
    github: "#",
    live: "#",
    category: "Healthcare",
  },
  {
    title: "CareFlow",
    description: "Medical appointment and record management system for clinics. Enables patients to book online, doctors to manage calendars, and staff to supervise clinical operations seamlessly.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    tags: ["Node.js/Express", "TypeScript", "React", "Shadcn/UI", "UML", "Jira"],
    github: "#",
    live: "#",
    category: "Healthcare",
  },
  {
    title: "CodeFolio",
    description: "Full-stack portfolio management platform with a comprehensive admin dashboard, allowing developers to dynamically manage and customize their portfolio content and projects.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    tags: ["Node.js/Express", "TypeScript", "React", "Shadcn/UI", "UML", "Jira"],
    github: "#",
    live: "#",
    category: "Full Stack",
  },
  {
    title: "SLX-Auth",
    description: "Reusable authentication package built with Express and Node.js. Provides secure REST API endpoints for user registration, login, and session management across multiple projects.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    tags: ["Node.js/Express", "JavaScript", "REST APIs"],
    github: "#",
    live: "#",
    category: "Backend",
  },
  {
    title: "FinTrack",
    description: "Personal budget management application for tracking expenses, setting financial goals, and visualizing financial data with interactive charts and comprehensive reports.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
    tags: ["Node.js/Express", "JavaScript", "EJS (SSR)", "UML", "Jira"],
    github: "#",
    live: "#",
    category: "FinTech",
  },
  {
    title: "TicTacToe Pro",
    description: "Dynamic and scalable Tic Tac Toe game with customizable grid sizes (n×n) and adjustable win conditions (k alignments). Features responsive design and engaging user experience.",
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800",
    tags: ["JavaScript Vanilla", "CSS", "HTML"],
    github: "#",
    live: "#",
    category: "Games",
  },
  {
    title: "NotesDeFrais",
    description: "Expense management system for companies to track paid/unpaid work travel expenses, manage reimbursements, and handle travel event budgets efficiently.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    tags: ["AI Driven Dev", "Vue.js", "Laravel"],
    github: "#",
    live: "#",
    category: "Enterprise",
  },
  {
    title: "Borne de Commande",
    description: "Self-ordering terminal frontend application where customers can browse menus, customize orders, and complete purchases through an intuitive touch-friendly interface.",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800",
    tags: ["AI Driven Dev", "Flutter"],
    github: "#",
    live: "#",
    category: "Mobile",
  },
  {
    title: "Solixmen'z",
    description: "Full-featured e-commerce store for classy clothing with product catalog, shopping cart, secure checkout, user accounts, and order management functionality.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    tags: ["E-commerce", "Full Stack"],
    github: "#",
    live: "#",
    category: "E-commerce",
  },
];

const categories = ["All", "Healthcare", "Full Stack", "Backend", "FinTech", "Games", "Enterprise", "Mobile", "E-commerce"];

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
