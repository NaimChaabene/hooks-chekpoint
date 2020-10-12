import React, { useState } from 'react';
import MovieCard from './MovieCard';


function MovieList ({movies}){

    return ( 
        <>
          {movies.map((MovieItem) => {
                                      return (
                                             <MovieCard 
                                                     title={MovieItem.title}
                                                     Description={MovieItem.Description}
                                                     rate={MovieItem.rate} 
                                                         posteUrl={MovieItem.posteUrl}
                                                     /> 
          )})} 
       </>
    )
    
}



    export default MovieList;