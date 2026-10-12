import { RATING, REVIEW_COUNT_LABEL, reviews } from '../lib/reviewsData';

export default function Reviews() {
  return (
    <section id="reviews" className="dlReviews">
      <div className="dlShell">
        <div className="dlReviewsHead">
          <h2>
            <span className="dlHeadLine">what people say —</span>
            <span className="dlHeadLine">always about the coffee.</span>
          </h2>
        </div>

        <div className="dlChat">
          {reviews.map(review => (
            <article className="dlBubble" key={review.name}>
              <div className="dlBubbleHead">
                <strong>{review.name.toLowerCase()}</strong>
                <span>says…</span>
              </div>
              <p>{review.quote.toLowerCase()}{review.detail ? ` ${review.detail.toLowerCase()}` : ''}</p>
              <small>{review.role} · {RATING}★ · {REVIEW_COUNT_LABEL.toLowerCase()}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
