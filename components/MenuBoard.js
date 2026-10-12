import { ArrowUpRight } from 'lucide-react';
import { ORDER_URL } from '../lib/siteConfig';
import { items } from '../lib/menuData';

const drinks = items.drinks.slice(0, 10);
const food = [
  ...items.breakfast.slice(0, 5),
  ...items.lunch.slice(0, 4),
  ...items.wraps.slice(0, 3)
];

const marquee = [
  'first sips',
  'flaky layers',
  'hot packs',
  'tradie rolls',
  'second coffees',
  'fresh sandwiches',
  'warm cups',
  'lunch rush'
];

export default function MenuBoard() {
  return (
    <section id="menu-board" className="dlBoard">
      <div className="dlShell">
        <div className="dlBoardHead">
          <span className="dlEyebrow">menu</span>
          <h2>
            <span className="dlHeadLine">first sips, flaky layers,</span>
            <span className="dlHeadLine">second coffees, warm cups.</span>
          </h2>
        </div>
      </div>

      <div className="dlMarquee" aria-hidden="true">
        <div className="dlMarqueeTrack">
          {[...marquee, ...marquee].map((word, i) => (
            <span key={`${word}-${i}`}>{word}</span>
          ))}
        </div>
      </div>

      <div className="dlShell">
        <div className="dlBoardCols">
          <div className="dlBoardCol">
            <h3>drinks</h3>
            <ul className="dlBoardList">
              {drinks.map(item => (
                <li key={item.name}>
                  <span>{item.name.toLowerCase()}</span>
                  <i />
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="dlBoardCol">
            <h3>food</h3>
            <ul className="dlBoardList">
              {food.map(item => (
                <li key={item.name}>
                  <span>{item.name.toLowerCase()}</span>
                  <i />
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="dlBoardCta">
          <a className="dlPill dlPillSolid" href={ORDER_URL} target="_blank" rel="noopener noreferrer">
            the full menu online
            <span className="dlArrow"><ArrowUpRight size={16} strokeWidth={2.4} /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
