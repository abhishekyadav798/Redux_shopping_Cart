import React from 'react'
import Shopping_cart from '../image/shopping_cart.png'

function Header (props) {
   if(props.data.length != 0){
    console.log(JSON.stringify(props.data))
   } 
  return (
    <div>
      <div className='add_to_cart'>
        <span className='cart_count'>{props.data.length}</span>
        <img src={Shopping_cart} style={{ width: '100px' }} />
      </div>
    </div>
  )
}
export default Header
