import { Box, Button, styled, Typography } from "@mui/material";
import {Colors} from '../../styles/theme/Index'

export const FooterContainer = styled(Box)(({theme})=>({
    display:'flex',
    
    flexDirection:'row',
    background:Colors.shaft,
        color: Colors.white,
        justifyContent:'center',
    alignItems:'center',
    [theme.breakpoints.up('sm')]:{
        
        height:'200px',
        marginTop:'2rem',
    },
    [theme.breakpoints.down('sm')]:{
        height:'350px',
        flexDirection:'column',
        marginTop:'1.5rem',
        
    },
    [theme.breakpoints.down('xs')]:{
        height:'330px',
        flexDirection:'column',
        marginTop:'1rem',
    },
}));

export const FooterDetails = styled(Typography)(({theme})=>({
    display: 'flex',
    [theme.breakpoints.up('md')]:{
        fontSize:'1.3rem',
    },
    [theme.breakpoints.down('sm')]:{
        fontSize:'12px',
        margin:'5px',
        // padding:'10px'
    },
    [theme.breakpoints.down('xs')]:{
        fontSize:'10px',
        margin:'5px',

    },
}));


