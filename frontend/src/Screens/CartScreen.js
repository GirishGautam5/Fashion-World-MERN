import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function CartScreen(props) {
  const { id } = useParams();
  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get("qty");
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;

  console.log(qty, "qty");
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {id} Qty: {qty}
      </p>
    </div>
  );
}
