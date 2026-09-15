import React from 'react';
import { cn } from '../lib/utils';

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
  light?: boolean;
};

export default function BrandLogo({ compact = false, className, light = false }: BrandLogoProps) {
  const ink = light ? '#FAFAF7' : '#24251F';
  return (
    <span className={cn('kc-brand inline-flex items-center select-none', compact ? 'gap-2' : 'gap-2.5', className)} aria-label="Kin & Clear">
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={cn('kc-mark shrink-0', compact ? 'h-8 w-8' : 'h-9 w-9')}
      >
        <defs>
          <linearGradient id="kcSage" x1="8" y1="8" x2="54" y2="57" gradientUnits="userSpaceOnUse">
            <stop stopColor="#657457" />
            <stop offset="0.55" stopColor="#9CAF88" />
            <stop offset="1" stopColor="#718060" />
          </linearGradient>
          <linearGradient id="kcClay" x1="42" y1="15" x2="54" y2="45" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E7B497" />
            <stop offset="1" stopColor="#C9795C" />
          </linearGradient>
          <filter id="kcTexture" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="17" result="noise" />
            <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
            <feComponentTransfer in="mono" result="softNoise"><feFuncA type="table" tableValues="0 0.12" /></feComponentTransfer>
            <feBlend in="SourceGraphic" in2="softNoise" mode="multiply" />
          </filter>
        </defs>
        {/* A custom K/C monogram: the K is structural, the C is a protective orbit. */}
        <path d="M13 9.5v45" stroke={ink} strokeWidth="6.4" strokeLinecap="round" />
        <path d="M16.5 34.5 36 14.8" stroke="url(#kcSage)" strokeWidth="6" strokeLinecap="round" />
        <path d="M16.8 34.5 37.8 53" stroke={ink} strokeWidth="6.4" strokeLinecap="round" />
        <path d="M51.2 19.5c-4.3-4.4-10.3-6.6-16.1-5.7-9.6 1.4-16.8 9.8-16.8 19.6 0 10.8 8.7 19.5 19.5 19.5 5.1 0 9.8-1.9 13.4-5.1" fill="none" stroke="url(#kcSage)" strokeWidth="3.8" strokeLinecap="round" filter="url(#kcTexture)" />
        <path d="M48.8 15.3c5.2 2.7 7.7 7.8 6.4 13.4-1.3 5.6-5.9 9.5-11.8 10.3 1.1-5.9 3-12.2 5.4-23.7Z" fill="url(#kcClay)" filter="url(#kcTexture)" />
        <circle cx="44.1" cy="38.7" r="2.15" fill="#FAFAF7" />
      </svg>
      <span className="kc-wordmark whitespace-nowrap" style={{ color: ink }}>
        <span className="kc-word-kin">Kin</span>
        <span className="kc-amp">&</span>
        <span className="kc-word-clear">Clear</span>
      </span>
    </span>
  );
}
