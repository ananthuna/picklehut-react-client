import React from 'react'
import './accountIcon.css'

function accountIcon() {
    return (
        <div>
           <img className='icon' alt='acc' src={process.env.PUBLIC_URL + '/account.svg'}></img>
        </div>
    )
}

export default accountIcon