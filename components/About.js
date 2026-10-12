'use client';

import { Coffee, Heart, Leaf, Play, Users, Utensils } from 'lucide-react';
import useReveal from './useReveal';
import { STORY_VIDEO_URL } from '../lib/siteConfig';

const feats = [
  { Icon: Users, text: <>Local<br />Business<br />Park Favourite</> },
  { Icon: Leaf, text: <>Fresh<br />Ingredients<br />Daily</> },
  { Icon: Heart, text: <>Friendly<br />Service<br />Always</> }
];

const strip = [
  { Icon: Coffee, title: 'Great Coffee', sub: <>Smooth cups that keep<br />the day moving.</> },
  { Icon: Utensils, title: 'Hearty Meals', sub: <>Breakfast plates, burgers,<br />hot packs &amp; wraps.</> },
  { Icon: Users, title: 'Warm Welcome', sub: <>A team that remembers<br />your order.</> },
  { Icon: Heart, title: 'Dandenong South', sub: <>Proudly serving Discovery<br />Road locals.</> }
];

export default function About() {
  const [ref, visible] = useReveal(0.12);
  const storyHref = STORY_VIDEO_URL || '#gallery';
  const external = Boolean(STORY_VIDEO_URL);

  return (
    <section id="about" ref={ref} className={`abSection ${visible ? 'isIn' : ''}`}>
      <div className="abInner">
        <div className="abTop">
          <div className="abCopy">
            <div className="abEyebrow rv" style={{ '--d': '.05s' }}>ABOUT US</div>
            <h2>
              <span className="abLine"><span style={{ '--d': '.1s' }}>More Than</span></span>
              <span className="abLine"><span style={{ '--d': '.2s' }}>A Pit Stop.</span></span>
              <span className="abLine"><em style={{ '--d': '.32s' }}>Your Local Cafe.</em></span>
            </h2>
            <p className="abLead rv" style={{ '--d': '.5s' }}>
              Power Park Cafe is a weekday favourite in Dandenong South — known for generous homemade meals, strong coffee, make-your-own sandwiches and a team that greets you with a smile. Whether you are grabbing a tradie roll at dawn or a hot pack at lunch, we keep it fresh, fast and friendly.
            </p>
            <a className="abWatch rv" style={{ '--d': '.62s' }} href={storyHref} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
              <span className="abPlay"><Play size={26} fill="currentColor" strokeWidth={0} /></span>
              <span className="abWatchText">See the Cafe<i /></span>
            </a>
            <p className="abPlace rv" style={{ '--d': '.8s' }} aria-hidden="true">“Built for<br />busy days.”<i /></p>
          </div>

          <div className="abCollage">
            <div className="abLeft">
              <figure className="abPour abImg" style={{ '--d': '.2s' }}>
                <img src="/images/sections/about-pour.jpg" alt="Barista pouring coffee at Power Park Cafe" />
                <p className="abScript" aria-hidden="true">Fresh<br />Food<br />Great<br />Coffee<br />Every<br />Weekday <Heart size={20} strokeWidth={1.3} /></p>
              </figure>
              <figure className="abInterior abImg" style={{ '--d': '.4s' }}>
                <img src="/images/sections/about-interior.jpg" alt="Inside Power Park Cafe" />
              </figure>
              <ul className="abFeats rv" style={{ '--d': '.55s' }}>
                {feats.map(({ Icon, text }, i) => (
                  <li key={i}><Icon size={26} strokeWidth={1.3} /><span>{text}</span></li>
                ))}
              </ul>
            </div>

            <div className="abRight">
              <figure className="abSign abImg" style={{ '--d': '.3s' }}>
                <img src="/images/sections/about-sign.jpg" alt="Fresh sandwich and cafe food" />
              </figure>
              <article className="abPhil rv" style={{ '--d': '.5s' }}>
                <small>OUR PROMISE</small>
                <h3>Fresh.<br />Friendly.<br />Filling.</h3>
                <i />
                <p>From big breakfasts to focaccias and hot packs, we cook with care and serve with a smile — so Discovery Road has a cafe that feels like home.</p>
              </article>
            </div>

            <div className="abSeal" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs><path id="abSealPath" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" /></defs>
                <text><textPath href="#abSealPath" textLength="280" lengthAdjust="spacing">PROUDLY • DANDENONG SOUTH • </textPath></text>
              </svg>
              <Leaf size={30} strokeWidth={1.2} />
            </div>
          </div>
        </div>

        <div className="abStrip">
          {strip.map(({ Icon, title, sub }, i) => (
            <div key={title} className="abStripItem rv" style={{ '--d': `${0.45 + i * 0.1}s` }}>
              <Icon size={42} strokeWidth={1.2} />
              <b>{title}</b>
              <small>{sub}</small>
            </div>
          ))}
          <div className="abBeans" aria-hidden="true">
            <img src="/images/sections/about-beans.jpg" alt="" />
            <p>Open<br />Mon–Fri<br />From<br />5 AM.<i /></p>
          </div>
        </div>
      </div>
    </section>
  );
}
