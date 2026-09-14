import React from 'react';

const palettes: Record<string, [string,string,string]> = {
  baby: ['#DCE8E1','#F4D5C2','#FAFAF7'],
  bath: ['#CDE5E7','#E8EDE4','#FAFAF7'],
  ingredient: ['#DDE5CF','#E8D6B8','#FAFAF7'],
  journal: ['#E4DDD2','#D7E1D0','#FAFAF7'],
  standards: ['#D8E3D0','#E7D7C9','#FAFAF7'],
  label: ['#E8EDE4','#D8C8A8','#FAFAF7'],
};

export default function EditorialVisual({ kind='journal', title, className='' }: { kind?: string; title: string; className?: string }) {
  const [a,b,c] = palettes[kind] || palettes.journal;
  return (
    <div className={`relative overflow-hidden bg-white ${className}`} role="img" aria-label={title}>
      <div className="absolute inset-0" style={{background:`linear-gradient(135deg, ${c} 0%, ${a} 52%, ${b} 100%)`}} />
      <div className="absolute -right-[8%] -top-[12%] w-[55%] aspect-square rounded-full border border-white/70 bg-white/25 backdrop-blur-sm" />
      <div className="absolute right-[16%] top-[22%] w-[24%] aspect-square rounded-full bg-white/45 shadow-[0_25px_70px_rgba(44,44,44,.08)]" />
      <div className="absolute left-[8%] bottom-[12%] w-[38%] h-[24%] rounded-[100%] bg-white/35 blur-[1px] rotate-[-8deg]" />
      <svg className="absolute inset-0 w-full h-full opacity-45" viewBox="0 0 800 500" aria-hidden="true">
        <path d="M70 380 C180 250, 260 460, 390 315 S620 160, 760 245" fill="none" stroke="white" strokeWidth="2"/>
        <path d="M110 115 C210 60, 250 175, 350 125 S540 55, 690 110" fill="none" stroke="white" strokeWidth="1.5"/>
        <circle cx="620" cy="350" r="58" fill="none" stroke="white" strokeWidth="1.5"/>
      </svg>
      <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between gap-4">
        <div className="max-w-[70%]">
          <span className="text-[10px] uppercase tracking-[.24em] text-charcoal/50">Kin & Clear / Visual Study</span>
          <p className="font-serif text-xl sm:text-2xl text-charcoal mt-2 leading-tight">{title}</p>
        </div>
        <span className="w-10 h-10 rounded-full bg-white/65 border border-white flex items-center justify-center text-charcoal/50">↗</span>
      </div>
    </div>
  );
}
