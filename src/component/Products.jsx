import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseAmount,
  decreaseAmount,
  removeProduct,
  updateTotal
} from "../feature/basketSlice";

function Products({ amount, price, name, image }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row items-center gap-8 px-10">
      <img className="w-40" src={image} alt={name + "glasses"} />
      <div className="w-1/2 px-10">
        <p className="text-xl font-medium">{name}</p>
        <p className="text-lg tracking-wide">{price.toFixed(2)}</p>
        <button
          className="text-red-500 tracking-wide pt-1 pb-3 "
          onClick={() => dispatch(removeProduct({ name }))}
        >
          Remove
        </button>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg font-medium">Amount</p>
        <div className="flex flex-row gap-4 items-center text-gray-600 font-medium">
          <button
            className="text-xl"
            onClick={() => {
              if (amount === 1) {
                dispatch(removeProduct({ name }));
                return;
              }
              dispatch(decreaseAmount({name}))
            }}
          >
            -
          </button>
          <p>{amount}</p>
          <button
            className="text-xl"
            onClick={() => dispatch(increaseAmount({ name }))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
