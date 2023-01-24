import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';



const Form = ({form, reviews, setForm, setReviews, editing, setEditing}) => {
 
  
  const handleChange= e => {
    const{name,value} = e.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    setReviews([...reviews,form])
    setForm({movie: '', review: '', id:uuidv4() });
  }

  const handleUpdate = e => {
    e.preventDefault();
    setEditing(false);

    const updatedReviews = reviews.map( (review) => review.id === form.id ? form: review);
    setReviews(updatedReviews)
    setForm({movie: '', review: '', id:uuidv4() });
  }


  return (
    <form className="form" onSubmit={editing ? handleUpdate : handleSubmit}>
      <h2>Leave A Review</h2>
      <label htmlFor="movie">Movie</label>
      <input 
      type="text" 
      placeholder="movie Name" 
      id='movie' 
      name='movie' 
      autoComplete="off"
      value={form.movie}
      onChange={handleChange}
      >
      </input>

      <label htmlFor="review">Review Of Movie</label>
      <textarea 
      value={form.review} 
      placeholder="Leave Honest Feedback." 
      id='review' 
      name='review' 
      onChange={handleChange}
      >
      </textarea>

    <button type="submit">{editing ? "Update" : "Submit"}</button>
    </form>
  )
}
export default Form