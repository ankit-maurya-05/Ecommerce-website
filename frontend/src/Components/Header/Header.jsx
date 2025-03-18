import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiAccountCircleFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Searchbar from '../searchitem/Searchbar';
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCartItemCount } from "../Featured/cartSlice"; 
import AuthPage from '../authentication/AuthPage';



function Header() {
  const [toggle, settoggle] = useState(true);
  const cartItemCount = useSelector(selectCartItemCount); // Get cart count
  const [AuthPageOpen, setAuthPageOpen]= useState(false)
  
  const authenticationPage = () =>{
    setAuthPageOpen(!AuthPageOpen)
  }
  const clickhandler = () => {
    settoggle(!toggle);
  };



  return (
    <>
      <header className="bg-[#011F5B]">
        <div className='flex justify-between items-center px-4 py-2 sm:px-6 lg:px-8'>
          <div className='p-2  font-bold text-[#AFDBF5]'>
            {/* <img src={} alt="logo" className='h-14 rounded-full' /> */}
            E-COMMERCE
          </div>
          <nav className='hidden lg:flex space-x-6'>
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? ' text-[#7DF9FF] font-semibold p-2'
        : 'hover:bg-[#AFDBF5] hover:rounded-full p-2 hover:px-4 text-white hover:text-black hover:font-semibold'
    }
  >
    Home
  </NavLink>

  <NavLink
    to="Mobiles"
    className={({ isActive }) =>
      isActive
        ? 'text-[#7DF9FF] font-semibold p-2'
        : 'hover:bg-[#AFDBF5] hover:rounded-full p-2 hover:px-4 text-white hover:text-black hover:font-semibold'
    }
  >
    Mobiles
  </NavLink>

  <NavLink
    to="Earbuds"
    className={({ isActive }) =>
      isActive
        ? 'text-[#7DF9FF] font-semibold p-2'
        : 'hover:bg-[#AFDBF5] hover:rounded-full p-2 hover:px-4 text-white hover:text-black hover:font-semibold'
    }
  >
    EarBuds
  </NavLink>

  <NavLink
    to="Smartwatch"
    className={({ isActive }) =>
      isActive
        ? 'text-[#7DF9FF] font-semibold p-2'
        : 'hover:bg-[#AFDBF5] hover:rounded-full p-2 hover:px-4 text-white hover:text-black hover:font-semibold'
    }
  >
    Smartwatch
  </NavLink>

  <NavLink
    to="Speakers"
    className={({ isActive }) =>
      isActive
        ? 'text-[#7DF9FF] font-semibold p-2'
        : 'hover:bg-[#AFDBF5] hover:rounded-full p-2 hover:px-4 text-white hover:text-black hover:font-semibold'
    }
  >
    Speakers
  </NavLink>

  <NavLink
    to="TV"
    className={({ isActive }) =>
      isActive
        ? 'text-[#7DF9FF] font-semibold p-2'
        : 'hover:bg-[#AFDBF5] hover:rounded-full p-2 hover:px-4 text-white hover:text-black hover:font-semibold'
    }
  >
    TV
  </NavLink>
</nav>


          <div className='flex items-center space-x-4'>
           <Searchbar/>

            <button onClick={authenticationPage} className='text-white hover:rounded-full hover:bg-[#AFDBF5] hover:text-black p-2 text-2xl'>
              <AuthPage/>
            </button>

            <NavLink
      to="cart"
      className={({ isActive }) =>
        isActive
          ? "text-[#7DF9FF] font-bold text-lg p-2 relative"
          : "hover:bg-[#AFDBF5] hover:rounded-full p-2 text-white hover:text-black hover:font-semibold relative"
      }
    >
      <FaCartArrowDown size={28} />

      {cartItemCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {cartItemCount}
        </span>
      )}
    </NavLink>


            <button className='lg:hidden hover:bg-[#AFDBF5] text-white hover:rounded-full p-3 px-4 hover:text-black text-2xl' onClick={clickhandler}>
              {toggle ? <FaBars /> : <IoMdClose />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={` relative w-full  lg:hidden bg-[#AFDBF5] ${toggle ? 'hidden' : 'block'} p-4`}>
          <ul className='space-y-4'>
            <li>
              <NavLink to="/" className='block p-2 rounded-full hover:border-2 hover:border-black text-black'>Home</NavLink>
            </li>
            <li>
              <NavLink to="Mobiles" className='block p-2 rounded-full hover:border-2 hover:border-black text-black'>Mobiles</NavLink>
            </li>
            <li>
              <NavLink to="Earbuds" className='block p-2 rounded-full hover:border-2 hover:border-black text-black'>EarBuds</NavLink>
            </li>
            <li>
              <NavLink to="Smartwatch" className='block p-2 rounded-full hover:border-2 hover:border-black text-black'>Smartwatch</NavLink>
            </li>
            <li>
              <NavLink to="Speakers" className='block p-2 rounded-full hover:border-2 hover:border-black text-black'>Speakers</NavLink>
            </li>
            <li>
              <NavLink to="TV" className='block p-2 rounded-full hover:border-2 hover:border-black text-black'>TV</NavLink>
            </li>
          </ul>
        </div>
      </header>

      
    </>
  );
}

export default Header;
