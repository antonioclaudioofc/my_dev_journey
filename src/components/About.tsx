import { motion } from "motion/react";
import researchAssistantImg from "../assets/research-assistant.svg";

export function About() {
  return (
    <motion.section
      id="about"
      className="w-full min-h-screen relative flex flex-col justify-center overflow-hidden border-t py-24"
      style={{
        backgroundColor: "var(--color-bg)",
        borderColor: "var(--color-border)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute top-0 bottom-0 left-[35%] w-px hidden lg:block"
        style={{ backgroundColor: "var(--color-border)" }}
      />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-0 relative lg:col-span-7 xl:col-span-7"
          >
            <h2 className="font-heading font-bold mb-8 tracking-tight text-5xl sm:text-6xl md:text-[4rem] lg:text-[4.5rem] leading-none">
              <span style={{ color: "var(--color-text)" }}>Sobre </span>
              <span style={{ color: "var(--color-accent)" }}>mim</span>
            </h2>

            <p
              className="text-lg sm:text-xl leading-relaxed mb-6 lg:max-w-2xl"
              style={{ color: "var(--color-text-body)" }}
            >
              Sou <strong>Antonio Claudio</strong>, um desenvolvedor full stack
              graduado em Ciência da Computação pelo Instituto Federal do
              Maranhão (IFMA). No dia a dia de trabalho, atuo com{" "}
              <strong>Java, Spring Boot, Angular e React Native</strong>, além
              de ter experiência sólida em React, Next.js, Python (FastAPI,
              Django), TypeScript, Firebase e SQL.
            </p>
            <p
              className="text-lg sm:text-xl leading-relaxed mb-10 lg:max-w-2xl"
              style={{ color: "var(--color-text-body)" }}
            >
              Sou entusiasta de tecnologias como Docker e RabbitMQ, sempre
              aplicando boas práticas de desenvolvimento (Clean Code),
              metodologias ágeis e princípios de escalabilidade para criar
              soluções robustas e eficientes.
            </p>

            <div className="flex justify-center lg:justify-start">
              <a
                href="/Antonio_Claudio_Teixeira_Alves.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Baixar currículo de Antonio Claudio"
                className="font-bold text-lg sm:text-xl transition-colors duration-200 flex items-center gap-2 group"
                style={{ color: "var(--color-text)" }}
              >
                Baixar CV
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="flex justify-center items-center lg:justify-end order-0 lg:order-1 pt-8 lg:pt-0 lg:col-span-5 xl:col-span-5"
          >
            <div className="relative w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px] aspect-square flex items-center justify-center">
              <img
                src={researchAssistantImg}
                alt="Ilustração representando Antonio Claudio como Desenvolvedor Full Stack"
                className="w-full h-full object-contain relative z-10"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
