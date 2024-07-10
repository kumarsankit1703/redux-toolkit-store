import React from "react";
import Products from "./Products";
import { useSelector } from "react-redux";

function BasketProducts() {
  const { products, total, amount } = useSelector((store) => store.basket);
  return (
    <>
      <div className="max-w-4xl mx-auto py-4">
        {amount > 0 ? (
          <div className="py-4">
            <div>
              {products?.map((item, index) => (
                <Products
                  key={new Date().getTime + Math.random()}
                  price={item.price}
                  image={item.image}
                  name={item.name}
                  amount={item.amount}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <p className="text-2xl text-gray-700 font-medium text-center">
              Your Basket is Empty{" "}
            </p>
          </>
        )}
        <div className="flex flex-row items-center justify-evenly py-8">
            <p className="font-medium text-2xl text-gray-700">Total</p>
            <p className="font-medium text-2xl">$ {total}</p>
        </div>
      </div>
    </>
  );
}

export default BasketProducts;
