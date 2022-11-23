import { Box } from '@mui/system';
import React from 'react'
import './features.css'

function features() {
    const cards = [
        { title: 'The Land of Teast!', description: 'Best Quality Products', url: process.env.PUBLIC_URL + '/card1.jpg' },
        { title: 'Garlic pickle', description: 'NATURAL', url: process.env.PUBLIC_URL + '/pickle2.jpg' },
        { title: 'Organic Vegitables', description: 'GARLIC', url: process.env.PUBLIC_URL + '/pickle3.jpg' },
        { title: 'Fresh lemon', description: 'TEASTY', url: process.env.PUBLIC_URL + '/pickle4.jpg' },
    ];

    

    return (
        <Box sx={{pl:'5rem',pr:'1.5rem',position:'relative',width:'100%'}}>
            <div className='main'>
                {cards.map((card,index) =>
                    <div className='card' key={index} style={{ backgroundImage: `url(${card.url})` }}>
                        <div className='discription'>
                            <h6>Product Organic</h6>
                            <h4>Natural Bottled Pickle</h4>
                            <p>With 20% off All pickles</p>
                        </div>
                    </div>

                )}


            </div>
        </Box>
    )
}

export default features