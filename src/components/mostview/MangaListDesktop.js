import { Box, Button, Paper, Rating, Tooltip, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MangaListContainer,
  MangaListImg,
  MangaListName,
} from "../../styles/home/Index";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function MangaListDesktop({ matches, manga }) {
  const navigate = useNavigate();

  // function handle() {
  //   <Link to={`/${manga.name}`}></Link>;
  // }
  return (

    <Tooltip
    
    placement="right"
    // maxWidth='500px'
    // sx={{maxWidth:'500px'}}
    arrow
    title={
      <Box
      p={1.5}
      // bgcolor={Colors.shaft}
      // sx={{width:'600px'}}
      
      >
        <Typography variant="h6" mb={1.5} >{manga.name}</Typography>
        <Box
        display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              mb={1}
        >
        <Typography variant="caption" pr={2} borderRight={'1px solid white'}  >Ch: {manga.chapter}</Typography>
        <Typography variant="caption" pr={1} mr={2} ml={1} borderRight={'1px solid white'} >{manga.animatedby}</Typography>
        <Typography variant="caption" pr={1} mr={2} ml={1} borderRight={'1px solid white'} sx={{display:'flex',
        justifyContent:'center',
        alignItems:'center'}} > <CalendarMonthIcon fontSize='small'mr={1} />
                {manga.date}</Typography>
        
                <Rating
                
                name="half-rating-read"
                defaultValue={manga.rating}
                precision={0.5}
                readOnly
                max={1}
              />
        </Box>
        <Typography variant="caption">{manga.description}</Typography><br/>
        <Typography variant="caption" mt={2}><i>Source: {manga.source}</i></Typography><br/>
        <Typography variant="caption" mt={2}  >Tags</Typography>
      <Box
      display='flex'
      flexDirection='row'
      // justifyContent='flex-start'
      >
       
        <Button color='inherit' size="small" sx={{textTransform:'capitalize'}} >Action</Button>
        <Button color='inherit' size="small" sx={{textTransform:'capitalize'}} >Manhwa</Button>
        <Button color='inherit' size="small" sx={{textTransform:'capitalize'}} >Fantasy</Button>
        <Button color='inherit' size="small" sx={{textTransform:'capitalize'}} >Romance</Button>
      </Box>

      </Box>
    }
    followCursor
    >
    <MangaListContainer
      sx={{
        cursor: "pointer",
      }}
      onClick={() => navigate(`manga/${manga.name}`)} //()=> navigate(`/${manga.name.replace(/\s+/g, "")}`)
    >
      <Paper
        sx={{
          borderRadius: "20px",
        }}
        elevation={5}
      >
        <MangaListImg src={manga.image} />
        <MangaListName variant="h6" color="secondary">
          {manga.name}
        </MangaListName>
      </Paper>
    </MangaListContainer>
    </Tooltip>
  );
}

export default MangaListDesktop;
