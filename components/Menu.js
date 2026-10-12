'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Coffee, Cookie, CupSoda, EggFried, Flame, IceCreamCone, Croissant, Salad, Sandwich, Utensils } from 'lucide-react';
import { categories, featured, items } from '../lib/menuData';
import { ORDER_URL } from '../lib/siteConfig';

const icons = { coffee: Coffee, cup: CupSoda, shake: IceCreamCone, egg: EggFried, sandwich: Sandwich, salad: Salad, croissant: Croissant, flame: Flame, utensils: Utensils, cookie: Cookie };

function Bean() {
  return (
    <svg width="38" height="38" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M20 4c-8 0-14 7-14 16s6 16 14 16 14-7 14-16S28 4 20 4Z" transform="rotate(35 20 20)" />
      <path d="M13 8c6 4 4 9 8 12s2 8 6 12" />
    </svg>
  );
}

export default function Menu() {
  const [active, setActive] = useState('drinks');
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const f = featured[active];
  const list = items[active];

  return (
    <section id="menu" ref={ref} className={`mnSection ${visible ? 'mnVisible' : ''}`}>
      <div className="mnWash" aria-hidden="true" />
      <div className="mnInner">
        <header className="mnHead">
          <div className="mnHeadMain">
            <p className="mnEyebrow mnRv" style={{ '--d': '.05s' }}>The Menu</p>
            <h2>
              <span className="mnLine"><span style={{ '--d': '.12s' }}>Built for</span></span>
              <span className="mnLine"><em style={{ '--d': '.24s' }}>busy mornings.</em></span>
            </h2>
            <div className="mnRule mnRv" style={{ '--d': '.32s' }} aria-hidden="true" />
          </div>
          <aside className="mnAside mnRv" style={{ '--d': '.4s' }}>
            <p className="mnIntro">Coffee, big breakfasts, burgers, hot packs, focaccias and salads — priced from our Uber Eats menu for easy ordering.</p>
            <ul className="mnTags" aria-label="Menu highlights">
              <li>Coffee</li>
              <li>Breakfast</li>
              <li>Burgers</li>
              <li>Salads</li>
            </ul>
          </aside>
        </header>

        <div className="mnTabs mnRv" style={{ '--d': '.48s' }} role="tablist" aria-label="Menu categories">
          {categories.map(c => (
            <button key={c.id} role="tab" aria-selected={active === c.id} className={active === c.id ? 'active' : ''} onClick={() => setActive(c.id)}>{c.label}</button>
          ))}
        </div>

        <div className="mnBoard">
          <article className="mnFeatured mnRv" style={{ '--d': '.55s' }} key={`f-${active}`}>
            <img src={active === 'drinks' ? '/images/menu/coffee.jpg' : active === 'wraps' ? '/images/menu/wrap.jpg' : active === 'lunch' ? '/images/menu/burger.jpg' : active === 'snacks' ? '/images/menu/burger.jpg' : '/images/menu/bacon-roll.jpg'} alt="" style={{ objectPosition: f.pos }} />
            <div className="mnFeatText">
              <small>FEATURED</small>
              <h3>{f.name}</h3>
              <p>{f.desc}</p>
              <strong>{f.price}</strong>
              <i />
              <a className="mnOrder" href={ORDER_URL} target="_blank" rel="noopener noreferrer">Order Online <ArrowUpRight size={17} /></a>
            </div>
            <span className="mnFeatScript" aria-hidden="true">{f.script}</span>
          </article>

          <div className="mnGrid" key={`g-${active}`}>
            {list.map((it, i) => {
              const Icon = icons[it.icon] || Coffee;
              return (
                <article className="mnCard" style={{ '--i': i }} key={it.name}>
                  <div className="mnThumb">
                    {it.img ? <img src={`/images/menu/${it.img}`} alt={it.name} loading="lazy" /> : <span className="mnIcon"><Icon size={30} strokeWidth={1.3} /></span>}
                  </div>
                  <div className="mnInfo">
                    <div className="mnTop"><h4>{it.name}</h4><b>{it.price}</b></div>
                    <p>{it.desc}</p>
                  </div>
                </article>
              );
            })}
            <article className="mnCard mnBrand" style={{ '--i': list.length }}>
              <Bean /><i />
              <span>COFFEE <u>•</u> HOT MEALS <u>•</u> MAKE YOUR OWN</span>
            </article>
          </div>
        </div>

        <div className="mnCta mnRv" style={{ '--d': '.2s' }}>
          <p>Hungry? Get it delivered or ready for pick-up.</p>
          <a className="mnOrder mnOrderBig" href={ORDER_URL} target="_blank" rel="noopener noreferrer">Order Online <ArrowUpRight size={18} /></a>
        </div>
      </div>
    </section>
  );
}
