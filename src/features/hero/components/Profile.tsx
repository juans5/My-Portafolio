import styles from "../Hero.module.css";
import { type NavLink } from "@/shared/types";

interface ExternalLinksProps {
  links: NavLink[];
}

export const Profile = ({ links }: ExternalLinksProps) => {
  return (
    <div className={styles.profile}>
      <h3> Hola!👋 Soy Juan Simón </h3>
      <h1>
        <span>Desarrollador Web FullStack.</span> Enfoque en interfaces modernas y UX.
      </h1>
      <div className={styles.links_external} aria-label="Enlaces a sitios externos">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
};
