import React from "react";
import { selector, useRecoilValue } from "recoil";

import inventory from '../data/InventoryData' 
import destinations from '../data/ShippingData'

import cartState from '../Store/CartState'
import shippingState from '../Store/ShippingState'

function Totals() {
    const totals = useRecoilValue(totalsState);
    const comments = "EU & IR may subject to Customs duty"

    return (
        <div>
            <h2>Totals</h2>
            <p>Subtotal: £{totals.subtotal.toFixed(2)}</p>
            <p>Shipping: £{totals.shipping.toFixed(2)}</p>
            <p>*Comment: {comments}</p>
            <p>
                <strong>Total: £{totals.total.toFixed(2)}</strong>
            </p>
        </div>
    );
}

const totalsState = selector({
    key: "totalsState",
    get: ({ get }) => {
        const cart = get(cartState);
        const shipping = get(shippingState);
        const subtotal = Object.entries(cart).reduce(
            (acc, [id, quantity]) => acc + inventory[id].price * quantity,
            0
        );
        const shippingTotal = destinations[shipping];

        return {
            subtotal,
            shipping: shippingTotal,
            total: subtotal + shippingTotal,
        };
    },
});

export default Totals