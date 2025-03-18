import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux"; // Import useDispatch
import { addToCart } from '../Featured/cartSlice' // Import addToCart action

function Mobiles() {
  const [Smartphones, setSmartphones] = useState([]);
  const dispatch = useDispatch(); // Create dispatch function

  useEffect(() => {~
    axios
      .get("/api/products/smartphones")
      .then((response) => setSmartphones(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAddToCart = (Smartphone) => {
    dispatch(addToCart(Smartphone)); // Dispatch action to add item to cart
  };

  return (
    <div className="p-6">
      <h2 className="text-center text-black text-3xl font-bold mb-6">Smartphones</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Smartphones.map((Smartphone) => (
          <div key={Smartphone.id} className="border p-4 rounded-md bg-white shadow-md">
            <img
              src={Smartphone.image}
              alt={Smartphone.name}
              className="w-full h-40 object-contain"
            />
            <h3 className="font-semibold text-black">{Smartphone.name}</h3>
            <p className="text-lg text-black font-bold">₹{Smartphone.price}</p>

            <div className="text-center">
              <button className="btn btn-sm bg-[#AFDBF5] m-2 border-black text-black font-semibold w-64 h-10 rounded-full hover:bg-blue-300">
                Buy
              </button>

              <button
                className="btn btn-sm bg-[#FEBE10] m-2 text-black font-semibold w-64 h-10 rounded-full hover:bg-yellow-400"
                onClick={() => handleAddToCart(Smartphone)} // Add to Cart functionality
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mobiles;
