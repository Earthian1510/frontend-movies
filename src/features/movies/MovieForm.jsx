import React, { useState, useEffect }from 'react'
import Header from '../../components/Header'
import { useDispatch } from 'react-redux'
import { addMovieAsync, updateMovieAsync } from './moviesSlice'
import { useLocation, useNavigate } from 'react-router-dom'

const MovieForm = () => {
 
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [movieData, setMovieData] = useState({
    title: '',
    releaseYear: '',
    rating: '',
    director: '',
    plot: ''
  })

  const movieToEdit = location.state 

  useEffect(() => {
    if(movieToEdit) {
        setMovieData({
            title: movieToEdit.title,
            releaseYear: movieToEdit.releaseYear,
            rating: movieToEdit.rating,
            director: movieToEdit.director,
            plot: movieToEdit.plot
        })
    }
  }, [movieToEdit])
  
  const handleMovieData = (e) => {
    const {name, value} = e.target 
    setMovieData((prev) => ({
        ...prev,
        [name] : name === 'releaseYear' ? parseInt(value) : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(movieToEdit) {
        dispatch(updateMovieAsync({...movieData, _id: movieToEdit._id}))
    }
    else{
        dispatch(addMovieAsync(movieData))
    }
    navigate('/movies')

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
        <h1 className='mb-2'>{movieToEdit ? 'Edit Movie': 'Add Movie'}</h1>
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
            <button className={`btn ${movieToEdit ? "btn-warning": "btn-success"}`} type='submit'>{movieToEdit ? 'Edit' :'Add'}</button>
        </form>
    </div>
    </>
  )
}

export default MovieForm