"use client";

import { motion } from "framer-motion";
import { Github, Linkedin,Mail } from "lucide-react";
import TypeWriter from "./TypeWriter";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Abstract background gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
      </div>

      {/* Animated code lines in background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              top: `${10 + i * 10}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout - Stacked, visually impactful */}
          <div className="flex flex-col lg:hidden items-center text-center">
            {/* Profile Image - Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mb-8"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 blur-2xl opacity-70" />
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-3 border-primary/40 shadow-xl">
                <img
                  src={profileImage}
                  alt="SLX - Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <motion.div
                className="absolute -inset-3 border-2 border-primary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Title - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 w-full"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                I'm <span className="text-gradient">Soulayman</span>
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-foreground/80">
                Full-Stack Developer
              </p>
            </motion.div>

            {/* Subtitle - Mobile */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-sm"
            >
              Crafting modern, scalable web applications with cutting-edge technologies.
            </motion.p>

            {/* CTA Buttons - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-xs"
            >
              <a href="#projects" className="hero-button text-center py-3">
                View My Work
              </a>
              <a href="#contact" className="hero-button-outline text-center py-3">
                Get In Touch
              </a>
            </motion.div>

            {/* Mobile Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4 mt-8"
            >
              {[
                { icon: Github, href: "https://github.com/solixman", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/solixman", label: "LinkedIn" },
                { icon: Mail, href: "mailto:soulaymanjaa09@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass text-muted-foreground hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon size={22} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Desktop */}
            <div className="text-left">
              {/* Main Title - Wide container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6"
              >
                <h2 className="text-4xl xl:text-5xl font-bold text-foreground leading-tight">
                  I'm <TypeWriter />
                </h2>
                <p className="text-2xl xl:text-3xl font-bold text-foreground/80 mt-3">
                  Building Digital Solutions
                </p>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-xl mb-10"
              >
                I craft modern, scalable web applications with cutting-edge
                technologies. Transforming ideas & problems into elegant,
                functional solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4"
              >
                <a href="#projects" className="hero-button">
                  View My Work
                </a>
                <a href="#contact" className="hero-button-outline">
                  Get In Touch
                </a>
              </motion.div>
            </div>

            {/* Profile Image - Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 blur-3xl opacity-60" />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl"
                >
                  <img
                    src={profileImage}
                    alt="SLX - Full Stack Developer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </motion.div>
                <motion.div
                  className="absolute -inset-4 border-2 border-primary/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -inset-8 border border-accent/10 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Social Links - Fixed Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50"
      >
        {[
          {
            icon: Github,
            href: "https://github.com/solixman",
            label: "GitHub",
          },
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/solixman",
            label: "LinkedIn",
          },
          { icon: Mail, href: "mailto:soulaymanjaa09@gmail.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl glass text-muted-foreground hover:text-primary transition-colors"
            aria-label={label}
          >
            <Icon size={20} />
          </motion.a>
        ))}
        <div className="w-px h-20 bg-gradient-to-b from-primary/50 to-transparent mx-auto mt-2" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
