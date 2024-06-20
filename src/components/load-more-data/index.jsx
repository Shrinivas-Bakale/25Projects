import axios from "axios";
import React, { useEffect, useState } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(0);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const getApi = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="main">
        <div className="flex justify-center items-center gap-3 flex-wrap">
          {products.map((product, index) => {
            const discountedPrice =
              product.price * (1 - product.discountPercentage / 100);
            return (
              <div
                key={index}
                className="product-card m-4 p-3 border-black border-2"
              >
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <h2 className="font-bold"> {product.title} </h2>
                  <p>
                    <strike> {product.price}</strike> 
                    {discountedPrice.toFixed(2)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
