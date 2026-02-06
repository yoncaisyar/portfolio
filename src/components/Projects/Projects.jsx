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
    <div className={styles.categorySection}>
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

      {/* Proje Bilgisi - Kartın Altında */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          className={styles.projectInfo}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <span className={styles.projectCategory}>{t(`projects.categories.${category.id}.title`)}</span>
          <h3 className={styles.projectTitle}>{t(`projects.categories.${category.id}.projects.${activeProject.id}.title`)}</h3>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({ project, categoryId }) {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const hasMultipleImages = project.images && project.images.length > 1;
  const coverImage = project.images[0];
  const detailImage = hasMultipleImages ? project.images[1] : coverImage;
  const currentImage = isHovered && hasMultipleImages ? detailImage : coverImage;

  return (
    <motion.div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Görsel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className={styles.cardImage}
          style={{ backgroundImage: `url(${currentImage})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

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
              <h4 className={styles.overlayTitle}>{t(`projects.categories.${categoryId}.projects.${project.id}.title`)}</h4>
              <p className={styles.overlayDescription}>{t(`projects.categories.${categoryId}.projects.${project.id}.description`)}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
