import React, {useEffect, useState} from 'react'
import axios from 'axios'
import image15 from '../Image/image15.png';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Featured/cartSlice';


function TV() {
 const [televisions, settelevisions] = useState([])
 const [loading, setLoading] =useState(false)
 const [error, setError] = useState(false)
 const dispatch = useDispatch();
 useEffect(() => {
  ;(async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get('http://localhost:3000/api/televisions');
      settelevisions(response.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false); // Ensure loading state is cleared
    }
  })();
}, []);

 const tvAddToCart = (television) => {
    dispatch(addToCart(television)); // Dispatch addToCart action when button is clicked
  };

if (error) {
  return <h1 className="text-red-600">Something went wrong</h1>;
}

if (loading) {
  return <h1>Loading...</h1>;
}

return  (
  
  <div className="">

         <div className=' flex justify-center items-center  '>
  <img src={image15} alt="" className="w-full " />
 
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
  {televisions.map((television) => (
    <div className="rounded-md border p-2 bg-white hover:bg-white" key={television.id}>
      <img src={television.image} alt={television.name} className="mx-auto m-1 h-48 w-full object-contain bg-white " />
      <h3 className="text-lg text-black font-semibold">{television.name}</h3>
      <p className="text-black pl-4 mb-2 text-2xl font-extrabold">₹{television.price}</p>
      <div className=' text-center'>
           <button
  className="btn btn-sm bg-[#AFDBF5] m-2  border-black text-black font-semibold w-64 h-10 rounded-full hover:bg-blue-300"
>
  Buy
</button>

<button
                className="btn btn-sm bg-[#FEBE10] m-2 text-black font-semibold w-64 h-10 rounded-full hover:bg-yellow-400"
                onClick={() => tvAddToCart(television)} // Add to cart when clicked
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

export default TV