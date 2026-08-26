import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/antonioclaudioofc",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/antonioclaudioofc/",
    icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5598970256674?text=Oi%20Antonio%2C%20vim%20pelo%20seu%20portfolio%20e%20gostaria%20de%20conversar.",
    icon: FaWhatsapp,
  },
];

export function Footer() {
  return (
    <footer
      className="w-full border-t px-4 py-16"
      style={{
        backgroundColor: "var(--color-bg)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-12">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center flex flex-col items-center">
            <p
              className="font-heading text-2xl font-bold tracking-wide mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Antonio{" "}
              <span style={{ color: "var(--color-accent)" }}>Claudio</span>
            </p>
            <p
              className="font-medium tracking-wide"
              style={{ color: "var(--color-text-muted)" }}
            >
              Desenvolvedor Full Stack
            </p>
          </div>

          <div className="flex items-center gap-5 mt-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-md border transition-all duration-200"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-bg-alt)",
                    color: "var(--color-text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "var(--color-accent-border)";
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.color = "var(--color-text-muted)";
                  }}
                  aria-label={link.label}
                >
                  <Icon className="text-xl group-hover:scale-110 transition-transform duration-200" />
                </a>
              );
            })}
          </div>

          <div
            className="w-full h-px mt-4 mb-2 max-w-md"
            style={{ backgroundColor: "var(--color-border)" }}
          ></div>

          <p
            className="text-sm font-medium"
            style={{ color: "var(--color-text-muted)" }}
          >
            © {new Date().getFullYear()} Antonio Claudio. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
