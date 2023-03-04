import { Paper } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MangaListContainer,
  MangaListImg,
  MangaListName,
} from "../../styles/home/Index";

function MangaListMobile({ matches, manga }) {
  const navigate = useNavigate();
//   function handle() {
//     <Link to={`/manga/${manga.name}`}></Link>;
//   }
  return (
    <MangaListContainer
      sx={{
        cursor: "pointer",
      }}
      onClick={() => navigate(`/MostViews/manga/${manga.name}`)} //
    >
      <Paper
        sx={{
          borderRadius: "20px",
        }}
        elevation={5}
      >
        <MangaListImg src={manga.image} />
        <MangaListName>{manga.name}</MangaListName>
      </Paper>
    </MangaListContainer>
  );
}

export default MangaListMobile;
