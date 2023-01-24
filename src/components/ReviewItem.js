import React, {useState} from 'react';
import {FaEdit,FaTrash} from 'react-icons/fa'



const ReviewItem = ({review, handleEdit, handleDelete}) => {
  return (
    <div className='reviewItem'>
        <h2>{review.movie}</h2>
        <p>{review.review}</p>
        <div className='buttons'>
          <button onClick={ () => handleDelete(review.id) }>
            <FaTrash/>
          </button>
          <button onClick={ () => handleEdit(review.id) }>
            <FaEdit/>
          </button>
        </div>
    </div>
  )
}

export default ReviewItem;