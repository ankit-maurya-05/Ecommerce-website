import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../Featured/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-6">
      <h2 className="text-center text-3xl text-black font-bold mb-6">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center   border p-4 mb-4 rounded-md shadow-md">
              <img src={item.image} alt={item.name} className="w-28 h-28 object-contain" />

              <div className="flex-1 ml-4">
                <h3 className=" text-black font-bold">{item.name}</h3>
                <p className="text-black font-semibold">Price: {item.price}</p>
              </div>

              {/* 🔼 Centered Quantity Buttons */}
              <div className=" flex-1 space-x-3 mt-2">
                <button
                  className="bg-gray-300 text-black px-3 py-1 rounded-full hover:bg-gray-400"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  −
                </button>

                <span className="text-lg font-semibold text-black w-8 text-center">
                  {item.quantity}
                </span>

                <button
                  className="bg-gray-300 text-black px-3 py-1 rounded-full hover:bg-gray-400"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </div>

              {/* 🗑 Remove Item Button */}
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
