
import { Box,styled, Tooltip, Typography } from "@mui/material";
import {Colors, theme} from '../theme/Index'

export const HomeConainer = styled(Box)(()=>({
    display:'flex',
     flexDirection:'row',
     justifyContent:'flex-start',
     alignItems:'center',
}));

export const HomeTitle = styled(Typography)(({theme})=>({
    fontSize:'1.2rem',
    fontWeight:'500',
    [theme.breakpoints.down('md')]:{
       fontSize:'1rem'
    }
}));

export const MangaListContainer = styled(Box)(()=>({
    display:'flex',
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center',
    //  position: 'relative',

}));

export const MangaListImg = styled('img')(({src,theme})=>({
    src:`url(${src})`,  
    display: 'flex',
    flexGrow:1,
    borderTopLeftRadius:'20px',
    borderTopRightRadius:'20px',
    [theme.breakpoints.down('sm')]:{
        width:'150px',
        height: '150px',
    },
    [theme.breakpoints.up('sm')]:{
        width:'250px',
    height:'250px',
    },
    [theme.breakpoints.down('xs')]:{
        width:'130px',
        height: '130px',

    },
    
}));

export const MangaListName = styled(Typography)(({theme})=>({
    fontSize:'14px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    borderBottomRightRadius:'20px',
    borderBottomLeftRadius:'20px',
    fontWeight:'500',
    padding: '15px',
    color:Colors.secondary,
    [theme.breakpoints.down('sm')]:{
        fontSize:'7.5px', 
        fontWeight:'900',
    },
    [theme.breakpoints.down('xs')]:{
        fontSize:'6px',
        marginBottom:'9px',
    }
}));

// export const MangaListTooltip = styled(Tooltip)(()=>({
//     maxWidth: 500,
// }));