import React, { useEffect } from 'react'
import { fetchMovies } from './moviesSlice'
import { useDispatch, useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import Header from '../../components/Header'

const MovieView = () => {

  const dispatch = useDispatch()
  const { movies, status, error } = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(fetchMovies())
  }, [])

  return (
    <>
    <Header/>
    <div className='container my-3'>
        { status === 'Loading' && <p>Loading...</p>}
        { error && <p>Error: {error}</p>}
        <div>
            {
                status === 'success' 
                &&
                <MoviesList movies={movies} />
            }
        </div>
    </div>
    </>
  )
}

export default MovieView