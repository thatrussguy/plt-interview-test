import React, { Dispatch, SetStateAction } from "react";
import { Basket } from "../types/basket";
import { Product } from "../types/product";

const ListingItem = ({
  basket,
  product: { id, img, name, price },
  setBasket,
}: {
  basket: Basket;
  product: Product;
  setBasket: Dispatch<SetStateAction<Basket>>;
}) => {
  return (
    <>
      <div>
        <img alt={name} height={160} src={img} />
      </div>
      <div>
        <p>{name}</p>
        <p>
          {price.toLocaleString("en-GB", {
            style: "currency",
            currency: "GBP",
          })}
        </p>
      </div>
      <div>
        <div>
          <button
            disabled={!basket[id]}
            onClick={() => setBasket({ ...basket, [id]: basket[id] - 1 })}
          >
            -
          </button>{" "}
          {basket[id] || 0}{" "}
          <button
            onClick={() =>
              setBasket({ ...basket, [id]: basket[id] ? basket[id] + 1 : 1 })
            }
          >
            +
          </button>
        </div>
        <div>
          <button
            disabled={!basket[id]}
            onClick={() => setBasket({ ...basket, [id]: 0 })}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default ListingItem;
