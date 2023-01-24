import React, {useState} from 'react'
import ReviewItem from './ReviewItem'



const ReviewList = ({reviews, setReviews, setEditing, setForm}) => {
    const handleDelete= (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id)
    
    {console.log(updatedReviews)}
    setReviews(updatedReviews)
  }

  const handleEdit = (id) => {
    const editedPost = reviews.filter((review) => review.id === id)
    setForm(editedPost[0])
    setEditing(true)
  }
  return (
    <div className='reviewlist'>
      
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          review={review}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  )
}

export default ReviewList