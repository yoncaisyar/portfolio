import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { categories } from '../../data/projects';
import styles from './CategoryMenu.module.css';

export default function CategoryMenu({ isOpen, onClose, triggerRef, selectedCategory, onCategorySelect }) {
  const { t } = useTranslation();
  const dropdownRef = useRef(null);

  // Dışarı tıklandığında menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        triggerRef?.current && 
        !triggerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose, triggerRef]);

  const handleCategorySelect = (categoryId) => {
    if (onCategorySelect) {
      onCategorySelect(categoryId);
    }
    
    // Kategori bölümüne scroll yap
    const categoryElement = document.getElementById(categoryId);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          className={styles.dropdownMenu}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.menuItem} ${
                selectedCategory === category.id ? styles.menuItemActive : ''
              }`}
              onClick={() => handleCategorySelect(category.id)}
            >
              {t(`projects.categories.${category.id}.title`)}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}


