import { FACEBOOK_LINK, GOOGLE_REVIEWS_URL, PHONE_DISPLAY, PHONE_TEL } from '../lib/siteConfig';

export default function Footer() {
  return (
    <footer className="dlFooter">
      <div className="dlShell">
        <div className="dlFooterTop">
          <div className="dlFooterBrand">power park</div>
          <a className="dlFooterEmail" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
        </div>

        <div className="dlFooterMid">
          <div className="dlFooterCol">
            <h3>explore</h3>
            <nav aria-label="Footer">
              <a href="#menu">menu</a>
              <a href="#about">about</a>
              <a href="#space">space</a>
              <a href="#reviews">reviews</a>
              <a href="#visit">visit</a>
            </nav>
          </div>

          <div className="dlFooterCol">
            <h3>connect</h3>
            <nav aria-label="Social">
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">facebook</a>
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">google reviews</a>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </nav>
          </div>

          <div className="dlFooterCol">
            <h3>find us</h3>
            <p>186–190 discovery rd</p>
            <p>dandenong south vic 3175</p>
          </div>

          <div className="dlFooterCol">
            <h3>hours</h3>
            <p>mon – fri · 5:00 am – 3:00 pm</p>
            <p>closed weekends</p>
          </div>
        </div>

        <div className="dlFooterBottom">
          <span>© {new Date().getFullYear()} power park cafe</span>
          <span>coffee · hot meals · fresh sandwiches</span>
        </div>
      </div>
    </footer>
  );
}
