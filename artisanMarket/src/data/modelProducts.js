const path = require('path');
const fs = require('fs');
const DB = require('./products.json')

const modelProducts = {
    getProducts: function() {
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, './products.json'), { encoding: "utf-8" }));
    },
    isExist: function(id) {
        const isExist = DB.find(product => product.id == id)
        if (isExist) {
            return true
        } else {
            return false
        }
    },
    createProduct: function(newProduct) {
        const products = DB
        if (this.isExist(newProduct.id)) {
            return console.log("El producto con id " + newProduct.id + " ya existe.");
        } else {
            products.push(newProduct);
            fs.writeFileSync(
                path.resolve(__dirname, './products.json'),
                JSON.stringify(products, null, 4), { encoding: "utf-8" }
            );
            return console.log("Agregado con éxito.");
        }
    },
    updateProduct: function(productId, productUpdated) {
        const indiceBuscado = this.getProducts().findIndex(product => product.id == productId);
        if (indiceBuscado < 0) {
            return console.log("El producto con id " + productId + " no esta registado en la base de datos");
        } else {
            let newDB = this.getProducts();
            newDB[indiceBuscado] = productUpdated
            fs.writeFileSync(
                path.resolve(__dirname, './users.json'),
                JSON.stringify(newDB, null, 4), { encoding: "utf-8" }
            );
            return console.log("Actualizado con éxito");
        }
    },
    deleteProduct: function(productId) {
        const newDB = this.getProducts().filter(product => product.id != productId);
        this.getProducts().push(newDB);
        fs.writeFileSync(
            path.resolve(__dirname, './users.json'),
            JSON.stringify(newDB, null, 4), { encoding: "utf-8" }
        );
    }
}

module.exports = modelProducts;