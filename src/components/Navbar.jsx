
import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'


const Navbar = () => {
    return (
        <Stack
            direction='row'
            p={2}
            alignItems='center'
            sx={{
                justifyContent: 'space-between',
                backgroundColor: '#F0F0F0',
                position: 'sticky',
                top: 0,
                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',

            }}
        >
            <Link to='/' style={{ display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
                <img src={logo} alt='logo' height={30} style={{ color: 'white' }} />
            </Link>
            <SearchBar />
        </Stack >
    )
}

export default Navbar