import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux"; // Import useDispatch
import { addToCart } from '../Featured/cartSlice' // Import addToCart action

function Earbuds() {
  const [airdops, setAirdops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
const dispatch = useDispatch(); // Create dispatch function
  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get('./api/products/earbuds');
        setAirdops(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false); // Ensure loading state is cleared
      }
    })();
  }, []);

const CollectAddToCart = (airdop) => {
    dispatch(addToCart(airdop)); // Dispatch action to add item to cart
  };


  if (error) {
    return <h1 className="text-red-600">Something went wrong</h1>;
  }



  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
        {airdops.map((airdop) => (
          <div className="rounded-md border p-2 bg-white hover:bg-white" key={airdop.id}>
            <img src={airdop.image} alt={airdop.name} className="mx-auto m-1 h-48 w-full object-contain bg-white " />
            <h3 className="text-lg text-black font-semibold">{airdop.name}</h3>
            <p className="text-black pl-4 mb-2 text-2xl font-extrabold">₹{airdop.price}</p>
            <div className=' text-center'>
           <button
  className="btn btn-sm bg-[#AFDBF5] m-2  border-black text-black font-semibold w-64 h-10 rounded-full hover:bg-blue-300"
>
  Buy
</button>

<button
  className="btn btn-sm bg-[#FEBE10] m-2 text-black font-semibold w-64 h-10 rounded-full hover:bg-yellow-400"
 onClick={() => CollectAddToCart(airdop)}>
  Add to cart
</button>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Earbuds;
