import { Movie } from '../types/movie';

import { useEffect, useState } from 'react';

function MovieList() {
  const [listOMovies, setListOMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setListOMovies(temp);
    };
    fetchMovies();
  }, []);

  const filteredMovies = listOMovies
    .filter((movie) => {
      return movie.edited.toLowerCase() === 'yes';
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <div className="row">
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited?</th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies.map((m) => (
              <tr>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
