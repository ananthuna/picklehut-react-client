import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Products from '../products/Products'

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
          <Box>{children}</Box>
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
      <TabPanel value={value}  index={0}>
        <Products tab={'nonveg'}></Products>
      </TabPanel>
      <TabPanel component={'div'} value={value}  index={1}>
        <Products tab={'veg'}/>
      </TabPanel>
    </Box>
  );
}
