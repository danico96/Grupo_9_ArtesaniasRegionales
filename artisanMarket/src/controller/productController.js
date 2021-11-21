const path = require('path');
const fs = require('fs');

let jsonProducts = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf-8');
let products = JSON.parse(jsonProducts);
const modelproducts = require ('../model/modelProducts')

const productController = {
    index: (req, res) => {
        res.render('./products/products', { products });
    },
    detail (req, res) {
        let id = req.params.id;
        let productoDetalle = products.find(product => {
            return product.id == id;
        })

        res.render('/products/productDetail', { product: productoDetalle });
    },
    create: (req, res) => {
        const create = modelproducts.createProduct;
        res.render('./products/productCreate');
    },
    edit: function (req, res) {
        let productoEditar = products.find(product => {
            return product.id == req.params.id;
        })
        res.render('./products/productEdit', { product: productoEditar });
    },
    delete (req, res) {

        let productosRestantes = products.filter(product => {
            return product.id != req.params.id;
        })

        let jsonDeProductos = JSON.stringify(productosRestantes, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), jsonDeProductos);

        res.redirect('/products');
    }
};
module.exports = productController