import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useScrollSection } from '../../hooks/useScrollSection';
import CategoryMenu from '../Projects/CategoryMenu';
import styles from './Navbar.module.css';

const sectionIds = ['hero', 'projects', 'contact'];

export default function Navbar() {
  const { t } = useTranslation();
  const { activeSection, scrollToSection } = useScrollSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const projectsButtonRef = useRef(null);
  const lastScrollY = useRef(0);

  // Mobil menü açıkken sayfanın kaydırılmasını engelle
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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

  const handleProjectsClick = () => {
    scrollToSection('projects');
    // Mobile'da tıklama ile menüyü aç/kapat
    if (window.innerWidth <= 768) {
      setIsProjectsMenuOpen(!isProjectsMenuOpen);
    }
  };

  const handleProjectsMouseEnter = () => {
    // Desktop'ta hover ile menüyü aç
    if (window.innerWidth > 768) {
      setIsProjectsMenuOpen(true);
    }
  };

  const handleProjectsMouseLeave = () => {
    // Desktop'ta hover ile menüyü kapat
    if (window.innerWidth > 768) {
      setIsProjectsMenuOpen(false);
    }
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    scrollToSection('projects');
  };

  return (
    <motion.nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isScrolledDown ? styles.hidden : ''}`}
      initial={{ opacity: 0 }}
      animate={{
        y: isScrolledDown ? -100 : 0,
        opacity: 1
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className={styles.container}>
        {/* Desktop Navigation */}
        <div className={styles.navPill}>
          {navItems.map((item) => {
            if (item.id === 'projects') {
              return (
                <div
                  key={item.id}
                  className={styles.projectsNavWrapper}
                  onMouseEnter={handleProjectsMouseEnter}
                  onMouseLeave={handleProjectsMouseLeave}
                >
                  <button
                    ref={projectsButtonRef}
                    className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''} ${isProjectsMenuOpen ? styles.hasDropdown : ''}`}
                    onClick={handleProjectsClick}
                  >
                    {item.label}
                    <ChevronDown size={14} className={styles.dropdownArrow} />
                  </button>
                  <CategoryMenu
                    isOpen={isProjectsMenuOpen}
                    onClose={() => setIsProjectsMenuOpen(false)}
                    triggerRef={projectsButtonRef}
                    selectedCategory={selectedCategory}
                    onCategorySelect={handleCategorySelect}
                  />
                </div>
              );
            }
            return (
              <button
                key={item.id}
                className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            );
          })}
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
            {navItems.map((item) => {
              if (item.id === 'projects') {
                return (
                  <div key={item.id} className={styles.mobileProjectsWrapper}>
                    <button
                      className={`${styles.mobileNavItem} ${activeSection === item.id ? styles.active : ''}`}
                      onClick={() => {
                        scrollToSection(item.id);
                        setIsProjectsMenuOpen(!isProjectsMenuOpen);
                      }}
                    >
                      {item.label}
                    </button>
                    <CategoryMenu
                      isOpen={isProjectsMenuOpen}
                      onClose={() => setIsProjectsMenuOpen(false)}
                      triggerRef={null}
                      selectedCategory={selectedCategory}
                      onCategorySelect={handleCategorySelect}
                    />
                  </div>
                );
              }
              return (
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
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
