import { AnimateIn } from "@/shared/components/index";
import styles from "../Hero.module.css";

interface ExternalLinks {
  href: string;
  label: string;
}

interface ExternalLinksProps {
  links: ExternalLinks[];
}

export const ExternalLinks = ({ links }: ExternalLinksProps) => {
  return (
    <AnimateIn className={styles.links_external} aria-label="Enlaces Externos">
      {links.map((link) => (
        <a
          href={link.href}
          key={link.href}
          aria-label="Enlace hacia archivo o pagina externa"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      ))}
    </AnimateIn>
  );
};
