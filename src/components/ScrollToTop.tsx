import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaChevronUp } from "react-icons/fa";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <motion.button
      type="button"
      onClick={() =>
        document.getElementById("home")?.scrollIntoView({
          behavior: "smooth",
        })
      }
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      exit={{ opacity: 0, y: 16 }}
      transition={{
        opacity: { duration: 0.3 },
        y: { duration: 2.6, repeat: Infinity, ease: "easeInOut" },
      }}
      className="fixed bottom-6 right-6 z-50 flex cursor-pointer h-12 w-12 items-center justify-center rounded-full border shadow-lg transition-all duration-200 hover:-translate-y-1"
      style={{
        borderColor: "var(--color-accent-border)",
        backgroundColor: "var(--color-bg-elevated)",
        color: "var(--color-accent)",
      }}
      aria-label="Voltar ao inicio"
    >
      <FaChevronUp className="text-lg" />
    </motion.button>
  );
}
