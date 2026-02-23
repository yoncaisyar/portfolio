import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { categories } from '../../data/projects';
import styles from './Projects.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Projects() {
  const { t } = useTranslation();
  
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>
      <div className={styles.categoriesList}>
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <CategorySlider category={category} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CategorySlider({ category }) {
  const { t } = useTranslation();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const activeProject = category.projects[activeIndex];

  return (
    <div id={category.id} className={styles.categorySection}>
      {/* Kategori Başlığı */}
      <motion.h3
        className={styles.categoryTitle}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        {t(`projects.categories.${category.id}.title`)}
      </motion.h3>

      {/* Slider Container */}
      <div className={styles.sliderContainer}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={handlePrev}
          aria-label="Önceki"
        >
          <ChevronLeft size={31} />
        </button>

        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
            }}
            className={styles.swiper}
          >
            {category.projects.map((project) => (
              <SwiperSlide key={project.id} className={styles.slide}>
                <ProjectCard project={project} categoryId={category.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={handleNext}
          aria-label="Sonraki"
        >
          <ChevronRight size={31} />
        </button>
      </div>
    </div>
  );
}

function ProjectCard({ project, categoryId }) {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const hasMultipleImages = project.images && project.images.length > 1;
  const coverImage = project.images[0];
  const detailImage = hasMultipleImages ? project.images[1] : coverImage;
  const hasSideBySideDetails = project.images && project.images.length === 3; // ARBORİS gibi 3 görseli olanlar
  const hasMultipleDetails = project.images && project.images.length > 5; // Johnsons Baby gibi 5+ detay görseli olanlar
  const detailImages = hasSideBySideDetails ? [project.images[1], project.images[2]] : [];
  const multiDetailImages = hasMultipleDetails ? project.images.slice(1) : []; // Kapak hariç tüm detay görselleri

  return (
    <motion.div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Görsel */}
      {isHovered && hasMultipleDetails ? (
        // 5+ görseli olan projeler için grid layout (Johnsons Baby)
        <div className={styles.multiDetailGrid}>
          {multiDetailImages.map((img, idx) => (
            <motion.div
              key={img}
              className={styles.gridImage}
              style={{ backgroundImage: `url(${img})` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            />
          ))}
        </div>
      ) : isHovered && hasSideBySideDetails ? (
        // 3 görseli olan projeler için yan yana layout (ARBORİS)
        <div className={styles.sideBySideImages}>
          {detailImages.map((img, idx) => (
            <motion.div
              key={img}
              className={styles.sideBySideImage}
              style={{ backgroundImage: `url(${img})` }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            />
          ))}
        </div>
      ) : (
        // Normal görsel (kapak veya tek detay)
        <AnimatePresence mode="wait">
          <motion.div
            key={isHovered && hasMultipleImages ? detailImage : coverImage}
            className={styles.cardImage}
            style={{ backgroundImage: `url(${isHovered && hasMultipleImages ? detailImage : coverImage})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
      )}

      {/* Proje Başlığı - Görsel Altında Gölgeli Overlay (sadece hover kapalıyken) */}
      {!isHovered && (
        <div className={styles.titleOverlay}>
          <h3 className={styles.cardTitle}>{t(`projects.categories.${categoryId}.projects.${project.id}.title`)}</h3>
        </div>
      )}

      {/* Hover Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={styles.cardOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.overlayContent}>
              <h3 className={styles.overlayTitle}>{t(`projects.categories.${categoryId}.projects.${project.id}.title`)}</h3>
              <p className={styles.overlayDescription}>{t(`projects.categories.${categoryId}.projects.${project.id}.description`)}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
