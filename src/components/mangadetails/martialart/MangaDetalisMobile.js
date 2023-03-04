import {
  Box,
  Button,
  Divider,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import {
  MangaDetailsButton,
  MangaDetailsContainerMobile,
  MangaDetailsContantedMobile,
  MangaDetailsImg,
  MangaDetailsTitle,
} from "../../../styles/mangadetails/Index";
import { Colors } from "../../../styles/theme/Index";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function MangaDetalisMobile({ manga }) {
  const param = useParams();
  const { name } = param;
  return (
    <>
      {/* //useParam is used for matching the two routing name  */}
      {manga.name === name ? (
        <Box
          sx={{
            background: Colors.shaft,
            color: Colors.white,
            p: { xs: 3, sm: 4, md: 10 },
          }}
          mt={{ sm: 1, md: 2 }}
        >
          {/* //Title Section */}
          <MangaDetailsTitle variant="h6">{manga.name} </MangaDetailsTitle>
          <Divider
            orientation="horizontal"
            flexItem
            variant="fullWidth"
            sx={{ marginBottom: "20px " }}
          />

          {/* //Image Section */}
          <MangaDetailsContainerMobile>
            <MangaDetailsImg src={manga.image} />

            {/* //Chapter,Rank,Rating Section */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              // flexGrow={3}
              // m={10}
            >
              <MangaDetailsContantedMobile variant="caption">
                Ch: {manga.chapter}
              </MangaDetailsContantedMobile>
              <MangaDetailsContantedMobile variant="caption">
                {manga.animatedby}
              </MangaDetailsContantedMobile>
              <MangaDetailsContantedMobile
                variant="caption"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CalendarMonthIcon />
                {manga.date}
              </MangaDetailsContantedMobile>
              <MangaDetailsContantedMobile variant="caption">
                Rank:{manga.rank}
              </MangaDetailsContantedMobile>
              <Rating
                sx={{ pl: { xs: 2, sx: 3 }, mt: { xs: 1, sm: 2 } }}
                name="half-rating-read"
                defaultValue={manga.rating}
                precision={0.5}
                size="small"
                readOnly
              />
            </Box>
          </MangaDetailsContainerMobile>

          {/* //Description Section */}
          <Box flexDirection="column" display="flex" p={2}>
            <Typography variant="caption">{manga.description}</Typography>
            <Typography mt={1}><i>Source: {manga.source}</i></Typography>

            {/* //Genres Section */}
            <Typography variant="body1" mt={1}>
              Tags
            </Typography>
            <Box display="flex" justifyContent="flex-start" flexDirection="row">
              <MangaDetailsButton size="small" color="info">
                Action
              </MangaDetailsButton>
              <MangaDetailsButton size="small" color="info">
                Manhwa
              </MangaDetailsButton>
              <MangaDetailsButton size="small" color="info">
                Fantasy
              </MangaDetailsButton>
              <MangaDetailsButton size="small" color="info">
                Romance
              </MangaDetailsButton>
            </Box>
            <Box display="flex" justifyContent="flex-start" flexDirection="row">
              <MangaDetailsButton size="small" color="info">
                Martial Arts
              </MangaDetailsButton>
              <MangaDetailsButton size="small" color="info">
                Full Color
              </MangaDetailsButton>
            </Box>

            {/* //Reviews Section */}
            <Typography
              varint="h4"
              sx={{ padding: "20px 0px", fontSize: "1.5rem" }}
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
        </Box>
      ) : null}
    </>
  );
}

export default MangaDetalisMobile;
