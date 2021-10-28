import "./App.css";
import Carousel from "./components/Carousel";
import Search from "./components/Search";
import Vehicles from "./components/Vehicles";
import Cart from "./components/Cart";
import Details from "./components/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Cart />
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <div className="main">
              <Carousel />
              <Search />
              <Vehicles />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
