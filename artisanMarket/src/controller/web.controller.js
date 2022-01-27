const { productsmodel } = require('../model');

const webController = {
    homeUser: async (req, res) => {
        try {
            const products = await productsmodel.getProducts();
            res.render("./web/index", { products });
        } catch (error) {
            console.log(error.message);
        }
    },
}

module.exports = webController