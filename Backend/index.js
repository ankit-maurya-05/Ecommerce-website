 import express from 'express';
  
 const app = express();

 app.get('/api/products', (req, res) => {
 const products =[
   {
      id: 1,
      name : 'samsung',
      price : 200,
      
   },

{
   
   id: 2,
   name : 'samsung',
   price : 200,
   
}
 ]


 if(req.query.search) {
   const filterproducts = products.filter (product => 
      product.name.includes(req.query.search)
   )
   res.send(filterproducts);
   return;
 }

 setTimeout(() => {
res.send(products);
 },3000)
 })

 const port = process.env.PORT || 3000;

 app.listen(port, () => {
    console.log(`server running on port ${port}`);
 });