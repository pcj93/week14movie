import React from 'react'

const Form = () => {
  return (
    <Form>
      <h2>Leave A Review</h2>
      <label htmlFor='movie'>Movie Review</label>
        <input 
          type='text' 
          placeholder='Movie name' 
          id='movie' 
          name='movie' 
          autoComplete='off'>
        </input>

        <label htmlFor='review'>Review</label>
        <textarea 
          type='text' 
          placeholder='Give Honest Feedback.' 
          id='review' 
          name='review' 
          >
        </textarea>
        
    </Form>
  )
}

export default Form