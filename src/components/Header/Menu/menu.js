import React from 'react'
import './menu.css'

function menu() {
    return (
        <div className='container'>
            <div className="dropdown">
                <span>HOME</span>
                <div className="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>
            <div className="dropdown">
                <span>SHOP</span>
                <div className="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>
            <div className="dropdown">
                <span>PAGE</span>
                <div className="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>
            <div className="dropdown">
                <span>ABOUT</span>
                <div className="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>
            <div className="dropdown">
                <span>CONTACT</span>
                <div className="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>
        </div>
    )
}

export default menu