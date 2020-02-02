import React, { Dispatch } from "react";
import { Product } from "../types/product";

const ColourFilter = ({
  filter,
  products,
  setFilter,
}: {
  filter: string;
  products: Product[];
  setFilter: Dispatch<string>;
}) => {
  return (
    <div className="colour-filter">
      <select onChange={({ target: { value } }) => setFilter(value)}>
        <option value="">{filter ? "Clear filter" : "Colour filter"}</option>
        {[...new Set(products.map(({ colour }) => colour))].map(colour => (
          <option key={colour} value={colour}>
            {colour}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColourFilter;
