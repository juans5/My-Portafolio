import styles from "../../../Styles/Hero.module.css";

interface LinkSpa {
  href: string;
  label: string;
}

interface LinkSpaProp {
  links?: LinkSpa[];
}

export const LinksSpa = ({
  links = [
    { href: "#home", label: "Inicio" },
    { href: "projects", label: "Proyectos" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contacto" },
  ],
}: LinkSpaProp) => {
  return (
    <nav className={styles.links_spa}>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} aria-label={link.label}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
