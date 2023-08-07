import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import "./Shows.css"
export default function Shows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchShows() {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchShows();
  }, []);

  return (
    <>

      <div className='shows-list'>
        {shows.map((show)=>{
          return (<MovieCard 
            id={show.show.id}
            title={show.show.name}
            rating={show.score}
          />)
        })}
      </div>
    </>
  
  );
}

