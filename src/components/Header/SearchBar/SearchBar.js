import { Box, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import InputAdornment from '@mui/material/InputAdornment';

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: lightgrey;
    }
  }
`;

function SearchBar() {
    return (
        <Box sx={{
            width: '35rem',
            height: '3rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <WhiteBorderTextField InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }} size="small" fullWidth label="" id="fullWidth" />
        </Box>
    )
}

export default SearchBar