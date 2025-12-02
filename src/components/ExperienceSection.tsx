import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description: "Leading development of scalable web applications, mentoring junior developers, and architecting cloud solutions.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description: "Built and maintained multiple client projects, implemented CI/CD pipelines, and optimized application performance.",
    technologies: ["Vue.js", "Python", "Docker", "MongoDB"],
  },
  {
    title: "Frontend Developer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description: "Developed responsive web interfaces, collaborated with designers, and implemented modern UI/UX practices.",
    technologies: ["React", "TypeScript", "Sass", "GraphQL"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative" ref={ref}>
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "hsl(270 60% 60%)", filter: "blur(100px)" }}
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">My Journey</span>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
            Work Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-0 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-accent to-transparent -translate-x-1/2"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.2 }}
                className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 glow z-10"
              />

              {/* Content card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="card-glass">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Briefcase size={16} />
                    <span>{exp.company}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
