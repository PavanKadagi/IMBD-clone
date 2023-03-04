import { DrawerCloseButton,MiddleDivider } from '../../styles/drawer/Index'
import {
    Drawer,
    List,
    ListItemButton,
    ListItemText,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
import { Colors } from '../../styles/theme/Index';
import { lighten } from "polished";
import { useUIContext } from '../../context/Index';
import {pages} from '../../data/Index'
import { NavLink } from 'react-router-dom';



function NavDrawer() {
    
  const {drawerOpen,setDrawerOpen} = useUIContext();


  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{ 
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}
      >
      {
        pages.map((page)=>(
          <List key={page}>
                <ListItemButton >
            <ListItemText  >
            <NavLink to= { page === "Home" ? "/" : `/${page.replace(/\s+/g, "")}`} 
                style={{textDecoration:'none',color:'white',}}
                >{page}</NavLink>
            </ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
        ))
      }
        
      </Drawer>
    </>
  )
}

export default NavDrawer