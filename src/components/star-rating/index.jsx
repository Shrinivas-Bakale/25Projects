import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function index({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleOnClick = (getIndexNumber) => {
    // console.log(getIndexNumber);
    setRating(getIndexNumber);
  };

  const handleOnHover = (getIndexNumber) => {
    // console.log(getIndexNumber);
    setHover(getIndexNumber);
  };
  const handleMouseLeave = () => {
    // console.log(getIndexNumber);
    setHover(rating);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              size={40}
              onClick={() => {
                handleOnClick(index);
                console.log(index);
              }}
              onMouseMove={() => {
                handleOnHover(index);
              }}
              onMouseLeave={() => handleMouseLeave()}
            />
          );
        })}
      </div>
    </>
  );
}
