import React, { useState, useEffect } from "react";
import Product from "./Product";

function ProductsInDb() {
  const [Products, setProducts] = useState([]);

  useEffect(async() => {
    await obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://artisanmarket.herokuapp.com/api/products");
    const product = await data.json();
    setProducts(product);
  };
  const content =
    Products.length === 0 ? (
      <p>Cargando Productos</p>
    ) : (
      Products.products.map((product, index) => (
        <Product
          key={index}
          id={product.id}
          name={product.nombre}
          picture={product.imagen}
        ></Product>
      ))
    );

  return (
    <div className="col-lg-6 mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Productos Artisan Market
          </h5>
        </div>
        {content}
      </div>
  );
}

export default ProductsInDb;
