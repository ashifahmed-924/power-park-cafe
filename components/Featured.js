import { ArrowUpRight } from 'lucide-react';
import { ORDER_URL } from '../lib/siteConfig';

const items = [
  {
    name: 'coffee',
    desc: 'hot, aromatic, smooth finish — the local favourite.',
    price: '$6.30',
    img: '/images/menu/coffee.jpg'
  },
  {
    name: 'big breakfast',
    desc: 'eggs, hash brown, sausage, tomato, mushrooms and spinach.',
    price: '$35.70',
    img: '/images/menu/bacon-roll.jpg'
  },
  {
    name: 'beef burger combo',
    desc: 'with the lot, chips and a soft drink.',
    price: '$25.20',
    img: '/images/menu/burger.jpg'
  },
  {
    name: 'tandoori focaccia',
    desc: 'tandoori chicken, spinach, capsicum, tomato, cheese and garlic.',
    price: '$17.50',
    img: '/images/menu/wrap.jpg'
  },
  {
    name: 'iced coffee',
    desc: 'refreshing cold coffee for warm victorian mornings.',
    price: '$13.30',
    img: '/images/menu/iced-latte.jpg'
  },
  {
    name: 'croissant',
    desc: 'buttery, flaky and ready with your morning cup.',
    price: 'from $5',
    img: '/images/menu/croissant.jpg'
  },
  {
    name: 'chicken toastie',
    desc: 'toasted, melty and made fresh to order.',
    price: 'from $11',
    img: '/images/menu/chicken-toastie.jpg'
  },
  {
    name: 'muffin',
    desc: 'a sweet bite for the drive or desk.',
    price: 'from $4',
    img: '/images/menu/muffin.jpg'
  }
];

export default function Featured() {
  return (
    <section id="menu" className="dlFeatured">
      <div className="dlShell">
        <div className="dlFeaturedHead">
          <div>
            <span className="dlEyebrow">the usual suspects</span>
            <h2>
              <span className="dlHeadLine">what everyone orders</span>
              <span className="dlHeadLine">(and you will too)</span>
            </h2>
          </div>
          <a className="dlLink" href="#menu-board" style={{ color: 'var(--butter)' }}>
            see the full menu <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="dlFeaturedGrid">
          {items.map(item => (
            <article className="dlMenuCard" key={item.name}>
              <img src={item.img} alt={item.name} loading="lazy" />
              <div className="dlMenuCardBody">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="dlMenuCardFoot">
                  <strong>{item.price}</strong>
                  <a className="dlOrderChip" href={ORDER_URL} target="_blank" rel="noopener noreferrer">order</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
