import React from 'react';
import { Link } from 'react-router-dom';

const offers = [
  'WELCOME10 — 10% off your first order',
  'Free shipping above ₹999',
  'Newborn Starter Set — save ₹280',
  'Bath & Bedtime Ritual Set — save ₹251',
  'Bundle more. Save more.',
];

export default function OfferStrip() {
  const loop = [...offers, ...offers];
  return (
    <div className="offer-strip fixed inset-x-0 top-0 z-[60] h-7 overflow-hidden bg-charcoal text-white border-b border-white/10" aria-label="Current offers">
      <Link to="/shop" className="group flex h-7 items-center">
        <div className="offer-marquee flex w-max items-center motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          {loop.map((offer, i) => (
            <React.Fragment key={`${offer}-${i}`}>
              <span className="whitespace-nowrap px-5 sm:px-8 text-[10px] sm:text-[11px] font-medium tracking-[0.12em] uppercase">{offer}</span>
              <span className="text-sage text-xs" aria-hidden="true">✦</span>
            </React.Fragment>
          ))}
        </div>
      </Link>
    </div>
  );
}
