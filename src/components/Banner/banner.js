import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './banner.css'

function banner() {
    const slides = [
        { title: 'The Land of Teast!', description: 'Best Quality Products', url: process.env.PUBLIC_URL + '/pickle1.png', offer: '50%', },
        { title: 'Get a taste of homemade goodness with our homemade pickles!', description: 'Natural ingredients!', url: process.env.PUBLIC_URL + '/pickle2.png' },
        { title: 'Homemade Pickles: Fresh, Flavorful, and Delicious!', description: 'Home made teast', url: process.env.PUBLIC_URL + '/pickle3.png' },
        { title: 'Try them today and taste the difference of homemade!', description: 'Teasty pickles', url: process.env.PUBLIC_URL + '/pickle4.png' },
    ];

    return (
        <div className='banner'>
            <Slider className='slider '
                autoplay={2000}
            >
                {slides.map((slide, index) =>
                    <div className='img-background' key={index} >
                        <div className='img-text'>
                            <h2>{slide.title}</h2>
                            <div>{slide.description}</div>
                        </div>
                        <div className='Div'>
                            <h1>50% OFF</h1>
                            <h1 className='textStyle'><b>SUPER</b></h1>
                            <h1 className='textStyle'><b>SALE</b></h1>
                            <h6>From coming week shoping.</h6>
                        </div>
                    </div>)
                }
            </Slider >
        </div >
    )
}

export default banner