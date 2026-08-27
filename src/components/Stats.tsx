import { useEffect, useRef, useState } from 'react';
import { stats } from '@/data/content';

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start: number | null = null;

    function step(timestamp: number) {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, visible);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <span className="font-display text-4xl font-extrabold text-brand-ink sm:text-5xl">
        {count}
        {suffix}
      </span>
      <span className="max-w-[10rem] text-sm text-brand-muted">{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="logros" className="container-page py-16">
      <h2 className="text-center font-display text-2xl font-bold text-brand-ink sm:text-3xl">
        Lo que hemos logrado
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
        {stats.map((stat) => (
          <StatItem key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
