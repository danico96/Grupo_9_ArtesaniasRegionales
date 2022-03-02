const path = require('path');
const { products } = require('../../controller');
const db = require(path.resolve(__dirname, '../../database/models'));

const apiModelProducts = {
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
    lastProductInDb: async function () {
        try {
            let allProducts = await db.products.findAll();
            let maxId = 0;
            let lastproduct = allProducts.filter(product => {
                if (product.id > maxId) {
                    maxId = product.id;
                }
                return
            });
            let lastInDb = await db.products.findByPk(maxId);
            return lastInDb;
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = apiModelProducts;