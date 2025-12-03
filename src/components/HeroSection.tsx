"use client"

import { motion } from "framer-motion"
import {  Github, Linkedin, Twitter } from "lucide-react"
import TypeWriter from "./TypeWriter"
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Download Resume - Top */}

              {/* Main Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="section-title mb-6 min-h-[7rem]"
              >
                I'm <TypeWriter />
                <br />
                Building Digital Solutions
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto lg:mx-0 mb-10"
              >
                I craft modern, scalable web applications with cutting-edge technologies. Transforming ideas&problems into
                elegant, functional solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <a href="#projects" className="hero-button">
                  View My Work
                </a>
                <a href="#contact" className="hero-button-outline">
                  Get In Touch
                </a>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 blur-3xl opacity-60" />

                {/* Image container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl"
                >
                <img
                    src={profileImage}
                    alt="SLX - Full Stack Developer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </motion.div>

                {/* Decorative rings */}
                <motion.div
                  className="absolute -inset-4 border-2 border-primary/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute -inset-8 border border-accent/10 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
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
          { icon: Github, href: "https://github.com/solixman", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/solixman", label: "LinkedIn" },
          { icon: Twitter, href: "#", label: "Twitter" },
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
  )
}

export default HeroSection
