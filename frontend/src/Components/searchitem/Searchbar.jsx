import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Searchbar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const navigate = useNavigate();

  // 🔥 Search Products
  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      try {
        const response = await axios.get(`/api/products/search/products?query=${e.target.value}`);
        setResults(response.data);
        setNoResult(response.data.length === 0);
      } catch (error) {
        console.error("Search Error:", error);
        setResults([]);
        setNoResult(true);
      }
    } else {
      setResults([]);
      setNoResult(false);
    }
  };

  // Navigate Automatically ✅
  const handleNavigate = (product) => {
    const category = product.category.toLowerCase();

    switch (category) {
      case 'mobiles':
        navigate('/mobiles');
        break;
      case 'smartwatch':
        navigate('/smartwatch');
        break;
      case 'speakers':
        navigate('/speakers');
        break;
      case 'tv':
        navigate('/tv');
        break;
      case 'earbuds':
        navigate('/earbuds');
        break;
      default:
        alert("Product Not Found 🚫");
        break;
    }

    setQuery('');
    setResults([]);
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="flex items-center w-full max-w-lg bg-white rounded-full border border-gray-300 p-2 px-4">
        <IoSearchSharp className="text-lg text-black mr-2" />
        <input
          type="text"
          placeholder="Search Products..."
          value={query}
          onChange={handleSearch}
          className="w-full text-base bg-transparent outline-none text-black"
        />
      </div>

      {query.length > 0 && (
        <div className="absolute top-14 w-full max-w-lg bg-white rounded-lg shadow-lg overflow-y-auto max-h-60 border border-gray-300">
          {results.map((product) => (
            <div
              key={product.id}
              className="p-3 hover:bg-[#AFDBF5] cursor-pointer text-black flex items-center"
              onClick={() => handleNavigate(product)}
            >
              <img src={product.image} alt={product.name} className="w-12 h-12 mr-4 object-contain" />
              {product.name} - ₹{product.price}
            </div>
          ))}
          {noResult && (
            <p className="p-3 text-center text-red-600">🚫 No Products Found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
