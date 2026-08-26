import { motion } from "motion/react";
import { FaBriefcase } from "react-icons/fa";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
  highlights?: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Desenvolvedor de Software Júnior",
    company: "Medsafe Brasil",
    period: "Maio/2026 – Agosto/2026",
    description:
      "Entreguei mais de 40 funcionalidades para uma plataforma web da área médica em produção, com 100% dos prazos cumpridos, incluindo um aplicativo publicado na Google Play Store (React Native). Atuei em Java, Spring Boot, Angular e modelagem de banco de dados.",
    stack: ["Java", "Spring Boot", "Angular", "React Native", "SQL"],
    highlights: ["40+ funcionalidades", "100% dos prazos", "Google Play Store"],
  },
  {
    role: "Estagiário de Desenvolvimento Web",
    company: "IVC Tecnologia",
    period: "Abril/2024 – Setembro/2024",
    description:
      "Desenvolvimento de páginas web responsivas com React e Next.js a partir de protótipos de UX/UI.",
    stack: ["React", "Next.js"],
  },
];

export function Experience() {
  return (
    <motion.section
      id="experience"
      className="w-full py-24 px-4 border-t"
      style={{
        backgroundColor: "var(--color-bg-alt)",
        borderColor: "var(--color-border)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-12">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-heading font-bold tracking-tight text-4xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] leading-none"
          >
            <span style={{ color: "var(--color-text)" }}>Experiência </span>
            <span style={{ color: "var(--color-accent)" }}>profissional</span>
          </motion.h2>
        </div>

        <div className="relative pl-8 sm:pl-10">
          <div
            className="absolute top-2 bottom-2 left-3 sm:left-4 w-px"
            style={{ backgroundColor: "var(--color-border)" }}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="relative"
              >
                <span
                  className="absolute -left-8 sm:-left-10 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2"
                  style={{
                    backgroundColor: "var(--color-bg-alt)",
                    borderColor: "var(--color-accent)",
                    color: "var(--color-accent)",
                  }}
                >
                  <FaBriefcase className="text-[10px]" />
                </span>

                <div
                  className="rounded-md border p-6 sm:p-8"
                  style={{
                    backgroundColor: "var(--color-bg)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3
                        className="text-xl sm:text-2xl font-bold"
                        style={{ color: "var(--color-text)" }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className="font-semibold text-sm sm:text-base"
                        style={{ color: "var(--color-accent)" }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="text-xs sm:text-sm font-medium whitespace-nowrap"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    className="text-sm sm:text-base leading-relaxed mb-5"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <div className="flex flex-wrap gap-3 mb-5">
                      {exp.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-sm sm:text-base font-bold px-4 py-2 rounded-md border"
                          style={{
                            color: "var(--color-accent)",
                            borderColor: "var(--color-accent-border)",
                            backgroundColor: "var(--color-accent-soft)",
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1.5 rounded border font-medium"
                        style={{
                          color: "var(--color-text-muted)",
                          borderColor: "var(--color-border)",
                          backgroundColor: "var(--color-bg-elevated)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
