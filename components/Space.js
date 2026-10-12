export default function Space() {
  return (
    <section id="space" className="dlSpace">
      <div className="dlShell">
        <div className="dlSpaceTop">
          <div>
            <span className="dlEyebrow" style={{ background: 'var(--butter)', color: 'var(--chocolate)' }}>the space</span>
            <h2>
              <span className="dlHeadLine">pull up a chair.</span>
              <span className="dlHeadLine">stay a while.</span>
            </h2>
          </div>
          <p>
            bright mornings, a friendly counter, and a kitchen that keeps discovery road fed —
            coffee first, hot meals next, sandwiches made your way.
          </p>
        </div>

        <div className="dlSpaceGrid">
          <div className="dlSpaceMain">
            <img src="/images/sections/about-interior.jpg" alt="Inside Power Park Cafe" />
            <div className="dlStickers" aria-hidden="true">
              <span className="dlSticker">weekday fuel</span>
              <span className="dlSticker">wifi, obviously</span>
              <span className="dlSticker">takeaway ready</span>
              <span className="dlSticker">from 5 am</span>
            </div>
          </div>
          <div className="dlSpaceSide">
            <img src="/images/sections/about-sign.jpg" alt="Fresh food at Power Park Cafe" />
          </div>
        </div>
      </div>
    </section>
  );
}
