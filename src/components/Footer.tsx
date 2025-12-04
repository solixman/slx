import { motion } from "framer-motion";
import Logo from "./Logo";
import { Github, Linkedin, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="flex items-center gap-4">
            <Logo size={40} />
            <span className="text-muted-foreground">
              Crafting digital experiences
            </span>
          </div>

          {/* Contact Me & Social links */}
          <div className="flex items-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              <MessageCircle size={16} />
              Contact Me
            </motion.a>
            <div className="flex items-center gap-4">
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
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            © {currentYear} SLX. Made By Soulayman Jaafar AKA "Solixman" using new technologies and some tea
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
