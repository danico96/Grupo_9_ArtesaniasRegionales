const path = require('path');
const { Op } = require('sequelize');
const db = require(path.resolve(__dirname, '../database/models'));

const modelProducts = {
    getProducts: async function () {
        try {
            const result = await db.products.findAll({
                include: ['region'],
            });
            return result;
        } catch (error) {
            console.log(error.message);
        }
    },
    getOneProduct: async function (id) {
        try {
            const isExist = await db.products.findByPk(id, {
                include: ['region'],
            })
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
    },
    searchProducts: async function (search) {
        try {
            let products = await db.products.findAll({
                where: {
                    name: {[Op.substring]: [search]}
                    // [Op.or]: [{name: {[Op.substring]: [search]}},{regions_id: {[Op.substring]: [search]}}]
                }
            });
            return products;
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = modelProducts;