import React, { useEffect, useState } from 'react'
import "./MovieCard.css"
import { Link } from 'react-router-dom';
export default function MovieCard(props) {
  const [imgURL,setImgURL]=useState([])
  useEffect(()=>{
      async function fetchImage(){
        try {
          const response = await fetch(`https://api.tvmaze.com/shows/${props.id}/images`);
          const data = await response.json();
          setImgURL(data[0].resolutions.original.url);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchImage();
    },[])
   return (
    <Link to={`/${props.id}`}>
   <div className='movie-card'>
      
      <div className='movie-info'>
        <img className="poster"
          src={imgURL}/>
        <div className="rating">
          {Number((props.rating*10).toFixed(2))}
        </div>
        <div className='movie-name'>
            {props.title}
        </div>
        
      </div>
       
    </div>
    </Link>)
  
}
