import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { Cultivation, Geners, martialart } from '../../../data/Index'
import MangaDetalisDesktop from "./MangaDetalisDesktop";
import MangaDetalisMobile from "./MangaDetalisMobile";

function MangaDetailsOfMartialArt() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const all = [...Geners.Cultivation,...Geners.MartialArts]

  const renderMangaDetails = all.map((manga) => (
    <Grid key={manga.id} item>
      {matches ? (
        <MangaDetalisMobile manga={manga} />
      ) : (
        <MangaDetalisDesktop manga={manga} />
      )}
    </Grid>
  ));

  return <Grid container>{renderMangaDetails}</Grid>;
}

export default MangaDetailsOfMartialArt;
