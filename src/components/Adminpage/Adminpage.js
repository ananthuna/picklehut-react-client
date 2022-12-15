import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { UserContext } from '../../Context/Context';
import ProductList from './ProductList/ProductList';
import AddItem from './AddItem/AddItem';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const { value, setValue } = React.useContext(UserContext)



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: '#F8F8F8',
                display: 'flex',
                height: '39rem',
                pt: '7rem',
                mb: '-1rem'
            }}
        >
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{
                    borderRight: 1,
                    borderColor: 'divider',
                    mt: '-1.5rem',
                    pt: '1rem',
                    bgcolor: 'white',
                }}
            >
                <Tab label="Products" {...a11yProps(0)} />
                <Tab label="Coupons" {...a11yProps(1)} />
                <Tab label="Orders" {...a11yProps(2)} />
                <Tab label="Settings" {...a11yProps(3)} />
                <Tab label="Logout" {...a11yProps(4)} />

            </Tabs>
            <TabPanel value={value} index={0}>
                <ProductList />
                <Box sx={{
                    position:'fixed',
                    bottom:'5rem',
                    right:'3rem'
                }}>
                <AddItem />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Orders
            </TabPanel>
            <TabPanel value={value} index={2}>
                listed Coupons
            </TabPanel>
            <TabPanel value={value} index={3}>
                settings
            </TabPanel>
            <TabPanel value={value} index={4}>
                logout
            </TabPanel>
            
        </Box>
    );
}