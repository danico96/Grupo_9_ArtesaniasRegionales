import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

/*  Cada set de datos es un objeto literal */

function ContentRowMovies() {

        const [Products, setProducts] = useState([]);
      
        useEffect(async() => {
          await obtenerDatosP();
        }, []);
      
        const obtenerDatosP = async () => {
          const data = await fetch("https://artisanmarket.herokuapp.com/api/products");
          const product = await data.json();
          setProducts(product);
        };
        const count = Products.count

        const [Users, setUsers] = useState([]);

        useEffect(async() => {
          await obtenerDatos();
        }, []);
      
        const obtenerDatos = async () => {
          const data = await fetch("https://artisanmarket.herokuapp.com/api/users");
          const user = await data.json();
          setUsers(user);
        };
        const Usercount = Users.count
/* <!-- Products in DB --> */

  let productsInDB = {
    title: "Total Productos",
    color: "primary",
    cuantity: count,
    icon: "fa-clipboard-list",
  };

  /* <!-- Users quantity --> */

  let usersQuantity = {
    title: "Cantidad de usuarios",
    color: "warning",
    cuantity: Usercount,
    icon: "fa-user-check",
  };

  let cartProps = [productsInDB, usersQuantity];
  return (
    <div className="row">
      {cartProps.map((movie, i) => {
        return <SmallCard {...movie} key={i} />;
      })}
    </div>
  );
}

export default ContentRowMovies;
