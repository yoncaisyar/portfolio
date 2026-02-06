import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSection } from '../../hooks/useScrollSection';
import styles from './Navbar.module.css';

const sectionIds = ['hero', 'projects', 'contact'];

export default function Navbar() {
  const { t } = useTranslation();
  const { activeSection, scrollToSection } = useScrollSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Sayfa başındaysa her zaman göster
      if (currentScrollY < 50) {
        setIsScrolledDown(false);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        
        // Scroll yönünü kontrol et
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Aşağı scroll - gizle
          setIsScrolledDown(true);
        } else if (currentScrollY < lastScrollY.current) {
          // Yukarı scroll - göster
          setIsScrolledDown(false);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') }
  ];

  return (
    <motion.nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isScrolledDown ? styles.hidden : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isScrolledDown ? -100 : 0, 
        opacity: 1 
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className={styles.container}>
        {/* Desktop Navigation */}
        <div className={styles.navPill}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>


        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`${styles.mobileNavItem} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
