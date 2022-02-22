const { apiProductsModel } = require('../../model');

const apiProductController = {
    getProducts: async (req, res) => {
        try {
            const products = await apiProductsModel.getProducts();
            res.status(200).json({
              count: products.length,
              countByCategory: 'falta',
              products: products
            });
        } catch (error) {
            console.log(error.message);
        }
    },

    detailProduct: async (req, res) => {
        try {
            let productId = req.params.id;
            let product = await apiProductsModel.getOneProduct(productId);

            res.status(200).json({
              nombre: product.name,
              precio: product.price,
              descripcion: product.description,
              cantidad: product.quantity,
              region: product.regions_id,
              array: 'falta por cada relacion de uno a muchos',
              imagen: 'falta URL' 
            });
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = apiProductController