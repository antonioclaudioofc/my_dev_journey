import { motion } from "motion/react";
import { FaArrowDown } from "react-icons/fa";
import codeReviewImg from "../assets/code-review.svg";
import { useTypingEffect } from "../hooks/useTypingEffect";

const roles = [
  "Desenvolvedor Full Stack",
  "Java & Spring Boot",
  "Python & FastAPI",
  "React & Angular",
];

export function Hero() {
  const typedText = useTypingEffect(roles);

  return (
    <motion.header
      id="home"
      className="w-full min-h-screen relative flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="absolute top-0 bottom-0 left-[35%] w-px hidden lg:block"
        style={{ backgroundColor: "var(--color-border)" }}
      />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 pt-24 lg:pt-32 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-0 relative lg:col-span-7 xl:col-span-7"
          >
            <div className="absolute -left-12 sm:-left-20 top-16 hidden lg:block opacity-60">
              <svg
                width="60"
                height="100"
                viewBox="0 0 60 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 10 C30 20, 20 40, 15 60 C10 80, 20 90, 40 95"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="transparent"
                />
                <path
                  d="M35 85 L40 95 L30 100"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="transparent"
                />
              </svg>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="font-heading font-bold mb-8 leading-[1.05] tracking-tight"
            >
              <span
                className="block text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl leading-tight uppercase"
                style={{ color: "var(--color-text)" }}
              >
                Antonio Claudio
              </span>
              <span
                className="block text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl mt-3 leading-tight h-10 sm:h-9"
                style={{ color: "var(--color-accent)" }}
              >
                {typedText}
                <span className="typing-cursor h-6 sm:h-7 align-middle" />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2"
            >
              <a
                href="#contact"
                className="btn-accent w-full sm:w-auto text-center px-8 py-3.5 rounded-full font-bold text-sm sm:text-base"
              >
                Contrate-me
              </a>
              <a
                href="/Antonio_Claudio_Teixeira_Alves.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full font-bold text-sm sm:text-base transition-colors duration-200 flex items-center gap-3 border"
                style={{
                  backgroundColor: "var(--color-bg-elevated)",
                  color: "var(--color-text)",
                  borderColor: "var(--color-border)",
                }}
              >
                Baixar CV
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="flex justify-center items-center lg:justify-end order-0 lg:order-1 pt-12 lg:pt-0 lg:col-span-5 xl:col-span-5"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] aspect-square flex items-center justify-center">
              <img
                src={codeReviewImg}
                alt="Code Review Illustration"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full flex justify-center pb-10 mt-10"
      >
        <motion.a
          href="#about"
          className="w-14 h-16 flex items-center justify-center transition-colors duration-200 cursor-pointer border"
          style={{
            backgroundColor: "var(--color-bg-elevated)",
            borderColor: "var(--color-border)",
          }}
          whileHover={{ y: 5 }}
        >
          <FaArrowDown
            className="text-lg"
            style={{ color: "var(--color-text-muted)" }}
          />
        </motion.a>
      </motion.div>
    </motion.header>
  );
}
