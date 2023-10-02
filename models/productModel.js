import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const ProductModel = db.define("products", {
        product_name:{type:DataTypes.STRING},
        price:{type:DataTypes.NUMBER},
        product_description:{type:DataTypes.TEXT},
        product_images:{type:DataTypes.STRING},
        brand_id:{type:DataTypes.INTEGER},
        category:{type:DataTypes.STRING},
        stock:{type:DataTypes.NUMBER}
    }, {
        timestamps: false
    })

export default ProductModel;