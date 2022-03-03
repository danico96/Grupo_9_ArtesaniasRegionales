import React, { useState, useEffect } from "react";
import UserDetail from "./UserDetail";

function LastUser() {
  const [user, setUsers] = useState([]);

  useEffect(async() => {
    await obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://artisanmarket.herokuapp.com/api/users/last");
    const user = await data.json();
    setUsers(user);
  };
  const content = (
        <UserDetail
          id={user.id}
          name={user.nombre}
          lastname={user.apellido}
          picture={user.imagen}
          email={user.email}
        ></UserDetail>
    );
  return (
    <div className="col-lg-6 mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Último Usuario
          </h5>
        </div>
        {content}
      </div>
  );
}

export default LastUser;
