import React from "react";
import { useRecoilState } from "recoil";

import destinations from '../data/ShippingData'
import shippingState from "../Store/ShippingState";

function Shipping() {
    const [shipping, setShipping] = useRecoilState(shippingState);

    return (
        <div>
            <h2>Shipping</h2>
            {Object.entries(destinations).map(([country, price]) => (
                <button
                    onClick={() => {
                        setShipping(country);
                    }}
                >
                    {country} @ £{price}
                    {country === shipping ? <span> </span> : ""}
                </button>
            ))}
        </div>
    );
}

export default Shipping