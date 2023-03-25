import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getProducts, getCategories } from "../api";
import Categories from "./Categories";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // effect
    getProducts().then((products) => setProducts(products.data));
    getCategories().then((categories) => setCategories(categories.data));
  }, []);

  //   async function getData() {
  //     const products  = await getProducts();
  //     const categories = await getProducts();
  //     setProducts(products)
  //     setCategories(categories)

  //   }

  //   useEffect(() => {}) // compoentDidMount / compoentDidUpdate

  //   useEffect(() => {}, []) // compoentDidMount

  //   useEffect(() => {}, [count]) // compoentDidMount / compoentDidUpdate on change

  //   useEffect(() => {
  //     return () => {
  //         // cleaning up
  //     }
  //   }, []) // componentWillUnmount

  const mappedProducts = products.map((product) => (
    <div className="col-4" key={product._id}>
      <ProductCard product={product} />
    </div>
  ));

  return (
    <>
      <h1>Home Page</h1>

      <Categories categories={categories} />
      <div className="row">
        {products.length === 0 ? <h1>Loading ....</h1> : mappedProducts}
      </div>
    </>
  );
}

export default HomePage;