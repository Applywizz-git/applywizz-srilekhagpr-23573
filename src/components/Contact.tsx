import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Linkedin, Github, ExternalLink, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Fort Wayne, IN (Open to Relocate)",
    link: null,
  },
  {
    icon: Mail,
    label: "Email",
    value: "srilekhag.02@gmail.com",
    link: "mailto:srilekhag.02@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/srilekhagiddaluri",
    link: "https://www.linkedin.com/in/srilekhagiddaluri/",
  },
  // {
  //   icon: Github,
  //   label: "GitHub",
  //   value: "github.com/",
  //   link: "https://github.com/",
  // },
  // {
  //   icon: ExternalLink,
  //   label: "Portfolio",
  //   value: "applywizz-ruchithathota.vercel.app",
  //   link: "https://applywizz-ruchithathota.vercel.app",
  // },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Confetti explosion
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#C08457", "#16A34A", "#D6D3D1"],
    });

    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-10 bg-card/30 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-6">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-16" />

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-heading text-foreground mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="glass rounded-xl p-4 flex items-center gap-4 copper-glow-hover group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="glass rounded-lg p-3 group-hover:scale-110 smooth-transition">
                    <info.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-secondary smooth-transition"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social Sidebar */}
              <div className="flex gap-4 pt-6">
                {/* <motion.a
                  href="https://linkedin.com/in/ruchithathota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-full p-3 copper-glow-hover"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Linkedin className="w-6 h-6 text-secondary" />
                </motion.a> */}
                {/* <motion.a
                  href="https://github.com/Ruchitha52"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-full p-3 copper-glow-hover"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <Github className="w-6 h-6 text-secondary" />
                </motion.a> */}
                {/* <motion.a
                  href="https://applywizz-ruchithathota.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-full p-3 copper-glow-hover"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <ExternalLink className="w-6 h-6 text-secondary" />
                </motion.a> */}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="glass-strong rounded-2xl p-8 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-heading text-foreground mb-6">Send a Message</h3>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-secondary/30 focus:border-secondary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-secondary/30 focus:border-secondary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background/50 border-secondary/30 focus:border-secondary resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary/90 copper-glow-hover group"
              >
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 smooth-transition" />
                Send Message
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
