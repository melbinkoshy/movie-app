import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from "../components/Navbar";
import './MovieDetail.css'
export default function MovieDetail() {
  const params=useParams();
  const [movieDetails,setMovieDetails]=useState({});
  const [imgURL,setImgURL]=useState([])

  useEffect(()=>{
    async function fetchDetails(){
      try{
        const response = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
        const data = await response.json();
        setMovieDetails(data)
      }catch(error){
        console.error('Error fetching data:', error);
      }
    }
    async function fetchImage(){
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${params.id}/images`);
        const data = await response.json();
        setImgURL(data[0].resolutions.original.url);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchImage();
    fetchDetails();
  },[])
  return (
    <>
      <Navbar/>
      <div className='movie-details-card'>
        <img className="movie-banner"
          src={imgURL}/>
        <div className="movie-details">
          <h1>{movieDetails.name}</h1>
          {movieDetails.rating?.average}
          <div dangerouslySetInnerHTML={{ __html: movieDetails.summary }}/>
          { movieDetails.genres && <div className=''>
            Genre: 
            {movieDetails.genres?.map((genre)=>( <span className='grey-text'> {genre}, </span>))}
          </div>}
          
        </div>
    </div>
    </>
  )
    
}