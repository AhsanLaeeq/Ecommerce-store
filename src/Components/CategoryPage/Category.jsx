import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cartitem from "../Cart/Cartitem";
import "./Category.css";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="category-page">
      <h2>{category.toUpperCase()}</h2>
      <div className="category-products">
        {products.length > 0 ? (
          products.map((item) => <Cartitem key={item.id} item={item} />)
        ) : (
          <p>No products found in {category}</p>
        )}
      </div>
    </div>
  );
};

export default Category;
