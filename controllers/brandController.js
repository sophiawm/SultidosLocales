import BrandModel from "../models/brandModel.js";

export const getAllBrands = async (req,res) => {
    try{
        const brands = await BrandModel.findAll()
        res.json(brands)
    } catch(error){
        res.status(500).json({message: error.message})
    }
};

export const getBrand = async (req,res) => {
    try{
        const brand = await BrandModel.findByPk(req.params.id);
        if (!brand){
            return res.status(500).json({message:'Product not found'});
        }
        res.json(brand)
    } catch(error){console.error(error);
        res.status(500).json({message: error.message})
    }
};

export const createBrand = async (req,res) => {
    try{
        await BrandModel.create(req.body)
        res.json({message: "The brand has been created successfully!"})
    } catch(error){
        res.status(500).json({message: error.message})
    }
};

export const updateBrand = async (req,res) => {
    try{
        const brand = await BrandModel.findByPk(req.params.id)
        if (!brand){
            return res.status(500).json({message:'Brand not found'});
        }
        await BrandModel.update(req.body, {where: {id:req.params.id}});
        res.status(201).json({message: "The brand has been updated successfully!"});
    } catch(error){console.error(error);
        res.status(500).json({message: error.message})
    }
};

export const deleteBrand = async (req,res) => {
    try{
        await BrandModel.destroy({where: {id:req.params.id}});
        res.status(201).json({message: "The product has been deleted successfully!"});
    } catch(error){console.error(error);
        res.status(500).json({message: error.message})
    }
};