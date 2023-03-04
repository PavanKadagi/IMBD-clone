

import { Box, colors, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import {Colors} from '../../styles/theme/Index'
function AboutUs() {
  useEffect(()=>{
    document.title = 'About Us'
  });
  return (
    <Box
    bgcolor={Colors.shaft}
    p={{xs:3,sm:4,md:6}}
    mt={{xs:1,md:2}}
    color={Colors.white}
    >
    <Typography mb={1.5} p={2} >Manga is a place created by the fans, Created for the fans. It’s a place where you can find high-quality manga online absolutely free. This website has been made specifically for manga lovers who want to read al kinds of manga, manhwa and even manhua.</Typography>
    <Typography p={2}  mb={1}>
Team Manga aims to provide great quality manga related content to of people of all ages. The idea is to spread love for manga and share it with people all around the world. We believe that the amazing stories in different manga need to be shared with the world. With that in mind, we created Mangatx and decided to make it free for everyone.</Typography>

<Typography p={2}  mb={1}>There’s something very unique about manga, it’s a great blend of art and text. Its exquisite story style makes it the perfect way to portray lives of different people as well as characters. But many people are unable to read manga because they don’t want to by it, they want to be able to read it online for free and there’s where mangatx comes in. Our idea is exactly to give the fans what they want. We want to build a platform that anyone can access and read quality manga.</Typography>

<Typography p={2}  mb={1}>We believe that Manga is more than just comic. It’s a medium of expression and over time, it has become an art. The idea that one mangaka can inspire millions of people around the world feels almost magical. We at Mangatx want to help the people and spread their message. Manga is our little effort to make the manga and anime community a little more accessible. We believe in the freedom of reading manga and that drives us to pursue our goal of spreading the love for manga in the world.</Typography>
    </Box>
  )
}

export default AboutUs;