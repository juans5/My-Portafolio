import styles from "../../../Styles/Hero.module.css";

interface ExternalLinks {
  href: string;
  label: string;
}

interface ExternalLinksProps {
  links: ExternalLinks[];
}

export const ExternalLinks = ({ links }: ExternalLinksProps) => {
  return (
    <div className={styles.links_external} aria-label="Enlaces Externos">
      {links.map((link) => (
        <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      ))}
    </div>
  );
};
