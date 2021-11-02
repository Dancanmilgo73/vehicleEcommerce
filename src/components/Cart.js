import React from "react";
import "./Cart.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
export default function Cart() {
  return (
    <Link to="/cart" className="cart__con">
      <ShoppingCartIcon className="cart__icon__icon" />
    </Link>
  );
}
