import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.error('Error fetching data:', error)); // Error handling
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
    <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'White' }}>
      Search result for:  <span style={{ color: '#F31503' }}>{searchTerm}</span> Videos
    </Typography>
    <Videos videos={videos} />
  </Box>
  );
};

export default SearchFeed;