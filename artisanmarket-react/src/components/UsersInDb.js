import React, { useState, useEffect } from "react";
import User from "./User";

function UsersInDb() {
  const [Users, setUsers] = useState([]);

  // const callApi=async()=>{
  //     try {
  //         const res = await fetch("https://restcountries.com/v2/all")
  //         const result = await res.json()
  //         return result
  //     } catch (error) {
  //         throw "Error con fetch"
  //     }
  // }

  // const content = Users.length == 0 ? <p>Cargando Usuarios</p> :
  // Users.map((user,index)=><User key={index} name={user.name} picture={user.flags.png} email={user.capital}></User>)

  const callApi = async () => {
    try {
      const res = await fetch("http://localhost:3500/api/users");
      const result = await res.json();
      return result;
    } catch (error) {
      throw "Error con fetch";
    }
  };

  const content =
    Users.length == 0 ? (
      <p>Cargando Usuarios</p>
    ) : (
      Users.map((user, index) => (
        <User
          key={index}
          name={user.nombre}
          picture={user.imagen}
          email={user.email}
        ></User>
      ))
    );

  useEffect(async () => {
    const ListaUsuarios = await callApi();
    setUsers([...Users, ...ListaUsuarios]);
  }, []);
  console.log(Users);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Usuarios Artisan Market
          </h5>
        </div>
        {content}
      </div>
    </div>
  );
}

export default UsersInDb;
