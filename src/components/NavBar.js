import Cart from "./Cart";
import Search from "./Search";
import "../styles/NavBar.css"
import { Link } from "react-router-dom";
export default function NavBar() {
   
 
    return (
      <div className="navbar__con">
          <span><Search /></span>
       <Link to="/" style={{textDecoration: "none", color:"inherit"}} className="home__link">Home</Link>
      <span> <Cart /></span>
      </div>
    );
  }
  