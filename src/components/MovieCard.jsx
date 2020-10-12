import React from "react";
import StarRatingComponent from 'react-star-rating-component'

function MovieCard(props) {
  console.log(props)

  return (
    <div className="MovieCard">
      <h1>{props.title}</h1>
     
      <img style={{height: '100px' ,width:"100px"}} variant="top" src={props.posteUrl} />
      <p>{props.Description}</p>
      <StarRatingComponent 
                   name="rate" 
                   starCount={5}
                    value={props.rate}
                     className='stars'
                   />
                   
    
    </div>
  );
}

export default MovieCard;