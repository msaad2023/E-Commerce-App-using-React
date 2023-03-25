import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <>
      <div className="card">
        <img
          src="https://img.freepik.com/free-vector/white-product-podium-with-green-tropical-palm-leaves-golden-round-arch-green-wall_87521-3023.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link to={`/product/${product.slug}`} className="btn btn-primary">
            More
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductCard;