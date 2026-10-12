'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Specials from '../components/Specials';
import Featured from '../components/Featured';
import MenuBoard from '../components/MenuBoard';
import Space from '../components/Space';
import Process from '../components/Process';
import Instagram from '../components/Instagram';
import Reviews from '../components/Reviews';
import Loyalty from '../components/Loyalty';
import VisitBooking from '../components/VisitBooking';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="dlStack">
          <Intro />
          <Specials />
          <Featured />
          <MenuBoard />
          <Space />
          <Process />
          <Instagram />
          <Reviews />
          <Loyalty />
          <VisitBooking />
          <Footer />
        </div>
      </main>
    </>
  );
}
