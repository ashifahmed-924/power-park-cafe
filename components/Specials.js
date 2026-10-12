import { ArrowUpRight } from 'lucide-react';
import { ORDER_URL } from '../lib/siteConfig';

const specials = [
  {
    tag: 'morning favourite',
    title: 'tradie roll',
    desc: 'egg, bacon, cheese and a hash brown — the breakfast discovery road runs on.',
    img: '/images/menu/bacon-roll.jpg'
  },
  {
    tag: 'best seller · $25.20',
    title: 'burger with the lot combo',
    desc: 'burger, chips and a soft drink. generous, fast, and ready for lunch rush.',
    img: '/images/menu/burger.jpg'
  },
  {
    tag: 'fresh daily',
    title: 'make your own sandwich',
    desc: 'build it your way — fresh bread, fillings and sauces made to your taste.',
    img: '/images/menu/chicken-toastie.jpg'
  },
  {
    tag: 'every weekday',
    title: 'coffee + hot meal',
    desc: 'start early from 5 am with a smooth cup and a plate that actually fills you up.',
    img: '/images/menu/coffee.jpg'
  }
];

export default function Specials() {
  return (
    <section className="dlSpecials" aria-labelledby="specials-title">
      <div className="dlShell">
        <div className="dlSpecialsHead">
          <div>
            <span className="dlEyebrow">out of the kitchen</span>
            <h2 id="specials-title">
              <span className="dlHeadLine">what’s going</span>
              <span className="dlHeadLine">this week</span>
            </h2>
          </div>
          <a className="dlLink" href={ORDER_URL} target="_blank" rel="noopener noreferrer">
            order online <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="dlSpecialStack">
          {specials.map(item => (
            <a className="dlSpecial" key={item.title} href={ORDER_URL} target="_blank" rel="noopener noreferrer">
              <img src={item.img} alt="" />
              <div>
                <small>{item.tag}</small>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <span className="dlArrow" aria-hidden="true"><ArrowUpRight size={18} strokeWidth={2.2} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
