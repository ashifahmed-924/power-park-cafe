import { ArrowUpRight } from 'lucide-react';

export default function Intro() {
  return (
    <section id="about" className="dlIntro">
      <div className="dlIntroGiant" aria-hidden="true">power park</div>
      <div className="dlShell dlIntroGrid">
        <article className="dlIntroCard">
          <span className="dlEyebrow" style={{ background: 'var(--butter)', color: 'var(--chocolate)' }}>
            hello, neighbour
          </span>
          <div>
            <h2>
              <span className="dlHeadLine">coffee when you need it,</span>
              <span className="dlHeadLine">food when you’re hungry.</span>
            </h2>
            <p style={{ marginTop: 18 }}>
              specialty coffee, homemade meals and make-your-own sandwiches — careful cooking, no snobbery.
              locals will get it. everyone else gets a really good feed.
            </p>
          </div>
        </article>

        <div className="dlIntroMedia">
          <img src="/images/sections/about-pour.jpg" alt="Fresh coffee being poured at Power Park Cafe" />
          <a className="dlPill dlPillSolid" href="#space">
            meet the cafe
            <span className="dlArrow"><ArrowUpRight size={16} strokeWidth={2.4} /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
