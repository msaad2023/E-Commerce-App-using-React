import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api";


function ProductDetails() {
    const params = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct(params.slug).then((product) => setProduct(product.data))
    }, [params.slug])
  return (
    <div className="card">
      <div className="card-header">{product.title}</div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;