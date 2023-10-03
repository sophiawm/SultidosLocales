import ProductModel from "../models/productModel.js";

export const getAllProducts = async (req,res) => {
    try{
        const products = await ProductModel.findAll()
        res.json(products)
    } catch(error){
        res.status(500).json({message: error.message})
    }
};

export const getProduct = async (req,res) => {
    try{
        const product = await ProductModel.findByPk(req.params.id);
        if (!product){
            return res.status(500).json({message:'Product not found'});
        }
        res.json(product)
    } catch(error){console.error(error);
        res.status(500).json({message: error.message})
    }
};

export const createProduct = async (req,res) => {
    try{
        await ProductModel.create(req.body)
        res.json({message: "The product has been created successfully!"})
    } catch(error){
        res.status(500).json({message: error.message})
    }
};

export const updateProduct = async (req,res) => {
    try{
        const product = await ProductModel.findByPk(req.params.id)
        if (!product){
            return res.status(500).json({message:'Product not found'});
        }
        await ProductModel.update(req.body, {where: {id:req.params.id}});
        res.status(201).json({message: "The product has been updated successfully!"});
    } catch(error){console.error(error);
        res.status(500).json({message: error.message})
    }
};

export const deleteProduct = async (req,res) => {
    try{
        await ProductModel.destroy({where: {id:req.params.id}});
        res.status(203).json({message: "The product has been deleted successfully!"});
    } catch(error){console.error(error);
        res.status(500).json({message: error.message})
    }
};