import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollSection } from '../../hooks/useScrollSection';
import styles from './SideProgress.module.css';

const sectionIds = ['hero', 'projects', 'contact'];

export default function SideProgress() {
  const { t } = useTranslation();
  const { activeSection, scrollToSection } = useScrollSection(sectionIds);
  
  const sectionLabels = {
    hero: t('nav.about'),
    projects: t('nav.projects'),
    contact: t('nav.contact')
  };

  return (
    <motion.div
      className={styles.sideProgress}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Section Indicators */}
      <div className={styles.indicators}>
        {sectionIds.map((sectionId) => (
          <button
            key={sectionId}
            className={`${styles.indicator} ${activeSection === sectionId ? styles.active : ''}`}
            onClick={() => scrollToSection(sectionId)}
            aria-label={sectionLabels[sectionId]}
            title={sectionLabels[sectionId]}
          >
            <span className={styles.indicatorDot} />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

