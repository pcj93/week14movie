import React, {useState} from 'react';
import StarRating from './StarRating';
import Form from './Form';
import ReviewList from './ReviewList';
import { v4 as uuidv4 } from 'uuid';
import ReviewItem from './ReviewItem';


function Popup({ selected, closePopup}) {

	const [reviews, setReviews] = useState([])
	const [form, setForm] = useState({movie: '', review: '', id:uuidv4() })
	const [editing, setEditing] = useState(false)

	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} />
					<p>{selected.Plot}</p>
					<StarRating/>
					<Form form={form} reviews={reviews} setForm={setForm} setReviews={setReviews} editing={editing} setEditing={setEditing}/> 
					<ReviewList reviews={reviews} setReviews={setReviews} setEditing={setEditing} setForm={setForm}/>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup