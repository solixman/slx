import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Download, Award, BookOpen, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skillsData = {
  frontend: {
    title: "Frontend Development",
    icon: "🎨",
    description: "Building responsive, accessible, and performant user interfaces",
    skills: [
      { name: "React / React Native", level: 95, years: 5, projects: 40 },
      { name: "TypeScript", level: 92, years: 4, projects: 35 },
      { name: "Next.js", level: 90, years: 3, projects: 20 },
      { name: "Tailwind CSS", level: 95, years: 4, projects: 45 },
      { name: "Vue.js", level: 78, years: 2, projects: 8 },
      { name: "SCSS/SASS", level: 85, years: 5, projects: 30 },
      { name: "Framer Motion", level: 88, years: 3, projects: 25 },
      { name: "Redux / Zustand", level: 90, years: 4, projects: 28 },
    ],
  },
  backend: {
    title: "Backend Development",
    icon: "⚙️",
    description: "Designing scalable APIs and robust server-side solutions",
    skills: [
      { name: "Node.js / Express", level: 92, years: 5, projects: 38 },
      { name: "Python / Django", level: 85, years: 3, projects: 15 },
      { name: "PostgreSQL", level: 90, years: 4, projects: 30 },
      { name: "MongoDB", level: 85, years: 4, projects: 25 },
      { name: "GraphQL", level: 82, years: 3, projects: 18 },
      { name: "REST API Design", level: 95, years: 5, projects: 50 },
      { name: "Redis", level: 78, years: 2, projects: 12 },
      { name: "Prisma / Drizzle", level: 85, years: 2, projects: 15 },
    ],
  },
  devops: {
    title: "DevOps & Cloud",
    icon: "☁️",
    description: "Deploying and maintaining cloud infrastructure at scale",
    skills: [
      { name: "Docker", level: 88, years: 4, projects: 35 },
      { name: "AWS (EC2, S3, Lambda)", level: 82, years: 3, projects: 20 },
      { name: "CI/CD (GitHub Actions)", level: 85, years: 4, projects: 40 },
      { name: "Kubernetes", level: 70, years: 2, projects: 8 },
      { name: "Vercel / Netlify", level: 92, years: 4, projects: 45 },
      { name: "Linux / Shell", level: 80, years: 5, projects: 50 },
      { name: "Nginx", level: 75, years: 3, projects: 15 },
      { name: "Terraform", level: 65, years: 1, projects: 5 },
    ],
  },
  tools: {
    title: "Tools & Practices",
    icon: "🛠️",
    description: "Professional development tools and best practices",
    skills: [
      { name: "Git / GitHub", level: 95, years: 6, projects: 100 },
      { name: "Figma", level: 80, years: 3, projects: 30 },
      { name: "Jest / Testing Library", level: 85, years: 4, projects: 35 },
      { name: "Agile / Scrum", level: 90, years: 5, projects: 50 },
      { name: "VS Code / Vim", level: 95, years: 6, projects: 100 },
      { name: "Postman / Insomnia", level: 90, years: 5, projects: 45 },
      { name: "Webpack / Vite", level: 85, years: 4, projects: 40 },
      { name: "Storybook", level: 78, years: 2, projects: 15 },
    ],
  },
};

const certifications = [
  { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: 2023 },
  { name: "Meta Front-End Developer", issuer: "Meta (Coursera)", year: 2022 },
  { name: "Google Cloud Professional", issuer: "Google Cloud", year: 2023 },
  { name: "MongoDB Developer Associate", issuer: "MongoDB University", year: 2022 },
];

const SkillBar = ({ skill, index }: { skill: { name: string; level: number; years: number; projects: number }; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.05 }}
      className="glass rounded-xl p-4 hover:border-primary/30 transition-colors"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-primary font-bold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden mb-3">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.05 }}
          className="h-full rounded-full"
          style={{ background: "var(--gradient-primary)" }}
        />
      </div>
      <div className="flex gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {skill.years} years
        </span>
        <span className="flex items-center gap-1">
          <Target size={12} />
          {skill.projects} projects
        </span>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, data, index }: { category: string; data: typeof skillsData.frontend; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="text-4xl">{data.icon}</span>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{data.title}</h2>
          <p className="text-muted-foreground">{data.description}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {data.skills.map((skill, skillIndex) => (
          <SkillBar key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.section>
  );
};

const SkillsReport = () => {
  const totalYears = 6;
  const totalProjects = 50;
  const totalTechnologies = Object.values(skillsData).reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
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
              Skills Report
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A detailed breakdown of my technical expertise, experience, and proficiency levels.
            </p>
            <a
              href="/resume.pdf"
              download
              className="hero-button inline-flex items-center gap-2"
            >
              <Download size={20} />
              Download Full Resume
            </a>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-4 mb-16"
          >
            {[
              { label: "Years Experience", value: totalYears },
              { label: "Projects Completed", value: `${totalProjects}+` },
              { label: "Technologies", value: totalTechnologies },
            ].map((stat) => (
              <div key={stat.label} className="card-glass text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Skills Categories */}
          {Object.entries(skillsData).map(([key, data], index) => (
            <SkillCategory key={key} category={key} data={data} index={index} />
          ))}

          {/* Certifications */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <Award size={32} className="text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-glass flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <BookOpen size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="card-glass inline-block">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground mb-4">
                Let's discuss how I can contribute to your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#contact" className="hero-button">
                  Get In Touch
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="hero-button-outline inline-flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SkillsReport;
