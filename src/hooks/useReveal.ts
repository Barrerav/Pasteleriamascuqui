'use client';

import { useEffect, useRef } from 'react';

/**
 * Shared IntersectionObserver hook for reveal animations.
 * Observes all .reveal, .reveal-left, .reveal-right children
 * within the returned ref and adds .visible when they enter viewport.
 */
export function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold }
    );

    el.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((child) =>
      observer.observe(child)
    );

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
