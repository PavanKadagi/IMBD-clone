import { Button, Container, TextField, ThemeProvider } from "@mui/material";
import NavBar from "./components/navbar/Index";
import { theme } from "./styles/theme/Index";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUs from "./components/aboutus/AboutUs";
import ContactUs from "./components/contactUs/ContactUs";
import Home from "./components/Home/Home";
import Footer from "./components/footer/Footer";
import NavDrawer from "./components/drawer/NavDrawer";
import { UIProvider } from "./context/Index";
import { Stack } from "@mui/system";
import SearchBar from "./components/search/SearchBar";
import MangaDetailsOfMartialArt from "./components/mangadetails/martialart/Index";

import MostViews from "./components/mostview/MostViews";
// import MangaDetailsOfCultivation from "./components/mostview/manga/Index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={"xl"}
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <NavBar />
            <NavDrawer />
            <SearchBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path='/MostViews' element={<MostViews/>} />
              <Route path='/MostViews/manga/:name' element={<MangaDetailsOfMartialArt/>} />
              
              {/* <Route path='/MostViews/manga/:id' element={<MangaDetailsOfCultivation/>} /> */}
            <Route path="/*" element={<Navigate to='/' />} />
            </Routes>
            <Footer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
