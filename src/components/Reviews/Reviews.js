import React from "react";
import useReviews from "../../CustomHooks/useReviews";
import SingleReview from "../singleReview/SingleReview";
import './Reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useReviews(6);
  return (
    <div>
      <h1 className="reviews-title">What Customer Say About us!</h1>
      <div className="reviews-container">
        <div className="all-reviews">
          {reviews.map((review) => (
            <SingleReview review={review} key={review.id}></SingleReview>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Reviews;
