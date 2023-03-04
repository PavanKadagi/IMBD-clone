import { Divider, IconButton, styled } from "@mui/material";

export const DrawerWidth = 250;

export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    left: DrawerWidth,
    zIndex: 9999, 
    cursor:'pointer'  
  }));

export  const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
  ))``;