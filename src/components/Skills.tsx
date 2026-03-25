import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, BarChart3, Cloud, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "SAP Core Modules",
    icon: Database,
    skills: ["S/4HANA Finance (GL, AP, AR, AA)", "SAP CO (CCA, PCA, CO-PA, Product Costing)", "SAP MM (Procurement, Inventory, Material Ledger)", "SAP SD (Order Management, Pricing, Billing)"],
  },
  {
    title: "Business Processes",
    icon: Brain,
    skills: ["Source-to-Pay (S2P)", "Order-to-Cash (OTC)", "Record-to-Report (R2R)", "Financial Close", "Inventory Management"],
  },
  {
    title: "S/4HANA & Digital",
    icon: Cloud,
    skills: ["Universal Journal", "Business Partner", "Embedded Analytics", "SAP Fiori", "SAP Analytics Cloud (SAC)"],
  },
  {
    title: "Integration & Data",
    icon: Wrench,
    skills: ["FI-MM, SD-FI Integration", "Migration Cockpit", "LSMW", "IDocs", "BAPI", "OData Services"],
  },
  {
    title: "Reporting & Analytics",
    icon: BarChart3,
    skills: ["CDS Views", "SAP BW/4HANA", "P&L, Balance Sheet", "Custom Z-Reports"],
  },
  {
    title: "Technical Exposure",
    icon: Code,
    skills: ["ABAP Debugging", "User Exits", "BADI", "PFCG Roles", "GRC Access Control"],
  },
];

const topSkills = [
  { name: "S/4HANA Finance", percentage: 98 },
  { name: "SAP CO", percentage: 95 },
  { name: "SAP MM", percentage: 90 },
  { name: "SAP SD", percentage: 88 },
  { name: "Data Migration", percentage: 92 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-10 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-6">
            Technical <span className="text-secondary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-16" />

          {/* Skill Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="glass-strong rounded-2xl p-6 copper-glow-hover group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="glass rounded-lg p-3 group-hover:scale-110 smooth-transition">
                    <category.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-heading text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1.5 text-sm bg-secondary/10 text-secondary rounded-full border border-secondary/30 hover:bg-secondary hover:text-primary-foreground smooth-transition cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Rings for Top Skills */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-heading text-center mb-8">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {topSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="relative w-28 h-28 mb-3">
                    {/* Background Circle */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-muted/30"
                      />
                      {/* Progress Circle */}
                      <motion.circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "314", strokeDashoffset: "314" }}
                        animate={
                          isInView
                            ? {
                                strokeDashoffset: 314 - (314 * skill.percentage) / 100,
                              }
                            : {}
                        }
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--secondary))" />
                          <stop offset="100%" stopColor="hsl(var(--accent))" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-heading text-secondary">{skill.percentage}%</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
