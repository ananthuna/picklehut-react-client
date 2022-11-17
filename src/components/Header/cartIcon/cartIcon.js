import React from 'react'
import './cartIcon.css'

function cartIcon() {
    return (
        <div>
            <img className='cart' alt='cart' src={process.env.PUBLIC_URL + '/shopingcart.svg'} ></img>
            <span class='badge badge-warning' id='lblCartCount'> 5 </span>
        </div>
    )
}

export default cartIcon