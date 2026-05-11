const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products",productRoute);

//check
app.get('/',(req,res)=>{
    res.send('Hello from node API serve Update');
});
//MongoDB connection using connection string in MongoDB Compass
mongoose.connect('mongodb://localhost:27017/API')
  .then(() => {
    console.log('Connected to DB!');
    app.listen(3000, ()=>{
    console.log('serve is running on port 3000')
   });
})
.catch((error) => {
    console.log("Connection Failed!",error.message);
   });


   
