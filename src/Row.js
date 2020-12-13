import React, { useEffect, useState } from 'react';
import axios from './axios'
import "./css/Row.css"

const base_url = "https://image.tmdb.org/t/p/original"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([])
  

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            console.log(request);
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    }, [fetchUrl])

    return (
      <div className="row">
          <h2>{title}</h2>

          <div className="row_posters">
            {movies.map(movie => (
                <img src={`${base_url}${movie.poster_path}`}
                    alt={movie.name} 
                    className={`row_poster ${isLargeRow && "row_posterlarge"}`}
                    key={movie.id}
                />
            ))}
          </div>
      </div>
    );
  }

  export default Row;