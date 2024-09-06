import React from 'react'

import {Link} from 'react-router-dom'

const Card = ({foodName, foodImage, foodID}) => {
  return (
    <div class="card" style={{
      width: 180,
      backgroundColor: '#D4BABA'
    }}>
      <img src={foodImage} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-center text-uppercase">{foodName}</h5>
        <Link to={`food-info/${foodID}`} class="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
  )
}

export default Card
