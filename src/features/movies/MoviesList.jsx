import React from "react";

const MoviesList = ({ movies })=> {

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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList