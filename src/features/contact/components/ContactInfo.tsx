import s from "../ContactSection.module.css";
import { types } from "@/shared";

interface ContactInfoProps {
  links: types.NavLink[];
}

export const ContactInfo = ({ links }: ContactInfoProps) => {
  return (
    <div className={s.info_container}>
      <div className={s.contact}>
        <h2>CONTACTO</h2>
        <address>
          <p title="Email">juansimontellezduran@gmail.com</p>
          <p title="Número de teléfono">+57 316 8505764</p>
        </address>
      </div>

      <div className={s.aboutme}>
        <h2>SOBRE MÍ</h2>
        <div aria-label="Enlaces a sitios externos">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                title={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon aria-label={link.label} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
