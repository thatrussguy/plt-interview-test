import axios from "axios";
import React, { useEffect, useState } from "react";
import { Basket } from "../types/basket";
import { Product } from "../types/product";
import Filter from "./ColourFilter";
import ListingItem from "./ListingItem";
import "./ProductListing.css";

const dataUrl =
  "https://my-json-server.typicode.com/benirvingplt/products/products";

const emptyBasket: Basket = {};

const ProductListing = () => {
  const [basket, setBasket] = useState(emptyBasket);
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState([]);

  const sumBasket = (): number => {
    return Object.entries(basket).reduce((sum, [id, quantity]) => {
      sum +=
        quantity *
        products.find((product: Product) => product.id === Number(id))![
          "price"
        ];
      return sum;
    }, 0);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(dataUrl);
      setProducts(data);
    };

    fetchData();
  }, []);

  return products.length ? (
    <>
      <Filter filter={filter} products={products} setFilter={setFilter} />
      {(filter
        ? products.filter(({ colour }: { colour: string }) => colour === filter)
        : products
      ).map((product: Product) => (
        <ListingItem
          key={product.id}
          product={product}
          basket={basket}
          setBasket={setBasket}
        />
      ))}
      <div className="total">
        <div></div>
        <div></div>
        <div>
          Total:{" "}
          {sumBasket().toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })}
        </div>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default ProductListing;
