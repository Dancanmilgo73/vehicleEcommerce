import * as React from "react";
import "../styles/CartContent.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../redux/actions/cars.actions";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TAX_RATE = 0.07;
let subTotal = 0;

function getPriceTotal(price, quantity) {
  // return `${num.toFixed(2)}`;
  let totalWithDisc = 0;
  if (quantity > 5) {
    totalWithDisc = price * quantity - price * quantity * 0.05;

    return totalWithDisc.toFixed(2);
  } else {
    totalWithDisc = price * quantity;

    return totalWithDisc.toFixed(2);
  }
}

function getDiscount(price, quantity) {
  if (quantity > 5) return (price * quantity * 0.05).toFixed(2);
  return 0;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

// function subtotal(car) {
//   return car.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

// const rows = [
//   createRow("Paperclips (Box)", 100, 1.15),
//   createRow("Paper (Case)", 10, 45.99),
//   createRow("Waste Basket", 2, 17.99),
// ];

// const invoiceSubtotal = subtotal(rows);
// const invoiceTaxes = TAX_RATE * invoiceSubtotal;
// const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function CartContent() {
  const { carsInCart } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  // console.log(subtotal);
  return (
    <TableContainer component={Paper} className="cartContent__Con">
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Vehicle</TableCell>
            <TableCell align="left">Qty.</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Discount</TableCell>
            <TableCell align="left">Total</TableCell>
            {/* <TableCell align="leftt">Total</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {carsInCart.map((car) => {
            subTotal += Number(
              getPriceTotal(Number(car.price), Number(car.quantity))
            );
            const quantity = (
              <div className="card__inputQuantity">
                <button onClick={() => dispatch(decrementQuantity(car.id))}>
                  -
                </button>
                {car.quantity}
                <button onClick={() => dispatch(incrementQuantity(car.id))}>
                  +
                </button>
              </div>
            );
            return (
              <TableRow key={car.id}>
                <TableCell align="left">
                  <Link className="name__image" to={`details/${car.id}`}>
                    <span>{car.name}</span>
                    <span className="car__image">
                      {<img src={car.image} alt="avatar" />}
                    </span>
                  </Link>
                </TableCell>
                <TableCell align="left">{quantity}</TableCell>
                <TableCell align="left">{car.price}</TableCell>
                <TableCell align="left">
                  Ksh,{getDiscount(Number(car.price), Number(car.quantity))}
                </TableCell>
                <TableCell align="left">
                  Ksh{getPriceTotal(Number(car.price), Number(car.quantity))}
                  {/* {car.price} */}
                </TableCell>
                <TableCell align="left">
                  <button onClick={() => dispatch(removeItem(car.id))}>
                    Remove
                  </button>
                </TableCell>
              </TableRow>
            );
          })}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">
              {/*  {getPriceTotal(invoiceSubtotal)} */}
              Ksh,{subTotal.toFixed(2)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <button>Continue shopping</button>
      <button>Checkout</button>
    </TableContainer>
  );
}
