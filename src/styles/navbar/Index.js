import { Box, Button, IconButton, List, ListItemButton, styled, Typography } from "@mui/material";
import { TextPopUpTop } from "../../animations/Index";
// import '@fontsource/montez'
import { Colors } from "../theme/Index";

export const NavBarContainer = styled(Box)(()=>({
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'10px',
}))

export const NavBarTitle = styled(Typography)(({theme})=>({
    fontSize:'4rem',
    fontFamily: "'Montez', cursive",
    flexGrow:1,
    color:Colors.secondary,
    padding: '4px',
    [theme.breakpoints.down('md')]:{
        fontSize:'3rem',
        textAlign: 'center',
        flexGrow:3
    },
    
}));

export const NavBarList = styled(List)(({type,theme})=>({
    display: type === 'row'? 'flex' : 'block',
    justifyContent:'center',
    alignItems:'center',
    flexGrow: 3,
    [theme.breakpoints.down('md')]:{
        flexGrow:1,
        fontSize:'20px'
    }
}));

// export const NavBarButtonLink = styled(Button)(({type})=>({
//     display: type === 'row'? 'flex' : 'block',
//     justifyContent:'center',
//     alignItems:'center',
//     flexGrow: 3,
// })) 


export const NavberListItemButton = styled(IconButton)(({theme})=>({
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    flexGrow:1,
    [theme.breakpoints.down('sm')]:{
        flexGrow:0
    }
}))