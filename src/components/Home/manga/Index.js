import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import { Geners } from "../../../data/Index";
import MangaListDesktop from "./MangaListDesktop";
import MangaListMobile from "./MangaListMobile";

export default function MangaListMartailArt() {
    console.log('test');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  //if matches == to true it will display on desktop devices and if false then display on mobile devices
 const renderManga = Geners.MartialArts.map((manga) => (
  <Grid
    item
    key={manga.id}
    xs={6}
    sm={6}
    md={4}
    lg={4}
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    {matches ? (
      <MangaListMobile manga={manga} matches={matches} />
    ) : (
      <MangaListDesktop manga={manga} matches={matches} />
    )}
  </Grid>

));

  return (
    <Grid container spacing={2} justifyContent="center" item xs={12} mt={2}>
      {renderManga}
    </Grid>
  );
}
