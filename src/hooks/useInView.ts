import { useState, useEffect, useRef, RefObject } from 'react';

export interface UseInViewOptions {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

/**
 * Tracks whether an element is visible in the viewport using IntersectionObserver.
 * Useful for lazy-loading content (e.g. images) when the element comes into view.
 */
export function useInView<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: UseInViewOptions = {},
): boolean {
  const { rootMargin = '100px', threshold = 0, triggerOnce = false } = options;
  const [isInView, setIsInView] = useState(false);
  const hasBeenInView = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || (triggerOnce && hasBeenInView.current)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const inView = entry.isIntersecting;
        if (inView) hasBeenInView.current = true;
        setIsInView(triggerOnce ? hasBeenInView.current || inView : inView);
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, rootMargin, threshold, triggerOnce]);

  return isInView;
}
