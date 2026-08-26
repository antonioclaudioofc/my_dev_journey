import { motion } from "motion/react";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiDjango,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiRabbitmq,
  SiFastapi,
  SiAngular,
  SiSpringboot,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";

export function Skills() {
  const frontEnd = [
    { label: "React", icon: SiReact, colorClass: "text-cyan-400" },
    { label: "Next.js", icon: SiNextdotjs, colorClass: "text-white" },
    { label: "Angular", icon: SiAngular, colorClass: "text-red-500" },
    {
      label: "React Native",
      icon: TbBrandReactNative,
      colorClass: "text-cyan-400",
    },
    { label: "TypeScript", icon: SiTypescript, colorClass: "text-sky-400" },
    { label: "JavaScript", icon: SiJavascript, colorClass: "text-yellow-300" },
    { label: "Tailwind", icon: SiTailwindcss, colorClass: "text-teal-400" },
  ];

  const backEnd = [
    { label: "Java", icon: FaJava, colorClass: "text-orange-500" },
    { label: "Spring Boot", icon: SiSpringboot, colorClass: "text-green-500" },
    { label: "Python", icon: SiPython, colorClass: "text-blue-400" },
    { label: "Django", icon: SiDjango, colorClass: "text-teal-500" },
    { label: "FastAPI", icon: SiFastapi, colorClass: "text-emerald-500" },
    { label: "PostgreSQL", icon: SiPostgresql, colorClass: "text-sky-300" },
    { label: "Docker", icon: SiDocker, colorClass: "text-blue-500" },
    { label: "RabbitMQ", icon: SiRabbitmq, colorClass: "text-orange-400" },
    { label: "Firebase", icon: IoLogoFirebase, colorClass: "text-yellow-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="skills"
      className="w-full py-24 border-t"
      style={{
        backgroundColor: "var(--color-bg-alt)",
        borderColor: "var(--color-border)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight uppercase mb-4">
            <span style={{ color: "var(--color-text)" }}>Minhas </span>
            <span style={{ color: "var(--color-accent)" }}>Habilidades</span>
          </motion.h2>
          <div
            className="w-20 h-1 mx-auto rounded-full opacity-50"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              style={{ color: "var(--color-text)" }}
            >
              <span
                className="w-8 h-px"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></span>
              Front-end & Mobile
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {frontEnd.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl border transition-all cursor-default group"
                  style={{
                    backgroundColor: "var(--color-bg)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <item.icon
                    className={`text-5xl mb-4 transition-transform duration-200 group-hover:scale-110 ${item.colorClass}`}
                  />
                  <span
                    className="font-medium text-sm text-center"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              style={{ color: "var(--color-text)" }}
            >
              <span
                className="w-8 h-px"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></span>
              Back-end & DevOps
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {backEnd.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl border transition-all cursor-default group"
                  style={{
                    backgroundColor: "var(--color-bg)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <item.icon
                    className={`text-5xl mb-4 transition-transform duration-200 group-hover:scale-110 ${item.colorClass}`}
                  />
                  <span
                    className="font-medium text-sm text-center"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
