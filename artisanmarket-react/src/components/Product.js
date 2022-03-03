import { Link } from 'react-router-dom'
function Product(props) {
  let id = `/FindProduct/${props.id}`
  return (
    <div className="col-lg-6 mb-4">
      <br></br>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 20 + "rem" }}
              src={props.picture}
            />
          </div>
          <p>
            <h5>{props.name}</h5>
            <br></br>
            <br></br>
            <Link className="product__button" to={id}>
              Detalle
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
