import { AddBox } from '@mui/icons-material';
import StartIcon from '@mui/icons-material/Start';
import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HomeConainer, HomeTitle } from '../../styles/home/Index';
import { MangaDetailsButton } from '../../styles/mangadetails/Index';

import MangaListMartailArt from './manga/Index';



function Home() {
  const navigate = useNavigate();

  return (<>
  <Typography variant='h6' color='Highlight' fontSize='1rem' p={{xs:1,md:1}} >GENRES</Typography>
 <Box
 display='flex'
 flexDirection='row'
 ml={{xs:1,md:2}}
 >
 <MangaDetailsButton color='success' size='medium' onClick={()=>navigate('/')}    >Martial Arts</MangaDetailsButton>
  <MangaDetailsButton color='success' size='medium' onClick={()=>navigate('/MostViews')}   >Cultivation</MangaDetailsButton>
  <MangaDetailsButton color='success' size='medium' onClick={()=>navigate('/MostViews')}  >Action</MangaDetailsButton>

 </Box>

  <HomeConainer mt={{xs:1,md:2}} >
    <StartIcon fontSize='large' color={'secondary'}  />
    <HomeTitle ml={1} variant="h5"   >Latest Manga Updates</HomeTitle>
    </HomeConainer>
    <Divider orientation='horizontal' variant='fullWidth' />
    
    <MangaListMartailArt/>
    </>
  )
}

export default Home