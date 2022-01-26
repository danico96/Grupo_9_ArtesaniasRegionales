const { productsmodel } = require('../model');

const newId = () => {
    let ultimo = 0;
    this.getProducts().forEach(item => {
        if (item.id > ultimo) {
            ultimo = item.id;
        }
    });
    return ultimo + 1;
};

const webController = {
    homeUser: (req, res) => {
        res.render("./web/index", { products: productsmodel.getProducts() });
      }
    }

    module.exports = webController