import { Box, Button, colors, styled, Typography } from "@mui/material";
import {Colors} from '../theme/Index'

// export const MangaDetailsContainer = styled(Box)(()=>({
//     // display: 'flex',
//     // justifyContent:'center',
//     // alignItems:'center',
//     background: Colors.shaft,
//     color:Colors.white,
//     width:'100%',
//     height: '100%',
//     padding:"2rem",
// }));

export const MangaDetailsTitle = styled(Typography)(({theme})=>({
   
    [theme.breakpoints.up('md')]:{
        fontSize:'2rem',
        // padding:''
        display:'flex',
        flexDirection:'column',
        // flexGrow:3,
    },
    [theme.breakpoints.down('md')]:{
        // padding: '1rem',
        display:'flex',
        flexDirection:'column',
        // display: "flex",
        // justifyContent:'center',
        // alignItem:'center'
    },
    [theme.breakpoints.down('xs')]:{
        // padding: '1rem',
        display:'flex',
        flexDirection:'column',
        // display: "flex",
        // justifyContent:'center',
        // alignItem:'center',
        padding:'10px'
    }
}));

export const MangaDetailsContanted = styled(Typography)(({theme})=>({
    borderRight:'1px solid white',
    [theme.breakpoints.up('lg')]:{
        padding:'5px 6rem 5px 3rem',
    },
    [theme.breakpoints.down('lg')]:{
        padding:'0px 2rem 0px 2rem',
    }
}))

export const MangaDetailsImg = styled('img')(({theme,src})=>({
    width: 300,
    height: 300,
    src:`url(${src})`,
    marginLeft:'2rem',
    [theme.breakpoints.down('md')]:{
        width:'200px',
        // height:'50%',
        marginLeft:'1rem',
        padding: '1rem'
    },
    [theme.breakpoints.down('sm')]:{
        width:'170px',
        padding:'10px',
        marginLeft:'10px'
    },
    [theme.breakpoints.down('xs')]:{
        width:'40%',
        height:'40%',
        padding:'10px',
        marginLeft:'10px'
    }
}))

export const MangaDetailsContantedMobile = styled(Typography)(({theme})=>({
    [theme.breakpoints.down('md')]:{
        padding:'1rem',
    marginLeft:'1.5rem'
    },
    [theme.breakpoints.down('sm')]:{
        padding:'10px',
        marginLeft:'10px'
    }
}));

export const MangaDetailsContainerMobile = styled(Box)(({theme})=>({
    display:"flex",
            flexDirection:"row",
            justifyContent:'space-evenly',
            // alignItems:'center',
            [theme.breakpoints.down('xs')]:{
                justifyContent:'flex-start'
            }
}));

export const MangaDetailsButton = styled(Button)(({theme})=>({
    display: 'flex',
    [theme.breakpoints.down('xs')]:{
        fontSize:'10px'
    }
}))