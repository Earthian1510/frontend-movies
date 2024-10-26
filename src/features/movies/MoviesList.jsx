import React from "react";
import { Link } from "react-router-dom";
import { deleteMovieAsync } from "./moviesSlice";
import { useDispatch } from "react-redux";


const MoviesList = ({ movies }) => {

  const dispatch = useDispatch()
  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete this movie?")
    if(confirm){
      dispatch(deleteMovieAsync(id))
    }
  }

  return (
    <div>
      <h1 className="mb-1">Movies List</h1>
      <ul className="list-group list-group-flush">
        {movies.map((movie) => (
          <li key={movie._id} className="list-group-item">
            <h5 className="mt-3">{movie.title}</h5>
            <p>
              Release Year: {movie.releaseYear} <br />
              Rating: {movie.rating} <br />
              Director: {movie.director} <br />
              Plot: {movie.plot}
            </p>
            <button className="btn btn-warning btn-sm">
              <Link 
                className="text-dark text-decoration-none" 
                to={`/movies/addMovie/${movie._id}`}
                state={movie}
              >
                Edit
              </Link>
            </button>
            <button 
              className="btn btn-danger btn-sm mx-1"
              onClick={() => handleDelete(movie._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
