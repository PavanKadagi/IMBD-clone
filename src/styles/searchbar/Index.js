import { Box, styled, TextField } from "@mui/material";
import { Colors } from "../theme/Index";


export const SearchBarContainer = styled(Box)(()=>({
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    position: 'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    opacity: 0.9,
    zIndex:999,
    background: Colors.primary
}));

export const SearchBarField = styled(TextField)(({theme})=>({
    'MuiInput-root':{
        fontSize:'1rem',
        [theme.breakpoints.up('md')]:{
            fontSize:'2rem'
        },
        color:Colors.secondary
    },
    'MuiInput-root::before':{
        borderBottom:`1px solid ${Colors.secondary}`
    },
    'MuiInputLabel-root':{
        color:Colors.secondary
    },

}));

export const SearchBarImg = styled('img')(({src})=>({
    src:`url(${src})`,
}))