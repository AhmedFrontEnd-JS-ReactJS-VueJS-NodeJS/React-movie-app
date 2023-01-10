import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './Search.svg';
import MovieCard from './Moviecard';

// APKI KEY f738cb0c

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('All');

  const API_URL = 'https://www.omdbapi.com?apikey=f738cb0c';

  const movie1 =
  {
    "Title": "Spiderman unlimited the movie",
    "Year": "2023",
    "imdbID": "tt18969216",
    "Type": "movie",
    "Poster": "N/A"
  }


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }



  useEffect(() => {
    searchMovies('Spiderman');
  }, [])
  return (
    <div className='app'>
      <h1>MoveFlex</h1>

      <div className='search'>
        <input
          type="text"
          placeholder='Search For Movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={(e) => searchMovies(e.target.value)} />

        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />

      </div>
      {
        movies?.length > 0
          ?
          (
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) :
          (
            <div className='empty'>
              <h2>No Movie Found</h2>
            </div>
          )
      }


    </div>

  );
}

export default App;
