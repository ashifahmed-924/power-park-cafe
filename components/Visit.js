'use client';

import { ArrowRight, Clock3, MapPin, Phone } from 'lucide-react';
import useReveal from './useReveal';
import { ADDRESS_LINE_1, ADDRESS_LINE_2, HOURS_LINE_1, HOURS_LINE_2, MAP_DIRECTIONS_URL, MAP_EMBED_URL, MAP_VIEW_URL, PHONE_DISPLAY, PHONE_TEL } from '../lib/siteConfig';

export default function Visit() {
  const [ref, visible] = useReveal(0.15);
  const rows = [
    { Icon: MapPin, content: <>{ADDRESS_LINE_1},<br />{ADDRESS_LINE_2}</>, href: MAP_VIEW_URL, ext: true },
    { Icon: Phone, content: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
    { Icon: Clock3, content: <>{HOURS_LINE_1}<br />{HOURS_LINE_2}<br /><small style={{ opacity: 0.75 }}>Closed weekends</small></> }
  ];

  return (
    <section id="visit" ref={ref} className={`vsSection ${visible ? 'isIn' : ''}`}>
      <img className="vsBranch" src="/images/sections/vs-branch.jpg" alt="" aria-hidden="true" />
      <div className="vsInner">
        <div className="vsCopy">
          <div className="vsEyebrow vsRv" style={{ '--d': '.05s' }}>FIND US</div>
          <h2>
            <span className="vsLine"><span style={{ '--d': '.1s' }}>Visit Power Park</span></span>
            <span className="vsLine"><span style={{ '--d': '.22s' }}>Cafe, Discovery Rd.</span></span>
          </h2>
          <ul className="vsRows">
            {rows.map(({ Icon, content, href, ext }, i) => {
              const inner = <><span className="vsIcon"><Icon size={26} strokeWidth={1.6} /></span><span className="vsRowText">{content}</span></>;
              return (
                <li key={i} className="vsRv" style={{ '--d': `${0.4 + i * 0.12}s` }}>
                  {href ? <a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{inner}</a> : <div className="vsRowStatic">{inner}</div>}
                </li>
              );
            })}
          </ul>
          <div className="vsBtns vsRv" style={{ '--d': '.8s' }}>
            <a className="vsPrimary" href={MAP_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">Get Directions <ArrowRight size={22} /></a>
            <a className="vsGhost" href={MAP_VIEW_URL} target="_blank" rel="noopener noreferrer">View on Map</a>
          </div>
        </div>

        <div className="vsMapWrap vsRv" style={{ '--d': '.3s' }}>
          <div className="vsMap">
            <iframe title="Map showing Power Park Cafe, Dandenong South" src={MAP_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
        <p className="vsScript" aria-hidden="true">See you soon!<i /></p>
      </div>
    </section>
  );
}
