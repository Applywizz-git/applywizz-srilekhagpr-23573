import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

// const experiences = [
// {
//   role: "Graduate Research Assistant",
//   company: "Concordia University Wisconsin",
//   duration: "jan 2024 – Present",
//   location: "Mequon, WI",
//   highlights: [
//     { text: "Deployed a predictive model for student retention", metric: "improving retention forecasting by 60%" },
//     { text: "Enhanced SQL query performance", metric: "reducing query runtime by 30%" },
//     { text: "Created a comprehensive Power BI dashboard", metric: "boosting retention by 10%" },
//     "Integrated predictive analytics to identify at-risk students and recommend targeted interventions",
//   ],
//   tech: ["Python", "SQL", "Power BI", "Predictive Analytics"],
// },
// {
//   role: "Data Analyst Intern",
//   company: "Quadrant Resource, LLC",
//   duration: "Apr 2024 – Aug 2024",
//   location: "Remote",
//   highlights: [
//     { text: "Designed and maintained Power BI dashboards", metric: "improving decision-making efficiency by 25%" },
//     { text: "Automated 10+ manual reports using Power Automate", metric: "saving 40+ hours monthly" },
//     "Developed a real-time sales tracking dashboard that enabled proactive sales strategy adjustments",
//     "Collaborated with cross-functional teams to align reporting metrics with key business objectives",
//   ],
//   tech: ["Power BI", "DAX", "Power Automate", "SQL Server"],
// },
// {
//   role: "Data Analyst",
//   company: "Food FIXR",
//   duration: "Jun 2022 – Jul 2023",
//   location: "Hyderabad, India",
//   highlights: [
//     { text: "Streamlined ETL pipeline automation for large-scale data ingestion", metric: "reducing processing time by 50%" },
//     { text: "Designed interactive Tableau dashboards for 10,000+ customers", metric: "improving engagement by 35%" },
//     "Conducted A/B testing for personalized recommendations, resulting in higher customer satisfaction",
//     "Performed root-cause analysis on customer drop-off patterns, driving product enhancement initiatives",
//   ],
//   tech: ["Python", "Tableau", "AWS", "ETL", "A/B Testing"],
// },
// {
//   role: "Data Analyst Intern",
//   company: "Bharat Sanchar Nigam Limited (BSNL)",
//   duration: "Jan 2022 – Apr 2022",
//   location: "Vijayawada, India",
//   highlights: [
//     "Analyzed telecom network data to identify service disruptions and optimize resource allocation",
//     "Developed SQL queries for customer churn analysis, providing actionable insights to the retention team",
//     "Assisted in building dashboards using Excel and Tableau to visualize key operational metrics",
//   ],
//   tech: ["SQL", "Excel", "Tableau", "Data Analysis"],
// },












const experience = [
  {
    role: "Senior SAP FICO Consultant",
    company: "SVB",
    logo: "/svb_logo.png",
    duration: "Sep 2025 - Present",
    location: "Remote",
    highlights: [
      {
        text: "Led configuration of SAP S/4HANA Finance (GL, AP, AR, AA) and CO (CCA, PCA, CO-PA) to standardize multi-entity accounting",
        metric: "improving close accuracy and reducing reconciliation gaps by 28%",
      },
      {
        text: "Streamlined procurement accounting by integrating SAP MM with FI using FI-MM integration",
        metric: "reducing manual invoice matching efforts and improving cycle efficiency by 22%",
      },
      {
        text: "Redesigned Order-to-Cash workflows in SAP SD covering pricing, billing, and revenue recognition",
        metric: "increasing billing accuracy and accelerating revenue realization by 18%",
      },
      {
        text: "Delivered structured data migration using Migration Cockpit and LSMW",
        metric: "reducing post-migration discrepancies by 30%",
      },
      "Strengthened inventory valuation by implementing Material Ledger in SAP MM integrated with FI, enabling real-time cost tracking",
      "Built SAP Fiori dashboards leveraging CDS Views and Embedded Analytics, improving reporting turnaround time by 35%",
      "Reinforced financial controls by configuring PFCG roles and GRC Access Control, reducing audit findings by 20%",
      "Drove system stability by leading integration testing and hypercare using SAP Activate, resolving defects through ABAP debugging",
    ],
    tech: ["SAP S/4HANA Finance", "SAP MM", "SAP SD", "Material Ledger", "Migration Cockpit", "SAP Fiori", "SAP Activate", "ABAP Debugging"],
  },
  {
    role: "SAP FICO Consultant",
    company: "Tata Consultancy Services (TCS)",
    logo: "/tcs_logo.jpg",
    duration: "Jan 2023 - Jul 2024",
    location: "India",
    highlights: [
      "Structured SAP FICO (GL, AP, AR, AA) and CO to align financial structures with business needs, improving posting accuracy",
      "Improved procurement accounting by integrating SAP MM with FI, enabling automated invoice postings",
      "Delivered Order-to-Cash integration across SAP SD and FI, ensuring accurate financial postings and revenue tracking",
      "Executed financial close activities including period-end closing and reconciliation in SAP FICO",
      "Strengthened inventory accounting by designing valuation and material accounting processes within SAP MM and FI",
      "Enabled business reporting by developing SAP BW/BI reports and SAP Analytics Cloud dashboards",
      "Ensured data integrity by executing data migration and validation using LSMW",
      "Stabilized system performance by supporting integration testing and UAT across FI-MM-SD modules using SAP Activate",
      "Optimized Automatic Payment Program (APP) and Electronic Bank Statement (EBS) to automate payment processing",
    ],
    tech: ["SAP FICO", "SAP MM", "SAP SD", "SAP BW/BI", "SAC", "LSMW", "SAP Activate", "APP", "EBS"],
  },
  {
    role: "SAP Functional Consultant",
    company: "TCT Technologies",
    logo: "/tct_logo.jpeg",
    duration: "Oct 2018 - Jan 2023",
    location: "India",
    highlights: [
      {
        text: "Configured SAP MM procurement and inventory processes with Invoice Verification integrated to FI",
        metric: "improving material availability and reducing cycle delays by 20%",
      },
      {
        text: "Implemented GST taxation in SAP FICO to ensure compliant tax postings",
        metric: "improving financial reporting accuracy by 25%",
      },
      {
        text: "Designed Cost Center and Profit Center structures using SAP CO to capture operational costs",
        metric: "enhancing cost visibility and monitoring by 18%",
      },
      "Enabled real-time accounting by integrating Procure-to-Pay processes through FI-MM integration",
      "Developed functional specifications for ABAP enhancements using user exits and BADI for customized reporting",
      "Migrated financial and material data using LSMW, reducing data discrepancies by 30% during system upgrades",
      "Supported month-end closing activities in SAP FICO including GL reconciliation and reporting",
      "Delivered end-user training and process documentation for SAP FICO and MM modules",
    ],
    tech: ["SAP FICO", "GST", "SAP CO", "FI-MM Integration", "LSMW", "ABAP User Exits", "BADI"],
  },
  {
    role: "SAP Associate Consultant",
    company: "Tech Mahindra",
    logo: "/Tech_Mahindra.png",
    duration: "Apr 2016 - Aug 2016",
    location: "India",
    highlights: [
      "Assisted in configuring SAP FICO (GL, AP, AR) for core financial postings, improving transaction accuracy by 15%",
      "Supported procurement transactions by working on SAP MM Invoice Verification integrated with FI",
      "Maintained vendor master records in SAP MM and FI, reducing master data issues and improving efficiency by 18%",
      "Participated in FI-MM integration testing scenarios, reducing cross-module inconsistencies by 20%",
      "Executed data migration activities using LSMW for financial and master data, improving reliability by 25%",
      "Contributed to month-end financial activities in SAP FICO including GL validation and reporting",
      "Prepared functional documentation and test cases aligned with ASAP methodology",
      "Collaborated in UAT and defect resolution with ABAP debugging support for faster issue resolution",
    ],
    tech: ["SAP FICO", "SAP MM", "FI-MM Integration", "LSMW", "ASAP Methodology", "UAT", "ABAP Debugging"],
  },
];



const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-10 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-6">
            Professional <span className="text-secondary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-16" />

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30 hidden md:block" />

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative mb-16 ${index % 2 === 0 ? "md:pr-1/2 md:text-left" : "md:pl-1/2 md:ml-auto"
                  }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute top-6 w-4 h-4 rounded-full bg-secondary copper-glow hidden md:block ${index % 2 === 0 ? "right-[-9px]" : "left-[-9px]"
                    }`}
                />

                {/* Experience Card */}
                <div className="glass-strong rounded-2xl p-6 md:p-8 hover:scale-[1.02] smooth-transition copper-glow-hover ml-12 md:ml-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="glass rounded-lg p-2 flex items-center justify-center overflow-hidden w-12 h-12 flex-shrink-0">
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover rounded" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading text-foreground mb-1">{exp.role}</h3>
                      <p className="text-xl text-secondary font-medium mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-secondary mt-1.5">▸</span>
                        <span>
                          {typeof highlight === "string" ? (
                            highlight
                          ) : (
                            <>
                              {highlight.text}{" "}
                              <span className="text-accent font-semibold">{highlight.metric}</span>
                            </>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-secondary/10 text-secondary rounded-full border border-secondary/30"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience;
