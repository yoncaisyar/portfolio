import { useTranslation } from 'react-i18next';
import { useScrollSection } from '../../hooks/useScrollSection';
import styles from './SideProgress.module.css';

const sectionIds = ['hero', 'projects', 'contact'];
const labelKeys = { hero: 'nav.about', projects: 'nav.projects', contact: 'nav.contact' };

export default function SideProgress() {
  const { t } = useTranslation();
  const { activeSection, scrollToSection } = useScrollSection(sectionIds);

  return (
    <aside className={styles.sideProgress} aria-label="Sayfa bölümleri">
      <div className={styles.indicators}>
        {sectionIds.map((id) => (
          <button
            key={id}
            type="button"
            className={`${styles.indicator} ${activeSection === id ? styles.active : ''}`}
            onClick={() => scrollToSection(id)}
            aria-label={`${id} bölümüne git`}
            aria-current={activeSection === id ? 'true' : undefined}
          >
            <span className={styles.indicatorDot} />
            <span className={styles.label}>{t(labelKeys[id])}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
