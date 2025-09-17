'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SlidingNumberProps {
  value: number;
  className?: string;
}

export function SlidingNumber({ value, className }: SlidingNumberProps) {
  return (
    <div className={cn('relative inline-flex overflow-hidden', className)}>
      <motion.span
        key={value}
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ y: '-100%' }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
        }}
        className="block tabular-nums"
      >
        {value}
      </motion.span>
    </div>
  );
}