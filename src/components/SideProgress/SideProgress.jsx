import { useScrollSection } from '../../hooks/useScrollSection';
import styles from './SideProgress.module.css';

const sectionIds = ['hero', 'projects', 'contact'];

export default function SideProgress() {
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
          </button>
        ))}
      </div>
    </aside>
  );
}
