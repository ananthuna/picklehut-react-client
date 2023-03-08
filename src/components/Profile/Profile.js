import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Address from './Address/Address'
import Orders from './Orders/Orders'
import WishList from './WishList/WishList';
import Coupon from './Coupon/Coupon';
import Logout from './Logout/Logout';
import './Profile.css'
import { UserContext } from '../../Context/Context';

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
                <Tab label="Profile information" {...a11yProps(0)} />
                <Tab label="Manage Address" {...a11yProps(1)} />
                <Tab label="My Orders" {...a11yProps(2)} />
                <Tab label="WishList" {...a11yProps(3)} />
                <Tab label="Coupons" {...a11yProps(4)} />
                <Tab label="Logout" {...a11yProps(5)} />

            </Tabs>
            <TabPanel value={value} index={0}>
                <ProfileInfo />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Address />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Orders />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <WishList />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Coupon />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Logout />
            </TabPanel>

        </Box>
    );
}