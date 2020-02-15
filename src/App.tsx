import React from "react";
import "./App.css";
import { SocialButtons } from "./components/SocialButtons";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

export const Palette = {
  raisin_black: "#212121",
  sunburnt_cyclops: "#f4434e",
  sunglow: "#ffc43a"
};

// https://material-ui.com/customization/theming/
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF"
    }
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Profile>
          <SocialButtons />
        </Profile>
        <Footer />
        <footer className="App-footer"></footer>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
