import React from 'react';
import image11 from '../Image/image11.png';
import image12 from '../Image/image12.png';
import image13 from '../Image/image13.png';
import image14 from '../Image/image14.png';
import image1 from '../Image/image1.png';
import image16 from '../Image/image16.png';

function Home() {
  return (
    <div>


<div className="carousel w-full">
  <div id="slide1" className="carousel-item  w-full">
    <img
      src={image13}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
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
      className="w-full " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    
  </div>
</div>
 
 <div className=''>
  <h3 className='text-[#011F5B] font-extrabold text-3xl p-4'>Top Deals</h3>
<div className='flex'>
  <div className="max-w-sm rounded-lg overflow-hidden border bg-white m-4">
      <img className="w-full p-4 h-48 object-cover" src="" alt="" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">watch</h2>
        <p className="text-black text-2xl font-bold   *:">600</p>
      </div>
    </div>
    <div className="max-w-sm rounded-lg overflow-hidden border bg-white m-4">
      <img className="w-full p-4 h-48 object-cover" src="" alt="" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">watch</h2>
        <p className="text-black text-2xl font-bold   *:">600</p>
      </div>
    </div>
    <div className="max-w-sm rounded-lg overflow-hidden border bg-white m-4">
      <img className="w-full p-4 h-48 object-cover" src="" alt="" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">watch</h2>
        <p className="text-black text-2xl font-bold   *:">600</p>
      </div>
    </div>
    <div className="max-w-sm rounded-lg overflow-hidden border bg-white m-4">
      <img className="w-full p-4 h-48 object-cover" src="" alt="" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">watch</h2>
        <p className="text-black text-2xl font-bold   *:">600</p>
      </div>
    </div></div></div>
    


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
