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
    description: "Building responsive, interactive, and user-friendly interfaces",
    skills: [
      { name: "HTML, CSS, JavaScript", level: 95, years: 2, projects: "+20" },
      { name: "SSR", level: 90, years: 2, projects: "+10" },
      { name: "React", level: 70, years: "+1", projects: "+5" },
      { name: "TypeScript", level: 80, years: 1, projects: "+5" },
      { name: "UI Libraries (ShadCN/UI)", level: 85, years: 1, projects: "2" },
    ],
    notes: "don't let the fact that my primary focus is backend and full-stack logic fool you, I maintain a working proficiency in frontend technologies like React, Server Side Rendering, UI libraries(ChadCN/UI) and more. I aim to strengthen my frontend expertise in the coming months and years by exploring modern front end focus technologies like Next.js and improving component design and interactivity.",
  },
  backend: {
    title: "Backend Development",
    icon: "⚙️",
    description: "Designing scalable APIs and robust server-side solutions",
    skills: [
      { name: "PHP & Laravel", level: 90, years: 2, projects: "+15" },
      { name: "Node.js / Express", level: 88, years: 2, projects: "+10" },
      { name: "GraphQL", level: 85, years: 1, projects: "+5" },
      { name: "PostgreSQL / MySQL", level: 85, years: 2, projects: "+10" },
      { name: "MongoDB", level: 85, years: 1, projects: "+5" },
    ],
    notes: "Backend development is where I'm most confident. I enjoy designing clean, scalable architectures and implementing efficient logic that keeps applications reliable and fast. I've built complete systems, found smart solutinos to real problems and optimized applications, using php&laravel and now focused on Node.js, managing everything from authentication and APIs to performance optimization and database structure. I focus on writing maintainable, well-documented code that supports long-term growth. briefly it just makes me happy working on backend",
  },

  devops: {
    title: "DevOps & Deployment",
    icon: "☁️",
    description: "Deploying and managing cloud infrastructure",
    skills: [
      { name: "AWS", level: 60, years: 1, projects: "+3" },
      { name: "Vercel", level: 88, years: 2, projects: "+15" },
      { name: "Docker", level: 55, years: 1, projects: "+2" },
    ],
    notes: "I do have a somewhat experience in deploying and managing cloud infrastructure using AWS services like S3, EC2, and VPC to handle storage, hosting, and networking efficiently. I Find it very Interesting and with time I am Willing to learn it to the engineering level",
  },
  tools: {
    title: "Tools & Practices",
    icon: "🛠️",
    description: "Professional development tools and best practices",
    skills: [
      { name: "Git / GitHub", level: 90, years: 2, projects: "+20" },
      { name: "Jira", level: 90, years: 1, projects: "+10" },
      { name: "UML", level: 90, years: 2, projects: "+15" },
      { name: "REST/GraphQL APIs & MVC", level: 90, years: 2, projects: "+15" },
      { name: "Problem-solving & Debugging", level: 95, years: 2, projects: "+20" },
      { name: "AI-Driven Development", level: 80, years: 1, projects: "+10" },
    ],
    notes: "I see a lot of new learners saying 'you don't have to do that' or 'that's not necessery to learn' but I say that professional development tools and best practices centered around clean code, efficient workflows, version control, and automation are all aiming to improve productivity and long-term project quality. that's why with every new technologie or project I try to learn and use them as much as possible",
  },
  learning: {
    title: "Currently Learning",
    icon: "📚",
    description: "Technologies I'm actively improving and exploring",
    skills: [
      { name: "Next.js", level: 50, years: 0, projects: "2" },
      { name: "Advanced TypeScript", level: 60, years: 1, projects: "5" },
      { name: "Docker & CI/CD", level: 45, years: 0, projects: "3" },
      { name: "AI Tools & Integration", level: 55, years: 0, projects: "4" },
    ],
    notes: "As a web developer you're not done learning even after you retire, with that said, I'm currently focusing on refining my backend and DevOps skills — exploring Docker, AWS, and CI/CD — while diving deeper into TypeScript and preparing to learn Next.js. I'm also experimenting with AI tools to bring smarter, data-driven functionality into my future projects.",
  },
   softSkills: {
    title: "Soft Skills",
    icon: "🤝",
    description: "Interpersonal and professional skills that drive collaboration and success",
    skills: [
      { name: "Fast Learning and understanding", level: 95, years: 2, projects: "more than just" },
      { name: "Problem-Solving Mindset", level: 95, years: 2, projects: "more than just" },
      { name: "Team Collaboration", level: 95, years: 2, projects: "+10" },
      { name: "Leadership & Influence", level: 85, years: 2, projects: "more than just" },
      { name: "Interpersonal skills", level: 85, years: 2, projects: "more than just" },
      { name: "Time & Task Management", level: 85, years: 2, projects: "more than just" },
      { name: "Professionalism & Reliability", level: 95, years: 2, projects: "more than just" },
      { name: "Adaptability & Continuous Learning", level: 95, years: 2, projects: "more than just" },
      { name: "Stress management", level: 85, years: 2, projects: "more than just" },
    ],
notes: "Throughout my life, I’ve always been known as the person who quickly understands complex ideas without needing extra explanation. Many peers often turned to me for clarification, which naturally strengthened my ability to communicate clearly, teach others, and take responsibility in group settings. Over time, this helped me develop strong leadership, adaptability, and influence within teams. I’ve learned how to remain calm under pressure, manage time effectively, and maintain a balance between performance, collaboration, and continuous learning. These experiences shaped me into someone who leads with understanding, solves problems efficiently, and inspires others to grow alongside me.",
  },
  
};

const certifications = [
  { name: "EF SET English Certificate (C2 Proficient)", issuer: "EF Education First", year: 2024, link: "https://cert.efset.org/en/MLz1mP" },
  { name: "Full-Stack Developer", issuer: "Youcode", year: 2026, link: "not available" },
];

const SkillBar = ({ skill, index }: { skill: { name: string; level: number; years: number|string; projects: number|string }; index: number }) => {
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
      {/* Notes/Report Text Placeholder */}
      {data.notes && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-6 glass rounded-xl p-6 border-l-4 border-primary/50"
        >
          <h3 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Notes & Insights</h3>
          <p className="text-muted-foreground italic">{data.notes}</p>
        </motion.div>
      )}
    </motion.section>
  );
};

const SkillsReport = () => {
  const totalYears = 2;
  const totalProjects = 20;
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
            <div className="grid md:grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <motion.a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card-glass flex items-center gap-4 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <BookOpen size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">View Certificate →</span>
                </motion.a>
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