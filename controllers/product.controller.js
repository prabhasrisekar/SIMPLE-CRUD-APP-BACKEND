const Product = require('../models/product.model');

//get All products - GET
const getProducts= async (req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
      }catch(error){
        res.status(500).json({message:error.message});
      }
}

//get Single Product - GET
const getProduct = async (req,res)=>{
 try{
     const {id} = req.params;
     const product = await Product.findById(id);
     res.status(200).json(product);
   }
   catch(error){
     res.status(500).json({message:error.message});
   }
}

//create new product - POST
const createProduct = async(req,res)=>{
    try{
      const product= await Product.create(req.body);
      res.status(200).json(product)
  }
  catch(error){
    res.status(500).json({message:error.message});
  }
}

//Update exisiting product - PUT
const updateProduct = async(req,res)=>{
    try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body);
    if(!product){
      return res.status(404).json({message:"Product not found"})  
    }
    const UpdateProduct = await Product.findById(id);
    res.status(200).json(product);
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
}

//Delete product
const deleteProduct = async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
          return res.status(404).json({message:"Product not Found"});
        }
        res.status(200).json({message:"Product deleted Successfully"});
    
      }catch(error){
        res.status(500).json({message:error.message});
      }
}
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}