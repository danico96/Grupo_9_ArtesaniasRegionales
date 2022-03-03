import React from "react";

function UserDetail(props) {
  return (
    <div className="col-lg-6 mb-4">
      <br></br>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 60 + "rem" }} src={props.picture} />
          </div>
          <p>
                    Nombre: {props.name} {props.lastname}<br></br>
                    Id: {props.id}<br></br>
                    Email: {props.email}
                </p>
                </div>
                </div>
              </div>
  );
}

export default UserDetail;
