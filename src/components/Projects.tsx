import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const projects = [
  {
    title: "S/4HANA Digital Transformation",
    description: "Led implementation of SAP S/4HANA Finance, MM, and SD, configuring GL, AP, AR, Material Ledger, and Pricing, which enabled seamless S2P and OTC integration and improved financial visibility across entities.",
    image: "/S_4HANA.png",
    tech: ["SAP S/4HANA Finance", "SAP MM", "SAP SD", "SAP Fiori", "SAC"],
    preview: "#",
    code: "https://github.com/",
  },
  {
    title: "Global Procurement Optimization",
    description: "Implemented SAP MM integrated with FI, optimizing sourcing and inventory processes. Configured Material Ledger and inventory valuation in SAP S/4HANA, enabling real-time stock valuation and cost tracking.",
    image: "/Global_Procurement.png",
    tech: ["SAP MM", "SAP FICO", "Material Ledger", "CDS Views", "Embedded Analytics"],
    preview: "#",
    code: "https://github.com/",
  },
  {
    title: "SAP OTC & Revenue Optimization",
    description: "Designed end-to-end Order-to-Cash processes in SAP SD including Pricing, Billing, and Revenue Recognition, integrated with FI to ensure accurate revenue postings and financial consistency.",
    image: "/SAP_OTC.png",
    tech: ["SAP SD", "SAP FICO", "Revenue Recognition", "SAP Fiori", "SAC"],
    preview: "#",
    code: "https://github.com/",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section id="projects" className="py-10 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-6">
            Featured <span className="text-secondary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-16" />

          <div className="relative">
            {/* Custom Navigation Buttons */}
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 glass-strong p-3 rounded-full hover:bg-secondary/20 smooth-transition group disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 text-secondary group-hover:scale-110 smooth-transition" />
            </button>

            <button
              onClick={() => swiperInstance?.slideNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 glass-strong p-3 rounded-full hover:bg-secondary/20 smooth-transition group disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 text-secondary group-hover:scale-110 smooth-transition" />
            </button>

            <Swiper
              onSwiper={setSwiperInstance}
              modules={[Pagination, Autoplay, EffectCoverflow, Navigation]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-14"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="!w-[90%] md:!w-[400px]">
                  <motion.div
                    className="glass-strong rounded-2xl overflow-hidden group h-full"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-heading text-foreground mb-3">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          variant="default"
                          className="flex-1 bg-secondary hover:bg-secondary/90 copper-glow-hover"
                          asChild
                        >
                          {/* <a href={project.preview} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Preview
                        </a> */}
                        </Button>
                        <Button
                          variant="outline"
                          className="border-silver hover:bg-silver/10"
                          asChild
                        >
                          {/* <a href={project.code} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a> */}
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
