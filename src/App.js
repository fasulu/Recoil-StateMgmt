import React from "react";
import { RecoilRoot } from "recoil";

import AvailableItems from "./views/AvailableItems";
import Cart from "./views/Cart";

// https://www.youtube.com/watch?v=wHe6

function App() {
  return (
    <RecoilRoot>
      <AvailableItems />
      <Cart />
    </RecoilRoot>
  );
}

export default App;
