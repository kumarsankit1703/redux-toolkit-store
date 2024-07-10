import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import BasketProducts from "./component/BasketProducts";
import { useDispatch, useSelector } from "react-redux";
import { updateTotal } from "./feature/basketSlice";


function App() {
  const {products}  = useSelector((store) => store.basket)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateTotal())
  } , [products, dispatch])
  return (
    <div>
      <h1 className="flex items-center justify-center py-4 text-3xl font-semibold">Redux Toolkit</h1>
      <Navbar />
      <BasketProducts />
    </div>
  );
}

export default App;
