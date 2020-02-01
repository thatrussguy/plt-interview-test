import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "../types/product";

const dataUrl =
  "https://my-json-server.typicode.com/benirvingplt/products/products";

const ProductListing = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(dataUrl);
      setProducts(result.data);
    };

    fetchData();
  }, []);

  return (
    <>{products && products.map((product: Product) => <p>{product.name}</p>)}</>
  );
};

export default ProductListing;
