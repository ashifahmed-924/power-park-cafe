'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import DepthCarousel from './DepthCarousel';
import useReveal from './useReveal';
import { GALLERY_URL } from '../lib/siteConfig';

const u = id => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&h=1000&q=80`;

// Swap these for real cafe photos (e.g. /images/gallery/01.jpg, 4:5 portrait).
const items = [
  { image: u('photo-1509042239860-f550ce710b93'), alt: 'Fresh espresso coffee' },
  { image: u('photo-1533089860892-a7c6f0a88666'), alt: 'Big breakfast plate with eggs and toast' },
  { image: u('photo-1554118811-1e0d58224f24'), alt: 'Bright cafe interior seating' },
  { image: u('photo-1568901346375-23c9450c58cd'), alt: 'Loaded burger with fresh toppings' },
  { image: u('photo-1512621776951-a57141f2eefd'), alt: 'Fresh mixed salad bowl' }
];

const SIZES = {
  desktop: { cardWidth: 400, cardHeight: 540, spread: 92, depth: 200, visibleCards: 4, radius: 18, height: 640 },
  tablet: { cardWidth: 320, cardHeight: 440, spread: 72, depth: 180, visibleCards: 4, radius: 16, height: 540 },
  mobile: { cardWidth: 240, cardHeight: 340, spread: 46, depth: 140, visibleCards: 3, radius: 14, height: 430 }
};

function useSize() {
  const [size, setSize] = useState('desktop');
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setSize(w <= 640 ? 'mobile' : w <= 1024 ? 'tablet' : 'desktop');
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);
  return SIZES[size];
}

const tags = ['Coffee', 'Breakfast', 'Lunch', 'Takeaway'];

export default function Gallery() {
  const [ref, visible] = useReveal(0.18);
  const s = useSize();
  const href = GALLERY_URL || '#reviews';
  const external = Boolean(GALLERY_URL);

  return (
    <section id="gallery" ref={ref} className={`glSection ${visible ? 'isIn' : ''}`}>
      <svg className="glBlob glBlobTop" viewBox="0 0 302 150" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0 C30 45 110 100 302 145 L302 0 Z" />
      </svg>
      <svg className="glBlob glBlobBottom" viewBox="0 0 525 231" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0 C30 80 120 120 230 135 C350 150 460 185 525 231 L0 231 Z" />
      </svg>

      <svg className="glDoodle" viewBox="0 0 300 300" fill="none" aria-hidden="true">
        <g className="glFloat">
          <g className="glDraw" style={{ '--d': '.9s' }}>
            <path pathLength="1" d="M20 150 C20 118 70 104 118 112 C166 120 178 150 150 172 C118 196 40 190 20 150 Z" />
            <path pathLength="1" d="M42 138 C70 128 96 150 130 146 C146 144 158 150 160 158" />
          </g>
          <g className="glDraw" style={{ '--d': '1.2s' }}>
            <path pathLength="1" d="M205 10 C250 20 285 70 270 130 C262 160 240 170 222 170 C180 150 170 60 205 10 Z" />
            <path pathLength="1" d="M214 24 C228 80 232 130 224 166 M224 70 L252 54 M227 100 L262 88 M225 130 L252 122" />
          </g>
          <g className="glDraw" style={{ '--d': '1.5s' }}>
            <path pathLength="1" d="M60 270 C110 220 190 215 270 250 C230 292 120 300 60 270 Z" />
            <path pathLength="1" d="M66 268 C130 250 200 246 262 252 M130 253 L142 236 M170 250 L184 232 M208 250 L226 238" />
          </g>
        </g>
      </svg>

      <div className="glInner">
        <div className="glCopy">
          <div className="glEyebrow rv" style={{ '--d': '.05s' }}>
            <span>GALLERY</span><i />
          </div>
          <h2>
            <span className="glLine"><span style={{ '--d': '.12s' }}>From first coffee</span></span>
            <span className="glLine"><em style={{ '--d': '.26s' }}>to lunch rush.</em></span>
          </h2>
          <p className="glLead rv" style={{ '--d': '.5s' }}>
            A glimpse of the coffee, breakfasts, burgers and everyday energy at Power Park Cafe — built for busy weekdays on Discovery Road.
          </p>
          <a
            className="glBtn rv"
            style={{ '--d': '.65s' }}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            View Gallery <ArrowRight size={20} strokeWidth={2} />
          </a>
          <ul className="glTags rv" style={{ '--d': '.85s' }}>
            <li className="glTagLine" aria-hidden="true" />
            {tags.map((t, i) => (
              <li key={t}>{t}{i < tags.length - 1 && <b aria-hidden="true"> / </b>}</li>
            ))}
          </ul>
        </div>

        <div className="glStage" style={{ height: s.height }}>
          <DepthCarousel
            className="glCarousel"
            items={items}
            cardWidth={s.cardWidth}
            cardHeight={s.cardHeight}
            radius={s.radius}
            depth={s.depth}
            spread={s.spread}
            visibleCards={s.visibleCards}
            tilt={22}
            tiltDirection="right"
            perspective={1400}
            falloff={0.2}
            blur={6}
            tint="#061412"
            duration={800}
            ease="power3.out"
            autoplay
            autoplayDelay={3600}
            loop
            showControls
            showIndicators
          />
        </div>
      </div>
    </section>
  );
}
