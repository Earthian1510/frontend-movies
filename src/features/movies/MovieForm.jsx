import React, { useState, useEffect }from 'react'
import Header from '../../components/Header'
import { useDispatch } from 'react-redux'
import { fetchMovies, addMovieAsync } from './moviesSlice'

const MovieForm = () => {
 
  const dispatch = useDispatch()
  const [movieData, setMovieData] = useState({
    title: '',
    releaseYear: '',
    rating: '',
    director: '',
    plot: ''
  })
  
  const handleMovieData = (e) => {
    const {name, value} = e.target 
    setMovieData((prev) => ({
        ...prev,
        [name] : name === 'releaseYear' ? parseInt(value) : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newMovie = movieData
    if(newMovie){
        dispatch(addMovieAsync(newMovie))
    }

    setMovieData({
        title: '',
        releaseYear: '',
        rating: '',
        director: '',
        plot: ''
    })

  }
  

  return (
    <>
    <Header />
    <div className='container my-3'>
        <h1 className='mb-2'>Add Movie</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    placeholder='Title'
                    className='form-control'
                    value={movieData.title}
                    name='title'
                    onChange={handleMovieData}
                />
            </div>
            <br />
            <div>
                <input 
                    type="number" 
                    placeholder='Release Year'
                    className='form-control'
                    value={movieData.releaseYear}
                    name='releaseYear'
                    onChange={handleMovieData}
                />
            </div>
            <br />
            <div>
                <input 
                    type="text" 
                    placeholder='Rating'
                    className='form-control'
                    value={movieData.rating}
                    name='rating'
                    onChange={handleMovieData}
                />
            </div>
            <br />
            <div>
                <input 
                    type="text" 
                    placeholder='Director'
                    className='form-control'
                    name='director'
                    value={movieData.director}
                    onChange={handleMovieData}
                />
            </div>
            <br />
            <div>
                <textarea 
                    className='form-control'
                    name='plot' 
                    placeholder='Movie Plot' 
                    onChange={handleMovieData} 
                    value={movieData.plot}
                ></textarea>
            </div>
            <br />
            <button className="btn btn-success" type='submit'>Add </button>
        </form>
    </div>
    </>
  )
}

export default MovieForm