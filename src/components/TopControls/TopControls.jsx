import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import styles from './TopControls.module.css';

const SCROLL_HIDE_THRESHOLD = 70;

export default function TopControls() {
  const { i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
    const handleScroll = () => {
      if (!isMobile()) return;
      setScrolled(window.scrollY > SCROLL_HIDE_THRESHOLD);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr');
  };

  return (
    <div className={`${styles.topControls} ${scrolled ? styles.scrolled : ''}`} aria-label="Üst kontroller">
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
