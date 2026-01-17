import styles from "../Hero.module.css";

interface ExternalLinks {
  href: string;
  label: string;
}

interface ExternalLinksProps {
  links: ExternalLinks[];
}

export const Profile = ({ links }: ExternalLinksProps) => {
  return (
    <div className={styles.profile}>
      <h3> Hola!👋 Soy Juan Simón </h3>
      <h1>
        <span>Desarrollador Web FullStack,</span> apasionado por aplicar nuevas practicas de hacer
        mejor los mismos resultados.
      </h1>
      <div className={styles.links_external} aria-label="Enlaces a sitios externos">
        {links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
