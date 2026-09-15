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
    <div className="offer-strip relative z-[60] overflow-hidden bg-charcoal text-white border-b border-white/10" aria-label="Current offers">
      <Link to="/shop" className="block py-2.5 sm:py-3 group">
        <div className="offer-marquee flex w-max items-center motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          {loop.map((offer, i) => (
            <React.Fragment key={`${offer}-${i}`}>
              <span className="whitespace-nowrap px-6 sm:px-9 text-[11px] sm:text-xs font-medium tracking-[0.12em] uppercase">{offer}</span>
              <span className="text-sage text-xs" aria-hidden="true">✦</span>
            </React.Fragment>
          ))}
        </div>
      </Link>
    </div>
  );
}
