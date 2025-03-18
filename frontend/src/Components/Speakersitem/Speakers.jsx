import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Featured/cartSlice'

function Speakers() {
 const [speakers, setspeakers ] = useState([])
 const [loading, setLoading] =useState(false)
 const [error, setError] = useState(false)
 const dispatch = useDispatch();
 useEffect(() => {
  ;(async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get('./api/products/speakers');
      setspeakers(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false); // Ensure loading state is cleared
    }
  })();
}, []);
 const speakerAddToCart = (speaker) => {
    dispatch(addToCart(speaker)); // Dispatch addToCart action when button is clicked
  };

if (error) {
  return <h1 className="text-red-600">Something went wrong</h1>;
}

if (loading) {
  return <h1>Loading...</h1>;
}

return  (
  
  <div className="">
   

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
  {speakers.map((speaker) => (
    <div className="rounded-md border p-2 bg-white hover:bg-white" key={speaker.id}>
      <img src={speaker.image} alt={speaker.name} className="mx-auto m-1 h-48 w-full object-contain bg-white " />
      <h3 className="text-lg text-black font-semibold">{speaker.name}</h3>
      <p className="text-black pl-4 mb-2 text-2xl font-extrabold">₹{speaker.price}</p>
      <div className=' text-center'>
           <button
  className="btn btn-sm bg-[#AFDBF5] m-2  border-black text-black font-semibold w-64 h-10 rounded-full hover:bg-blue-300"
>
  Buy
</button>

<button
                className="btn btn-sm bg-[#FEBE10] m-2 text-black font-semibold w-64 h-10 rounded-full hover:bg-yellow-400"
                onClick={() => speakerAddToCart(speaker)} // Add to cart when clicked
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

export default Speakers