import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

function Searchbar() {
  const [searchtoggle, setsearchtoggle] = useState(true);

  const searchhandler = () => {
    setsearchtoggle(!searchtoggle);
  };

  return (
    <div className="relative  hidden lg:flex ">
      <input
        type="text"
        placeholder='Search...'
        className={searchtoggle
          ? 'hidden'
          : 'absolute right-0 rounded-full text-lg p-2 px-4 bg-white text-black  mr-10 flex-row-reverse'}
      />
      <button
        onClick={searchhandler}
        type='button'
        className='text-white hover:rounded-full hover:bg-[#AFDBF5] hover:text-black p-2 text-2xl'
      >
        {searchtoggle ? <IoSearchSharp /> : <IoMdClose />}
      </button>
    </div>
  );
}

export default Searchbar;
