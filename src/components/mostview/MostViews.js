import StartIcon from '@mui/icons-material/Start';
import React, { useEffect } from 'react'
import MangaListCultivation from './Index'
import { HomeConainer, HomeTitle } from '../../styles/home/Index';
import { Divider } from '@mui/material';

function MostViews() {
  useEffect(()=>{
    document.title = 'Most Views'
  });
  return (
    <>
         <HomeConainer mt={{xs:1,md:2}} >
    <StartIcon fontSize='large' color={'secondary'}  />
    <HomeTitle ml={1} variant="h5"   >Most Views</HomeTitle>
    </HomeConainer>
    <Divider orientation='horizontal' variant='fullWidth' />
       <MangaListCultivation/>
    </>
  )
}

export default MostViews;