const path = require('path');
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
    }
}

module.exports = apiModelProducts;