'use client';

import { useEffect, useRef, useState } from 'react';
import { profile } from '@/data/profile';

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
}

function MetricCard({ value, label, suffix, active }: { value: number; label: string; suffix: string; active: boolean }) {
  const count = useCounter(value, 1500, active);
  const display = suffix === '★' ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <div className="flex flex-col items-center text-center px-4 py-8">
      <div className="font-display text-4xl sm:text-5xl font-bold text-rose">
        {display}
        <span className="text-gold">{suffix}</span>
      </div>
      <p className="text-white/80 text-sm mt-2 leading-snug">{label}</p>
    </div>
  );
}

export default function Metrics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Si ya es visible al montar → arrancar inmediatamente
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setActive(true);
      el.classList.add('visible');
      el.querySelectorAll('.reveal').forEach((r) => r.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    el.querySelectorAll('.reveal').forEach((r) => observer.observe(r));

    // Fallback: si el observer no dispara en 2s, animar igualmente
    const timer = setTimeout(() => setActive(true), 2000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-brown-dark via-brown to-brown-dark">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal text-center mb-8">
          <p className="text-gold font-semibold text-sm tracking-widest uppercase">En números</p>
          <h2 className="font-display text-3xl font-bold text-white mt-2">
            Cuatro años endulzando Ciudad Real
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-white/10">
          {profile.metrics.map((m) => (
            <MetricCard key={m.label} value={m.value} label={m.label} suffix={m.suffix} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
