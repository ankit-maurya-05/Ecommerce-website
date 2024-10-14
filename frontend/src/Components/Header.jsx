import React, { useState } from 'react'
import logo from './images/logo.png'
import {Link, NavLink} from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoBagOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


function Header() {

const [toggle, settoggle]= useState(true)
 const [searchtoggle, setsearchtoggle] =useState(true)
const [search, setSearch] =useState('')
const clickhandler =() =>{
  settoggle(!toggle)
}

const searchhandler =() =>{
  setsearchtoggle(!searchtoggle)
}


  return (
    <header className=''>
      <div className='bg-[#043927] flex justify-center font-semibold space-x-48 text-[#98FB98]'>
        <div className='p-2'>
        <img src={logo} alt="logo" className='h-14 rounded-full p-2'/>
        </div>

        <div>
          <ul className='flex p-6  sm:hidden lg:flex'>
          <li>
      <NavLink to="/" className={({isActive}) => 
        `hover:bg-[#98FB98] hover:rounded-full p-2 px-5 hover:text-[#004526]` } >
          Home
      </NavLink>
     </li>

     <li>
      <NavLink to="Mobiles" className={({isActive}) => 
        `hover:bg-[#98FB98] hover:rounded-full p-2 px-5 hover:text-[#004526]` } >
         Mobiles
      </NavLink>
     </li>

     <li>
      <NavLink to="Earbuds" className={({isActive}) => 
        `hover:bg-[#98FB98] hover:rounded-full p-2 px-5 hover:text-[#004526]` } >
          EarBuds
      </NavLink>
     </li>

     <li>
      <NavLink to="Smartwatch" className={({isActive}) => 
        `hover:bg-[#98FB98] hover:rounded-full p-2 px-5 hover:text-[#004526]` } >
          Smartwatch
      </NavLink>
     </li>

     <li>
      <NavLink to="Speakers" className={({isActive}) => 
        `hover:bg-[#98FB98] hover:rounded-full p-2 px-5 hover:text-[#004526]` } >
         Speakers
      </NavLink>
     </li>


     <li>
      <NavLink to="TV" className={({isActive}) => 
        `hover:bg-[#98FB98] hover:rounded-full p-2 px-5 hover:text-[#004526]` } >
         TV
      </NavLink>
     </li>
          </ul>
        </div>
 <div className='flex space-x-8 p-4 text-xl '>


  <div className='sm:hidden lg:flex flex-row-reverse '> 
    <input type="text" placeholder='Search...'
    value={search} 
    onChange={() => setSearch(e.target.value)}
    className={searchtoggle ? 'hidden ': 'rounded-full text-base absolute p-2 mx-10  ' }/>
    <button onClick={searchhandler} type='button' className=' hover:rounded-full hover:bg-[#98FB98] hover:text-[#004526] p-2 text-2xl'>
      {searchtoggle ?  <IoSearchSharp /> :<IoMdClose />} </button>

 </div>
<div className='flex space-x-6 pt-2'>
 <div><label className=''>
  <NavLink to='Login'><RiAccountCircleFill /></NavLink>
  </label></div>

 <div><IoBagOutline /></div>

 <div>
<button className='lg:hidden md:flex '
    onClick={clickhandler}
>
  {toggle? <FaBars /> :<IoMdClose />}

</button>
</div>
</div>
</div>
      </div>

      <div className={toggle ? "hidden":" bg-[#98FB98] absolute w-full block lg:hidden  p-6 font-semibold"}>
<div> <ul className='space-y-6'>
          <li className='hover:border-2 hover:border-[#004526] rounded-full p-2 px-5 w-full'>
      <NavLink to="/" className={({isActive}) => 
        `` } >
          Home
      </NavLink>
     </li>

     <li className='hover:border-2 hover:border-[#004526] rounded-full p-2 px-5 w-full'>
      <NavLink to="Mobiles" className={({isActive}) => 
        `` } >
         Mobiles
      </NavLink>
     </li>

     <li className='hover:border-2 hover:border-[#004526] rounded-full p-2 px-5 w-full'>
      <NavLink to="Earbuds" className={({isActive}) => 
        `` } >
          EarBuds
      </NavLink>
     </li>

     <li className='hover:border-2 hover:border-[#004526] rounded-full p-2 px-5 w-full'>
      <NavLink to="Smartwatch" className={({isActive}) => 
        `e` } >
          Smartwatch
      </NavLink>
     </li>

     <li className='hover:border-2 hover:border-[#004526] rounded-full p-2 px-5 w-full'>
      <NavLink to="Speakers" className={({isActive}) => 
        `` } >
         Speakers
      </NavLink>
     </li>


     <li className='hover:border-2 border-[#004526] rounded-full p-2 px-5 w-full'>
      <NavLink to="TV" className={({isActive}) => 
        `` } >
         TV
      </NavLink>
     </li>
          </ul></div>
      </div>
     </header>
  )
}

export default Header