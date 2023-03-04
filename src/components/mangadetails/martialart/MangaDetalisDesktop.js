import {
    Box,
    Button,
    Divider,
    Rating,
    TextField,
    Typography,
  } from "@mui/material";
  import { useParams } from "react-router-dom";
  import {
    MangaDetailsTitle,
    MangaDetailsContanted,
    MangaDetailsImg,
  } from "../../../styles/mangadetails/Index";
  import { Colors } from "../../../styles/theme/Index";
  import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useEffect } from "react";
  
  function MangaDetalisDesktop({ manga }) {
    const param = useParams();
    const { name } = param;

    useEffect(()=>{
      document.title = manga.name 
    });
  
    return (
      <>
        {/* //useParam is used for matching the two routing name  */}
        {manga.name === name ? (
          <Box
            sx={{
              background: Colors.shaft,
              color: Colors.white,
            }}
            p={2}
            mt={2}
          >
            {/* //Title Section */}
            <MangaDetailsTitle variant="h6" sx={{ marginBottom: "1rem" }}>
              {manga.name}{" "}
            </MangaDetailsTitle>
            <Divider
              orientation="horizontal"
              flexItem
              variant="fullWidth"
              sx={{ marginBottom: "30px " }}
            />
  
            {/* //Chapter,Rank,Rating Section */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
            >
              <MangaDetailsContanted variant="caption">
                Ch:{manga.chapter}
              </MangaDetailsContanted>
              <MangaDetailsContanted variant="caption">
                {manga.animatedby}
              </MangaDetailsContanted>
              <MangaDetailsContanted
                variant="caption"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0px 0px",
                }}
              >
                <CalendarMonthIcon />
                {manga.date}
              </MangaDetailsContanted>
  
              <MangaDetailsContanted variant="caption">
                Rank:{manga.rank}
              </MangaDetailsContanted>
              <Rating
                sx={{ paddingLeft: { xs: "12px", md: "2rem", lg: "3rem" } }}
                name="half-rating-read"
                defaultValue={manga.rating}
                precision={0.5}
                readOnly
              />
            </Box>
  
            {/* container for Image,Description and Tags */}
            <Box
              display="flex"
              justifyContent="flex-start"
              flexDirection="row"
              mt={3}
            >
              <Box display="flex" justifyContent="flex-start">
                {/* //Image Section */}
                <MangaDetailsImg src={manga.image} p={2} />
                {/* Description Section */}
                <Typography variant="caption" p={2}>
                  {manga.description}
                  <Typography mt={2}>Source:{manga.source}</Typography>
                </Typography>
              </Box>
  
              {/* Tags Section */}
              <Box
                display="flex"
                justifyContent="flex-start"
                flexDirection="column"
                p={2}
              >
                <Typography variant="body">Tags</Typography>
                <Box display="flex" flexDirection="row">
                  <Button size="small" color="info">
                    Action
                  </Button>
                  <Button size="small" color="info">
                    Manhwa
                  </Button>
                  <Button size="small" color="info">
                    Fantasy
                  </Button>
                  <Button size="small" color="info">
                    Romance
                  </Button>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Button size="small" color="info">
                    Martial Arts
                  </Button>
                  <Button size="small" color="info">
                    Full Color
                  </Button>
                </Box>
              </Box>
            </Box>
  
            {/* Reviews Section */}
            <Typography
              varint="h4"
              sx={{ padding: "20px 2rem", fontSize: "1.5rem" }}
            >
              Reviews
            </Typography>
            <Box
              justifyContent="center"
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <TextField multiline sx={{ padding: "0px 2rem" }}></TextField>
              <Button variant="contained" sx={{ width: "30%", m: "1rem" }}>
                Upload
              </Button>
            </Box>
          </Box>
        ) : null}
      </>
    );
  }
  
  export default MangaDetalisDesktop;
  