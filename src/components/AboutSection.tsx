import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and exceptional user experience",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams across all time zones",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Staying current with the latest technologies and trends",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden glass p-8">
              {/* Code animation display */}
              <div className="bg-card rounded-xl p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, staggerChildren: 0.1 }}
                >
                  <p className="text-muted-foreground">
                    <span className="text-accent">const</span>{" "}
                    <span className="text-primary">Me</span> = {"{"}
                  </p>
                  <p className="pl-4 text-muted-foreground">
                    <span className="text-green-400">name</span>:{" "}
                    <span className="text-yellow-300">"Soulayman Jaafar"</span>,
                  </p>
                  <p className="pl-4 text-muted-foreground">
                    <span className="text-green-400">role</span>:{" "}
                    <span className="text-yellow-300">"Full-Stack Developer"</span>,
                  </p>
                  <p className="pl-4 text-muted-foreground">
                    <span className="text-green-400">passion</span>:{" "}
                    <span className="text-yellow-300">"Infinite"</span>,
                  </p>
                  <p className="pl-4 text-muted-foreground">
                    <span className="text-green-400">coffee</span>:{" "}
                    <span className="text-primary">true</span>,
                  </p>
                  <p className="text-muted-foreground">{"}"}</p>
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-32 h-32 border-2 border-primary/20 rounded-3xl -z-10"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-2xl -z-10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           <span className="text-primary font-medium mb-4 block">About Me</span>
<h2 className="section-title text-3xl md:text-4xl mb-6">
  Full-Stack Developer, <br />
  <span className="text-gradient">Focused on Impact & Innovation</span>
</h2>
<p className="text-muted-foreground text-lg mb-8 leading-relaxed">
  I’m a developer passionate about building smart, efficient, and modern web applications.
  From clean UI design to powerful backend logic, I enjoy creating products that not only
  work flawlessly but also feel great to use.
</p>
<p className="text-muted-foreground text-lg mb-10 leading-relaxed">
  Beyond development, I’m driven by curiosity—constantly learning, experimenting, 
  and finding better ways to solve real-world problems through code.
</p>


            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="card-glass p-4 flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
