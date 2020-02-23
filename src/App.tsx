import React from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import AutoscuolaSilveri from "./pages/projects/AutoscuolaSilveri";
import PlanningPoker, {
  planning_poker_privacy_policy
} from "./pages/projects/PlanningPoker";
import PomodoroTime from "./pages/projects/PomodoroTime";
import ProfileFlutter from "./pages/projects/ProfileFlutter";
import ProfileReact from "./pages/projects/ProfileReact";
import StandardPage from "./pages/StandardPage";

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
            <Route path="/projects/planning_poker/privacy_policy">
              <StandardPage
                title={planning_poker_privacy_policy.title}
                content={planning_poker_privacy_policy.content}
              />
            </Route>
            <Route path="/projects/profile_react">
              <ProfileReact />
            </Route>
            <Route path="/projects/profile_flutter">
              <ProfileFlutter />
            </Route>
            <Route path="/projects/pomodoro_time">
              <PomodoroTime />
            </Route>
            <Route path="/projects/planning_poker">
              <PlanningPoker />
            </Route>
            <Route path="/projects/autoscuola_silveri">
              <AutoscuolaSilveri />
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
