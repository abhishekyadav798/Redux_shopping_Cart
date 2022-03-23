import React from 'react'
import Shoe8 from '../image/shoe8.jpeg'

function Home2(props) {
  
  return (
    <div className='div-style'>
      <div className='img-style'>
        <img src={Shoe8} style={{ width: '150px' }} />
        <span>price :2000$ </span>
        <button
          onClick={() =>
            {props.addToCartHandler({ price: 2000, name: 'samsung' })}
          }
          className='btn-style'
        >
          Add to cart
        </button>
        <button
          onClick={() =>
            {props.removeToCartHandler()}
          }
          className='remove-btn-style'
        >
          Remove 
        </button>
      </div>
    </div>
  )
}

export default Home2
