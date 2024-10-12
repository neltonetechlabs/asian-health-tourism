import React from "react";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    console.log('rating: ', rating);
  const stars = [1, 2, 3, 4, 5]; // Array for 5 stars

  return (
    <div className="star-container">
      {stars.map((star) => {
        let starClass = "icon-star-empty";

        if (star <= rating) {
          starClass = "icon-star";
        } else if (star - 0.5 < rating) {
          starClass = "icon-star-half-alt";
        }

        return (
          <div className="star" key={star}>
            <i className={starClass}></i>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
