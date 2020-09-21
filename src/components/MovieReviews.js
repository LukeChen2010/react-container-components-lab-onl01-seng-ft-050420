// Code MovieReviews Here
  
import React from 'react';

<<<<<<< HEAD
const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

const Review = ({
}) => {
  return (
    <div className="review-list">
    <span className="review"></span>
    </div>
  );
};
=======
const Review = ({
  headline,
  byline,
  link,
  summary_short
})

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;
>>>>>>> 596bf07f0bd2147ce0ee049f679911a857f7ea3a

export default MovieReviews;