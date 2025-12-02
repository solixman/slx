import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 88 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Vue.js", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 92 },
    { name: "Python", level: 85 },
    { name: "PostgreSQL", level: 88 },
    { name: "MongoDB", level: 82 },
    { name: "GraphQL", level: 78 },
  ],
  tools: [
    { name: "Git", level: 95 },
    { name: "Docker", level: 85 },
    { name: "AWS", level: 80 },
    { name: "CI/CD", level: 82 },
    { name: "Figma", level: 75 },
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
          <p className="text-muted-foreground mb-6">And many more...</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Redux", "Jest", "Prisma", "Redis", "Kubernetes", "Vite", "Sass", "Firebase"].map(
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
