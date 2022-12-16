import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductsView from '../productsView/Products'
import { baseUrl } from '../../url'
import axios from '../../axios'

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [veg, setVeg] = React.useState([])
  const [nonveg, setNonveg] = React.useState([])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  axios.get(`${baseUrl}/api/item/items`).then((doc) => {
    const vegItems = doc.data.filter((item) => {
      if (item.category === "veg") return item
    })
    const nonvegItems = doc.data.filter((item) => {
      if (item.category === "nonveg") return item
    })

    setVeg(vegItems)
    setNonveg(nonvegItems)
  })

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%', mt: '5.6rem' }}>
      <AppBar position="static" sx={{ bgcolor: 'white' }}>
        <Tabs
          sx={{ color: 'black' }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Vegitarian" {...a11yProps(0)} />
          <Tab label="Non-vegitarian" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ProductsView items={veg} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ProductsView items={nonveg} />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}