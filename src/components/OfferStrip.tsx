import React from 'react';
import { Link } from 'react-router-dom';

const offers = [
  <>Complimentary shipping on orders above <strong>₹999</strong></>,
  <>Newborn Starter Set — <strong>save ₹280</strong></>,
  <>Bath & Bedtime Ritual Set — <strong>save ₹251</strong></>,
  <>Thoughtful routines, transparent formulas, gentle care</>,
];

export default function OfferStrip() {
  const loop = [...offers, ...offers];
  return (
    <section aria-label="Current offers" className="offer-strip border-t border-white/10 bg-charcoal text-ivory overflow-hidden">
      <Link to="/shop" className="block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sage">
        <div className="offer-strip-track flex w-max items-center py-3.5 sm:py-4 group-hover:[animation-play-state:paused]">
          {loop.map((offer, index) => (
            <React.Fragment key={index}>
              <span className="whitespace-nowrap px-7 sm:px-10 text-[11px] sm:text-xs font-medium tracking-[0.13em] uppercase">
                {offer}
              </span>
              <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-sage" />
            </React.Fragment>
          ))}
        </div>
      </Link>
    </section>
  );
}
