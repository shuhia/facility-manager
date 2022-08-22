import Facilities from "./components/facilities/Facilities";
import { Navbar } from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import { Box } from "@mui/system";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Tournaments } from "./components/tournaments/Tournaments";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Box backgroundColor="#F8F9FA">
        <Navbar></Navbar>
        <Switch>
          <ErrorBoundary>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/facilities">
              <Facilities></Facilities>
            </Route>
            <Route path="/tournaments">
              <Tournaments></Tournaments>
            </Route>
          </ErrorBoundary>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;
