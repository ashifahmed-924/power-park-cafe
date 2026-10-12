'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HOURS_LINE_2, ORDER_URL } from '../lib/siteConfig';

function pad(n) {
  return String(n).padStart(2, '0');
}

function isOpenNow(date = new Date()) {
  // Cafe hours: Mon–Fri 5:00–15:00 AEST/AEDT local
  const day = date.getDay();
  if (day === 0 || day === 6) return false;
  const mins = date.getHours() * 60 + date.getMinutes();
  return mins >= 5 * 60 && mins < 15 * 60;
}

export default function Hero() {
  const stageRef = useRef(null);
  const [now, setNow] = useState(null);
  const [pinned, setPinned] = useState(true);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setPinned(false);
      return;
    }

    const update = () => {
      const bottom = stage.getBoundingClientRect().bottom;
      // Keep hero locked until the stage has fully scrolled away
      setPinned(bottom > 1);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const open = now ? isOpenNow(now) : true;
  const time = now ? `${pad(now.getHours())}:${pad(now.getMinutes())}` : '--:--';

  return (
    <div className="dlHeroStage" ref={stageRef}>
      <section id="home" className={`dlHero ${pinned ? 'isPinned' : ''}`}>
        <div className="dlHeroMedia" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/hero-cafe.jpg"
          >
            <source src="/videos/hero-coffee.mp4" type="video/mp4" />
          </video>
          <img src="/images/hero-cafe.jpg" alt="" />
        </div>

        <div className="dlHeroInner">
          <div className="dlHeroCopy">
            <p>
              a neighbourhood cafe for fresh coffee, homemade meals and long sits.
              come in hungry, leave with a full belly and probably a new favourite seat.
            </p>
            <div className="dlHeroMeta">
              <span>dandenong south · {time}</span>
              <span className="dlBadge">
                {open ? `open now · till ${HOURS_LINE_2.split('–')[1]?.trim() || '3:00 pm'}` : 'closed · open weekdays from 5 am'}
              </span>
            </div>
          </div>

          <aside className="dlHeroSide">
            <div className="dlHeroSticker">fresh from<br />5:00 am</div>
            <a className="dlPill dlPillSolid" href="#menu">
              see the menu
              <span className="dlArrow"><ArrowUpRight size={16} strokeWidth={2.4} /></span>
            </a>
            <a className="dlPill dlPillGhost" href="#visit">
              book a table
              <span className="dlArrow"><ArrowUpRight size={16} strokeWidth={2.4} /></span>
            </a>
            <a className="dlPill dlPillGhost" href={ORDER_URL} target="_blank" rel="noopener noreferrer">
              order online
              <span className="dlArrow"><ArrowUpRight size={16} strokeWidth={2.4} /></span>
            </a>
          </aside>

          <div className="dlHeroWord" aria-hidden="true">power park</div>
        </div>
      </section>
    </div>
  );
}
