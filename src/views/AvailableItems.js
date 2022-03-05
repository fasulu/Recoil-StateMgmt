import React from "react";
import { useRecoilState } from "recoil";

import inventory from '../data/InventoryData'
import cartState from "../Store/CartState";

function AvailableItems() {

    const [cart, setCart] = useRecoilState(cartState);

    return (
        <div>
            <h2>Available Items</h2>
            <ul>
                {Object.entries(inventory).map(([id, { name, price }]) => (
                    <li key={id}>
                        {name} @ £{price.toFixed(2)}
                        <button
                            onClick={() => {
                                setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
                            }}
                        >
                            Add
                        </button>
                        {cart[id] && (
                            <button
                                onClick={() => {
                                    const copy = { ...cart };
                                    if (copy[id] === 1) {
                                        delete copy[id];
                                        setCart(copy);
                                    } else {
                                        setCart({ ...copy, [id]: copy[id] - 1 });
                                    }
                                }}
                            >
                                Remove
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AvailableItems;