import React, { useState } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import StarRating from './components/StarRating'
import Form from './components/Form'
import ReviewItem from './components/ReviewItem'
import ReviewList from './components/ReviewList'
import Result from './components/Result'




function App() {

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const apiurl=`http://www.omdbapi.com/?apikey=7dab83b8&`

 

  const search = (e) => {
    // console.log( 'what is this', e)
    if (e.key === "Enter") {
      axios(apiurl + "s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    // console.log('this is the id of the movie', id)
    axios(apiurl + `i=` + id).then(({ data }) => {
      let result = data;

      console.log('this is the movie you are looking for',result);

      setState(prevState => {
        console.log( 'you opened the popup',prevState)
        return { ...prevState, selected: result }
      });
    });

  }

  const closePopup = () => {
    setState(prevState => {
      console.log( 'you closed the popup',prevState)
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Hub</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} StarRating={StarRating}/>

        {(typeof state.selected.Title != "undefined") ? 
        <Popup selected={state.selected} closePopup={closePopup} /> : false}

      </main>
    </div>
  );
}

export default App
