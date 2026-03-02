import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import styles from './MobileScrollUI.module.css';

const SCROLL_TO_TOP_THRESHOLD = 300;

export default function MobileScrollUI() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

    const updateScroll = () => {
      if (!isMobile()) return;
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollPercent(maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0);
      setShowScrollTop(scrollY > SCROLL_TO_TOP_THRESHOLD);
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.wrapper} aria-hidden>
      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{ width: `${scrollPercent}%` }}
        />
      </div>
      <button
        type="button"
        className={`${styles.scrollToTop} ${showScrollTop ? styles.visible : ''}`}
        onClick={scrollToTop}
        aria-label="Yukarı çık"
        title="Yukarı çık"
      >
        <ChevronUp size={24} strokeWidth={2} aria-hidden />
      </button>
    </div>
  );
}
