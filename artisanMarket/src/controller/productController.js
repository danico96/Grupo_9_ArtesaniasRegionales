const path = require('path');
const fs = require('fs');

let jsonProducts = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf-8');
let products = JSON.parse(jsonProducts); 

const nuevoId = () => {
    let ultimo = 0;
    products.forEach(product => {
        if (product.id > ultimo) {
            ultimo = product.id;
        }
    });
    return ultimo + 1;
}

module.exports = {
    index: (req, res) => {
        res.render('products/products', { products });
    },
    detail (req, res) {
        let id = req.params.id;
        let productoDetalle = products.find(product => {
            return product.id == id;
        })

        res.render('products/productDetail', { product: productoDetalle });
    },
    create: (req, res) => {
        res.render('products/productEdit');
    },
    store (req, res) {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.render('products/productEdit', { errors: errors.mapped(), old: req.body })
        }else {
            let product = {
                id: nuevoId(),
                ...req.body,
                 image: req.file.filename || 'default-image.png',
            }
            products.push(product);

            let jsonDeProductos = JSON.stringify(products, null, 4);
            fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), jsonDeProductos);
            
            return res.redirect('/products');
        }
    },
    edit: function (req, res) {
        let productoEditar = products.find(product => {
            return product.id == req.params.id;
        })
        res.render('./products/productEdit', { product: productoEditar });
    },
    update (req, res) {

        products.forEach(product => {
            if (product.id == req.params.id) {
                product.name = req.body.name;
                product.description = req.body.description;
                product.price = req.body.price;
                product.category = req.body.category;
                product.image = 'default-image.png';
            }
        })

        let jsonDeProductos = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), jsonDeProductos);

        res.redirect('/products');
    },
    delete (req, res) {

        let productosRestantes = products.filter(product => {
            return product.id != req.params.id;
        })

        let jsonDeProductos = JSON.stringify(productosRestantes, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../data/products.json'), jsonDeProductos);

        res.redirect('/products');
    }
}