import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';
import { Key } from '@mui/icons-material';


const selectedCategory = 'New';
const SideBar = () => (
    <Stack 
        direction='row'
        sx={{ overflow: 'auto',
            height: { sx: 'auto', md: '95%'},
            flexDirection: { md: 'column'},
        }}
    >
        {categories.map((category) => (
            <button className='category-btn'
                style={{
                backgroundColor: category.name === 'New' && '#FC1503',
                color: 'White'
            }} key={category.name}>
                <span style={{color: category.name === selectedCategory ? 'White' : 'red', marginRight: '15px'}}>{category.icon}</span>
                <span style={{ opacity: category.name === selectedCategory ? '1' : '0.6'}}>{category.name}</span>
            </button>
        ))}
    </Stack>
    )


export default SideBar