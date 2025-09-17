'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface GlassRadioOption {
  value: string;
  label: string;
  description?: string;
}

interface GlassRadioGroupProps {
  options?: GlassRadioOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function GlassRadioGroup({ 
  options = [
    { value: 'silver', label: 'Silver', description: 'Basic package' },
    { value: 'gold', label: 'Gold', description: 'Popular choice' },
    { value: 'platinum', label: 'Platinum', description: 'Premium package' }
  ],
  defaultValue = 'gold',
  onChange,
  className 
}: GlassRadioGroupProps) {
  const [selected, setSelected] = useState(defaultValue);

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className={cn('flex gap-3', className)}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleChange(option.value)}
          className={cn(
            'relative flex flex-col items-center justify-center p-4 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-105',
            selected === option.value 
              ? 'bg-white/30 border-primary/50 shadow-lg ring-2 ring-primary/30' 
              : 'bg-white/10 border-white/20 hover:bg-white/20'
          )}
        >
          <div className={cn(
            'w-4 h-4 rounded-full border-2 mb-2 transition-colors',
            selected === option.value 
              ? 'border-primary bg-primary' 
              : 'border-white/40'
          )}>
            {selected === option.value && (
              <div className="w-full h-full rounded-full bg-white scale-50" />
            )}
          </div>
          <span className="font-medium text-sm">{option.label}</span>
          {option.description && (
            <span className="text-xs text-foreground/60 mt-1">{option.description}</span>
          )}
        </button>
      ))}
    </div>
  );
}