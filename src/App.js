import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import HomePage from "./components/homePage";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<h1>Welcome To About Page Ya Zmelllly</h1>} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:slug" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;