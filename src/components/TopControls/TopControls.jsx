import { useTranslation } from 'react-i18next';
import { Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import styles from './TopControls.module.css';

export default function TopControls() {
  const { i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr');
  };

  return (
    <div className={styles.topControls} aria-label="Üst kontroller">
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.iconButton}
          onClick={toggleLang}
          aria-label="Dil değiştir"
          title="Dil değiştir"
        >
          <Globe size={18} strokeWidth={2} aria-hidden />
          <span className={styles.langLabel}>{i18n.language === 'tr' ? 'TR' : 'EN'}</span>
        </button>
        <button
          type="button"
          className={styles.iconButton}
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Karanlık tema' : 'Açık tema'}
          title={theme === 'light' ? 'Karanlık tema' : 'Açık tema'}
        >
          {theme === 'light' ? (
            <Sun size={18} strokeWidth={2} aria-hidden />
          ) : (
            <Moon size={18} strokeWidth={2} aria-hidden />
          )}
        </button>
      </div>
    </div>
  );
}
