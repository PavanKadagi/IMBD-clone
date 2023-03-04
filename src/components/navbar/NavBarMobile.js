import { IconButton } from "@mui/material";
import {
  NavBarContainer,
  NavBarTitle,
} from "../../styles/navbar/Index";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useUIContext } from "../../context/Index";

function NavBarMobile() {
  const { setDrawerOpen, setShowSearchBar } = useUIContext();
  return (
    <NavBarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <NavBarTitle>Manga</NavBarTitle>
      <IconButton onClick={() => setShowSearchBar(true)}>
        <SearchIcon />
      </IconButton>
    </NavBarContainer>
  );
}

export default NavBarMobile;
