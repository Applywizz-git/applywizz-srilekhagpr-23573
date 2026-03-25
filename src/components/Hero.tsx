import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import profileImg from "/profileimgepp.jpg";
import FloatingElements from "./FloatingElements";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden"
    >
      <FloatingElements />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right: Profile Image - Shows first on mobile */}
          <motion.div
            className="relative flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative float">
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImg}
                  alt="SRILEKHA G"
                  className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-secondary copper-glow"
                />
              </motion.div>
              {/* Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-secondary/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Left: Text Content - Shows second on mobile */}
          <motion.div
            className="space-y-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-lg md:text-3xl font-medium text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Hi, I'm
            </motion.p>
            {/* <motion.h1
              className="text-5xl md:text-7xl font-heading text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Ruchitha Thota
            </motion.h1> */}
            <motion.h1
              className="text-5xl md:text-7xl font-heading font-extrabold 
                   bg-gradient-to-r from-[#C08457] via-[#D6D3D1] to-[#16A34A]
                   text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <TypeAnimation
                sequence={[
                  "SRILEKHA G",  // text to type
                  2000,              // wait before loop restarts
                  "",                // delete all
                  500,               // short pause
                ]}
                speed={80}
                repeat={Infinity}
              // cursor={false}
              />
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl font-medium text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  "Senior SAP FICO Consultant",
                  2000,
                  "SAP S/4HANA Finance Expert",
                  2000,
                  "Cross-Module Integration Specialist",
                  2000,
                  "Digital Transformation Leader",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Senior SAP FICO Consultant with 7 years of experience delivering end-to-end implementations across FICO, MM, SD, and Supply Chain, supporting integrated S2P, OTC, and R2R processes. Focused on financial compliance, GRC controls, and process optimization.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="projects" smooth={true} offset={-80} duration={500}>
                <Button variant="default" className="bg-secondary hover:bg-secondary/90 text-primary-foreground copper-glow-hover group">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-primary-foreground smooth-transition"
                asChild
              >
                <a href="/resume_srilekha.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
