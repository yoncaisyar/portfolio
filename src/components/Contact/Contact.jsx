import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const BionlukIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6 4h6.5C15 4 17 5.8 17 8c0 1.4-.7 2.6-1.8 3.3C16.5 12 17.5 13.3 17.5 15c0 2.5-2 4-4.5 4H6V4zm3 6.5h3c.8 0 1.5-.6 1.5-1.5S12.8 7.5 12 7.5H9v3zm0 5.5h3.5c.9 0 1.5-.6 1.5-1.5S13.4 13 12.5 13H9v3z"/>
  </svg>
);
import styles from './Contact.module.css';

const socialLinks = [
  {
    id: 'linkedin',
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    handle: '@yonca-isyar',
    href: 'https://www.linkedin.com/in/yonca-isyar',
    colorVar: '--social-linkedin',
  },
  {
    id: 'bionluk',
    icon: BionlukIcon,
    label: 'Bionluk',
    handle: 'bionluk.com/yoncisyar',
    href: 'https://bionluk.com/yoncisyar',
    colorVar: '--social-bionluk',
  },
  {
    id: 'email',
    icon: FaEnvelope,
    label: 'E-Posta',
    handle: 'yoncaisyar2001@gmail.com',
    href: 'mailto:yoncaisyar2001@gmail.com',
    colorVar: '--social-email',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.sectionTitle}>İletişim</h2>
      <div className={styles.wrapper}>
        <div className={styles.glassPanel}>
          <motion.div
            className={styles.content}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Başlık — mevcut metin korunur */}
            <motion.h2 className={styles.title} variants={itemVariants}>
              {t('contact.title')}
            </motion.h2>

            {/* CTA Butonu */}
            <motion.a
              href="mailto:yoncaisyar2001@gmail.com"
              className={styles.ctaButton}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              {t('contact.cta')}
            </motion.a>

            {/* Ayraç */}
            <motion.div className={styles.divider} variants={itemVariants} />

            {/* Sosyal Kartlar */}
            <motion.div className={styles.socialGrid} variants={itemVariants}>
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`${styles.socialCard} ${styles[link.id]}`}
                  variants={cardVariants}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.97 }}
                  aria-label={link.label}
                >
                  <span className={styles.socialIconWrap}>
                    <link.icon size={22} />
                  </span>
                  <span className={styles.socialInfo}>
                    <span className={styles.socialLabel}>{link.label}</span>
                    <span className={styles.socialHandle}>{link.handle}</span>
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative corner elements */}
        <div className={styles.cornerTL} />
        <div className={styles.cornerTR} />
        <div className={styles.cornerBL} />
        <div className={styles.cornerBR} />
      </div>
    </section>
  );
}
