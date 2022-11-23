import React from 'react'
import { useNavigate } from 'react-router-dom'
import './cartIcon.css'

function cartIcon() {
    const navigate = useNavigate()
    
    return (
        <div onClick={()=>navigate('/cart')}>
            <img className='cart' alt='cart' src={process.env.PUBLIC_URL + '/shopingcart.svg'} ></img>
            <span className='badge badge-warning' id='lblCartCount'> 5 </span>
        </div>
    )
}

export default cartIcon