import styles from "../Hero.module.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NAV_LINKS } from "@/shared/constants/index";

interface LinkSpa {
  href: string;
  label: string;
}

interface LinkSpaProp {
  links?: LinkSpa[];
}

export const LinksSpa = ({ links = NAV_LINKS }: LinkSpaProp) => {
  // 1. Usamos un ref para un elemento "centinela" que se queda quieto en el DOM.
  const sentinelRef = useRef(null);
  const isInView = useInView(sentinelRef);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const idSection = document.getElementById(id.replace("#", ""));
    if (idSection) {
      idSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={sentinelRef} className={styles.sentinel_ref}>
      <motion.nav
        className={`${styles.links_spa} ${!isInView ? styles.floating_spa : ""}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          flexDirection: isInView ? "column" : "row",
        }}
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.ul
          layout
          style={{
            flexDirection: isInView ? "column" : "row",
          }}
        >
          {links.map((link) => (
            <motion.li
              key={link.href}
              layoutId={`nav-link-${link.href}`}
              whileHover={{
                scale: isInView ? 1.2 : 1,
                y: -4,
                boxShadow: isInView ? "0px 2px 10px 1px #f5f5f5af" : "none",
                backgroundColor: "#e1b12c",
              }}
            >
              <a
                href={link.href}
                aria-label={link.label}
                onClick={(e) => handleNav(e, link.href)}
                style={{
                  color: "#02182b",
                }}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </div>
  );
};
