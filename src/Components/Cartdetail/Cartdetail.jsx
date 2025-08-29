import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import "./Cartdetail.css";

const Cartdetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addcart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="product-detail">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="detail-img"
      />
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="detail-desc">{product.description}</p>
        <h3>${product.price}</h3>
        <button className="add-btn" onClick={() => addcart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cartdetail;
