import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Layout, Server, Smartphone, Database, Cloud } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Web Development",
    description: "Building responsive, high-performance web applications with modern frameworks and best practices.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Creating seamless experiences across all devices with progressive web app capabilities.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Designing scalable server-side solutions with robust APIs and efficient database structures.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Optimizing data storage and retrieval with proper indexing and relationship modeling.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Deploying and managing applications on AWS, GCP, and other cloud platforms.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Code,
    title: "Code Review",
    description: "Improving code quality through comprehensive reviews and implementing best practices.",
    gradient: "from-pink-500 to-rose-500",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-20 -left-20 w-40 h-40 border border-primary/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-60 h-60 border border-accent/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">What I Do</span>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-4">
            Services & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to bring your vision to life with
            cutting-edge technology and proven methodologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group card-glass relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-4`}
                >
                  <service.icon className="w-full h-full text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-border/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
