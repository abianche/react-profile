import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import {
  planning_poker_privacy_policy,
  planning_poker_terms_and_conditions,
} from "./pages/projects/PlanningPoker";
import StandardPage from "./pages/StandardPage";

export const Palette = {
  raisin_black: "#212121",
  sunburnt_cyclops: "#f4434e",
  sunglow: "#ffc43a",
};

// https://material-ui.com/customization/theming/
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
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
            <Route path="/projects/planning_poker/privacy_policy">
              <StandardPage
                title={planning_poker_privacy_policy.title}
                content={planning_poker_privacy_policy.content}
              />
            </Route>
            <Route path="/projects/planning_poker/terms_and_conditions">
              <StandardPage
                title={planning_poker_terms_and_conditions.title}
                content={planning_poker_terms_and_conditions.content}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
};

export default App;
