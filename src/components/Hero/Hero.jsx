import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Download } from 'lucide-react';
import styles from './Hero.module.css';

// Yonca's illustration - loaded from public folder for better performance
const baseUrl = import.meta.env.BASE_URL;
const heroImage = `${baseUrl}yonca-profil.png`;
const cvPdfUrl = `${baseUrl}malisevdinoglu.pdf`;

export default function Hero() {
  const { t } = useTranslation();

  const handleViewCV = () => {
    window.open(cvPdfUrl, '_blank');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPdfUrl;
    link.download = 'malisevdinoglu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 }
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={styles.badge} variants={itemVariants}>
            {t('hero.badge')}
          </motion.span>
          
          <motion.h1 className={styles.title} variants={itemVariants}>
            {t('hero.greeting')}
            <br />
            <span className={styles.name}>{t('hero.name')}</span>
          </motion.h1>
          
          <motion.p className={styles.description} variants={itemVariants}>
            {t('hero.description')}
          </motion.p>
          
          <motion.div className={styles.cvButtonGroup} variants={itemVariants}>
            <motion.button
              className={styles.cvButton}
              onClick={handleViewCV}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText size={16} />
              {t('hero.viewCV')}
            </motion.button>
            
            <motion.button
              className={styles.cvButton}
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={16} />
              {t('hero.downloadCV')}
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.imageContainer}>
            <div className={styles.imageBg} />
            <img
              src={heroImage}
              alt="Yonca İşyar"
              className={styles.image}
            />
          </div>
          
          {/* Decorative elements */}
          <div className={styles.decorCircle1} />
          <div className={styles.decorCircle2} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}

