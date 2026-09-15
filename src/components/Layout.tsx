import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import ScrollToTop from './ScrollToTop';
import OfferStrip from './OfferStrip';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <ScrollToTop />
      <Header />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <OfferStrip />
      <Footer />
      <CartDrawer />
    </div>
  );
}
