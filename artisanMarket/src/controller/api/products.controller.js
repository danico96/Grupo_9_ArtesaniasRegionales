const { apiProductsModel } = require("../../model");
require('dotenv').config();
const port = process.env.PORT;

const apiProductController = {
  getProducts: async (req, res) => {
    try {
      const hostname = req.hostname;
      const protocol = req.protocol;
      const products = await apiProductsModel.getProducts();

      const productDetail = products.map((product) => {
        return (product = {
          id: product.id,
          nombre: product.name,
          descripcion: product.description,
          region: product.regions_id,
          imagen:
            protocol + "://" + hostname + "/images/products/" + product.picture,
          detalle: protocol + "://" + hostname + "/api/products/" + product.id,
        });
      });

      const category = {
        Region: {
          Andina: products.filter((item) => item.regions_id == 1).length,
          Pacifica: products.filter((item) => item.regions_id == 2).length,
          Caribe: products.filter((item) => item.regions_id == 3).length,
          Amazonia: products.filter((item) => item.regions_id == 4).length,
          Orinoquia: products.filter((item) => item.regions_id == 5).length,
          Insular: products.filter((item) => item.regions_id == 6).length,
        },
      };
      res.status(200).json({
        count: products.length,
        countByCategory: category,
        products: productDetail,
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  detailProduct: async (req, res) => {
    try {
      const hostname = req.hostname;
      const protocol = req.protocol;
      let productId = req.params.id;
      let product = await apiProductsModel.getOneProduct(productId);

      res.status(200).json({
        nombre: product.name,
        precio: product.price,
        descripcion: product.description,
        cantidad: product.quantity,
        region: product.regions_id,
        array: "falta por cada relacion de uno a muchos",
        imagen:
          protocol + "://" + hostname + "/images/products/" + product.picture,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getLastInDb: async (req, res) => {
    try {
      const hostname = req.hostname;
      const protocol = req.protocol;
      const get = req.get;
      let product = await apiProductsModel.lastProductInDb();
      newProduct = {
        nombre: product.name,
        precio: product.price,
        descripcion: product.description,
        cantidad: product.quantity,
        region: product.regions_id,
        array: "falta por cada relacion de uno a muchos",
        imagen:
          protocol + "://" + hostname + "/images/products/" + product.picture,
      };
      res.json(newProduct);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = apiProductController;
