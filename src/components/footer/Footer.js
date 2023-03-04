
import { Box, Button, IconButton, Paper, Typography } from '@mui/material'
import { FooterContainer, FooterDetails } from '../../styles/footer/Index'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Colors } from '../../styles/theme/Index';
import {useNavigate} from 'react-router-dom'
function Footer() {
    const navigate = useNavigate()

  return (
    <FooterContainer>
    <Box
    display='flex'
    justifyContent='flex-start'
    flexDirection='column'
    mr={{xs:0,sm:0,lg:7}}
    p={{xs:1,sm:1,md:3,lg:3}}
    >
    <FooterDetails variant='caption'
     >Manga is run by fans, for fans</FooterDetails>
     <Button variant='contained'  >Support us on Patreon</Button>
     <FooterDetails variant='caption' sx={{
        margin:'10px 0px'
     }} >Learn about more ways to support Manga</FooterDetails>
    </Box>
    <IconButton >
        <FacebookIcon color='success' sx={{fontSize:{ xs: '2rem' ,md: '3rem'}}}  />
     </IconButton>
     <IconButton >
        <InstagramIcon color='error'  sx={{fontSize:{ xs: '2rem' ,md: '3rem'}}}  />
     </IconButton>
     <IconButton >
        <TwitterIcon sx={{fontSize:{ xs: '2rem' ,md: '3rem'}}} color={Colors.white} />
     </IconButton>
     <Box
     p={{xs:0,sm:0,lg:3}}
     ml={{sx:0,sm:0,md:2,lg:5}}
     >
    <FooterDetails variant='caption' pb={2} onClick={()=>navigate('/ContactUs')} sx={{cursor:'pointer'}}  >Contact Us</FooterDetails>
        <FooterDetails variant='caption'onClick={()=>navigate('/AboutUs')} sx={{cursor:'pointer'}}  >About Us</FooterDetails>
     </Box>
  </FooterContainer>
  )
}

export default Footer