import React from 'react'
import StarRating from './StarRating'
import Form from './Form'
import ReviewList from './ReviewList'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'


function Popup({ selected, closePopup}) {

const [reviews, setReviews] = useState([])
const [form, setForm] = useState({movie: '', review: '', id:uuidv4() })
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} />
					<p>{selected.Plot}</p>
					<StarRating/>
					<Form form={form} reviews={reviews} setForm={setForm} setReviews={setReviews}/> 
					<ReviewList reviews={reviews}/>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup