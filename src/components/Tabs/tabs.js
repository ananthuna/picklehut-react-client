import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Products from '../products/products'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const products = [
    { name: 'kera pickle', discription: 'sea fish',url:'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
    { name: 'kakka pickle', discription: 'fresh water fish',url:'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
    { name: 'pallathy', discription: 'fresh water fish',url:'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
    { name: 'vayamp', discription: 'fresh water fish',url:'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
    { name: 'kera pickle', discription: 'sea fish',url:'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
    { name: 'kakka pickle', discription: 'fresh water fish',url:'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
    { name: 'pallathy', discription: 'fresh water fish',url:'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
    { name: 'vayamp', discription: 'fresh water fish',url:'https://m.media-amazon.com/images/I/615J2pvNaGL._SL1000_.jpg' },
  ]

  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: '100%',
      mt: '2rem'
    }}>
      <Box sx={{
        borderBottom: 1,
        borderTop: 1,
        borderColor: 'divider',
        display: 'inlineFlex',
        justifyContent: 'center',
        alignItems: 'center'

      }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="NON-VEG" {...a11yProps(0)} />
          <Tab label="VEG" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <Products products={products}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Products products={products}/>
      </TabPanel>
    </Box>
  );
}
