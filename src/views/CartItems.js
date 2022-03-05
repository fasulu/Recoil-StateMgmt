import React from "react";
import { useRecoilValue } from "recoil";

import inventory from '../data/InventoryData'

import cartState from "../Store/CartState";

function CartItems() {

    const cart = useRecoilValue(cartState);

    if (Object.keys(cart).length === 0) return <p>No items.</p>;

    return (
        <ul>
            {Object.entries(cart).map(([id, quantity]) => (
                <li key={id}>
                    {inventory[id].name} x {quantity}
                </li>
            ))}
        </ul>
    );
}

export default CartItems;