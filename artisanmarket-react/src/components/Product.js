function Product(props) {
  return (
    <div className="col-lg-6 mb-4">
        <br></br>
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={props.picture} />
                </div>
                <p>
                    Nombre: {props.name}<br></br>
                    <br></br>
                    Descripción: {props.description}
                </p>
            </div>
        </div>
    </div>
  );
}

export default Product;
