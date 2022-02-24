import React, { useState, useEffect } from "react";
import Product from "./Product";

function ProductsInDb() {
  const [Products, setProducts] = useState([]);

  const callApi = async () => {
    try {
      const res = await fetch("https://restcountries.com/v2/all");
      const result = await res.json();
      return result;
    } catch (error) {
      throw "Error con fetch";
    }
  };

  const content =
    Products.length == 0 ? (
      <p>Cargando Productos</p>
    ) : (
      Products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          picture={product.flags.png}
          description={product.capital}
        ></Product>
      ))
    );

  useEffect(async () => {
    const ListaProductos = await callApi();
    setProducts([...Products, ...ListaProductos]);
  }, []);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Productos Artisan Market
          </h5>
        </div>
        {content}
      </div>
    </div>
  );
}

export default ProductsInDb;
