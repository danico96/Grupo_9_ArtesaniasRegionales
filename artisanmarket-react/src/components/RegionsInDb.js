import React, { useState, useEffect } from "react";
import Region from "./Region";

function RegionsInDb() {
  const [Products, setRegions] = useState([]);

  useEffect(async() => {
    await obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://artisanmarket.herokuapp.com/api/products");
    const region = await data.json();
    setRegions(region);
  };
  const content =
    Products.length === 0 ? (
      <p>Cargando Regiones</p>
    ) : (
      Products.countByCategory.Region.map((region, index) => (
        <Region
        key={index}
        Andina={region.Andina}
        Pacifica={region.Pacifica}
        Caribe={region.Caribe}
        Andina={region.Andina}
        Andina={region.Andina}
        Andina={region.Andina}
        Andina={region.Andina}
        ></Region>
      ))
    );

  return (
    <div className="col-lg-6 mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Regiones Artisan Market
          </h5>
        </div>
        {content}
      </div>
  );
}

export default RegionsInDb;
