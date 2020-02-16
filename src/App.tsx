import React from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Projects from "./pages/Projects";

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
      <div className="App" data-testid="app">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
