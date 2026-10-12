import { ArrowUpRight } from 'lucide-react';
import { ORDER_URL } from '../lib/siteConfig';

export default function Loyalty() {
  return (
    <section className="dlLoyalty" aria-labelledby="loyalty-title">
      <div className="dlShell dlLoyaltyInner">
        <div className="dlLoyaltyCopy">
          <span className="dlEyebrow" style={{ background: 'var(--butter)', color: 'var(--chocolate)' }}>the regulars club</span>
          <h2 id="loyalty-title">
            <span className="dlHeadLine">nine coffees,</span>
            <span className="dlHeadLine">the tenth is on us.</span>
          </h2>
          <p>
            no app, no fuss. ask for a stamp card at the counter — every hot or iced drink earns a stamp.
            regulars already know. newcomers figure it out by the second flat white.
          </p>
          <div className="dlLoyaltyActions">
            <a className="dlPill dlPillSolid" href="#visit">
              visit us
              <span className="dlArrow"><ArrowUpRight size={16} strokeWidth={2.4} /></span>
            </a>
            <a className="dlPill dlPillGhost" href={ORDER_URL} target="_blank" rel="noopener noreferrer">
              order ahead
              <span className="dlArrow"><ArrowUpRight size={16} strokeWidth={2.4} /></span>
            </a>
          </div>
        </div>

        <aside className="dlStampCard" aria-label="Loyalty stamp card">
          <small>loyalty card · no app needed</small>
          <h3>the power park stamp card</h3>
          <div className="dlStamps" aria-hidden="true">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className={i < 4 ? 'filled' : ''}>{i < 4 ? 'pp' : ''}</span>
            ))}
          </div>
          <p>free coffee on the tenth stamp. stamps never expire — just bring the card (or we’ll stamp the one on your phone).</p>
        </aside>
      </div>
    </section>
  );
}
