import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './banner.css'

function banner() {
    const slides = [
        { title: 'First item', description: 'Lorem ipsum', url: process.env.PUBLIC_URL + '/pickle1.jpg' },
        { title: 'second item', description: 'Lorem ipsum', url: process.env.PUBLIC_URL + '/pickle2.jpg' },
        { title: 'third item', description: 'Lorem ipsum', url: process.env.PUBLIC_URL + '/pickle3.jpg' },
        { title: 'fourth item', description: 'Lorem ipsum', url: process.env.PUBLIC_URL + '/pickle4.jpg' },
    ];

    return (
        <div className='banner'>
            <Slider>
                {slides.map((slide, index) => <div style={{backgroundImage: `url(${slide.url})`}}  key={index} >
                    {/* <img alt='img' src={slide.url}></img> */}
                    <h2>{slide.title}</h2>
                    <div>{slide.description}</div>
                </div>)
                }
            </Slider >
        </div >
    )
}

export default banner