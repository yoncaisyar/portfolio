import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './IntroScreen.module.css';

const COLS = 16;
const ROWS = 10;
const CENTER_COL = (COLS - 1) / 2;
const CENTER_ROW = (ROWS - 1) / 2;
const MAX_DIST = Math.sqrt(CENTER_COL ** 2 + CENTER_ROW ** 2);

export default function IntroScreen({ onComplete }) {
  const cells = useMemo(() => {
    return Array.from({ length: COLS * ROWS }, (_, i) => {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      const dx = col - CENTER_COL;
      const dy = row - CENTER_ROW;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const baseAngle = dist < 0.01 ? Math.random() * Math.PI * 2 : Math.atan2(dy, dx);
      const variation = (Math.random() - 0.5) * Math.PI;
      const angle = baseAngle + variation;
      const magnitude = 350 + Math.random() * 250;

      return {
        id: i,
        normalizedDist: dist / MAX_DIST,
        exitX: Math.cos(angle) * magnitude,
        exitY: Math.sin(angle) * magnitude,
        exitRotate: (Math.random() - 0.5) * 360,
      };
    });
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
        <span className={styles.monogramLabel}>GRAFİK TASARIMCI</span>
      </motion.div>

      <div className={styles.grid}>
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
