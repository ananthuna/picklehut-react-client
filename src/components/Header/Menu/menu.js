import React from 'react'
import './menu.css'

function menu() {
    return (
        <div className='container'>
            <div class="dropdown">
                <span>HOME</span>
                <div class="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>
            <div class="dropdown">
                <span>SHOP</span>
                <div class="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>
            <div class="dropdown">
                <span>PAGE</span>
                <div class="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>
            <div class="dropdown">
                <span>ABOUT</span>
                <div class="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>
            <div class="dropdown">
                <span>CONTACT</span>
                <div class="dropdown-content">
                    <p>Hello World!</p>
                </div>
            </div>
        </div>
    )
}

export default menu