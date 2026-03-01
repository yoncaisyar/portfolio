import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './IntroScreen.module.css';

export default function IntroScreen({ onComplete }) {
  const { cells, cols, rows } = useMemo(() => {
    const isMobile = window.innerWidth < 768;
    const cols = isMobile ? 8 : 16;
    const rows = isMobile ? 6 : 10;
    const centerCol = (cols - 1) / 2;
    const centerRow = (rows - 1) / 2;
    const maxDist = Math.sqrt(centerCol ** 2 + centerRow ** 2);

    const cells = Array.from({ length: cols * rows }, (_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const dx = col - centerCol;
      const dy = row - centerRow;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const baseAngle = dist < 0.01 ? Math.random() * Math.PI * 2 : Math.atan2(dy, dx);
      const variation = (Math.random() - 0.5) * Math.PI;
      const angle = baseAngle + variation;
      const magnitude = 350 + Math.random() * 250;

      return {
        id: i,
        normalizedDist: dist / maxDist,
        exitX: Math.cos(angle) * magnitude,
        exitY: Math.sin(angle) * magnitude,
        exitRotate: (Math.random() - 0.5) * 360,
      };
    });

    return { cells, cols, rows };
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = '';
      onComplete();
    }, 2450);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div className={styles.overlay}>
      <motion.div
        className={styles.monogram}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1, 1, 0.9],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 1.65,
          times: [0, 0.27, 0.72, 1],
          ease: 'easeInOut',
        }}
      >
        <span className={styles.monogramLetters}>YONCA İŞYAR</span>
        <span className={styles.monogramLabel}>Graphic Designer</span>
      </motion.div>

      <div
        className={styles.grid}
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {cells.map((cell) => (
          <motion.div
            key={cell.id}
            className={styles.cell}
            animate={{
              x: cell.exitX,
              y: cell.exitY,
              rotate: cell.exitRotate,
              scale: 0,
              opacity: 0,
            }}
            transition={{
              delay: 1.2 + cell.normalizedDist * 0.65,
              duration: 0.45,
              ease: [0.55, 0, 1, 0.45],
            }}
          />
        ))}
      </div>
    </div>
  );
}
