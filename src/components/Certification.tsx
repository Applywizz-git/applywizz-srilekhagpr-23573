import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "SAP Certified Application Associate - Financial Accounting (FI)",
    issuer: "SAP",
    date: "",
    badge: "",
  },
  {
    title: "SAP Certified Application Associate - Management Accounting (CO)",
    issuer: "SAP",
    date: "",
    badge: "",
  },
  {
    title: "SAP S/4HANA Finance Certification",
    issuer: "SAP",
    date: "",
    badge: "",
  },
  {
    title: "SAP Procurement and Sourcing (MM)",
    issuer: "LinkedIn Learning",
    date: "",
    badge: "",
  },
  {
    title: "SAP Sales and Distribution (SD) Fundamentals",
    issuer: "LinkedIn Learning",
    date: "",
    badge: "",
  },
  {
    title: "Enterprise Systems Integration (SAP)",
    issuer: "Coursera",
    date: "",
    badge: "",
  },
];

const Certification = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certification" className="py-10 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-6">
            Certifications & <span className="text-secondary">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="group relative h-64"
                initial={{ opacity: 0, rotateY: 180 }}
                animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                style={{ perspective: "1000px" }}
              >
                <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute inset-0 glass-strong rounded-2xl p-6 flex flex-col items-center justify-center backface-hidden copper-glow-hover">
                    <div className="text-6xl mb-4 shimmer">{cert.badge}</div>
                    <Award className="w-12 h-12 text-secondary mb-4" />
                    <h3 className="text-lg font-heading text-foreground text-center mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-secondary text-sm text-center">{cert.issuer}</p>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 glass-strong rounded-2xl p-6 flex flex-col items-center justify-center rotate-y-180 backface-hidden bg-secondary/10">
                    <Award className="w-16 h-16 text-secondary mb-4" />
                    <h3 className="text-xl font-heading text-foreground text-center mb-4">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      {/* <Calendar className="w-4 h-4" /> */}
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    <p className="text-secondary font-medium text-center">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;
