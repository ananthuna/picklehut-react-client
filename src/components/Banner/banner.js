import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './banner.css'

function banner() {
    const slides = [
        { title: 'The Land of Teast!', description: 'Best Quality Products', url: process.env.PUBLIC_URL + '/pickle1.jpg' },
        { title: 'Garlic pickle', description: 'NATURAL', url: process.env.PUBLIC_URL + '/pickle2.jpg' },
        { title: 'Organic Vegitables', description: 'GARLIC', url: process.env.PUBLIC_URL + '/pickle3.jpg' },
        { title: 'Fresh lemon', description: 'TEASTY', url: process.env.PUBLIC_URL + '/pickle4.jpg' },
    ];

    return (
        <div className='banner'>
            <Slider
                autoplay={2000}
            >
                {slides.map((slide, index) => <div className='img-background' style={{ backgroundImage: `url(${slide.url})` }} key={index} >
                    <div className='img-text'>
                        <h2>{slide.title}</h2>
                        <div>{slide.description}</div>
                    </div>
                </div>)
                }
            </Slider >
        </div >
    )
}

export default banner