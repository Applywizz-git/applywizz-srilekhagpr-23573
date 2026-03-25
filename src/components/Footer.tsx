import { motion } from "framer-motion";
import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <footer className="relative py-12 glass">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              href="https://www.linkedin.com/in/srilekhagiddaluri/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-3 copper-glow-hover group"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Linkedin className="w-5 h-5 text-secondary" />
            </motion.a>
            {/* <motion.a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-3 copper-glow-hover group"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <Github className="w-5 h-5 text-secondary" />
            </motion.a> */}
            <motion.a
              href="mailto:srilekhag.02@gmail.com"
              className="glass rounded-full p-3 copper-glow-hover group"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Mail className="w-5 h-5 text-secondary" />
            </motion.a>
          </div>

          {/* Copyright */}
          <motion.div
            className="text-muted-foreground text-sm text-center"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            © 2025 Srilekha G – All Rights Reserved
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="glass rounded-full p-3 copper-glow-hover group"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-secondary group-hover:animate-bounce" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
