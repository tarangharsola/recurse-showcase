'use client';

import { useEffect, useState } from 'react';
import { SlidingNumber } from '@/components/ui/sliding-number';

interface StatProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const AnimatedStat = ({ target, suffix = '', label, duration = 2000 }: StatProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 flex items-center justify-center gap-1">
        <SlidingNumber value={count} className="tabular-nums" />
        <span>{suffix}</span>
      </div>
      <div className="text-foreground/70 font-medium">{label}</div>
    </div>
  );
};

export const AnimatedStats = () => {
  return (
    <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
      <AnimatedStat target={200} suffix="+" label="Brands Transformed" />
      <AnimatedStat target={5} suffix="x" label="Average ROI Increase" />
      <AnimatedStat target={24} suffix="/7" label="Creative Innovation" />
    </div>
  );
};