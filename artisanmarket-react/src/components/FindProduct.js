import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';

function FindProduct() {
    const [product, setProduct] = useState([]);
    const params = useParams();

    const callProduct = async () => {
        try {
            const res = await fetch("http://localhost:3500/api/products/1")
            const result = await res.json()
            console.log(result);

        } catch (error) {
            throw "Ocurrió un error con fetch"
        }
    }

    const content = product == undefined ? (
        Error
    ) : (
        <ProductDetail 
          id={product.id}
          name={product.nombre}
          picture={product.imagen}/>
    )

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

export default FindProduct;
