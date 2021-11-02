import * as React from "react";
import "./CartContent.css";
import { useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TAX_RATE = 0.07;

function ccyFormat(num) {
  // return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

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
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Discount</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {carsInCart.map((car) => (
            <TableRow key={car.id}>
              <TableCell className="name__image">
                <span>{car.name}</span>
                <span className="car__image">
                  {<img src={car.image} alt="avatar" />}
                </span>
              </TableCell>
              <TableCell align="right">{car.quantity}</TableCell>
              <TableCell align="right">{car.price}</TableCell>
              <TableCell align="right">0</TableCell>
              <TableCell align="right">
                {/* {ccyFormat(Number(car.price))} */}
                {car.price}
              </TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">
              {ccyFormat(/* invoiceSubtotal */)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">
              {/* {ccyFormat(invoiceTaxes)} */}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">
              {/* {ccyFormat(invoiceTotal)} */}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <button>Continue shopping</button>
      <button>Checkout</button>
    </TableContainer>
  );
}
