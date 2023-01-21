import React from 'react'


const ReviewList = (reviews) => {
  return (
    <div>
      {reviews.map(review => (
        <ReviewItem/>
      ))}
    </div>
  )
}

export default ReviewList