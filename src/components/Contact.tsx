import { motion } from "motion/react";
import { useState } from "react";
import { FaEnvelope, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const contactCards = [
  {
    title: "Email",
    value: "claudioalvesdev@gmail.com",
    href: "mailto:claudioalvesdev@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "WhatsApp",
    value: "(98) 97025-6674",
    href: "https://wa.me/5598970256674?text=Ol%C3%A1%20Antonio%2C%20conheci%20seu%20trabalho%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20poss%C3%ADvel%20oportunidade%20ou%20projeto.%20Podemos%20falar%20por%20aqui%3F",
    icon: FaWhatsapp,
  },
  {
    title: "LinkedIn",
    value: "@antonioclaudioofc",
    href: "https://www.linkedin.com/in/antonioclaudioofc/",
    icon: FaLinkedinIn,
  },
];

export function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (formValues.name.trim().length < 6) {
      return "O nome precisa ter pelo menos 6 caracteres.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formValues.email.trim())) {
      return "Digite um e-mail valido.";
    }

    if (formValues.message.trim().length < 10) {
      return "A mensagem precisa ter pelo menos 10 caracteres.";
    }

    return "";
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("idle");
    setErrorMessage("");

    const validationError = validateForm();
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const API_URL = "/notify-api/api/antonio-claudio-dev/contact";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": import.meta.env.VITE_NOTIFY_API_KEY,
        },
        body: JSON.stringify({
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          message: formValues.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar mensagem. Tente novamente.");
      }

      setStatus("success");
      setFormValues({ name: "", email: "", message: "" });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro inesperado.";
      setStatus("error");
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="w-full py-24 px-4 border-t overflow-hidden"
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold tracking-tight text-4xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] leading-none"
          >
            <span style={{ color: "var(--color-text)" }}>Fale </span>
            <span style={{ color: "var(--color-accent)" }}>comigo</span>
          </motion.h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <h3
              className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3"
              style={{ color: "var(--color-text)" }}
            >
              <span
                className="w-8 h-px"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></span>
              Informações
            </h3>

            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * index, duration: 0.3 }}
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 sm:gap-5 rounded-md border p-3 sm:p-5 transition-all duration-200"
                  style={{
                    backgroundColor: "var(--color-bg)",
                    borderColor: "var(--color-border)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor =
                      "var(--color-accent-border)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = "var(--color-border)")
                  }
                >
                  <span
                    className="flex-shrink-0 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-md group-hover:scale-110 transition-all duration-200"
                    style={{
                      backgroundColor: "var(--color-bg-alt)",
                      color: "var(--color-accent)",
                    }}
                  >
                    <Icon className="text-lg sm:text-2xl" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p
                      className="text-xs sm:text-sm font-medium mb-1"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {card.title}
                    </p>
                    <p
                      className="text-sm sm:text-lg font-bold break-all sm:break-normal"
                      style={{ color: "var(--color-text)" }}
                    >
                      {card.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3"
              style={{ color: "var(--color-text)" }}
            >
              <span
                className="w-8 h-px"
                style={{ backgroundColor: "var(--color-accent)" }}
              ></span>
              Envie uma mensagem
            </h3>
            <form
              className="rounded-md border p-4 sm:p-8"
              style={{
                backgroundColor: "var(--color-bg)",
                borderColor: "var(--color-border)",
              }}
              onSubmit={handleSubmit}
            >
              <div className="space-y-5">
                <label className="block">
                  <span
                    className="text-sm font-semibold mb-2 block"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Nome
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={formValues.name}
                    onChange={handleChange}
                    className="field-input w-full rounded-md px-4 py-3.5"
                  />
                </label>

                <label className="block">
                  <span
                    className="text-sm font-semibold mb-2 block"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    E-mail
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    value={formValues.email}
                    onChange={handleChange}
                    className="field-input w-full rounded-md px-4 py-3.5"
                  />
                </label>

                <label className="block">
                  <span
                    className="text-sm font-semibold mb-2 block"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Mensagem
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Sua mensagem"
                    value={formValues.message}
                    onChange={handleChange}
                    className="field-input w-full rounded-md px-4 py-3.5 resize-none"
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-accent w-full sm:w-auto mt-4 inline-flex items-center justify-center rounded-md px-8 py-3.5 font-bold disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>

                {status === "success" && (
                  <p className="text-sm font-bold text-emerald-500 mt-4">
                    Mensagem enviada com sucesso!
                  </p>
                )}

                {status === "error" && (
                  <p className="text-sm font-bold text-rose-500 mt-4">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
