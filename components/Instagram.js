import { ArrowUpRight } from 'lucide-react';
import { FACEBOOK_LINK } from '../lib/siteConfig';

const shots = [
  { src: '/images/menu/coffee.jpg', alt: 'Coffee at Power Park Cafe' },
  { src: '/images/menu/burger.jpg', alt: 'Burger and lunch specials' },
  { src: '/images/sections/about-pour.jpg', alt: 'Barista pouring coffee' },
  { src: '/images/menu/croissant.jpg', alt: 'Fresh pastry' },
  { src: '/images/sections/res-interior.jpg', alt: 'Cafe seating' }
];

export default function Instagram() {
  return (
    <section className="dlIg" aria-labelledby="ig-title">
      <div className="dlShell">
        <div className="dlIgHead">
          <div>
            <h2 id="ig-title">
              <span className="dlHeadLine">follow the</span>
              <span className="dlHeadLine">morning rush</span>
            </h2>
            <p>coffee, plates and weekday energy from discovery road.</p>
          </div>
          <a className="dlLink" href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--butter)' }}>
            say hi on facebook <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="dlIgFan">
          {shots.map(shot => (
            <figure key={shot.src}>
              <img src={shot.src} alt={shot.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
