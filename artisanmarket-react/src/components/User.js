import React from "react";

function User(props) {
  return (
    <div>
      <br></br>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div>
                <div className="card-body">
                </div>
                <div>
                <p>
                  <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"style={{ width: 20 + "rem" }} src={props.picture} />
                    Nombre: {props.name} {props.lastname}<br></br>
                    Email: {props.email}
                </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default User;
