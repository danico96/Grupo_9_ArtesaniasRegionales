function ProductDetail(props) {
  return (
    <div className="col-lg-6 mb-4">
      <br></br>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 60 + "rem" }}
              src={props.picture}
            />
          </div>
          <p>
            <h4>{props.name}</h4>
            <br></br>
            {props.description}
            <br></br>
            Precio: {props.price}
            <br></br>
            Cantidad: {props.amount}
            <br></br>
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
