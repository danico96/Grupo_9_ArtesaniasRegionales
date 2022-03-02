import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";

function FindProduct() {
  const [product, setProducts] = useState([]);
  let { id } = useParams();
  console.log({id});

  useEffect(async () => {
    await obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(`http://localhost:3500/api/products/1`);
    const product = await data.json();
    setProducts(product);
  };

  const result = (
    <ProductDetail
      name={product.nombre}
      description={product.descripcion}
      price={product.precio}
      picture={product.imagen}
      amount={product.cantidad}
    />
  );

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Descripción de Producto
          </h5>
        </div>
        {result}
      </div>
    </div>
  );
}
export default FindProduct;
