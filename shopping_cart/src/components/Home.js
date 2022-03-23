import React from 'react'
import Shoe8 from '../image/shoe8.jpeg'

function Home(props) {
  console.warn(props.data)
  return (
    <div className='div-style'>
      <div className='img-style'>
        <img src={Shoe8} style={{ width: '150px' }} />
        <span>price :1000$ </span>
        <button
          onClick={() =>
            {props.addToCartHandler({ price: 1000, name: 'iphone' })}
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

export default Home
