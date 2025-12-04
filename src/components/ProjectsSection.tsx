import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ResQSX",
    description: "A smart ambulance dispatching platform that allows emergency operators to manage incidents, track ambulances in real time, and make fast, data-driven decisions through an interactive map interface.",
    tags: ["TypeScript", "React", "JSON Server", "ChadCN/UI", "UML", "Jira"],
    image: "gradient-1",
    github: "https://github.com/solixman/resQSX",
    live: "#",
  },
  {
    id: 2,
    title: "CareFlow",
    description: "A clinic management web app that helps doctors, patients, and administrators streamline appointments, schedules, and patient records with a clean, efficient interface. I had to find a solution to automatic appointments conflicts I'll be happy to discuss how I did it if you'd like to contact me. ",
    tags: ["Express", "Node.js", "TypeScript", "React", "ChadCN/UI", "UML", "Jira"],
    image: "gradient-3",
    github: "https://github.com/solixman/careFlow",
    live: "#",
  },
  {
    id: 3,
    title: "TicTacToe",
    description: "A customizable and responsive Tic Tac Toe game that lets users define grid size and winning conditions, offering a fresh and challenging twist to the classic game. Note that this project was to show my logical thinking not my design skills as it was with a very limited time",
    tags: ["JavaScript (Vanilla)"],
    image: "gradient-2",
    github: "https://github.com/solixman/tictactoe",
    live: "#",
  },

  {
    id: 4,
    title: "Borne-de-Commande",
    description: "A self-ordering terminal interface built with Flutter, enabling users to browse menus, customize orders, and make seamless purchases in-store.",
    tags: ["AI-driven Development","During internship", "Flutter"],
    image: "gradient-4",
    github: "https://github.com/solixman/Borne_de_comande",
    live: "#",
  },
];


const gradients = {
  "gradient-1": "linear-gradient(135deg, hsl(187 100% 50% / 0.3) 0%, hsl(270 60% 60% / 0.3) 100%)",
  "gradient-2": "linear-gradient(135deg, hsl(270 60% 60% / 0.3) 0%, hsl(330 80% 60% / 0.3) 100%)",
  "gradient-3": "linear-gradient(135deg, hsl(150 60% 50% / 0.3) 0%, hsl(187 100% 50% / 0.3) 100%)",
  "gradient-4": "linear-gradient(135deg, hsl(40 90% 60% / 0.3) 0%, hsl(20 80% 55% / 0.3) 100%)",
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl"
    >
      {/* Project visual */}
      <div
        className="aspect-video relative overflow-hidden"
        style={{ background: gradients[project.image as keyof typeof gradients] }}
      >
        {/* Animated grid overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(90deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px),
                             linear-gradient(hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
          animate={{ backgroundPosition: isHovered ? "30px 30px" : "0px 0px" }}
          transition={{ duration: 0.5 }}
        />

        {/* Floating code blocks decoration */}
        <motion.div
          className="absolute top-4 left-4 glass px-3 py-2 rounded-lg text-xs font-mono"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {`<${project.tags[0]} />`}
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={project.github}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
            className="p-3 glass rounded-xl text-foreground hover:text-primary transition-colors"
          >
            <Github size={24} />
          </motion.a>
          
        </motion.div>
      </div>

      {/* Project info */}
      <div className="p-6 bg-card">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">My Work</span>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for building
            exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/projects"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Projects <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
