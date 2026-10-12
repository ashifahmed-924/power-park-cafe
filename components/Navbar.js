'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu as MenuIcon, ShoppingBag, X } from 'lucide-react';
import { ORDER_URL } from '../lib/siteConfig';

const links = [
  { id: 'menu', label: 'menu' },
  { id: 'about', label: 'about' },
  { id: 'space', label: 'space' },
  { id: 'reviews', label: 'reviews' },
  { id: 'visit', label: 'visit' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = ['home', ...links.map(l => l.id)].map(id => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -50% 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`dlNav ${scrolled ? 'isScrolled' : ''}`}>
        <div className="dlNavInner">
          <a className="dlBrand" href="#home" aria-label="Power Park Cafe home">power park</a>
          <nav className="dlNavLinks" aria-label="Primary">
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''}>{l.label}</a>
            ))}
          </nav>
          <div className="dlNavActions">
            <a className="dlIconBtn" href={ORDER_URL} target="_blank" rel="noopener noreferrer" aria-label="Order online">
              <ShoppingBag size={18} strokeWidth={2} />
            </a>
            <a className="dlBookBtn" href="#visit">
              book a table
              <span><ArrowUpRight size={14} strokeWidth={2.4} /></span>
            </a>
            <button className="dlIconBtn dlBurger" type="button" aria-label="Open menu" onClick={() => setOpen(true)}>
              <MenuIcon size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </header>

      <div className={`dlMobile ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button className="dlIconBtn dlMobileClose" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
          <X size={18} strokeWidth={2.2} />
        </button>
        <nav>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#visit" onClick={() => setOpen(false)}>book a table</a>
        </nav>
      </div>
    </>
  );
}
