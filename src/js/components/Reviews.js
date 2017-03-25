import React from 'react';
import TextTruncate from 'react-text-truncate';
import css from '../../css/reviews.pcss';

const Reviews = (props) => {
  const NumReviews = 3;
  const reviews = props.data.results.slice(0, NumReviews).map(review => (
    <div className="review" key={review.id}>
      <h3 className="review--author">{review.author}</h3>
      <p><TextTruncate containerClassName="review--content" line={10} truncateText="…" text={review.content} /></p>
    </div>
  ));

  return (
    <div className="section section__dark">
      <div className="container">
        <h2 className="section--title">Reviews</h2>
        <div className="reviews">
          {reviews}
        </div>
      </div>
    </div>
  );

}

export default Reviews
