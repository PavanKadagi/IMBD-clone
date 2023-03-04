

import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { Colors } from '../../styles/theme/Index';

function ContactUs() {
  useEffect(()=>{
    document.title = 'Contact Us'
  });
  return (
    <Box
    bgcolor={Colors.shaft}
    p={{xs:3,sm:4,md:6}}
    mt={{xs:1,md:2}}
    color={Colors.white}
    >

      <Typography  p={2} >Feel free to contact us if you have any issue with the website or recommendation for the improvement of the website:</Typography>
      <Typography p={2}>pavanKadagi@gmail.com</Typography>
    </Box>
  )
}

export default ContactUs;