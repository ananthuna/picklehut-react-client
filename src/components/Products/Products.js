import { Box } from '@mui/system'
import React from 'react'
import ProductsView from '../productsView/Products'
import { baseUrl } from '../../url'
import axios from '../../axios'
import { useEffect } from 'react';
import { Typography } from '@mui/material'

function Products() {
  const [veg, setVeg] = React.useState([])
  const [nonveg, setNonveg] = React.useState([])

  useEffect(() => {
    axios.get(`${baseUrl}/api/item/items`).then((doc) => {
      const vegItems = doc.data.filter((item) => {
        return item.category === "veg" && item
      })
      const nonvegItems = doc.data.filter((item) => {
        return item.category === "nonveg" && item
      })
      setVeg(vegItems)
      setNonveg(nonvegItems)
    })
  }, [])


  return (
    <Box sx={{ bgcolor: '#F6F3F3', mt: '5rem', pl: '1rem', pt: '6rem', pb: '2rem' }}>
      {veg &&
        <Box >
          <Typography className='boxitems'>Special pickles</Typography>
          <Box>
            <ProductsView items={veg} />
          </Box>
          <Typography sx={{ mt: '1rem' }}>Vegetarian pickles</Typography>
          <Box>
            <ProductsView items={veg} />
          </Box>
          <Typography sx={{ mt: '1rem' }}>Non-vegetarian pickles</Typography>
          <Box>
            <ProductsView items={nonveg} />
          </Box>
        </Box>}
    </Box>
  )
}

export default Products

