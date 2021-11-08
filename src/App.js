import "./styles/App.css";
import Carousel from "./components/Carousel";
import Search from "./components/Search";
import Vehicles from "./components/Vehicles";
import Cart from "./components/Cart";
import Details from "./components/Details";
import CartContents from "./components/CartContents";
import SearchedCars from "./components/SearchedCars";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar  from "./components/NavBar";

function App() {
  return (
    <div className="app">
      <Router>
        {/* <Cart /> */}
        <NavBar />
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/" exact>
            <div className="main">
             
              <Carousel />
              <Vehicles />
            </div>
          </Route>
          <Route path="/cart">
            <CartContents />
          </Route>
          <Route path="/search" exact>
            <Redirect to="/" />
          </Route>
          <Route path="/search/:searchval">
            <div className="main">
              {/* <Search /> */}
              {/* <NavBar /> */}
              <Carousel />
              <SearchedCars />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
