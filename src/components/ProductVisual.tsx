import React from 'react';
import { Product } from '../types';

const accents: Record<string, string> = {
  'Bath & Cleansing': '#BFD8D0',
  'Skin & Moisture': '#D8C8A8',
  'Diaper Care': '#E5B9A7',
  'Everyday Essentials': '#C9D7B8',
  'Bundles': '#D7C7DD',
};

function shapeFor(product: Product) {
  const type = (product.subcategory || product.name).toLowerCase();
  if (type.includes('wipe')) return 'pack';
  if (type.includes('balm') || type.includes('cream')) return product.size.toLowerCase().includes('g') ? 'jar' : 'tube';
  if (type.includes('oil')) return 'dropper';
  if (product.category === 'Bundles' || type.includes('set')) return 'box';
  if (type.includes('lotion') || type.includes('wash') || type.includes('cleanser')) return 'pump';
  return 'bottle';
}

export default function ProductVisual({ product, className = '' }: { product: Product; className?: string }) {
  const accent = accents[product.category] || '#C9D7B8';
  const shape = shapeFor(product);
  const label = product.name.replace('Kin & Clear', '').trim();
  const base = 'relative flex items-center justify-center overflow-hidden bg-[#F2F1EA]';
  const body = 'relative bg-[#FBFAF4] border border-black/10 shadow-[0_24px_55px_rgba(44,44,44,.12)] flex flex-col items-center justify-center text-center px-4 transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-[1.015]';

  const copy = (
    <>
      <span className="font-serif text-[15px] sm:text-[17px] tracking-tight">Kin & Clear</span>
      <span className="mt-3 text-[8px] sm:text-[9px] uppercase tracking-[.22em] text-charcoal/55 leading-relaxed max-w-[130px]">{label}</span>
      <span className="mt-2 text-[8px] text-charcoal/45">{product.size}</span>
      <span className="absolute bottom-0 left-0 right-0 h-2" style={{ backgroundColor: accent }} />
    </>
  );

  return (
    <div className={`${base} ${className}`} aria-label={`${product.name} packaging illustration`} role="img">
      <div className="absolute inset-0 opacity-60" style={{ background: `radial-gradient(circle at 68% 22%, ${accent}66, transparent 28%), radial-gradient(circle at 24% 80%, ${accent}35, transparent 30%)` }} />
      <div className="absolute w-56 h-10 rounded-[100%] bg-black/[.06] blur-xl bottom-[12%]" />
      {shape === 'pump' && <div className={`${body} w-[38%] min-w-[130px] max-w-[190px] h-[62%] rounded-[26px] pt-7`}><div className="absolute -top-8 w-[46%] h-9 bg-[#E8E6DE] rounded-t-xl border border-black/10"/><div className="absolute -top-11 left-[50%] w-[38%] h-3 bg-[#DDDAD1] rounded-full"/>{copy}</div>}
      {shape === 'bottle' && <div className={`${body} w-[36%] min-w-[125px] max-w-[180px] h-[64%] rounded-[38px]`}><div className="absolute -top-6 w-[55%] h-8 bg-[#DDDAD1] rounded-t-xl border border-black/10"/>{copy}</div>}
      {shape === 'tube' && <div className={`${body} w-[36%] min-w-[125px] max-w-[175px] h-[65%] rounded-t-[26px] rounded-b-[10px]`}><div className="absolute -bottom-4 w-[70%] h-5 bg-[#DDDAD1] rounded-b-lg border border-black/10"/>{copy}</div>}
      {shape === 'jar' && <div className={`${body} w-[48%] min-w-[155px] max-w-[220px] h-[38%] rounded-[30px] mt-16`}><div className="absolute -top-8 w-[96%] h-10 bg-[#E4E1D8] rounded-t-[24px] border border-black/10"/>{copy}</div>}
      {shape === 'dropper' && <div className={`${body} w-[31%] min-w-[110px] max-w-[150px] h-[58%] rounded-[28px] mt-10`}><div className="absolute -top-12 w-[48%] h-14 bg-charcoal rounded-t-[18px]"/>{copy}</div>}
      {shape === 'pack' && <div className={`${body} w-[62%] min-w-[210px] max-w-[310px] h-[36%] rounded-[26px]`}><div className="absolute top-5 right-5 w-16 h-8 rounded-full bg-[#E6E3DB] border border-black/10"/>{copy}</div>}
      {shape === 'box' && <div className={`${body} w-[56%] min-w-[190px] max-w-[280px] h-[58%] rounded-[14px]`}><div className="absolute inset-y-0 left-0 w-3" style={{backgroundColor: accent}}/>{copy}</div>}
    </div>
  );
}
