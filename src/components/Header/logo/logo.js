import React from 'react'
import './logo.css'

function logo() {
    return (
        <div className='logo-align'>
            <img className='logo' src={process.env.PUBLIC_URL + '/logo_header.png'} alt='logo'></img>
        </div>
    )
}

export default logo