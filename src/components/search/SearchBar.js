import { Autocomplete, IconButton, Slide, TextField } from "@mui/material";
import {  useState } from "react";
import { SearchBarContainer, SearchBarField, SearchBarImg } from "../../styles/searchbar/Index";
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useUIContext } from '../../context/Index'
import { Geners} from '../../data/Index'
import { useNavigate } from "react-router-dom";


function SearchBar() {
    const {showSearchBar,setShowSearchBar} = useUIContext();//useUIContext
    const [value,setValue] = useState(null);
    function handle(){
        setShowSearchBar(false);
    }

    const goto = useNavigate();
    

    const all = [...Geners.Cultivation,...Geners.MartialArts]
    const name = all.map((name)=>name.name);
    console.log(value);


  return (
    <>
        <Slide in={showSearchBar} timeout={500} direction='down' >
        <SearchBarContainer>
        <Autocomplete 
                    // key={manga.id}
                    id='select-manga'
                    renderInput={(params) => <SearchBarField  color='secondary' variant="standard"  {...params} label='Search Manga(Everything)' />}
                    options={name}
                
                    getOptionLabel={(option) => typeof option === 'string'
                  || option instanceof String ? option : ""}
                    value={value}
                    fullWidth
                    isOptionEqualToValue={(option, value)=> option.name === value.name}
        onChange={(e,newValue)=> setValue(newValue)}
        onSelect={value ===null ? null : ()=> goto(`MostViews/manga/${value}`) }
        
             />
            <IconButton>
                <SearchIcon
                    sx={{
                        fontSize:{xs:'1rem' ,md: '2rem' ,lg: '2.5rem'}
                    }}
                    color='secondary'
                />
            </IconButton>


            <IconButton
            onClick={ handle }
            sx={{
                position: 'absolute',
                top:10,
                right:10,
            }}
            >
                <CloseIcon sx={{fontSize:{ xs: '2rem' ,md: '3rem', lg:'4rem'}}} color='secondary' />
            </IconButton>
        </SearchBarContainer>
        </Slide>
    </>
  )
}

export default SearchBar;