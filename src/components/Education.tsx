import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Information Systems",
    institution: "Indiana Institute of Technology",
    duration: "Aug 2024 - May 2026",
    location: "Fort Wayne, IN",
    gpa: "",
  },
  {
    degree: "Bachelor of Business Administration",
    institution: "Osmania University",
    duration: "Jun 2013 - Apr 2016",
    location: "Hyderabad, India",
    gpa: "",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-10 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-6">
            Educational <span className="text-secondary">Background</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="glass-strong rounded-2xl p-8 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Decorative Gradient Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 smooth-transition" />

                {/* Crest Icon */}
                <motion.div
                  className="w-16 h-16 glass rounded-full flex items-center justify-center mb-6 copper-glow-hover"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap className="w-8 h-8 text-secondary" />
                </motion.div>

                <h3 className="text-2xl font-heading text-foreground mb-2">{edu.degree}</h3>
                <p className="text-xl text-secondary font-medium mb-4">{edu.institution}</p>

                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    {/* <Calendar className="w-4 h-4 text-secondary" /> */}
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                  {edu.gpa && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="text-sm font-medium text-foreground">GPA: </span>
                      <span className="text-secondary font-semibold">{edu.gpa}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
