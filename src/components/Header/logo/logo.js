import React from 'react'
import { useNavigate } from 'react-router-dom'
import './logo.css'

function logo() {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate('/')} className='logo-align'>
            <img className='logo' src={process.env.PUBLIC_URL + '/logo_header.png'} alt='logo'></img>
        </div>
    )
}

export default logo