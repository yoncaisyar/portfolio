import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

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
            <motion.h2 className={styles.title} variants={itemVariants}>
              {t('contact.title')}
            </motion.h2>

            <motion.a
              href="mailto:yoncaisyar@email.com"
              className={styles.ctaButton}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              {t('contact.cta')}
            </motion.a>
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

