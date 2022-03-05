import { atom } from "recoil";

const shippingState = atom({
    key: "shippingState",
    default: "UK",
  });

export default shippingState;