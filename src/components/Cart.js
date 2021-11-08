import React from "react";
import "../styles/Cart.css";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
export default function Cart() {
  const { carsInCart } = useSelector((state) => state.cars);
  return (
    <Link to="/cart" className="cart__con">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={carsInCart.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Link>
  );
}
