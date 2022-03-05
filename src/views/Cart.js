import React from "react";

import CartItems from "../views/CartItems";
import Shipping from "../views/Shipping";
import Totals from "../views/Totals";

function Cart() {
    return (
      <div>
        <h2>Basket</h2>
        <CartItems />
        <Shipping />
        <Totals />
      </div>
    );
  }

export default Cart