const path = require('path');
const db = require(path.resolve(__dirname, '../database/models'));

const modelProducts = {
    getProducts: async function () {
        try {
            const result = await db.products.findAll();
            return result;
        } catch (error) {
            console.log(error.message);
        }
    },
    getOneProduct: async function (id) {
        try {
            const isExist = await db.products.findByPk(id)
            if (isExist) {
                return isExist
            } else {
                return console.log("El producto no existe");
            }
        } catch (error) {
            console.log(error.message);
        }
    },
    createProduct: async function (newProduct) {
        try {
            await db.products.create(newProduct)
            return console.log("Agregado con éxito.");
        } catch (error) {
            console.log(error.message);
        }
    },
    updateProduct: async function (productId, productUpdated) {
        try {
            await db.products.update(
                {
                    ...productUpdated
                },
                {
                    where: { id: productId }
                });
            return console.log("Actualizado con éxito");   
        } catch (error) {
            console.log(error.message);
        }
    },
    deleteProduct: async function (productId) {
        try {
            await db.products.destroy({
                where: { id: productId }
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = modelProducts;