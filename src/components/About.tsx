import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code, Database, BarChart3, Cloud } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Projects", value: 3, suffix: "+" },
    { label: "Years Experience", value: 7, suffix: "+" },
    { label: "Satisfaction", value: 100, suffix: "%" },
  ];

  const skills = [
    { name: "S/4HANA Finance", icon: Database, level: 95 },
    { name: "SAP CO", icon: BarChart3, level: 92 },
    { name: "SAP MM", icon: Code, level: 90 },
    { name: "SAP SD", icon: BarChart3, level: 88 },
  ];

  return (
    <section id="about" className="py-10 bg-card/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-6">
            About <span className="text-secondary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-12" />

          {/* About Text */}
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Senior SAP FICO Consultant with 7 years of experience delivering end-to-end implementations across FICO, MM, SD, and Supply Chain, supporting integrated S2P, OTC, and R2R processes. Hands-on experience in SAP S/4HANA Finance, Material Ledger, Pricing, Revenue Recognition, and Credit Management.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Strong expertise in cross-module integration (FI-MM, SD-FI) and data migration using Migration Cockpit and LSMW. Experienced in building SAP Fiori applications, CDS Views, and SAC dashboards, enabling real-time analytics and improved business decision-making. Proven ability to deliver SAP Activate implementations from configuration to hypercare.
            </motion.p>
          </div>

          {/* Stats Counter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <StatCounter key={stat.label} stat={stat} delay={index * 0.2} isInView={isInView} />
            ))}
          </div>

          {/* Skill Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass rounded-lg p-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-6 h-6 text-secondary" />
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-secondary font-medium">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatCounter = ({ stat, delay, isInView }: { stat: any; delay: number; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      className="glass rounded-2xl p-8 text-center copper-glow-hover"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="text-5xl font-heading text-secondary mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-muted-foreground">{stat.label}</div>
    </motion.div>
  );
};

export default About;
