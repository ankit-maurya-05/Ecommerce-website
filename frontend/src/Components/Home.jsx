import React from 'react'
import image1 from './images/image1.png'
import image6 from './images/image6.png'
import image7 from './images/image7.png'
function Home() {
  return (
    <div>
      <div className='bg-[#004526] flex lg:px-20 font-semibold text-[white]'>
<div className='space-y-8 lg:pt-32 pl-12 pt-16'><h2 className='text-[#98FB98] text-5xl font-bold'>iPhone 16 pro</h2>
<div className='lg:pr-32 '><p className=''>"Get yours today and enjoy a special offer: save 20% on your purchase plus a free accessory. Experience stunning photography, lightning-fast performance, and cutting-edge features that redefine what a smartphone can do. Don't miss out!"</p></div>

<button className='border-2 border-[#00ff00] hover:bg-[#00FF00] hover:text-[#004526] rounded-lg p-2 px-4'>Buy Now</button>
</div>

<img src={image1} alt="mobile" className='w-96'/>

      </div>
     
     <div className='bg-[#043927]'>
      <div
      className='flex justify-center m-6 h-44 lg:space-x-52 sm:pl-10 bg-[#D0F0C0]'>
<img src={image6} alt="" className='py-10  ' />
      <p className='font-bold text-2xl pt-16  sm:pl-10 '>UPTO 60% OFF</p>
      <img src={image7} alt="" className='h-60 '/>
        </div>
      
     </div>
     <div></div>
    </div>
  )
}

export default Home