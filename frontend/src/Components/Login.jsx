import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";


function Login() {
 const [phonetoggle, setphonetoggle] =useState(false)
const [emailtoggle, setemailtoggle] = useState(false)

const Phonehandler = () => {
setphonetoggle(!phonetoggle)
};
 return (
    <form className='flex justify-center '>
      <button
      className='absolute text-2xl pt-8 ml-96'
      type='button'
      >
      <IoCloseSharp /></button>
       <div className= ' text-[#004526] bg-[#98FB98] text-center  p-20 rounded-sm shadow-[#00FF00] shadow-md space-y-2'>
        
        <h1 className='text-3xl font-semibold'>LOGIN WITH OTP</h1>
        
        <p className='text-sm'>Please enter your 10 digit mobile number</p>
        <div>
<input type="tel"
 placeholder='Enter your number' 
 className={ phonetoggle ? ' rounded-lg h-10 w-80 p-2 border-1 border-gray-600' : ' rounded-lg h-10 w-80 p-2 border-1 border-gray-600' }/>
</div>


<button type='submit' className='border-2 border-[#00ff00] bg-[#00FF00] font-bold text-[#004526] rounded-lg p-2 px-4'>Request OTP</button>
<p className='text-xs' >A 6 digit OTP will be sent to your phone number</p>

<div className='flex justify-center space-x-2'>
  
<div className='border-b-2  border-[#004526]  w-20 mb-2 '></div>
<p className='pt-4'>Or Sign-in with</p>
<div className='border-b-2 w-20 mb-2 border-[#004526] '></div>
</div>

<button onClick={Phonehandler} type='button' className=' flex justify-center items-center border-2 border-[#004526]  font-bold text-[#004526] w-32  ml-24 rounded-lg p-2 '>{ phonetoggle? <FaPhoneAlt />:<MdEmail /> 
}Email</button>



</div>
</form>
  )
}

export default Login