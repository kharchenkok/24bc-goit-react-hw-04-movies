import React from 'react';
import style from './Reviews.module.css'

const Reviews = (props) => {
    const{reviewsArr}=props
    return (
        <>
       { reviewsArr.length > 0 ? (
           <ul className={style.reviewsList}>
              {reviewsArr.map(review => (
                  <li key={review.id}>
                  <p className={style.reviewAuthor}>Author: {review.author}</p>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          ) : (
              <p> We don't have any reviews for this movie.</p>
              )
            }
            </>
    );
};

export default Reviews;