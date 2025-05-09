import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material';
import { ChannelCard, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI'
const ChannelDetail = () => {
  const { id } = useParams(); 

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  console.log(channelDetail, videos)
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  }, [id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(8,39,99,1) 18%, rgba(255,255,255,1) 100%)',          zIndex: 10,
          height: '300px',
          
        }}>

        </div>
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: {sm: '100px'}}} />
          <Videos videos={videos}/>
      
      </Box>

    </Box>
  )
}

export default ChannelDetail