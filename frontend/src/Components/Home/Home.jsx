import React, { useEffect, useState } from 'react';
import image11 from "../../../public/images/image11.png";
import image12 from "../../../public/images/image12.png";
import image13 from "../../../public/images/image13.png";
import image14 from "../../../public/images/image14.png";
import image1 from "../../../public/images/image1.png";
import image16 from "../../../public/images/image16.png";
import axios from 'axios';

function Home() {

  const [products, setProducts] = useState([]);
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/allproducts")
      .then((response) => {
        const shuffled = shuffleArray(response.data); // Shuffle the product list
        setProducts(shuffled.slice(0, 4)); // Pick first 4 after shuffle
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>


 
<div className="carousel w-full">
  <div id="slide1" className="carousel-item  w-full">
    <img
      src={image13}
      className="w-full" />
    <div className="  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={image12}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={image11}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={image14}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
 
 <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-black mb-6">Featured Products</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="mx-auto m-1 h-48 w-full object-contain bg-white " />
            <h3 className="text-lg text-black font-semibold">{product.name}</h3>
            <p className="text-black font-bold">₹{product.price}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>



<div className='border m-4'>
  <img className='' src={image16} alt=''/>
</div>


      <div className=" flex flex-col lg:flex-row justify-center items-center lg:items-start lg:px-20 font-semibold text-black sm:pb-10">
        {/* Text Section */}
        <div className="space-y-8 lg:pt-28 px-12 pt-1 text-center lg:text-left flex-1 order-2 lg:order-1">
          <h2 className="hidden text-black    text-4xl sm:text-5xl font-bold lg:flex">iPhone 16 Pro</h2>
          <p className="lg:pr-32 ">
            "Get yours today and enjoy a special offer: save 20% on your purchase plus a free accessory. 
            Experience stunning photography, lightning-fast performance, and cutting-edge features that 
            redefine what a smartphone can do. Don't miss out!"
          </p>
          <button className="border-2 border-[#011F5B] hover:bg-[#AFDBF5] hover:text-black rounded-lg p-2 px-4 ">
            Buy Now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 order-1 lg:order-2 lg:pl-10">
          <img src={image1}alt="iPhone 16 Pro" className="w-72 sm:w-72 md:w-80 lg:w-96" />
        </div>
        <h2 className="lg:hidden sm:flex text-black text-4xl sm:text-5xl font-bold">iPhone 16 Pro</h2>
      </div>

      
      
     
    </div>
    

  );
}

export default Home;
