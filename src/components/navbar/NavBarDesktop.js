import {  IconButton, ListItemButton,ListItemIcon, ListItemText } from "@mui/material"
import { NavBarContainer, NavBarTitle,NavBarList, NavBarButtonLink } from "../../styles/navbar/Index"
import {NavLink} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { Colors } from "../../styles/theme/Index";
import './activelink.css'
import { scaleUpHorCenter, TextPopUpTop } from "../../animations/Index";
import {pages} from '../../data/Index'
import { useUIContext } from "../../context/Index";

function NavBarDesktop() {

  const {setShowSearchBar} = useUIContext();
  return (
    <NavBarContainer>
        <NavBarTitle variant="h4"
       sx={{
        '&:hover':{
        animation: `${TextPopUpTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both `
      }
       }}
          >
            Manga
        </NavBarTitle>
        {
            pages.map((page)=>(
            <NavBarList type='row'  key={page}  >
              <ListItemText primary={
                <NavLink to= { page === "Home" ? "/" : `/${page.replace(/\s+/g, "")}`} 
                style={{textDecoration:'none',color:'black',fontWeight:'600'}}
                
                >{page}</NavLink>
                }
                // className='scale-up-hor-center'
                // className={'scale-up-hor-center'}
                sx={{
                  fontWeight:'500',
                  '$:hover':{
                    borderBottom:'1px solid red'
                  }
                }}
                />
              </NavBarList>
            ))
          } 
        
        
         <IconButton
         onClick={()=>setShowSearchBar(true)}
         >
         <SearchIcon
               
               sx={{
                fontSize:{xs:'1rem',md:'2rem',lg:'2rem'}
               }}
            />
         </IconButton>
            
    </NavBarContainer>
  );
}

export default NavBarDesktop