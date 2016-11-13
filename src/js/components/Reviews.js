import React from 'react';
import TextTruncate from 'react-text-truncate';
import css from '../../css/reviews.css';

const Reviews = (props) => {

  const reviews = props.data.results.map(review => (
    <div className="review" key={review.id}>
      <h3 className="review--author">{review.author}</h3>
      <p><TextTruncate containerClassName="review--content" line={10} truncateText="…" text={review.content} /></p>
    </div>
  ));

  return (
    <div className="container">
      <h2>Reviews</h2>
      <div className="reviews">
        {reviews}
      </div>
    </div>
  );

}

export default Reviews
