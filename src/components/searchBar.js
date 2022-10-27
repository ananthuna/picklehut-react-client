import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '80ch',
        },
    },
}));

function searchBar() {
    return (
        <Search sx={{
            height: "2.5rem",
            display: "flex",
            bgcolor: "white",
            mt: "0.8rem",
            border: "1px solid grey",
            borderRadius: "20px",
        }}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                sx={{
                    mt: "-0.2rem",
                    width: "30rem"
                }}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
            <Box sx={{
                pl: "1.4rem",
                pt: '0.4rem',
                bgcolor: '#e6edf3',
                borderRadius: '0 20px 20px 0',
                
                borderLeft: '1px solid grey',
                width: '10rem'
            }}>
                <Typography>All Category<KeyboardArrowDownIcon /></Typography>
            </Box>
        </Search>
    )
}

export default searchBar
