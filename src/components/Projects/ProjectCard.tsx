import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';
import type { Project } from '../../types';
import {
  SIDE_BY_SIDE_IMAGE_COUNT,
  MULTI_GRID_MIN_IMAGE_COUNT,
  ANIMATION_DURATION_NORMAL,
  STAGGER_DELAY_SMALL,
  STAGGER_DELAY_MEDIUM,
} from '../../constants';
import styles from './Projects.module.css';

const preloadCache = new Set<string>();

function preloadImage(url: string): void {
  if (preloadCache.has(url)) return;
  preloadCache.add(url);
  const img = new Image();
  img.src = url;
}

interface ProjectCardImageProps {
  images: string[];
  isHovered: boolean;
  coverImageUrl: string | null;
}

function ProjectCardImage({ images, isHovered, coverImageUrl }: ProjectCardImageProps) {
  const coverImage = images[0];
  const hasMultipleImages = images.length > 1;
  const detailImage = hasMultipleImages ? images[1] : coverImage;
  const hasSideBySideDetails = images.length === SIDE_BY_SIDE_IMAGE_COUNT;
  const hasMultipleDetails = images.length > MULTI_GRID_MIN_IMAGE_COUNT;
  const detailImages = hasSideBySideDetails ? [images[1], images[2]] : [];
  const multiDetailImages = hasMultipleDetails ? images.slice(1) : [];

  if (isHovered && hasMultipleDetails) {
    return (
      <div className={styles.multiDetailGrid}>
        {multiDetailImages.map((img, idx) => (
          <motion.div
            key={img}
            className={styles.gridImage}
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: ANIMATION_DURATION_NORMAL, delay: idx * STAGGER_DELAY_SMALL }}
          />
        ))}
      </div>
    );
  }

  if (isHovered && hasSideBySideDetails) {
    return (
      <div className={styles.sideBySideImages}>
        {detailImages.map((img, idx) => (
          <motion.div
            key={img}
            className={styles.sideBySideImage}
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: ANIMATION_DURATION_NORMAL, delay: idx * STAGGER_DELAY_MEDIUM }}
          />
        ))}
      </div>
    );
  }

  const displayUrl = isHovered && hasMultipleImages ? detailImage : coverImageUrl;
  const backgroundStyle = displayUrl ? { backgroundImage: `url(${displayUrl})` } : undefined;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={displayUrl ?? 'placeholder'}
        className={styles.cardImage}
        style={backgroundStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: ANIMATION_DURATION_NORMAL }}
      />
    </AnimatePresence>
  );
}

interface ProjectCardProps {
  project: Project;
  categoryId: string;
}

export default function ProjectCard({ project, categoryId }: ProjectCardProps) {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { rootMargin: '100px', threshold: 0, triggerOnce: true });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isInView || project.images.length <= 1) return;
    project.images.slice(1).forEach(preloadImage);
  }, [isInView, project.images]);

  const projectTitle = t(`projects.categories.${categoryId}.projects.${project.id}.title`);
  const projectDescription = t(
    `projects.categories.${categoryId}.projects.${project.id}.description`,
  );
  const coverImageUrl = isInView ? project.images[0] : null;

  return (
    <motion.div
      ref={cardRef}
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProjectCardImage
        images={project.images}
        isHovered={isHovered}
        coverImageUrl={coverImageUrl}
      />

      {!isHovered && (
        <div className={styles.titleOverlay}>
          <h3 className={styles.cardTitle}>{projectTitle}</h3>
        </div>
      )}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={styles.cardOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: ANIMATION_DURATION_NORMAL }}
          >
            <div className={styles.overlayContent}>
              <h3 className={styles.overlayTitle}>{projectTitle}</h3>
              <p className={styles.overlayDescription}>{projectDescription}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
