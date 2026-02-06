import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';
import styles from './Footer.module.css';

// Clover/Yonca SVG Logo
const CloverLogo = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={styles.logo}
  >
    <path 
      d="M16 8C16 8 12 4 8 4C4 4 2 8 2 10C2 14 8 16 16 16C8 16 2 18 2 22C2 24 4 28 8 28C12 28 16 24 16 24C16 24 20 28 24 28C28 28 30 24 30 22C30 18 24 16 16 16C24 16 30 14 30 10C30 8 28 4 24 4C20 4 16 8 16 8Z" 
      fill="currentColor"
    />
    <circle cx="16" cy="16" r="3" fill="var(--color-bg-primary)" />
  </svg>
);

export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/yoncaisyar', 
      label: 'LinkedIn' 
    },
    { 
      icon: Mail, 
      href: 'mailto:yoncaisyar@email.com', 
      label: 'Email' 
    },
    { 
      icon: Phone, 
      href: 'tel:+905551234567', 
      label: 'Phone' 
    }
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        {/* Brand */}
        <motion.div 
          className={styles.brand}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <CloverLogo />
          <span className={styles.brandName}>{t('footer.brand')}</span>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className={styles.social}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={styles.socialLink}
              aria-label={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p 
          className={styles.copyright}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('footer.copyright')}
        </motion.p>
      </div>
    </footer>
  );
}

