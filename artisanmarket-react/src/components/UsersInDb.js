import React, { useState, useEffect } from "react";
import User from "./User";

function UsersInDb() {
  const [Users, setUsers] = useState([]);

  useEffect(async() => {
    await obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://artisanmarket.herokuapp.com/api/users");
    const user = await data.json();
    setUsers(user);
  };
  const content =
    Users.length == 0 ? (
      <p>Cargando Usuarios</p>
    ) : (
      Users.list.map((user, index) => (
        <User
          key={index}
          name={user.nombre}
          lastname={user.apellido}
          picture={user.imagen}
          email={user.email}
        ></User>
      ))
    );
  return (
    <div className="col-lg-6 mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Usuarios Artisan Market
          </h5>
        </div>
        {content}
      </div>
  );
}

export default UsersInDb;
