import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Mobiles() {
  const [products, setProducts]= useState([]);
const [error,seterror] =useState(false)
const [loading, setloading]=useState(false)


useEffect( () => {
  
  ;(async () => {
    
    try {
      setloading(true)
      seterror(false)
    const response = await axios.get('/api/products')
      console.log(response.data);
      setProducts(response.data)
      setloading(false)
    } catch (error) {
      
      seterror(true)
      setloading(false)
    }
  })()
 
}, [])

if(error){
  return <h1> Something went wrong</h1>
}

if(loading){
  return <h2>Loading...</h2>
}
  return (
    <div>
      <h2>All Mobiles</h2>


      <h3>Number of Poducts are:{products.length}</h3>
     

    </div>
  )
}

export default Mobiles