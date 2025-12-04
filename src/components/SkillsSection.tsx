import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  frontend: [
    { name: "HTML/CSS/JS", level: 95 },
    { name: "SSR", level: 90 },
    { name: "React", level: 70 },
    { name: "TypeScript", level: 80 },
    { name: "UI Libraries (ShadCN)", level: 85 },
  ],
  backend: [
    { name: "PHP & Laravel", level: 90 },
    { name: "Node.js / Express", level: 88 },
    { name: "GraphQL", level: 85 },
    { name: "PostgreSQL / MySQL", level: 85 },
    { name: "MongoDB", level: 85 },
  ],
  tools: [
    { name: "Git / GitHub", level: 90 },
    { name: "Jira", level: 90 },
    { name: "UML", level: 90 },
    { name: "REST/GraphQL APIs & MVC", level: 90 },
    { name: "AWS", level: 60 },
    { name: "Docker", level: 55 },
  ],
  softSkills: [
    { name: "Fast Learning and understanding", level: 95},
      { name: "Problem-Solving Mindset", level: 95},
      { name: "Team Collaboration", level: 95},
      { name: "Leadership & Influence", level: 85},
      { name: "Interpersonal skills", level: 85},
      { name: "Time & Task Management", level: 85},
      { name: "Professionalism & Reliability", level: 95},
      { name: "Adaptability & Continuous Learning", level: 95},
      { name: "Stress management", level: 85},
  ],
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: "var(--gradient-primary)" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { title: "Frontend", skills: skills.frontend, icon: "🎨" },
    { title: "Backend", skills: skills.backend, icon: "⚙️" },
    { title: "Tools & DevOps", skills: skills.tools, icon: "🛠️" },
    { title: "Soft Skills", skills: skills.softSkills, icon: "🤝" },
  ];

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      {/* Animated background decoration */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "var(--gradient-primary)", filter: "blur(100px)" }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">My Skills</span>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="card-glass"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={categoryIndex * 0.2 + skillIndex * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech stack icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a href="/skills" className="text-muted-foreground ">See Full Skills Report</a>
          <div className="flex flex-wrap justify-center gap-4 mt-5 ">
            {["Next.js", "Vercel", "Eloquent", "Mongoose", "CI/CD", "AI Tools", "NestJS"].map(
              (tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 glass rounded-lg text-sm text-muted-foreground hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
